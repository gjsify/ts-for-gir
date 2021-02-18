/**
 * Mash-0.2
 */

import type * as Gjs from './Gjs';
import type * as freetype2 from './freetype2-2.0';
import type * as fontconfig from './fontconfig-2.0';
import type * as cairo from './cairo-1.0';
import type * as PangoFT2 from './PangoFT2-1.0';
import type * as PangoFc from './PangoFc-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Json from './Json-1.0';
import type * as Gio from './Gio-2.0';
import type * as GL from './GL-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as Cogl from './Cogl-1.0';
import type * as Clutter from './Clutter-1.0';
import type * as Atk from './Atk-1.0';

export enum DataError {
    UNKNOWN_FORMAT,
    UNKNOWN,
    MISSING_PROPERTY,
    INVALID,
    UNSUPPORTED,
}
export enum DataFlags {
    NONE,
    NEGATE_X,
    NEGATE_Y,
    NEGATE_Z,
}
export interface Data_ConstructProps extends GObject.Object_ConstructProps {
}
export class Data {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Mash.Data */
    get_extents(min_vertex: Clutter.Vertex, max_vertex: Clutter.Vertex): void
    load(flags: DataFlags, filename: string): boolean
    render(): void
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
    connect(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Data_ConstructProps)
    _init (config?: Data_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Data
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface DataLoader_ConstructProps extends GObject.Object_ConstructProps {
}
export class DataLoader {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Mash.DataLoader */
    get_data(loader_data: DataLoaderData): void
    load(flags: DataFlags, filename: string): boolean
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
    /* Virtual methods of Mash.DataLoader */
    vfunc_get_data(loader_data: DataLoaderData): void
    vfunc_load(flags: DataFlags, filename: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataLoader_ConstructProps)
    _init (config?: DataLoader_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DirectionalLight_ConstructProps extends Light_ConstructProps {
}
export class DirectionalLight {
    /* Properties of Mash.Light */
    ambient: Clutter.Color
    diffuse: Clutter.Color
    specular: Clutter.Color
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
    /* Methods of Mash.Light */
    append_shader(shader_source: GLib.String, snippet: string): void
    generate_shader(uniform_source: GLib.String, main_source: GLib.String): void
    get_ambient(ambient: Clutter.Color): void
    get_diffuse(diffuse: Clutter.Color): void
    get_modelview_matrix(matrix: Cogl.Matrix): void
    get_specular(specular: Clutter.Color): void
    get_uniform_location(program: Cogl.Handle, uniform_name: string): number
    set_ambient(ambient: Clutter.Color): void
    set_diffuse(diffuse: Clutter.Color): void
    set_direction_uniform(program: Cogl.Handle, uniform_location: number, direction_in: number): void
    set_specular(specular: Clutter.Color): void
    update_uniforms(program: Cogl.Handle): void
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
    /* Virtual methods of Mash.Light */
    vfunc_generate_shader(uniform_source: GLib.String, main_source: GLib.String): void
    vfunc_update_uniforms(program: Cogl.Handle): void
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
    connect(sigName: "allocation-changed", callback: (($obj: DirectionalLight, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: DirectionalLight, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: DirectionalLight, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: DirectionalLight, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: DirectionalLight, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: DirectionalLight, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: DirectionalLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: DirectionalLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: DirectionalLight, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: DirectionalLight, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: DirectionalLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: DirectionalLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "hide", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: DirectionalLight, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: DirectionalLight, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: DirectionalLight, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: DirectionalLight, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: DirectionalLight, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: DirectionalLight, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: DirectionalLight, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: DirectionalLight, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "paint", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: DirectionalLight, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: DirectionalLight, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: DirectionalLight, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: DirectionalLight, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: DirectionalLight, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: DirectionalLight, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "realize", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: DirectionalLight, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: DirectionalLight, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "show", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: DirectionalLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: DirectionalLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: DirectionalLight, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: DirectionalLight, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: DirectionalLight) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: DirectionalLight) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: DirectionalLight, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: DirectionalLight, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: DirectionalLight, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: DirectionalLight, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: DirectionalLight, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: DirectionalLight, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ambient", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ambient", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::diffuse", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::diffuse", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::specular", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specular", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: DirectionalLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DirectionalLight_ConstructProps)
    _init (config?: DirectionalLight_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DirectionalLight
    static $gtype: GObject.Type
}
export interface Light_ConstructProps extends Clutter.Actor_ConstructProps {
    ambient?: Clutter.Color
    diffuse?: Clutter.Color
    specular?: Clutter.Color
}
export class Light {
    /* Properties of Mash.Light */
    ambient: Clutter.Color
    diffuse: Clutter.Color
    specular: Clutter.Color
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
    /* Methods of Mash.Light */
    append_shader(shader_source: GLib.String, snippet: string): void
    generate_shader(uniform_source: GLib.String, main_source: GLib.String): void
    get_ambient(ambient: Clutter.Color): void
    get_diffuse(diffuse: Clutter.Color): void
    get_modelview_matrix(matrix: Cogl.Matrix): void
    get_specular(specular: Clutter.Color): void
    get_uniform_location(program: Cogl.Handle, uniform_name: string): number
    set_ambient(ambient: Clutter.Color): void
    set_diffuse(diffuse: Clutter.Color): void
    set_direction_uniform(program: Cogl.Handle, uniform_location: number, direction_in: number): void
    set_specular(specular: Clutter.Color): void
    update_uniforms(program: Cogl.Handle): void
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
    /* Virtual methods of Mash.Light */
    vfunc_generate_shader(uniform_source: GLib.String, main_source: GLib.String): void
    vfunc_update_uniforms(program: Cogl.Handle): void
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
    connect(sigName: "allocation-changed", callback: (($obj: Light, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Light, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Light, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Light, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Light, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Light, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Light, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Light, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Light) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Light) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Light, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Light, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Light, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Light, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Light) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Light) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Light) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Light) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Light) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Light) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Light, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Light, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Light, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Light, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Light, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Light, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Light, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Light, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Light) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Light) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Light, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Light, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Light, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Light, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Light, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Light, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Light) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Light) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Light) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Light) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Light, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Light, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Light) => void)): number
    connect_after(sigName: "show", callback: (($obj: Light) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Light, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Light, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Light, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Light, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Light) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Light) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Light) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Light) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Light, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Light, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Light, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Light, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Light, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Light, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ambient", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ambient", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::diffuse", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::diffuse", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::specular", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specular", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Light, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Light_ConstructProps)
    _init (config?: Light_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface LightSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class LightSet {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Mash.LightSet */
    add_light(light: Light): void
    remove_light(light: Light): void
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
    connect(sigName: "notify", callback: (($obj: LightSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LightSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LightSet_ConstructProps)
    _init (config?: LightSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LightSet
    static $gtype: GObject.Type
}
export interface Model_ConstructProps extends Clutter.Actor_ConstructProps {
    data?: Data
    fit_to_allocation?: boolean
    light_set?: LightSet
}
export class Model {
    /* Properties of Mash.Model */
    data: Data
    fit_to_allocation: boolean
    light_set: LightSet
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
    /* Methods of Mash.Model */
    get_fit_to_allocation(): boolean
    set_data(data: Data): void
    set_fit_to_allocation(fit_to_allocation: boolean): void
    set_light_set(light_set: LightSet): void
    set_material(material: Cogl.Handle): void
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
    /* Virtual methods of Mash.Model */
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
    connect(sigName: "allocation-changed", callback: (($obj: Model, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Model, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: Model, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Model, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: Model, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Model, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: Model, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Model, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: Model) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Model) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: Model, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Model, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: Model, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Model, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: Model) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Model) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: Model) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Model) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: Model) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Model) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: Model, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Model, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: Model, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Model, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: Model, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Model, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: Model, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Model, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: Model) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Model) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: Model, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Model, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: Model, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Model, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: Model, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Model, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: Model) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Model) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: Model) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Model) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: Model, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Model, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: Model) => void)): number
    connect_after(sigName: "show", callback: (($obj: Model) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: Model, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Model, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: Model, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Model, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: Model) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Model) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: Model) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Model) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Model, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Model, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: Model, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Model, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: Model, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Model, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fit-to-allocation", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fit-to-allocation", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::light-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::light-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Model, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Model_ConstructProps)
    _init (config?: Model_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Model
    static new_from_file(flags: DataFlags, filename: string): Model
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface PlyLoader_ConstructProps extends Data_ConstructProps {
}
export class PlyLoader {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Mash.Data */
    get_extents(min_vertex: Clutter.Vertex, max_vertex: Clutter.Vertex): void
    load(flags: DataFlags, filename: string): boolean
    render(): void
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
    connect(sigName: "notify", callback: (($obj: PlyLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlyLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlyLoader_ConstructProps)
    _init (config?: PlyLoader_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PointLight_ConstructProps extends Light_ConstructProps {
    constant_attenuation?: number
    linear_attenuation?: number
    quadratic_attenuation?: number
}
export class PointLight {
    /* Properties of Mash.PointLight */
    constant_attenuation: number
    linear_attenuation: number
    quadratic_attenuation: number
    /* Properties of Mash.Light */
    ambient: Clutter.Color
    diffuse: Clutter.Color
    specular: Clutter.Color
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
    /* Methods of Mash.PointLight */
    get_constant_attenuation(): number
    get_linear_attenuation(): number
    get_quadratic_attenuation(): number
    set_constant_attenuation(attenuation: number): void
    set_linear_attenuation(attenuation: number): void
    set_quadratic_attenuation(attenuation: number): void
    /* Methods of Mash.Light */
    append_shader(shader_source: GLib.String, snippet: string): void
    generate_shader(uniform_source: GLib.String, main_source: GLib.String): void
    get_ambient(ambient: Clutter.Color): void
    get_diffuse(diffuse: Clutter.Color): void
    get_modelview_matrix(matrix: Cogl.Matrix): void
    get_specular(specular: Clutter.Color): void
    get_uniform_location(program: Cogl.Handle, uniform_name: string): number
    set_ambient(ambient: Clutter.Color): void
    set_diffuse(diffuse: Clutter.Color): void
    set_direction_uniform(program: Cogl.Handle, uniform_location: number, direction_in: number): void
    set_specular(specular: Clutter.Color): void
    update_uniforms(program: Cogl.Handle): void
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
    /* Virtual methods of Mash.Light */
    vfunc_generate_shader(uniform_source: GLib.String, main_source: GLib.String): void
    vfunc_update_uniforms(program: Cogl.Handle): void
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
    connect(sigName: "allocation-changed", callback: (($obj: PointLight, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: PointLight, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: PointLight, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: PointLight, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: PointLight, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: PointLight, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: PointLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: PointLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PointLight) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: PointLight, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: PointLight, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: PointLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: PointLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "hide", callback: (($obj: PointLight) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: PointLight) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: PointLight) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: PointLight, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: PointLight, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: PointLight, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: PointLight, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: PointLight, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: PointLight, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: PointLight, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: PointLight, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "paint", callback: (($obj: PointLight) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: PointLight, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PointLight, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: PointLight, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: PointLight, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: PointLight, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: PointLight, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: PointLight) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "realize", callback: (($obj: PointLight) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: PointLight, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: PointLight, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "show", callback: (($obj: PointLight) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: PointLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: PointLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: PointLight, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: PointLight, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: PointLight) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: PointLight) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: PointLight) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: PointLight, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: PointLight, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: PointLight, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: PointLight, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: PointLight, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: PointLight, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::constant-attenuation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constant-attenuation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::linear-attenuation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linear-attenuation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quadratic-attenuation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quadratic-attenuation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ambient", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ambient", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::diffuse", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::diffuse", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::specular", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specular", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: PointLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PointLight_ConstructProps)
    _init (config?: PointLight_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PointLight
    static $gtype: GObject.Type
}
export interface SpotLight_ConstructProps extends PointLight_ConstructProps {
    spot_cutoff?: number
    spot_exponent?: number
}
export class SpotLight {
    /* Properties of Mash.SpotLight */
    spot_cutoff: number
    spot_exponent: number
    /* Properties of Mash.PointLight */
    constant_attenuation: number
    linear_attenuation: number
    quadratic_attenuation: number
    /* Properties of Mash.Light */
    ambient: Clutter.Color
    diffuse: Clutter.Color
    specular: Clutter.Color
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
    /* Methods of Mash.SpotLight */
    get_spot_cutoff(): number
    get_spot_exponent(): number
    set_spot_cutoff(cutoff: number): void
    set_spot_exponent(exponent: number): void
    /* Methods of Mash.PointLight */
    get_constant_attenuation(): number
    get_linear_attenuation(): number
    get_quadratic_attenuation(): number
    set_constant_attenuation(attenuation: number): void
    set_linear_attenuation(attenuation: number): void
    set_quadratic_attenuation(attenuation: number): void
    /* Methods of Mash.Light */
    append_shader(shader_source: GLib.String, snippet: string): void
    generate_shader(uniform_source: GLib.String, main_source: GLib.String): void
    get_ambient(ambient: Clutter.Color): void
    get_diffuse(diffuse: Clutter.Color): void
    get_modelview_matrix(matrix: Cogl.Matrix): void
    get_specular(specular: Clutter.Color): void
    get_uniform_location(program: Cogl.Handle, uniform_name: string): number
    set_ambient(ambient: Clutter.Color): void
    set_diffuse(diffuse: Clutter.Color): void
    set_direction_uniform(program: Cogl.Handle, uniform_location: number, direction_in: number): void
    set_specular(specular: Clutter.Color): void
    update_uniforms(program: Cogl.Handle): void
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
    /* Virtual methods of Mash.Light */
    vfunc_generate_shader(uniform_source: GLib.String, main_source: GLib.String): void
    vfunc_update_uniforms(program: Cogl.Handle): void
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
    connect(sigName: "allocation-changed", callback: (($obj: SpotLight, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: SpotLight, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: SpotLight, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: SpotLight, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: SpotLight, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: SpotLight, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: SpotLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: SpotLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: SpotLight, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: SpotLight, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: SpotLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: SpotLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "hide", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: SpotLight, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: SpotLight, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: SpotLight, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: SpotLight, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: SpotLight, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: SpotLight, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: SpotLight, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: SpotLight, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "paint", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: SpotLight, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: SpotLight, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: SpotLight, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: SpotLight, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: SpotLight, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: SpotLight, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "realize", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: SpotLight, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: SpotLight, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "show", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: SpotLight, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: SpotLight, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: SpotLight, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: SpotLight, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: SpotLight) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: SpotLight) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: SpotLight, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: SpotLight, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: SpotLight, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: SpotLight, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: SpotLight, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: SpotLight, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    connect(sigName: "notify::spot-cutoff", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spot-cutoff", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::spot-exponent", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spot-exponent", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constant-attenuation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constant-attenuation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::linear-attenuation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linear-attenuation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quadratic-attenuation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quadratic-attenuation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ambient", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ambient", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::diffuse", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::diffuse", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::specular", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specular", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: SpotLight, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SpotLight_ConstructProps)
    _init (config?: SpotLight_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SpotLight
    static $gtype: GObject.Type
}
export abstract class DataClass {
    static name: string
}
export abstract class DataLoaderClass {
    /* Fields of Mash.DataLoaderClass */
    load: (data_loader: DataLoader, flags: DataFlags, filename: string) => boolean
    get_data: (data_loader: DataLoader, loader_data: DataLoaderData) => void
    static name: string
}
export class DataLoaderData {
    /* Fields of Mash.DataLoaderData */
    vertices_vbo: Cogl.Handle
    indices: Cogl.Handle
    min_index: number
    max_index: number
    n_triangles: number
    min_vertex: Clutter.Vertex
    max_vertex: Clutter.Vertex
    static name: string
}
export class DataLoaderPrivate {
    static name: string
}
export class DataPrivate {
    static name: string
}
export abstract class DirectionalLightClass {
    static name: string
}
export class DirectionalLightPrivate {
    static name: string
}
export abstract class LightClass {
    /* Fields of Mash.LightClass */
    generate_shader: (light: Light, uniform_source: GLib.String, main_source: GLib.String) => void
    update_uniforms: (light: Light, program: Cogl.Handle) => void
    static name: string
}
export class LightPrivate {
    static name: string
}
export abstract class LightSetClass {
    static name: string
}
export class LightSetPrivate {
    static name: string
}
export abstract class ModelClass {
    static name: string
}
export class ModelPrivate {
    static name: string
}
export abstract class PlyLoaderClass {
    static name: string
}
export class PlyLoaderPrivate {
    static name: string
}
export abstract class PointLightClass {
    static name: string
}
export class PointLightPrivate {
    static name: string
}
export abstract class SpotLightClass {
    static name: string
}
export class SpotLightPrivate {
    static name: string
}