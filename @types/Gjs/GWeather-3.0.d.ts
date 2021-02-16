/**
 * GWeather-3.0
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

export enum ConditionPhenomenon {
    INVALID,
    NONE,
    DRIZZLE,
    RAIN,
    SNOW,
    SNOW_GRAINS,
    ICE_CRYSTALS,
    ICE_PELLETS,
    HAIL,
    SMALL_HAIL,
    UNKNOWN_PRECIPITATION,
    MIST,
    FOG,
    SMOKE,
    VOLCANIC_ASH,
    SAND,
    HAZE,
    SPRAY,
    DUST,
    SQUALL,
    SANDSTORM,
    DUSTSTORM,
    FUNNEL_CLOUD,
    TORNADO,
    DUST_WHIRLS,
    LAST,
}
export enum ConditionQualifier {
    INVALID,
    NONE,
    VICINITY,
    LIGHT,
    MODERATE,
    HEAVY,
    SHALLOW,
    PATCHES,
    PARTIAL,
    THUNDERSTORM,
    BLOWING,
    SHOWERS,
    DRIFTING,
    FREEZING,
    LAST,
}
export enum DistanceUnit {
    INVALID,
    DEFAULT,
    METERS,
    KM,
    MILES,
}
export enum LocationLevel {
    WORLD,
    REGION,
    COUNTRY,
    ADM1,
    CITY,
    WEATHER_STATION,
    DETACHED,
    NAMED_TIMEZONE,
}
export enum PressureUnit {
    INVALID,
    DEFAULT,
    KPA,
    HPA,
    MB,
    MM_HG,
    INCH_HG,
    ATM,
}
export enum Sky {
    INVALID,
    CLEAR,
    BROKEN,
    SCATTERED,
    FEW,
    OVERCAST,
    LAST,
}
export enum SpeedUnit {
    INVALID,
    DEFAULT,
    MS,
    KPH,
    MPH,
    KNOTS,
    BFT,
}
export enum TemperatureUnit {
    INVALID,
    DEFAULT,
    KELVIN,
    CENTIGRADE,
    FAHRENHEIT,
}
export enum WindDirection {
    INVALID,
    VARIABLE,
    N,
    NNE,
    NE,
    ENE,
    E,
    ESE,
    SE,
    SSE,
    S,
    SSW,
    SW,
    WSW,
    W,
    WNW,
    NW,
    NNW,
    LAST,
}
export enum FormatOptions {
    DEFAULT,
    SENTENCE_CAPITALIZATION,
    NO_CAPITALIZATION,
}
export enum Provider {
    NONE,
    METAR,
    IWIN,
    YAHOO,
    MET_NO,
    OWM,
    ALL,
}
export const LOCATION_ENTRY_H: number
export const TIMEZONE_MENU_H: number
export function location_detect_nearest_city_finish(result: Gio.AsyncResult): Location
export function location_get_world(): Location | null
export function location_level_to_string(level: LocationLevel): string
export function sky_to_string(sky: Sky): string
export function sky_to_string_full(sky: Sky, options: FormatOptions): string
export function speed_unit_to_string(unit: SpeedUnit): string
export function temperature_unit_to_real(unit: TemperatureUnit): TemperatureUnit
export function timezone_get_by_tzid(tzid: string): Timezone
export function timezone_get_utc(): Timezone
export function wind_direction_to_string(wind: WindDirection): string
export function wind_direction_to_string_full(wind: WindDirection, options: FormatOptions): string
export interface FilterFunc {
    (location: Location): boolean
}
export interface Info_ConstructProps extends GObject.Object_ConstructProps {
    application_id?: string
    contact_info?: string
    enabled_providers?: Provider
    location?: Location
}
export class Info {
    /* Properties of GWeather.Info */
    application_id: string
    contact_info: string
    enabled_providers: Provider
    location: Location
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GWeather.Info */
    abort(): void
    get_apparent(): string
    get_application_id(): string
    get_attribution(): string
    get_conditions(): string
    get_contact_info(): string
    get_dew(): string
    get_enabled_providers(): Provider
    get_forecast_list(): Info[]
    get_humidity(): string
    get_icon_name(): string
    get_location(): Location
    get_location_name(): string
    get_pressure(): string
    get_radar(): GdkPixbuf.PixbufAnimation
    get_sky(): string
    get_sunrise(): string
    get_sunset(): string
    get_symbolic_icon_name(): string
    get_temp(): string
    get_temp_max(): string
    get_temp_min(): string
    get_temp_summary(): string
    get_upcoming_moonphases(): [ /* returnType */ boolean, /* phases */ number[] ]
    get_update(): string
    get_value_apparent(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_conditions(): [ /* returnType */ boolean, /* phenomenon */ ConditionPhenomenon, /* qualifier */ ConditionQualifier ]
    get_value_dew(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_moonphase(): [ /* returnType */ boolean, /* value */ MoonPhase, /* lat */ MoonLatitude ]
    get_value_pressure(unit: PressureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_sky(): [ /* returnType */ boolean, /* sky */ Sky ]
    get_value_sunrise(): [ /* returnType */ boolean, /* value */ number ]
    get_value_sunset(): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp_max(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp_min(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_update(): [ /* returnType */ boolean, /* value */ number ]
    get_value_visibility(unit: DistanceUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_wind(unit: SpeedUnit): [ /* returnType */ boolean, /* speed */ number, /* direction */ WindDirection ]
    get_visibility(): string
    get_weather_summary(): string
    get_wind(): string
    is_daytime(): boolean
    is_valid(): boolean
    network_error(): boolean
    next_sun_event(): number
    set_application_id(application_id: string): void
    set_contact_info(contact_info: string): void
    set_enabled_providers(providers: Provider): void
    set_location(location?: Location | null): void
    update(): void
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
    /* Signals of GWeather.Info */
    connect(sigName: "updated", callback: (($obj: Info) => void)): number
    connect_after(sigName: "updated", callback: (($obj: Info) => void)): number
    emit(sigName: "updated"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contact-info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact-info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled-providers", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-providers", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Info_ConstructProps)
    _init (config?: Info_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(location?: Location | null): Info
    static store_cache(): void
    static $gtype: GObject.Type
}
export interface LocationEntry_ConstructProps extends Gtk.SearchEntry_ConstructProps {
    location?: Location
    show_named_timezones?: boolean
    top?: Location
    editing_canceled?: boolean
    editable?: boolean
    enable_undo?: boolean
    max_width_chars?: number
    text?: string
    width_chars?: number
    xalign?: number
}
export class LocationEntry {
    /* Properties of GWeather.LocationEntry */
    location: Location
    /* Properties of Gtk.SearchEntry */
    activates_default: boolean
    placeholder_text: string
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
    /* Properties of Gtk.CellEditable */
    editing_canceled: boolean
    /* Properties of Gtk.Editable */
    readonly cursor_position: number
    editable: boolean
    enable_undo: boolean
    max_width_chars: number
    readonly selection_bound: number
    text: string
    width_chars: number
    xalign: number
    /* Fields of Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GWeather.LocationEntry */
    get_location(): Location | null
    has_custom_text(): boolean
    set_city(city_name: string | null, code: string): boolean
    set_location(loc?: Location | null): void
    /* Methods of Gtk.SearchEntry */
    get_key_capture_widget(): Gtk.Widget
    set_key_capture_widget(widget?: Gtk.Widget | null): void
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
    /* Methods of Gtk.CellEditable */
    editing_done(): void
    remove_widget(): void
    start_editing(event?: Gdk.Event | null): void
    /* Methods of Gtk.Editable */
    delete_selection(): void
    delete_text(start_pos: number, end_pos: number): void
    finish_delegate(): void
    get_alignment(): number
    get_chars(start_pos: number, end_pos: number): string
    get_delegate(): Gtk.Editable | null
    get_editable(): boolean
    get_enable_undo(): boolean
    get_max_width_chars(): number
    get_position(): number
    get_selection_bounds(): [ /* returnType */ boolean, /* start_pos */ number | null, /* end_pos */ number | null ]
    get_text(): string
    get_width_chars(): number
    init_delegate(): void
    insert_text(text: string, length: number, position: number): /* position */ number
    select_region(start_pos: number, end_pos: number): void
    set_alignment(xalign: number): void
    set_editable(is_editable: boolean): void
    set_enable_undo(enable_undo: boolean): void
    set_max_width_chars(n_chars: number): void
    set_position(position: number): void
    set_text(text: string): void
    set_width_chars(n_chars: number): void
    /* Virtual methods of GWeather.LocationEntry */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_editing_done(): void
    vfunc_remove_widget(): void
    vfunc_start_editing(event?: Gdk.Event | null): void
    vfunc_changed(): void
    vfunc_delete_text(start_pos: number, end_pos: number): void
    vfunc_do_delete_text(start_pos: number, end_pos: number): void
    vfunc_do_insert_text(text: string, length: number, position: number): /* position */ number
    vfunc_get_delegate(): Gtk.Editable | null
    vfunc_get_selection_bounds(): [ /* returnType */ boolean, /* start_pos */ number | null, /* end_pos */ number | null ]
    vfunc_get_text(): string
    vfunc_insert_text(text: string, length: number, position: number): /* position */ number
    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void
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
    /* Signals of Gtk.SearchEntry */
    connect(sigName: "activate", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "activate", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "next-match", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "next-match", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "next-match"): void
    connect(sigName: "previous-match", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "previous-match", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "previous-match"): void
    connect(sigName: "search-changed", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "search-changed", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "search-changed"): void
    connect(sigName: "search-started", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "search-started", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "search-started"): void
    connect(sigName: "stop-search", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "stop-search", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "stop-search"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: LocationEntry, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: LocationEntry, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "hide", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: LocationEntry, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: LocationEntry, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "map", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: LocationEntry, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: LocationEntry, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: LocationEntry, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: LocationEntry, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: LocationEntry, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: LocationEntry, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "realize", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "show", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: LocationEntry, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: LocationEntry, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk.CellEditable */
    connect(sigName: "editing-done", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "editing-done", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "editing-done"): void
    connect(sigName: "remove-widget", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "remove-widget", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "remove-widget"): void
    /* Signals of Gtk.Editable */
    connect(sigName: "changed", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "changed", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "delete-text", callback: (($obj: LocationEntry, start_pos: number, end_pos: number) => void)): number
    connect_after(sigName: "delete-text", callback: (($obj: LocationEntry, start_pos: number, end_pos: number) => void)): number
    emit(sigName: "delete-text", start_pos: number, end_pos: number): void
    connect(sigName: "insert-text", callback: (($obj: LocationEntry, text: string, length: number, position: number) => void)): number
    connect_after(sigName: "insert-text", callback: (($obj: LocationEntry, text: string, length: number, position: number) => void)): number
    emit(sigName: "insert-text", text: string, length: number, position: number): void
    connect(sigName: "notify::location", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::activates-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::placeholder-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editing-canceled", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor-position", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-undo", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-undo", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selection-bound", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xalign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocationEntry_ConstructProps)
    _init (config?: LocationEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(top: Location): LocationEntry
    static new(): LocationEntry
    static delegate_get_property(object: GObject.Object, prop_id: number, value: any, pspec: GObject.ParamSpec): boolean
    static delegate_set_property(object: GObject.Object, prop_id: number, value: any, pspec: GObject.ParamSpec): boolean
    static install_properties(object_class: GObject.ObjectClass, first_prop: number): number
    static $gtype: GObject.Type
}
export interface TimezoneMenu_ConstructProps extends Gtk.ComboBox_ConstructProps {
    top?: Location
    tzid?: string
    editing_canceled?: boolean
}
export class TimezoneMenu {
    /* Properties of GWeather.TimezoneMenu */
    tzid: string
    /* Properties of Gtk.ComboBox */
    active: number
    active_id: string
    button_sensitivity: Gtk.SensitivityType
    child: Gtk.Widget
    entry_text_column: number
    has_frame: boolean
    id_column: number
    model: Gtk.TreeModel
    popup_fixed_width: boolean
    readonly popup_shown: boolean
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
    /* Properties of Gtk.CellEditable */
    editing_canceled: boolean
    /* Fields of Gtk.ComboBox */
    parent_instance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GWeather.TimezoneMenu */
    get_tzid(): string | null
    set_tzid(tzid?: string | null): void
    /* Methods of Gtk.ComboBox */
    get_active(): number
    get_active_id(): string | null
    get_active_iter(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_button_sensitivity(): Gtk.SensitivityType
    get_child(): Gtk.Widget | null
    get_entry_text_column(): number
    get_has_entry(): boolean
    get_id_column(): number
    get_model(): Gtk.TreeModel | null
    get_popup_fixed_width(): boolean
    popdown(): void
    popup(): void
    popup_for_device(device: Gdk.Device): void
    set_active(index_: number): void
    set_active_id(active_id?: string | null): boolean
    set_active_iter(iter?: Gtk.TreeIter | null): void
    set_button_sensitivity(sensitivity: Gtk.SensitivityType): void
    set_child(child?: Gtk.Widget | null): void
    set_entry_text_column(text_column: number): void
    set_id_column(id_column: number): void
    set_model(model?: Gtk.TreeModel | null): void
    set_popup_fixed_width(fixed: boolean): void
    set_row_separator_func(func?: Gtk.TreeViewRowSeparatorFunc | null): void
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
    /* Methods of Gtk.CellEditable */
    editing_done(): void
    remove_widget(): void
    start_editing(event?: Gdk.Event | null): void
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
    /* Virtual methods of GWeather.TimezoneMenu */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    vfunc_editing_done(): void
    vfunc_remove_widget(): void
    vfunc_start_editing(event?: Gdk.Event | null): void
    vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void
    vfunc_clear(): void
    vfunc_clear_attributes(cell: Gtk.CellRenderer): void
    vfunc_get_area(): Gtk.CellArea | null
    vfunc_get_cells(): Gtk.CellRenderer[]
    vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void
    vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void
    vfunc_reorder(cell: Gtk.CellRenderer, position: number): void
    vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void
    /* Virtual methods of Gtk.ComboBox */
    vfunc_changed(): void
    vfunc_format_entry_text(path: string): string
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
    /* Signals of Gtk.ComboBox */
    connect(sigName: "changed", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "changed", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "format-entry-text", callback: (($obj: TimezoneMenu, path: string) => string)): number
    connect_after(sigName: "format-entry-text", callback: (($obj: TimezoneMenu, path: string) => string)): number
    emit(sigName: "format-entry-text", path: string): void
    connect(sigName: "move-active", callback: (($obj: TimezoneMenu, scroll_type: Gtk.ScrollType) => void)): number
    connect_after(sigName: "move-active", callback: (($obj: TimezoneMenu, scroll_type: Gtk.ScrollType) => void)): number
    emit(sigName: "move-active", scroll_type: Gtk.ScrollType): void
    connect(sigName: "popdown", callback: (($obj: TimezoneMenu) => boolean)): number
    connect_after(sigName: "popdown", callback: (($obj: TimezoneMenu) => boolean)): number
    emit(sigName: "popdown"): void
    connect(sigName: "popup", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "popup", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "popup"): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: TimezoneMenu, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: TimezoneMenu, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "hide", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: TimezoneMenu, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: TimezoneMenu, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "map", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: TimezoneMenu, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: TimezoneMenu, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: TimezoneMenu, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: TimezoneMenu, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: TimezoneMenu, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: TimezoneMenu, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "realize", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "show", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: TimezoneMenu, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: TimezoneMenu, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gtk.CellEditable */
    connect(sigName: "editing-done", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "editing-done", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "editing-done"): void
    connect(sigName: "remove-widget", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "remove-widget", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "remove-widget"): void
    connect(sigName: "notify::tzid", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tzid", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active-id", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-id", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::button-sensitivity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::button-sensitivity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entry-text-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry-text-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-frame", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-fixed-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-fixed-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-shown", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-shown", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editing-canceled", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TimezoneMenu_ConstructProps)
    _init (config?: TimezoneMenu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(top: Location): TimezoneMenu
    static new(): TimezoneMenu
    static $gtype: GObject.Type
}
export class Conditions {
    /* Fields of GWeather.Conditions */
    significant: boolean
    phenomenon: ConditionPhenomenon
    qualifier: ConditionQualifier
    /* Methods of GWeather.Conditions */
    to_string(): string
    to_string_full(options: FormatOptions): string
    static name: string
}
export abstract class InfoClass {
    /* Fields of GWeather.InfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Location {
    /* Methods of GWeather.Location */
    deserialize(serialized: GLib.Variant): Location
    detect_nearest_city(lat: number, lon: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    equal(two: Location): boolean
    find_by_country_code(country_code: string): Location
    find_by_station_code(station_code: string): Location
    find_nearest_city(lat: number, lon: number): Location
    find_nearest_city_full(lat: number, lon: number, func: FilterFunc | null): Location
    free_timezones(zones: Timezone): void
    get_children(): Location[]
    get_city_name(): string | null
    get_code(): string | null
    get_coords(): [ /* latitude */ number, /* longitude */ number ]
    get_country(): string | null
    get_country_name(): string | null
    get_distance(loc2: Location): number
    get_english_name(): string
    get_english_sort_name(): string
    get_level(): LocationLevel
    get_name(): string
    get_parent(): Location | null
    get_sort_name(): string
    get_timezone(): Timezone | null
    get_timezone_str(): string | null
    get_timezones(): Timezone[]
    has_coords(): boolean
    next_child(child?: Location | null): Location | null
    ref(): Location
    serialize(): GLib.Variant
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_detached(name: string, icao: string | null, latitude: number, longitude: number): Location
    static detect_nearest_city_finish(result: Gio.AsyncResult): Location
    static get_world(): Location | null
}
export abstract class LocationEntryClass {
    /* Fields of GWeather.LocationEntryClass */
    parent_class: Gtk.SearchEntryClass
    static name: string
}
export class LocationEntryPrivate {
    static name: string
}
export class Timezone {
    /* Methods of GWeather.Timezone */
    get_dst_offset(): number
    get_name(): string
    get_offset(): number
    get_tzid(): string
    has_dst(): boolean
    ref(): Timezone
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static get_by_tzid(tzid: string): Timezone
    static get_utc(): Timezone
}
export abstract class TimezoneMenuClass {
    /* Fields of GWeather.TimezoneMenuClass */
    parent_class: Gtk.ComboBoxClass
    static name: string
}
type MoonLatitude = number
type MoonPhase = number