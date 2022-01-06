/**
 * GWeather-4.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GWeather {

enum ConditionPhenomenon {
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
enum ConditionQualifier {
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
enum DistanceUnit {
    INVALID,
    DEFAULT,
    METERS,
    KM,
    MILES,
}
enum LocationLevel {
    WORLD,
    REGION,
    COUNTRY,
    ADM1,
    CITY,
    WEATHER_STATION,
    DETACHED,
    NAMED_TIMEZONE,
}
enum PressureUnit {
    INVALID,
    DEFAULT,
    KPA,
    HPA,
    MB,
    MM_HG,
    INCH_HG,
    ATM,
}
enum Sky {
    INVALID,
    CLEAR,
    BROKEN,
    SCATTERED,
    FEW,
    OVERCAST,
    LAST,
}
enum SpeedUnit {
    INVALID,
    DEFAULT,
    MS,
    KPH,
    MPH,
    KNOTS,
    BFT,
}
enum TemperatureUnit {
    INVALID,
    DEFAULT,
    KELVIN,
    CENTIGRADE,
    FAHRENHEIT,
}
enum WindDirection {
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
enum FormatOptions {
    DEFAULT,
    SENTENCE_CAPITALIZATION,
    NO_CAPITALIZATION,
}
enum Provider {
    NONE,
    METAR,
    IWIN,
    MET_NO,
    OWM,
    ALL,
}
function location_level_to_string(level: LocationLevel): string
function sky_to_string(sky: Sky): string
function sky_to_string_full(sky: Sky, options: FormatOptions): string
function speed_unit_to_string(unit: SpeedUnit): string
function temperature_unit_to_real(unit: TemperatureUnit): TemperatureUnit
function wind_direction_to_string(wind: WindDirection): string
function wind_direction_to_string_full(wind: WindDirection, options: FormatOptions): string
interface FilterFunc {
    (location: Location): boolean
}
export interface Info_ConstructProps extends GObject.Object_ConstructProps {
    application_id?: string
    contact_info?: string
    enabled_providers?: Provider
    location?: Location
}
class Info {
    /* Properties of GWeather-4.0.GWeather.Info */
    application_id: string
    contact_info: string
    enabled_providers: Provider
    location: Location
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GWeather-4.0.GWeather.Info */
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
    get_sky(): string
    get_sunrise(): string
    get_sunset(): string
    get_symbolic_icon_name(): string
    get_temp(): string
    get_temp_max(): string
    get_temp_min(): string
    get_temp_summary(): string
    get_upcoming_moonphases(phases: number): boolean
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
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GWeather-4.0.GWeather.Info */
    connect(sigName: "updated", callback: (($obj: Info) => void)): number
    connect_after(sigName: "updated", callback: (($obj: Info) => void)): number
    emit(sigName: "updated"): void
    /* Signals of GObject-2.0.GObject.Object */
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
export interface Location_ConstructProps extends GObject.Object_ConstructProps {
}
class Location {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GWeather-4.0.GWeather.Location */
    deserialize(serialized: GLib.Variant): Location
    detect_nearest_city(lat: number, lon: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    equal(two: Location): boolean
    find_by_country_code(country_code: string): Location
    find_by_station_code(station_code: string): Location | null
    find_nearest_city(lat: number, lon: number): Location
    find_nearest_city_full(lat: number, lon: number, func: FilterFunc | null): Location
    free_timezones(zones: GLib.TimeZone[]): void
    get_city_name(): string | null
    get_code(): string | null
    get_coords(): [ /* latitude */ number | null, /* longitude */ number | null ]
    get_country(): string | null
    get_country_name(): string | null
    get_distance(loc2: Location): number
    get_english_name(): string | null
    get_english_sort_name(): string | null
    get_level(): LocationLevel
    get_name(): string | null
    get_parent(): Location | null
    get_sort_name(): string | null
    get_timezone(): GLib.TimeZone | null
    get_timezone_str(): string | null
    get_timezones(): GLib.TimeZone[]
    has_coords(): boolean
    next_child(child?: Location | null): Location | null
    serialize(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_detached(name: string, icao: string | null, latitude: number, longitude: number): Location
    static detect_nearest_city_finish(result: Gio.AsyncResult): Location
    static get_world(): Location | null
    static $gtype: GObject.Type
}
class Conditions {
    /* Fields of GWeather-4.0.GWeather.Conditions */
    significant: boolean
    phenomenon: ConditionPhenomenon
    qualifier: ConditionQualifier
    /* Methods of GWeather-4.0.GWeather.Conditions */
    to_string(): string
    to_string_full(options: FormatOptions): string
    static name: string
}
abstract class InfoClass {
    /* Fields of GWeather-4.0.GWeather.InfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class LocationClass {
    /* Fields of GWeather-4.0.GWeather.LocationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
type MoonLatitude = number
type MoonPhase = number
}
export default GWeather