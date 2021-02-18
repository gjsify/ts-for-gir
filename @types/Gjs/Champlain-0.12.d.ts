/**
 * Champlain-0.12
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Clutter from './Clutter-1.0';
import type * as cairo from './cairo-1.0';
import type * as Json from './Json-1.0';
import type * as Gio from './Gio-2.0';
import type * as GL from './GL-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as Cogl from './Cogl-1.0';
import type * as Atk from './Atk-1.0';

export enum MapProjection {
    MERCATOR,
}
export enum SelectionMode {
    NONE,
    SINGLE,
    MULTIPLE,
}
export enum State {
    NONE,
    LOADING,
    LOADED,
    DONE,
}
export enum Unit {
    KM,
    MILES,
}
export const MAJOR_VERSION: number
export const MAP_SOURCE_MEMPHIS_LOCAL: string
export const MAP_SOURCE_MEMPHIS_NETWORK: string
export const MAP_SOURCE_MFF_RELIEF: string
export const MAP_SOURCE_OAM: string
export const MAP_SOURCE_OSM_AERIAL_MAP: string
export const MAP_SOURCE_OSM_CYCLE_MAP: string
export const MAP_SOURCE_OSM_MAPNIK: string
export const MAP_SOURCE_OSM_MAPQUEST: string
export const MAP_SOURCE_OSM_OSMARENDER: string
export const MAP_SOURCE_OSM_TRANSPORT_MAP: string
export const MAP_SOURCE_OWM_CLOUDS: string
export const MAP_SOURCE_OWM_PRECIPITATION: string
export const MAP_SOURCE_OWM_PRESSURE: string
export const MAP_SOURCE_OWM_TEMPERATURE: string
export const MAP_SOURCE_OWM_WIND: string
export const MAX_LATITUDE: number
export const MAX_LONGITUDE: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const MIN_LATITUDE: number
export const MIN_LONGITUDE: number
export const VERSION: number
export const VERSION_HEX: number
export const VERSION_S: string
export class Exportable {
    /* Properties of Champlain.Exportable */
    surface: cairo.Surface
    /* Methods of Champlain.Exportable */
    get_surface(): cairo.Surface
    set_surface(surface: cairo.Surface): void
    /* Virtual methods of Champlain.Exportable */
    vfunc_get_surface(): cairo.Surface
    vfunc_set_surface(surface: cairo.Surface): void
    static name: string
}
export class Location {
    /* Properties of Champlain.Location */
    latitude: number
    longitude: number
    /* Methods of Champlain.Location */
    get_latitude(): number
    get_longitude(): number
    set_location(latitude: number, longitude: number): void
    /* Virtual methods of Champlain.Location */
    vfunc_get_latitude(): number
    vfunc_get_longitude(): number
    vfunc_set_location(latitude: number, longitude: number): void
    static name: string
}
export interface Adjustment_ConstructProps extends GObject.Object_ConstructProps {
    lower?: number
    step_increment?: number
    upper?: number
    value?: number
}
export class Adjustment {
    /* Properties of Champlain.Adjustment */
    lower: number
    step_increment: number
    upper: number
    value: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Adjustment */
    clamp(interpolate: boolean, n_frames: number, fps: number): boolean
    get_value(): number
    get_values(value: number, lower: number, upper: number, step_increment: number): void
    interpolate(value: number, n_frames: number, fps: number): void
    interpolate_stop(): void
    set_value(value: number): void
    set_values(value: number, lower: number, upper: number, step_increment: number): void
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
    /* Virtual methods of Champlain.Adjustment */
    vfunc_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Champlain.Adjustment */
    connect(sigName: "changed", callback: (($obj: Adjustment) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Adjustment) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::lower", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lower", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::step-increment", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step-increment", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upper", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upper", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Adjustment_ConstructProps)
    _init (config?: Adjustment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: number, lower: number, upper: number, step_increment: number): Adjustment
    static $gtype: GObject.Type
}
export interface Coordinate_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    latitude?: number
    longitude?: number
}
export class Coordinate {
    /* Properties of Champlain.Location */
    latitude: number
    longitude: number
    /* Fields of Champlain.Coordinate */
    parent: GObject.InitiallyUnowned
    priv: CoordinatePrivate
    /* Fields of GObject.InitiallyUnowned */
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
    /* Methods of Champlain.Location */
    get_latitude(): number
    get_longitude(): number
    set_location(latitude: number, longitude: number): void
    /* Virtual methods of Champlain.Coordinate */
    vfunc_get_latitude(): number
    vfunc_get_longitude(): number
    vfunc_set_location(latitude: number, longitude: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::latitude", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Coordinate_ConstructProps)
    _init (config?: Coordinate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Coordinate
    static new_full(latitude: number, longitude: number): Coordinate
    static $gtype: GObject.Type
}
export interface CustomMarker_ConstructProps extends Marker_ConstructProps {
    latitude?: number
    longitude?: number
}
export class CustomMarker {
    /* Properties of Champlain.Marker */
    draggable: boolean
    selectable: boolean
    selected: boolean
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
    /* Properties of Champlain.Location */
    latitude: number
    longitude: number
    /* Fields of Champlain.CustomMarker */
    parent: Marker
    priv: CustomMarkerPrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Marker */
    animate_in(): void
    animate_in_with_delay(delay: number): void
    animate_out(): void
    animate_out_with_delay(delay: number): void
    get_draggable(): boolean
    get_selectable(): boolean
    get_selected(): boolean
    set_draggable(value: boolean): void
    set_selectable(value: boolean): void
    set_selected(value: boolean): void
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
    /* Methods of Champlain.Location */
    get_latitude(): number
    get_longitude(): number
    set_location(latitude: number, longitude: number): void
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
    /* Virtual methods of Champlain.Marker */
    vfunc_get_latitude(): number
    vfunc_get_longitude(): number
    vfunc_set_location(latitude: number, longitude: number): void
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
    /* Signals of Champlain.Marker */
    connect(sigName: "button-press", callback: (($obj: CustomMarker, event: Clutter.Event) => void)): number
    connect_after(sigName: "button-press", callback: (($obj: CustomMarker, event: Clutter.Event) => void)): number
    emit(sigName: "button-press", event: Clutter.Event): void
    connect(sigName: "button-release", callback: (($obj: CustomMarker, event: Clutter.Event) => void)): number
    connect_after(sigName: "button-release", callback: (($obj: CustomMarker, event: Clutter.Event) => void)): number
    emit(sigName: "button-release", event: Clutter.Event): void
    connect(sigName: "drag-finish", callback: (($obj: CustomMarker, event: Clutter.Event) => void)): number
    connect_after(sigName: "drag-finish", callback: (($obj: CustomMarker, event: Clutter.Event) => void)): number
    emit(sigName: "drag-finish", event: Clutter.Event): void
    connect(sigName: "drag-motion", callback: (($obj: CustomMarker, dx: number, dy: number, event: Clutter.Event) => void)): number
    connect_after(sigName: "drag-motion", callback: (($obj: CustomMarker, dx: number, dy: number, event: Clutter.Event) => void)): number
    emit(sigName: "drag-motion", dx: number, dy: number, event: Clutter.Event): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: CustomMarker, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: CustomMarker, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: CustomMarker, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CustomMarker, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: CustomMarker, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CustomMarker, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: CustomMarker, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: CustomMarker, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: CustomMarker, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: CustomMarker, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: CustomMarker, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: CustomMarker, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "hide", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: CustomMarker, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CustomMarker, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: CustomMarker, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CustomMarker, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: CustomMarker, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: CustomMarker, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: CustomMarker, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: CustomMarker, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "paint", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: CustomMarker, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: CustomMarker, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: CustomMarker, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: CustomMarker, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: CustomMarker, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: CustomMarker, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "realize", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: CustomMarker, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CustomMarker, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "show", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: CustomMarker, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: CustomMarker, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: CustomMarker, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: CustomMarker, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: CustomMarker) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: CustomMarker) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: CustomMarker, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: CustomMarker, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: CustomMarker, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: CustomMarker, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: CustomMarker, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CustomMarker, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::draggable", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draggable", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selectable", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CustomMarker_ConstructProps)
    _init (config?: CustomMarker_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CustomMarker
    static $gtype: GObject.Type
}
export interface ErrorTileRenderer_ConstructProps extends Renderer_ConstructProps {
    tile_size?: number
}
export class ErrorTileRenderer {
    /* Properties of Champlain.ErrorTileRenderer */
    tile_size: number
    /* Fields of Champlain.ErrorTileRenderer */
    parent: Renderer
    priv: ErrorTileRendererPrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.ErrorTileRenderer */
    get_tile_size(): number
    set_tile_size(size: number): void
    /* Methods of Champlain.Renderer */
    render(tile: Tile): void
    set_data(data: Uint8Array[]): void
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
    /* Virtual methods of Champlain.Renderer */
    vfunc_render(tile: Tile): void
    vfunc_set_data(data: Uint8Array[]): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ErrorTileRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ErrorTileRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::tile-size", callback: (($obj: ErrorTileRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: ErrorTileRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ErrorTileRenderer_ConstructProps)
    _init (config?: ErrorTileRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(tile_size: number): ErrorTileRenderer
    static $gtype: GObject.Type
}
export interface FileCache_ConstructProps extends TileCache_ConstructProps {
    cache_dir?: string
    size_limit?: number
}
export class FileCache {
    /* Properties of Champlain.FileCache */
    size_limit: number
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.FileCache */
    parent_instance: TileCache
    priv: FileCachePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.FileCache */
    get_cache_dir(): string
    get_size_limit(): number
    purge(): void
    purge_on_idle(): void
    set_size_limit(size_limit: number): void
    /* Methods of Champlain.TileCache */
    on_tile_filled(tile: Tile): void
    refresh_tile_time(tile: Tile): void
    store_tile(tile: Tile, contents: string, size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.TileCache */
    vfunc_on_tile_filled(tile: Tile): void
    vfunc_refresh_tile_time(tile: Tile): void
    vfunc_store_tile(tile: Tile, contents: string, size: number): void
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size-limit", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-limit", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-source", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileCache_ConstructProps)
    _init (config?: FileCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_full(size_limit: number, cache_dir: string | null, renderer: Renderer): FileCache
    static $gtype: GObject.Type
}
export interface FileTileSource_ConstructProps extends TileSource_ConstructProps {
}
export class FileTileSource {
    /* Properties of Champlain.TileSource */
    cache: TileCache
    id: string
    license: string
    license_uri: string
    max_zoom_level: number
    min_zoom_level: number
    name: string
    projection: MapProjection
    tile_size: number
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.FileTileSource */
    parent: TileSource
    /* Fields of Champlain.TileSource */
    parent_instance: MapSource
    priv: TileSourcePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.FileTileSource */
    load_map_data(map_path: string): void
    /* Methods of Champlain.TileSource */
    get_cache(): TileCache
    set_cache(cache: TileCache): void
    set_id(id: string): void
    set_license(license: string): void
    set_license_uri(license_uri: string): void
    set_max_zoom_level(zoom_level: number): void
    set_min_zoom_level(zoom_level: number): void
    set_name(name: string): void
    set_projection(projection: MapProjection): void
    set_tile_size(tile_size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileTileSource_ConstructProps)
    _init (config?: FileTileSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_full(id: string, name: string, license: string, license_uri: string, min_zoom: number, max_zoom: number, tile_size: number, projection: MapProjection, renderer: Renderer): FileTileSource
    static $gtype: GObject.Type
}
export interface ImageRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class ImageRenderer {
    /* Fields of Champlain.ImageRenderer */
    parent: Renderer
    priv: ImageRendererPrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Renderer */
    render(tile: Tile): void
    set_data(data: Uint8Array[]): void
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
    /* Virtual methods of Champlain.Renderer */
    vfunc_render(tile: Tile): void
    vfunc_set_data(data: Uint8Array[]): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImageRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImageRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImageRenderer_ConstructProps)
    _init (config?: ImageRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ImageRenderer
    static $gtype: GObject.Type
}
export interface KineticScrollView_ConstructProps extends Clutter.Actor_ConstructProps {
    decel_rate?: number
    mode?: boolean
    motion_buffer?: number
}
export class KineticScrollView {
    /* Properties of Champlain.KineticScrollView */
    decel_rate: number
    mode: boolean
    motion_buffer: number
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
    /* Methods of Champlain.KineticScrollView */
    stop(): void
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
    /* Virtual methods of Champlain.KineticScrollView */
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
    /* Signals of Champlain.KineticScrollView */
    connect(sigName: "panning-completed", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "panning-completed", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "panning-completed"): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: KineticScrollView, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: KineticScrollView, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: KineticScrollView, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: KineticScrollView, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: KineticScrollView, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: KineticScrollView, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: KineticScrollView, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: KineticScrollView, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: KineticScrollView, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: KineticScrollView, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: KineticScrollView, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: KineticScrollView, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: KineticScrollView, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: KineticScrollView, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: KineticScrollView, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: KineticScrollView, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: KineticScrollView, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: KineticScrollView, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: KineticScrollView, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: KineticScrollView, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "paint", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: KineticScrollView, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: KineticScrollView, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: KineticScrollView, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: KineticScrollView, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: KineticScrollView, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: KineticScrollView, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: KineticScrollView, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: KineticScrollView, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "show", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: KineticScrollView, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: KineticScrollView, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: KineticScrollView, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: KineticScrollView, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: KineticScrollView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: KineticScrollView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: KineticScrollView, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: KineticScrollView, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: KineticScrollView, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: KineticScrollView, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: KineticScrollView, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: KineticScrollView, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::decel-rate", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decel-rate", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::motion-buffer", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::motion-buffer", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KineticScrollView_ConstructProps)
    _init (config?: KineticScrollView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kinetic: boolean, viewport: Viewport): KineticScrollView
    static new(): KineticScrollView
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Label_ConstructProps extends Marker_ConstructProps {
    alignment?: Pango.Alignment
    color?: Clutter.Color
    draw_background?: boolean
    draw_shadow?: boolean
    ellipsize?: Pango.EllipsizeMode
    font_name?: string
    image?: Clutter.Actor
    single_line_mode?: boolean
    text?: string
    text_color?: Clutter.Color
    use_markup?: boolean
    wrap?: boolean
    wrap_mode?: Pango.WrapMode
    latitude?: number
    longitude?: number
}
export class Label {
    /* Properties of Champlain.Label */
    alignment: Pango.Alignment
    color: Clutter.Color
    draw_background: boolean
    draw_shadow: boolean
    ellipsize: Pango.EllipsizeMode
    font_name: string
    image: Clutter.Actor
    single_line_mode: boolean
    text: string
    text_color: Clutter.Color
    use_markup: boolean
    wrap: boolean
    wrap_mode: Pango.WrapMode
    /* Properties of Champlain.Marker */
    draggable: boolean
    selectable: boolean
    selected: boolean
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
    /* Properties of Champlain.Location */
    latitude: number
    longitude: number
    /* Fields of Champlain.Label */
    parent: Marker
    priv: LabelPrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Label */
    get_alignment(): Pango.Alignment
    get_attributes(): Pango.AttrList
    get_color(): Clutter.Color
    get_draw_background(): boolean
    get_draw_shadow(): boolean
    get_ellipsize(): Pango.EllipsizeMode
    get_font_name(): string
    get_image(): Clutter.Actor
    get_single_line_mode(): boolean
    get_text(): string
    get_text_color(): Clutter.Color
    get_use_markup(): boolean
    get_wrap(): boolean
    get_wrap_mode(): Pango.WrapMode
    set_alignment(alignment: Pango.Alignment): void
    set_attributes(list: Pango.AttrList): void
    set_color(color?: Clutter.Color | null): void
    set_draw_background(background: boolean): void
    set_draw_shadow(shadow: boolean): void
    set_ellipsize(mode: Pango.EllipsizeMode): void
    set_font_name(font_name?: string | null): void
    set_image(image?: Clutter.Actor | null): void
    set_single_line_mode(mode: boolean): void
    set_text(text: string): void
    set_text_color(color?: Clutter.Color | null): void
    set_use_markup(use_markup: boolean): void
    set_wrap(wrap: boolean): void
    set_wrap_mode(wrap_mode: Pango.WrapMode): void
    /* Methods of Champlain.Marker */
    animate_in(): void
    animate_in_with_delay(delay: number): void
    animate_out(): void
    animate_out_with_delay(delay: number): void
    get_draggable(): boolean
    get_selectable(): boolean
    get_selected(): boolean
    set_draggable(value: boolean): void
    set_selectable(value: boolean): void
    set_selected(value: boolean): void
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
    /* Methods of Champlain.Location */
    get_latitude(): number
    get_longitude(): number
    set_location(latitude: number, longitude: number): void
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
    /* Virtual methods of Champlain.Marker */
    vfunc_get_latitude(): number
    vfunc_get_longitude(): number
    vfunc_set_location(latitude: number, longitude: number): void
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
    /* Signals of Champlain.Marker */
    connect(sigName: "button-press", callback: (($obj: Label, event: Clutter.Event) => void)): number
    connect_after(sigName: "button-press", callback: (($obj: Label, event: Clutter.Event) => void)): number
    emit(sigName: "button-press", event: Clutter.Event): void
    connect(sigName: "button-release", callback: (($obj: Label, event: Clutter.Event) => void)): number
    connect_after(sigName: "button-release", callback: (($obj: Label, event: Clutter.Event) => void)): number
    emit(sigName: "button-release", event: Clutter.Event): void
    connect(sigName: "drag-finish", callback: (($obj: Label, event: Clutter.Event) => void)): number
    connect_after(sigName: "drag-finish", callback: (($obj: Label, event: Clutter.Event) => void)): number
    emit(sigName: "drag-finish", event: Clutter.Event): void
    connect(sigName: "drag-motion", callback: (($obj: Label, dx: number, dy: number, event: Clutter.Event) => void)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Label, dx: number, dy: number, event: Clutter.Event) => void)): number
    emit(sigName: "drag-motion", dx: number, dy: number, event: Clutter.Event): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Label, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Label, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Label, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Label, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Label, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Label, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Label, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Label, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Label) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Label) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Label, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Label, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Label, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Label, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Label) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Label) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Label) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Label) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Label) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Label) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Label, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Label, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Label, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Label, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Label, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Label, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Label, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Label, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Label) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Label) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Label, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Label, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Label, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Label, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Label, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Label, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Label) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Label) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Label) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Label) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Label, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Label, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Label) => void)): number
    connect_after(sigName: "show", callback: (($obj: Label) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Label, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Label, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Label, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Label, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Label) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Label) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Label) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Label) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Label, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Label, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Label, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Label, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Label, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Label, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::draw-background", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-background", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::draw-shadow", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-shadow", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ellipsize", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-name", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-name", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::single-line-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-line-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-markup", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wrap-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::draggable", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draggable", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selectable", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Label_ConstructProps)
    _init (config?: Label_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Label
    static new_from_file(filename: string): Label
    static new_full(text: string, actor: Clutter.Actor): Label
    static new_with_image(actor: Clutter.Actor): Label
    static new_with_text(text: string, font?: string | null, text_color?: Clutter.Color | null, label_color?: Clutter.Color | null): Label
    static $gtype: GObject.Type
}
export interface Layer_ConstructProps extends Clutter.Actor_ConstructProps {
}
export class Layer {
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
    /* Fields of Champlain.Layer */
    parent: Clutter.Actor
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Layer */
    get_bounding_box(): BoundingBox
    set_view(view?: View | null): void
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
    /* Virtual methods of Champlain.Layer */
    vfunc_get_bounding_box(): BoundingBox
    vfunc_set_view(view?: View | null): void
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
    connect(sigName: "allocation-changed", callback: (($obj: Layer, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Layer, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Layer, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Layer, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Layer, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Layer, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Layer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Layer, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Layer) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Layer, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Layer, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Layer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Layer, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Layer) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Layer) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Layer) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Layer, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Layer, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Layer, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Layer, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Layer, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Layer, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Layer, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Layer, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Layer) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Layer, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Layer, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Layer, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Layer, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Layer, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Layer, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Layer) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Layer) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Layer, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Layer, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "show", callback: (($obj: Layer) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Layer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Layer, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Layer, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Layer, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Layer) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Layer) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Layer) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Layer, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Layer, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Layer, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Layer, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Layer, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Layer, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Layer_ConstructProps)
    _init (config?: Layer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface License_ConstructProps extends Clutter.Actor_ConstructProps {
    alignment?: Pango.Alignment
    extra_text?: string
}
export class License {
    /* Properties of Champlain.License */
    alignment: Pango.Alignment
    extra_text: string
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
    /* Fields of Champlain.License */
    parent: Clutter.Actor
    priv: LicensePrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.License */
    connect_view(view: View): void
    disconnect_view(): void
    get_alignment(): Pango.Alignment
    get_extra_text(): string
    set_alignment(alignment: Pango.Alignment): void
    set_extra_text(text: string): void
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
    /* Virtual methods of Champlain.License */
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
    connect(sigName: "allocation-changed", callback: (($obj: License, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: License, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: License, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: License, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: License, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: License, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: License, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: License, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: License) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: License) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: License, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: License, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: License, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: License, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: License) => void)): number
    connect_after(sigName: "hide", callback: (($obj: License) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: License) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: License) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: License) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: License) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: License, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: License, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: License, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: License, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: License, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: License, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: License, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: License, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: License) => void)): number
    connect_after(sigName: "paint", callback: (($obj: License) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: License, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: License, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: License, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: License, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: License, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: License, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: License) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: License) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: License) => void)): number
    connect_after(sigName: "realize", callback: (($obj: License) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: License, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: License, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: License) => void)): number
    connect_after(sigName: "show", callback: (($obj: License) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: License, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: License, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: License, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: License, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: License) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: License) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: License) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: License) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: License, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: License, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: License, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: License, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: License, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: License, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extra-text", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-text", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: License_ConstructProps)
    _init (config?: License_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): License
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface MapSource_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    next_source?: MapSource
    renderer?: Renderer
}
export class MapSource {
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.MapSource */
    parent_instance: GObject.InitiallyUnowned
    priv: MapSourcePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::next-source", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapSource_ConstructProps)
    _init (config?: MapSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MapSourceChain_ConstructProps extends MapSource_ConstructProps {
}
export class MapSourceChain {
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.MapSourceChain */
    parent_instance: MapSource
    priv: MapSourceChainPrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.MapSourceChain */
    pop(): void
    push(map_source: MapSource): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::next-source", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapSourceChain_ConstructProps)
    _init (config?: MapSourceChain_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MapSourceChain
    static $gtype: GObject.Type
}
export interface MapSourceDesc_ConstructProps extends GObject.Object_ConstructProps {
    constructor?: object
    data?: object
    id?: string
    license?: string
    license_uri?: string
    max_zoom_level?: number
    min_zoom_level?: number
    name?: string
    projection?: MapProjection
    tile_size?: number
    uri_format?: string
}
export class MapSourceDesc {
    /* Fields of Champlain.MapSourceDesc */
    parent_instance: GObject.Object
    priv: MapSourceDescPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.MapSourceDesc */
    get_data(): object | null
    get_id(): string
    get_license(): string
    get_license_uri(): string
    get_max_zoom_level(): number
    get_min_zoom_level(): number
    get_name(): string
    get_projection(): MapProjection
    get_tile_size(): number
    get_uri_format(): string
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
    connect(sigName: "notify", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapSourceDesc_ConstructProps)
    _init (config?: MapSourceDesc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MapSourceFactory_ConstructProps extends GObject.Object_ConstructProps {
}
export class MapSourceFactory {
    /* Fields of Champlain.MapSourceFactory */
    parent: GObject.Object
    priv: MapSourceFactoryPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.MapSourceFactory */
    create(id: string): MapSource
    create_cached_source(id: string): MapSource
    create_error_source(tile_size: number): MapSource
    create_memcached_source(id: string): MapSource
    get_registered(): MapSourceDesc[]
    register(desc: MapSourceDesc): boolean
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
    connect(sigName: "notify", callback: (($obj: MapSourceFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MapSourceFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MapSourceFactory_ConstructProps)
    _init (config?: MapSourceFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup_default(): MapSourceFactory
    static $gtype: GObject.Type
}
export interface Marker_ConstructProps extends Clutter.Actor_ConstructProps {
    draggable?: boolean
    selectable?: boolean
    selected?: boolean
    latitude?: number
    longitude?: number
}
export class Marker {
    /* Properties of Champlain.Marker */
    draggable: boolean
    selectable: boolean
    selected: boolean
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
    /* Properties of Champlain.Location */
    latitude: number
    longitude: number
    /* Fields of Champlain.Marker */
    parent: Clutter.Actor
    priv: MarkerPrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Marker */
    animate_in(): void
    animate_in_with_delay(delay: number): void
    animate_out(): void
    animate_out_with_delay(delay: number): void
    get_draggable(): boolean
    get_selectable(): boolean
    get_selected(): boolean
    set_draggable(value: boolean): void
    set_selectable(value: boolean): void
    set_selected(value: boolean): void
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
    /* Methods of Champlain.Location */
    get_latitude(): number
    get_longitude(): number
    set_location(latitude: number, longitude: number): void
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
    /* Virtual methods of Champlain.Marker */
    vfunc_get_latitude(): number
    vfunc_get_longitude(): number
    vfunc_set_location(latitude: number, longitude: number): void
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
    /* Signals of Champlain.Marker */
    connect(sigName: "button-press", callback: (($obj: Marker, event: Clutter.Event) => void)): number
    connect_after(sigName: "button-press", callback: (($obj: Marker, event: Clutter.Event) => void)): number
    emit(sigName: "button-press", event: Clutter.Event): void
    connect(sigName: "button-release", callback: (($obj: Marker, event: Clutter.Event) => void)): number
    connect_after(sigName: "button-release", callback: (($obj: Marker, event: Clutter.Event) => void)): number
    emit(sigName: "button-release", event: Clutter.Event): void
    connect(sigName: "drag-finish", callback: (($obj: Marker, event: Clutter.Event) => void)): number
    connect_after(sigName: "drag-finish", callback: (($obj: Marker, event: Clutter.Event) => void)): number
    emit(sigName: "drag-finish", event: Clutter.Event): void
    connect(sigName: "drag-motion", callback: (($obj: Marker, dx: number, dy: number, event: Clutter.Event) => void)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Marker, dx: number, dy: number, event: Clutter.Event) => void)): number
    emit(sigName: "drag-motion", dx: number, dy: number, event: Clutter.Event): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Marker, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Marker, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Marker, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Marker, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Marker, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Marker, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Marker, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Marker, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Marker) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Marker, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Marker, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Marker, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Marker, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Marker) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Marker) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Marker) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Marker, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Marker, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Marker, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Marker, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Marker, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Marker, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Marker, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Marker, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Marker) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Marker, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Marker, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Marker, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Marker, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Marker, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Marker, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Marker) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Marker) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Marker, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Marker, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "show", callback: (($obj: Marker) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Marker, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Marker, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Marker, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Marker, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Marker) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Marker) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Marker) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Marker, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Marker, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Marker, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Marker, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Marker, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Marker, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::draggable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draggable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selectable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Marker_ConstructProps)
    _init (config?: Marker_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Marker
    static get_selection_color(): Clutter.Color
    static get_selection_text_color(): Clutter.Color
    static set_selection_color(color: Clutter.Color): void
    static set_selection_text_color(color: Clutter.Color): void
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface MarkerLayer_ConstructProps extends Layer_ConstructProps {
    selection_mode?: SelectionMode
    surface?: cairo.Surface
}
export class MarkerLayer {
    /* Properties of Champlain.MarkerLayer */
    selection_mode: SelectionMode
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
    /* Properties of Champlain.Exportable */
    surface: cairo.Surface
    /* Fields of Champlain.MarkerLayer */
    parent: Layer
    priv: MarkerLayerPrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.MarkerLayer */
    add_marker(marker: Marker): void
    animate_in_all_markers(): void
    animate_out_all_markers(): void
    get_markers(): Marker[]
    get_selected(): Marker[]
    get_selection_mode(): SelectionMode
    hide_all_markers(): void
    remove_all(): void
    remove_marker(marker: Marker): void
    select_all_markers(): void
    set_all_markers_draggable(): void
    set_all_markers_undraggable(): void
    set_selection_mode(mode: SelectionMode): void
    show_all_markers(): void
    unselect_all_markers(): void
    /* Methods of Champlain.Layer */
    get_bounding_box(): BoundingBox
    set_view(view?: View | null): void
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
    /* Methods of Champlain.Exportable */
    get_surface(): cairo.Surface
    set_surface(surface: cairo.Surface): void
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
    /* Virtual methods of Champlain.MarkerLayer */
    vfunc_get_surface(): cairo.Surface
    vfunc_set_surface(surface: cairo.Surface): void
    /* Virtual methods of Champlain.Layer */
    vfunc_get_bounding_box(): BoundingBox
    vfunc_set_view(view?: View | null): void
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
    connect(sigName: "allocation-changed", callback: (($obj: MarkerLayer, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: MarkerLayer, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: MarkerLayer, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: MarkerLayer, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: MarkerLayer, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: MarkerLayer, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: MarkerLayer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: MarkerLayer, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: MarkerLayer, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: MarkerLayer, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: MarkerLayer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: MarkerLayer, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "hide", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: MarkerLayer, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: MarkerLayer, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: MarkerLayer, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: MarkerLayer, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: MarkerLayer, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: MarkerLayer, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: MarkerLayer, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: MarkerLayer, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "paint", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: MarkerLayer, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: MarkerLayer, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: MarkerLayer, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: MarkerLayer, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: MarkerLayer, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: MarkerLayer, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "realize", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: MarkerLayer, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: MarkerLayer, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "show", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: MarkerLayer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: MarkerLayer, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: MarkerLayer, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: MarkerLayer, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: MarkerLayer) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: MarkerLayer) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: MarkerLayer, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: MarkerLayer, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: MarkerLayer, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: MarkerLayer, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: MarkerLayer, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: MarkerLayer, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::selection-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MarkerLayer_ConstructProps)
    _init (config?: MarkerLayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MarkerLayer
    static new_full(mode: SelectionMode): MarkerLayer
    static $gtype: GObject.Type
}
export interface MemoryCache_ConstructProps extends TileCache_ConstructProps {
    size_limit?: number
}
export class MemoryCache {
    /* Properties of Champlain.MemoryCache */
    size_limit: number
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.MemoryCache */
    parent_instance: TileCache
    priv: MemoryCachePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.MemoryCache */
    clean(): void
    get_size_limit(): number
    set_size_limit(size_limit: number): void
    /* Methods of Champlain.TileCache */
    on_tile_filled(tile: Tile): void
    refresh_tile_time(tile: Tile): void
    store_tile(tile: Tile, contents: string, size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.TileCache */
    vfunc_on_tile_filled(tile: Tile): void
    vfunc_refresh_tile_time(tile: Tile): void
    vfunc_store_tile(tile: Tile, contents: string, size: number): void
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size-limit", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-limit", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-source", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MemoryCache_ConstructProps)
    _init (config?: MemoryCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_full(size_limit: number, renderer: Renderer): MemoryCache
    static $gtype: GObject.Type
}
export interface NetworkBboxTileSource_ConstructProps extends TileSource_ConstructProps {
    api_uri?: string
    proxy_uri?: string
    state?: State
    user_agent?: string
}
export class NetworkBboxTileSource {
    /* Properties of Champlain.NetworkBboxTileSource */
    api_uri: string
    proxy_uri: string
    state: State
    user_agent: string
    /* Properties of Champlain.TileSource */
    cache: TileCache
    id: string
    license: string
    license_uri: string
    max_zoom_level: number
    min_zoom_level: number
    name: string
    projection: MapProjection
    tile_size: number
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.NetworkBboxTileSource */
    parent: TileSource
    priv: NetworkBboxTileSourcePrivate
    /* Fields of Champlain.TileSource */
    parent_instance: MapSource
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.NetworkBboxTileSource */
    get_api_uri(): string
    load_map_data(bbox: BoundingBox): void
    set_api_uri(api_uri: string): void
    set_user_agent(user_agent: string): void
    /* Methods of Champlain.TileSource */
    get_cache(): TileCache
    set_cache(cache: TileCache): void
    set_id(id: string): void
    set_license(license: string): void
    set_license_uri(license_uri: string): void
    set_max_zoom_level(zoom_level: number): void
    set_min_zoom_level(zoom_level: number): void
    set_name(name: string): void
    set_projection(projection: MapProjection): void
    set_tile_size(tile_size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::api-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-zoom-level", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-zoom-level", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::projection", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-size", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-source", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkBboxTileSource_ConstructProps)
    _init (config?: NetworkBboxTileSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_full(id: string, name: string, license: string, license_uri: string, min_zoom: number, max_zoom: number, tile_size: number, projection: MapProjection, renderer: Renderer): NetworkBboxTileSource
    static $gtype: GObject.Type
}
export interface NetworkTileSource_ConstructProps extends TileSource_ConstructProps {
    max_conns?: number
    offline?: boolean
    proxy_uri?: string
    uri_format?: string
    user_agent?: string
}
export class NetworkTileSource {
    /* Properties of Champlain.NetworkTileSource */
    max_conns: number
    offline: boolean
    proxy_uri: string
    uri_format: string
    user_agent: string
    /* Properties of Champlain.TileSource */
    cache: TileCache
    id: string
    license: string
    license_uri: string
    max_zoom_level: number
    min_zoom_level: number
    name: string
    projection: MapProjection
    tile_size: number
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.NetworkTileSource */
    parent_instance: TileSource
    priv: NetworkTileSourcePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.NetworkTileSource */
    get_max_conns(): number
    get_offline(): boolean
    get_proxy_uri(): string
    get_uri_format(): string
    set_max_conns(max_conns: number): void
    set_offline(offline: boolean): void
    set_proxy_uri(proxy_uri: string): void
    set_uri_format(uri_format: string): void
    set_user_agent(user_agent: string): void
    /* Methods of Champlain.TileSource */
    get_cache(): TileCache
    set_cache(cache: TileCache): void
    set_id(id: string): void
    set_license(license: string): void
    set_license_uri(license_uri: string): void
    set_max_zoom_level(zoom_level: number): void
    set_min_zoom_level(zoom_level: number): void
    set_name(name: string): void
    set_projection(projection: MapProjection): void
    set_tile_size(tile_size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-conns", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offline", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offline", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri-format", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri-format", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license-uri", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-zoom-level", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-zoom-level", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::projection", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-size", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-source", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkTileSource_ConstructProps)
    _init (config?: NetworkTileSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_full(id: string, name: string, license: string, license_uri: string, min_zoom: number, max_zoom: number, tile_size: number, projection: MapProjection, uri_format: string, renderer: Renderer): NetworkTileSource
    static $gtype: GObject.Type
}
export interface NullTileSource_ConstructProps extends TileSource_ConstructProps {
}
export class NullTileSource {
    /* Properties of Champlain.TileSource */
    cache: TileCache
    id: string
    license: string
    license_uri: string
    max_zoom_level: number
    min_zoom_level: number
    name: string
    projection: MapProjection
    tile_size: number
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.NullTileSource */
    parent: TileSource
    /* Fields of Champlain.TileSource */
    parent_instance: MapSource
    priv: TileSourcePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.TileSource */
    get_cache(): TileCache
    set_cache(cache: TileCache): void
    set_id(id: string): void
    set_license(license: string): void
    set_license_uri(license_uri: string): void
    set_max_zoom_level(zoom_level: number): void
    set_min_zoom_level(zoom_level: number): void
    set_name(name: string): void
    set_projection(projection: MapProjection): void
    set_tile_size(tile_size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license-uri", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-zoom-level", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-zoom-level", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::projection", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-size", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-source", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NullTileSource_ConstructProps)
    _init (config?: NullTileSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_full(renderer: Renderer): NullTileSource
    static $gtype: GObject.Type
}
export interface PathLayer_ConstructProps extends Layer_ConstructProps {
    closed?: boolean
    fill?: boolean
    fill_color?: Clutter.Color
    stroke?: boolean
    stroke_color?: Clutter.Color
    stroke_width?: number
    visible?: boolean
    surface?: cairo.Surface
}
export class PathLayer {
    /* Properties of Champlain.PathLayer */
    closed: boolean
    fill: boolean
    fill_color: Clutter.Color
    stroke: boolean
    stroke_color: Clutter.Color
    stroke_width: number
    visible: boolean
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
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Properties of Champlain.Exportable */
    surface: cairo.Surface
    /* Fields of Champlain.PathLayer */
    parent: Layer
    priv: PathLayerPrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.PathLayer */
    add_node(location: Location): void
    get_closed(): boolean
    get_dash(): number[]
    get_fill(): boolean
    get_fill_color(): Clutter.Color
    get_nodes(): Location[]
    get_stroke(): boolean
    get_stroke_color(): Clutter.Color
    get_stroke_width(): number
    get_visible(): boolean
    insert_node(location: Location, position: number): void
    remove_all(): void
    remove_node(location: Location): void
    set_closed(value: boolean): void
    set_dash(dash_pattern: number[]): void
    set_fill(value: boolean): void
    set_fill_color(color?: Clutter.Color | null): void
    set_stroke(value: boolean): void
    set_stroke_color(color?: Clutter.Color | null): void
    set_stroke_width(value: number): void
    set_visible(value: boolean): void
    /* Methods of Champlain.Layer */
    get_bounding_box(): BoundingBox
    set_view(view?: View | null): void
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
    /* Methods of Champlain.Exportable */
    get_surface(): cairo.Surface
    set_surface(surface: cairo.Surface): void
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
    /* Virtual methods of Champlain.PathLayer */
    vfunc_get_surface(): cairo.Surface
    vfunc_set_surface(surface: cairo.Surface): void
    /* Virtual methods of Champlain.Layer */
    vfunc_get_bounding_box(): BoundingBox
    vfunc_set_view(view?: View | null): void
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
    connect(sigName: "allocation-changed", callback: (($obj: PathLayer, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: PathLayer, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: PathLayer, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: PathLayer, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: PathLayer, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: PathLayer, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: PathLayer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: PathLayer, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: PathLayer, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: PathLayer, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: PathLayer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: PathLayer, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "hide", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: PathLayer, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: PathLayer, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: PathLayer, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: PathLayer, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: PathLayer, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: PathLayer, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: PathLayer, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: PathLayer, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "paint", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: PathLayer, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PathLayer, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: PathLayer, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: PathLayer, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: PathLayer, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: PathLayer, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "realize", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: PathLayer, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: PathLayer, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "show", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: PathLayer, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: PathLayer, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: PathLayer, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: PathLayer, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: PathLayer) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: PathLayer) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: PathLayer, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: PathLayer, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: PathLayer, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: PathLayer, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: PathLayer, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: PathLayer, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fill-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stroke-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PathLayer_ConstructProps)
    _init (config?: PathLayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PathLayer
    static $gtype: GObject.Type
}
export interface Point_ConstructProps extends Marker_ConstructProps {
    color?: Clutter.Color
    size?: number
    surface?: cairo.Surface
    latitude?: number
    longitude?: number
}
export class Point {
    /* Properties of Champlain.Point */
    color: Clutter.Color
    size: number
    /* Properties of Champlain.Marker */
    draggable: boolean
    selectable: boolean
    selected: boolean
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
    /* Properties of Champlain.Exportable */
    surface: cairo.Surface
    /* Properties of Champlain.Location */
    latitude: number
    longitude: number
    /* Fields of Champlain.Point */
    parent: Marker
    priv: PointPrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Point */
    get_color(): Clutter.Color
    get_size(): number
    set_color(color?: Clutter.Color | null): void
    set_size(size: number): void
    /* Methods of Champlain.Marker */
    animate_in(): void
    animate_in_with_delay(delay: number): void
    animate_out(): void
    animate_out_with_delay(delay: number): void
    get_draggable(): boolean
    get_selectable(): boolean
    get_selected(): boolean
    set_draggable(value: boolean): void
    set_selectable(value: boolean): void
    set_selected(value: boolean): void
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
    /* Methods of Champlain.Exportable */
    get_surface(): cairo.Surface
    set_surface(surface: cairo.Surface): void
    /* Methods of Champlain.Location */
    get_latitude(): number
    get_longitude(): number
    set_location(latitude: number, longitude: number): void
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
    /* Virtual methods of Champlain.Point */
    vfunc_get_surface(): cairo.Surface
    vfunc_set_surface(surface: cairo.Surface): void
    /* Virtual methods of Champlain.Marker */
    vfunc_get_latitude(): number
    vfunc_get_longitude(): number
    vfunc_set_location(latitude: number, longitude: number): void
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
    /* Signals of Champlain.Marker */
    connect(sigName: "button-press", callback: (($obj: Point, event: Clutter.Event) => void)): number
    connect_after(sigName: "button-press", callback: (($obj: Point, event: Clutter.Event) => void)): number
    emit(sigName: "button-press", event: Clutter.Event): void
    connect(sigName: "button-release", callback: (($obj: Point, event: Clutter.Event) => void)): number
    connect_after(sigName: "button-release", callback: (($obj: Point, event: Clutter.Event) => void)): number
    emit(sigName: "button-release", event: Clutter.Event): void
    connect(sigName: "drag-finish", callback: (($obj: Point, event: Clutter.Event) => void)): number
    connect_after(sigName: "drag-finish", callback: (($obj: Point, event: Clutter.Event) => void)): number
    emit(sigName: "drag-finish", event: Clutter.Event): void
    connect(sigName: "drag-motion", callback: (($obj: Point, dx: number, dy: number, event: Clutter.Event) => void)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Point, dx: number, dy: number, event: Clutter.Event) => void)): number
    emit(sigName: "drag-motion", dx: number, dy: number, event: Clutter.Event): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Point, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Point, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Point, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Point, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Point, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Point, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Point, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Point, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Point) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Point) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Point, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Point, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Point, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Point, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Point) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Point) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Point) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Point) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Point) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Point) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Point, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Point, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Point, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Point, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Point, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Point, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Point, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Point, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Point) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Point) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Point, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Point, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Point, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Point, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Point, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Point, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Point) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Point) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Point) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Point) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Point, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Point, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Point) => void)): number
    connect_after(sigName: "show", callback: (($obj: Point) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Point, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Point, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Point, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Point, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Point) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Point) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Point) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Point) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Point, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Point, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Point, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Point, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Point, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Point, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::color", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::draggable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draggable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selectable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Point_ConstructProps)
    _init (config?: Point_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Point
    static new_full(size: number, color: Clutter.Color): Point
    static $gtype: GObject.Type
}
export interface Renderer_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class Renderer {
    /* Fields of Champlain.Renderer */
    parent: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Renderer */
    render(tile: Tile): void
    set_data(data: Uint8Array[]): void
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
    /* Virtual methods of Champlain.Renderer */
    vfunc_render(tile: Tile): void
    vfunc_set_data(data: Uint8Array[]): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Scale_ConstructProps extends Clutter.Actor_ConstructProps {
    max_width?: number
    unit?: Unit
}
export class Scale {
    /* Properties of Champlain.Scale */
    max_width: number
    unit: Unit
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
    /* Fields of Champlain.Scale */
    parent: Clutter.Actor
    priv: ScalePrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Scale */
    connect_view(view: View): void
    disconnect_view(): void
    get_max_width(): number
    get_unit(): Unit
    set_max_width(value: number): void
    set_unit(unit: Unit): void
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
    /* Virtual methods of Champlain.Scale */
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
    connect(sigName: "allocation-changed", callback: (($obj: Scale, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Scale, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Scale, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Scale, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Scale, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Scale, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Scale, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Scale, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Scale) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Scale, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Scale, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Scale, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Scale, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Scale) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Scale) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Scale) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Scale, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Scale, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Scale, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Scale, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Scale, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Scale, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Scale, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Scale, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Scale) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Scale, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Scale, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Scale, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Scale, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Scale, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Scale, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Scale) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Scale) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Scale, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Scale, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "show", callback: (($obj: Scale) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Scale, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Scale, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Scale, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Scale, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Scale) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Scale) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Scale) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Scale, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Scale, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Scale, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Scale, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Scale, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Scale, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unit", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unit", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Scale_ConstructProps)
    _init (config?: Scale_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Scale
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Tile_ConstructProps extends Clutter.Actor_ConstructProps {
    content?: Clutter.Actor
    etag?: string
    fade_in?: boolean
    size?: number
    state?: State
    x?: number
    y?: number
    zoom_level?: number
    surface?: cairo.Surface
}
export class Tile {
    /* Properties of Champlain.Tile */
    content: Clutter.Actor
    etag: string
    fade_in: boolean
    size: number
    state: State
    x: number
    y: number
    zoom_level: number
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
    text_direction: Clutter.TextDirection
    transform: Clutter.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Properties of Champlain.Exportable */
    surface: cairo.Surface
    /* Fields of Champlain.Tile */
    parent: Clutter.Actor
    priv: TilePrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Tile */
    display_content(): void
    get_content(): Clutter.Actor
    get_etag(): string
    get_fade_in(): boolean
    get_modified_time(): GLib.TimeVal
    get_size(): number
    get_state(): State
    get_x(): number
    get_y(): number
    get_zoom_level(): number
    set_content(actor: Clutter.Actor): void
    set_etag(etag: string): void
    set_fade_in(fade_in: boolean): void
    set_modified_time(time: GLib.TimeVal): void
    set_size(size: number): void
    set_state(state: State): void
    set_x(x: number): void
    set_y(y: number): void
    set_zoom_level(zoom_level: number): void
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
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
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
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
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
    /* Methods of Champlain.Exportable */
    get_surface(): cairo.Surface
    set_surface(surface: cairo.Surface): void
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
    /* Virtual methods of Champlain.Tile */
    vfunc_get_surface(): cairo.Surface
    vfunc_set_surface(surface: cairo.Surface): void
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
    /* Signals of Champlain.Tile */
    connect(sigName: "render-complete", callback: (($obj: Tile, data: object | null, size: number, error: boolean) => void)): number
    connect_after(sigName: "render-complete", callback: (($obj: Tile, data: object | null, size: number, error: boolean) => void)): number
    emit(sigName: "render-complete", data: object | null, size: number, error: boolean): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Tile, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Tile, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Tile, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Tile, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Tile, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Tile, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Tile, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Tile, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Tile) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Tile, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Tile, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Tile, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Tile, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Tile) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Tile) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Tile) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Tile, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Tile, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Tile, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Tile, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Tile, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Tile, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Tile, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Tile, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Tile) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Tile, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Tile, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Tile, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Tile, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Tile, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Tile, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Tile) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Tile) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Tile, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Tile, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "show", callback: (($obj: Tile) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Tile, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Tile, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Tile, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Tile, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Tile) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Tile) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Tile) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Tile, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Tile, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Tile, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Tile, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Tile, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Tile, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::etag", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fade-in", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fade-in", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-level", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tile_ConstructProps)
    _init (config?: Tile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Tile
    static new_full(x: number, y: number, size: number, zoom_level: number): Tile
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface TileCache_ConstructProps extends MapSource_ConstructProps {
}
export class TileCache {
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.TileCache */
    parent_instance: MapSource
    priv: TileCachePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.TileCache */
    on_tile_filled(tile: Tile): void
    refresh_tile_time(tile: Tile): void
    store_tile(tile: Tile, contents: string, size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.TileCache */
    vfunc_on_tile_filled(tile: Tile): void
    vfunc_refresh_tile_time(tile: Tile): void
    vfunc_store_tile(tile: Tile, contents: string, size: number): void
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::next-source", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TileCache_ConstructProps)
    _init (config?: TileCache_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TileSource_ConstructProps extends MapSource_ConstructProps {
    cache?: TileCache
    id?: string
    license?: string
    license_uri?: string
    max_zoom_level?: number
    min_zoom_level?: number
    name?: string
    projection?: MapProjection
    tile_size?: number
}
export class TileSource {
    /* Properties of Champlain.TileSource */
    cache: TileCache
    id: string
    license: string
    license_uri: string
    max_zoom_level: number
    min_zoom_level: number
    name: string
    projection: MapProjection
    tile_size: number
    /* Properties of Champlain.MapSource */
    next_source: MapSource
    renderer: Renderer
    /* Fields of Champlain.TileSource */
    parent_instance: MapSource
    priv: TileSourcePrivate
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.TileSource */
    get_cache(): TileCache
    set_cache(cache: TileCache): void
    set_id(id: string): void
    set_license(license: string): void
    set_license_uri(license_uri: string): void
    set_max_zoom_level(zoom_level: number): void
    set_min_zoom_level(zoom_level: number): void
    set_name(name: string): void
    set_projection(projection: MapProjection): void
    set_tile_size(tile_size: number): void
    /* Methods of Champlain.MapSource */
    fill_tile(tile: Tile): void
    get_column_count(zoom_level: number): number
    get_id(): string
    get_latitude(zoom_level: number, y: number): number
    get_license(): string
    get_license_uri(): string
    get_longitude(zoom_level: number, x: number): number
    get_max_zoom_level(): number
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    get_min_zoom_level(): number
    get_name(): string
    get_next_source(): MapSource
    get_projection(): MapProjection
    get_renderer(): Renderer
    get_row_count(zoom_level: number): number
    get_tile_size(): number
    get_x(zoom_level: number, longitude: number): number
    get_y(zoom_level: number, latitude: number): number
    set_next_source(next_source: MapSource): void
    set_renderer(renderer: Renderer): void
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
    /* Virtual methods of Champlain.MapSource */
    vfunc_fill_tile(tile: Tile): void
    vfunc_get_id(): string
    vfunc_get_license(): string
    vfunc_get_license_uri(): string
    vfunc_get_max_zoom_level(): number
    vfunc_get_min_zoom_level(): number
    vfunc_get_name(): string
    vfunc_get_projection(): MapProjection
    vfunc_get_tile_size(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license-uri", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-zoom-level", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-zoom-level", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::projection", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-size", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-source", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::renderer", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TileSource_ConstructProps)
    _init (config?: TileSource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface View_ConstructProps extends Clutter.Actor_ConstructProps {
    animate_zoom?: boolean
    background_pattern?: Clutter.Actor
    deceleration?: number
    goto_animation_duration?: number
    goto_animation_mode?: Clutter.AnimationMode
    horizontal_wrap?: boolean
    keep_center_on_resize?: boolean
    kinetic_mode?: boolean
    latitude?: number
    longitude?: number
    map_source?: MapSource
    max_zoom_level?: number
    min_zoom_level?: number
    world?: BoundingBox
    zoom_level?: number
    zoom_on_double_click?: boolean
}
export class View {
    /* Properties of Champlain.View */
    animate_zoom: boolean
    background_pattern: Clutter.Actor
    deceleration: number
    goto_animation_duration: number
    goto_animation_mode: Clutter.AnimationMode
    horizontal_wrap: boolean
    keep_center_on_resize: boolean
    kinetic_mode: boolean
    latitude: number
    longitude: number
    map_source: MapSource
    max_zoom_level: number
    min_zoom_level: number
    readonly state: State
    world: BoundingBox
    zoom_level: number
    zoom_on_double_click: boolean
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
    /* Fields of Champlain.View */
    parent: Clutter.Actor
    priv: ViewPrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.View */
    add_layer(layer: Layer): void
    add_overlay_source(map_source: MapSource, opacity: number): void
    bin_layout_add(child: Clutter.Actor, x_align: Clutter.BinAlignment, y_align: Clutter.BinAlignment): void
    center_on(latitude: number, longitude: number): void
    ensure_layers_visible(animate: boolean): void
    ensure_visible(bbox: BoundingBox, animate: boolean): void
    get_animate_zoom(): boolean
    get_background_pattern(): Clutter.Content
    get_bounding_box(): BoundingBox
    get_bounding_box_for_zoom_level(zoom_level: number): BoundingBox
    get_center_latitude(): number
    get_center_longitude(): number
    get_deceleration(): number
    get_horizontal_wrap(): boolean
    get_keep_center_on_resize(): boolean
    get_kinetic_mode(): boolean
    get_license_actor(): License
    get_map_source(): MapSource
    get_max_zoom_level(): number
    get_min_zoom_level(): number
    get_overlay_sources(): MapSource[]
    get_state(): State
    get_viewport_anchor(): [ /* anchor_x */ number, /* anchor_y */ number ]
    get_viewport_origin(): [ /* x */ number, /* y */ number ]
    get_world(): BoundingBox
    get_zoom_level(): number
    get_zoom_on_double_click(): boolean
    go_to(latitude: number, longitude: number): void
    latitude_to_y(latitude: number): number
    longitude_to_x(longitude: number): number
    reload_tiles(): void
    remove_layer(layer: Layer): void
    remove_overlay_source(map_source: MapSource): void
    set_animate_zoom(value: boolean): void
    set_background_pattern(background: Clutter.Content): void
    set_deceleration(rate: number): void
    set_horizontal_wrap(wrap: boolean): void
    set_keep_center_on_resize(value: boolean): void
    set_kinetic_mode(kinetic: boolean): void
    set_map_source(map_source: MapSource): void
    set_max_zoom_level(zoom_level: number): void
    set_min_zoom_level(zoom_level: number): void
    set_world(bbox: BoundingBox): void
    set_zoom_level(zoom_level: number): void
    set_zoom_on_double_click(value: boolean): void
    stop_go_to(): void
    to_surface(include_layers: boolean): cairo.Surface
    x_to_longitude(x: number): number
    y_to_latitude(y: number): number
    zoom_in(): void
    zoom_out(): void
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
    /* Virtual methods of Champlain.View */
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
    /* Signals of Champlain.View */
    connect(sigName: "animation-completed", callback: (($obj: View) => void)): number
    connect_after(sigName: "animation-completed", callback: (($obj: View) => void)): number
    emit(sigName: "animation-completed"): void
    connect(sigName: "layer-relocated", callback: (($obj: View) => void)): number
    connect_after(sigName: "layer-relocated", callback: (($obj: View) => void)): number
    emit(sigName: "layer-relocated"): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: View, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: View, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: View, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: View, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: View, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: View, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: View, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: View, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: View) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: View) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: View, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: View, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: View, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: View, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: View) => void)): number
    connect_after(sigName: "hide", callback: (($obj: View) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: View) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: View) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: View) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: View) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: View, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: View, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: View, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: View, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: View, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: View, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: View, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: View, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: View) => void)): number
    connect_after(sigName: "paint", callback: (($obj: View) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: View, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: View, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: View, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: View, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: View, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: View, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: View) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: View) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: View) => void)): number
    connect_after(sigName: "realize", callback: (($obj: View) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: View, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: View, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: View) => void)): number
    connect_after(sigName: "show", callback: (($obj: View) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: View, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: View, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: View, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: View, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: View) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: View) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: View) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: View) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: View, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: View, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: View, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: View, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: View, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: View, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::animate-zoom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::animate-zoom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deceleration", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deceleration", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::goto-animation-duration", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-animation-duration", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::goto-animation-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-animation-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::horizontal-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horizontal-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keep-center-on-resize", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-center-on-resize", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kinetic-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kinetic-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::map-source", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::map-source", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::world", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::world", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-on-double-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-on-double-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): View
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Viewport_ConstructProps extends Clutter.Actor_ConstructProps {
    hadjustment?: Adjustment
    vadjustment?: Adjustment
    x_origin?: number
    y_origin?: number
}
export class Viewport {
    /* Properties of Champlain.Viewport */
    hadjustment: Adjustment
    vadjustment: Adjustment
    x_origin: number
    y_origin: number
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
    /* Fields of Champlain.Viewport */
    parent: Clutter.Actor
    priv: ViewportPrivate
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Champlain.Viewport */
    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    get_anchor(x: number, y: number): void
    get_origin(x: number, y: number): void
    set_actor_position(actor: Clutter.Actor, x: number, y: number): void
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    set_child(child: Clutter.Actor): void
    set_origin(x: number, y: number): void
    stop(): void
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
    /* Virtual methods of Champlain.Viewport */
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
    /* Signals of Champlain.Viewport */
    connect(sigName: "relocated", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "relocated", callback: (($obj: Viewport) => void)): number
    emit(sigName: "relocated"): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Viewport, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Viewport, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Viewport, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Viewport, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Viewport, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Viewport, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Viewport, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Viewport, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Viewport) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Viewport, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Viewport, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Viewport, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Viewport, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Viewport) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Viewport) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Viewport) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Viewport, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Viewport, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Viewport, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Viewport, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Viewport, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Viewport, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Viewport, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Viewport, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Viewport) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Viewport, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Viewport, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Viewport, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Viewport, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Viewport, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Viewport, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Viewport) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Viewport) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Viewport, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Viewport, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "show", callback: (($obj: Viewport) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Viewport, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Viewport, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Viewport, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Viewport, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Viewport) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Viewport) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Viewport, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Viewport, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Viewport, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Viewport, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Viewport, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Viewport, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hadjustment", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vadjustment", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-origin", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-origin", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-origin", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-origin", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Viewport_ConstructProps)
    _init (config?: Viewport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Viewport
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export abstract class AdjustmentClass {
    /* Fields of Champlain.AdjustmentClass */
    changed: (adjustment: Adjustment) => void
    static name: string
}
export class AdjustmentPrivate {
    static name: string
}
export class BoundingBox {
    /* Fields of Champlain.BoundingBox */
    left: number
    top: number
    right: number
    bottom: number
    /* Methods of Champlain.BoundingBox */
    compose(other: BoundingBox): void
    copy(): BoundingBox
    covers(latitude: number, longitude: number): boolean
    extend(latitude: number, longitude: number): void
    free(): void
    get_center(): [ /* latitude */ number, /* longitude */ number ]
    is_valid(): boolean
    static name: string
    static new(): BoundingBox
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BoundingBox
}
export abstract class CoordinateClass {
    /* Fields of Champlain.CoordinateClass */
    parent_class: GObject.InitiallyUnownedClass
    static name: string
}
export class CoordinatePrivate {
    static name: string
}
export abstract class CustomMarkerClass {
    /* Fields of Champlain.CustomMarkerClass */
    parent_class: MarkerClass
    static name: string
}
export class CustomMarkerPrivate {
    static name: string
}
export abstract class ErrorTileRendererClass {
    /* Fields of Champlain.ErrorTileRendererClass */
    parent_class: RendererClass
    static name: string
}
export class ErrorTileRendererPrivate {
    static name: string
}
export abstract class ExportableIface {
    /* Fields of Champlain.ExportableIface */
    get_surface: (exportable: Exportable) => cairo.Surface
    set_surface: (exportable: Exportable, surface: cairo.Surface) => void
    static name: string
}
export abstract class FileCacheClass {
    /* Fields of Champlain.FileCacheClass */
    parent_class: TileCacheClass
    static name: string
}
export class FileCachePrivate {
    static name: string
}
export abstract class FileTileSourceClass {
    /* Fields of Champlain.FileTileSourceClass */
    parent_class: TileSourceClass
    static name: string
}
export class FileTileSourcePrivate {
    static name: string
}
export abstract class ImageRendererClass {
    /* Fields of Champlain.ImageRendererClass */
    parent_class: RendererClass
    static name: string
}
export class ImageRendererPrivate {
    static name: string
}
export abstract class KineticScrollViewClass {
    /* Fields of Champlain.KineticScrollViewClass */
    parent_class: Clutter.ActorClass
    static name: string
}
export class KineticScrollViewPrivate {
    static name: string
}
export abstract class LabelClass {
    /* Fields of Champlain.LabelClass */
    parent_class: MarkerClass
    static name: string
}
export class LabelPrivate {
    static name: string
}
export abstract class LayerClass {
    /* Fields of Champlain.LayerClass */
    parent_class: Clutter.ActorClass
    set_view: (layer: Layer, view?: View | null) => void
    get_bounding_box: (layer: Layer) => BoundingBox
    static name: string
}
export abstract class LicenseClass {
    /* Fields of Champlain.LicenseClass */
    parent_class: Clutter.ActorClass
    static name: string
}
export class LicensePrivate {
    static name: string
}
export abstract class LocationIface {
    /* Fields of Champlain.LocationIface */
    get_latitude: (location: Location) => number
    get_longitude: (location: Location) => number
    set_location: (location: Location, latitude: number, longitude: number) => void
    static name: string
}
export abstract class MapSourceChainClass {
    /* Fields of Champlain.MapSourceChainClass */
    parent_class: MapSourceClass
    static name: string
}
export class MapSourceChainPrivate {
    static name: string
}
export abstract class MapSourceClass {
    /* Fields of Champlain.MapSourceClass */
    parent_class: GObject.InitiallyUnownedClass
    get_id: (map_source: MapSource) => string
    get_name: (map_source: MapSource) => string
    get_license: (map_source: MapSource) => string
    get_license_uri: (map_source: MapSource) => string
    get_min_zoom_level: (map_source: MapSource) => number
    get_max_zoom_level: (map_source: MapSource) => number
    get_tile_size: (map_source: MapSource) => number
    get_projection: (map_source: MapSource) => MapProjection
    fill_tile: (map_source: MapSource, tile: Tile) => void
    static name: string
}
export abstract class MapSourceDescClass {
    /* Fields of Champlain.MapSourceDescClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MapSourceDescPrivate {
    static name: string
}
export abstract class MapSourceFactoryClass {
    /* Fields of Champlain.MapSourceFactoryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MapSourceFactoryPrivate {
    static name: string
}
export class MapSourcePrivate {
    static name: string
}
export abstract class MarkerClass {
    /* Fields of Champlain.MarkerClass */
    parent_class: Clutter.ActorClass
    static name: string
}
export abstract class MarkerLayerClass {
    /* Fields of Champlain.MarkerLayerClass */
    parent_class: LayerClass
    static name: string
}
export class MarkerLayerPrivate {
    static name: string
}
export class MarkerPrivate {
    static name: string
}
export abstract class MemoryCacheClass {
    /* Fields of Champlain.MemoryCacheClass */
    parent_class: TileCacheClass
    static name: string
}
export class MemoryCachePrivate {
    static name: string
}
export abstract class NetworkBboxTileSourceClass {
    /* Fields of Champlain.NetworkBboxTileSourceClass */
    parent_class: TileSourceClass
    static name: string
}
export class NetworkBboxTileSourcePrivate {
    static name: string
}
export abstract class NetworkTileSourceClass {
    /* Fields of Champlain.NetworkTileSourceClass */
    parent_class: TileSourceClass
    static name: string
}
export class NetworkTileSourcePrivate {
    static name: string
}
export abstract class NullTileSourceClass {
    /* Fields of Champlain.NullTileSourceClass */
    parent_class: TileSourceClass
    static name: string
}
export class NullTileSourcePrivate {
    static name: string
}
export abstract class PathLayerClass {
    /* Fields of Champlain.PathLayerClass */
    parent_class: LayerClass
    static name: string
}
export class PathLayerPrivate {
    static name: string
}
export abstract class PointClass {
    /* Fields of Champlain.PointClass */
    parent_class: MarkerClass
    static name: string
}
export class PointPrivate {
    static name: string
}
export abstract class RendererClass {
    /* Fields of Champlain.RendererClass */
    parent_class: GObject.InitiallyUnownedClass
    set_data: (renderer: Renderer, data: Uint8Array[]) => void
    render: (renderer: Renderer, tile: Tile) => void
    static name: string
}
export abstract class ScaleClass {
    /* Fields of Champlain.ScaleClass */
    parent_class: Clutter.ActorClass
    static name: string
}
export class ScalePrivate {
    static name: string
}
export abstract class TileCacheClass {
    /* Fields of Champlain.TileCacheClass */
    parent_class: MapSourceClass
    store_tile: (tile_cache: TileCache, tile: Tile, contents: string, size: number) => void
    refresh_tile_time: (tile_cache: TileCache, tile: Tile) => void
    on_tile_filled: (tile_cache: TileCache, tile: Tile) => void
    static name: string
}
export class TileCachePrivate {
    static name: string
}
export abstract class TileClass {
    /* Fields of Champlain.TileClass */
    parent_class: Clutter.ActorClass
    static name: string
}
export class TilePrivate {
    static name: string
}
export abstract class TileSourceClass {
    /* Fields of Champlain.TileSourceClass */
    parent_class: MapSourceClass
    static name: string
}
export class TileSourcePrivate {
    static name: string
}
export abstract class ViewClass {
    /* Fields of Champlain.ViewClass */
    parent_class: Clutter.ActorClass
    static name: string
}
export class ViewPrivate {
    static name: string
}
export abstract class ViewportClass {
    /* Fields of Champlain.ViewportClass */
    parent_class: Clutter.ActorClass
    static name: string
}
export class ViewportPrivate {
    static name: string
}