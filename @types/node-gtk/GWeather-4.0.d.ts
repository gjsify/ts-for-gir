/**
 * GWeather-4.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GWeather {

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
    MET_NO,
    OWM,
    ALL,
}
export function locationLevelToString(level: LocationLevel): string
export function skyToString(sky: Sky): string
export function skyToStringFull(sky: Sky, options: FormatOptions): string
export function speedUnitToString(unit: SpeedUnit): string
export function temperatureUnitToReal(unit: TemperatureUnit): TemperatureUnit
export function windDirectionToString(wind: WindDirection): string
export function windDirectionToStringFull(wind: WindDirection, options: FormatOptions): string
export interface FilterFunc {
    (location: Location): boolean
}
export interface Info_ConstructProps extends GObject.Object_ConstructProps {
    applicationId?: string
    contactInfo?: string
    enabledProviders?: Provider
    location?: Location
}
export class Info {
    /* Properties of GWeather-4.0.GWeather.Info */
    applicationId: string
    contactInfo: string
    enabledProviders: Provider
    location: Location
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GWeather-4.0.GWeather.Info */
    abort(): void
    getApparent(): string
    getApplicationId(): string
    getAttribution(): string
    getConditions(): string
    getContactInfo(): string
    getDew(): string
    getEnabledProviders(): Provider
    getForecastList(): Info[]
    getHumidity(): string
    getIconName(): string
    getLocation(): Location
    getLocationName(): string
    getPressure(): string
    getSky(): string
    getSunrise(): string
    getSunset(): string
    getSymbolicIconName(): string
    getTemp(): string
    getTempMax(): string
    getTempMin(): string
    getTempSummary(): string
    getUpcomingMoonphases(phases: number): boolean
    getUpdate(): string
    getValueApparent(unit: TemperatureUnit): { returnType: boolean, value: number }
    getValueConditions(): { returnType: boolean, phenomenon: ConditionPhenomenon, qualifier: ConditionQualifier }
    getValueDew(unit: TemperatureUnit): { returnType: boolean, value: number }
    getValueMoonphase(): { returnType: boolean, value: MoonPhase, lat: MoonLatitude }
    getValuePressure(unit: PressureUnit): { returnType: boolean, value: number }
    getValueSky(): { returnType: boolean, sky: Sky }
    getValueSunrise(): { returnType: boolean, value: number }
    getValueSunset(): { returnType: boolean, value: number }
    getValueTemp(unit: TemperatureUnit): { returnType: boolean, value: number }
    getValueTempMax(unit: TemperatureUnit): { returnType: boolean, value: number }
    getValueTempMin(unit: TemperatureUnit): { returnType: boolean, value: number }
    getValueUpdate(): { returnType: boolean, value: number }
    getValueVisibility(unit: DistanceUnit): { returnType: boolean, value: number }
    getValueWind(unit: SpeedUnit): { returnType: boolean, speed: number, direction: WindDirection }
    getVisibility(): string
    getWeatherSummary(): string
    getWind(): string
    isDaytime(): boolean
    isValid(): boolean
    networkError(): boolean
    nextSunEvent(): number
    setApplicationId(applicationId: string): void
    setContactInfo(contactInfo: string): void
    setEnabledProviders(providers: Provider): void
    setLocation(location?: Location | null): void
    update(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GWeather-4.0.GWeather.Info */
    connect(sigName: "updated", callback: (($obj: Info) => void)): number
    on(sigName: "updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "updated"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-id", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contact-info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact-info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contact-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contact-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contact-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled-providers", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-providers", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled-providers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled-providers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled-providers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Info_ConstructProps)
    _init (config?: Info_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(location?: Location | null): Info
    static storeCache(): void
    static $gtype: GObject.Type
}
export interface Location_ConstructProps extends GObject.Object_ConstructProps {
}
export class Location {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GWeather-4.0.GWeather.Location */
    deserialize(serialized: GLib.Variant): Location
    detectNearestCity(lat: number, lon: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    equal(two: Location): boolean
    findByCountryCode(countryCode: string): Location
    findByStationCode(stationCode: string): Location | null
    findNearestCity(lat: number, lon: number): Location
    findNearestCityFull(lat: number, lon: number, func: FilterFunc | null): Location
    freeTimezones(zones: GLib.TimeZone[]): void
    getCityName(): string | null
    getCode(): string | null
    getCoords(): { latitude: number | null, longitude: number | null }
    getCountry(): string | null
    getCountryName(): string | null
    getDistance(loc2: Location): number
    getEnglishName(): string | null
    getEnglishSortName(): string | null
    getLevel(): LocationLevel
    getName(): string | null
    getParent(): Location | null
    getSortName(): string | null
    getTimezone(): GLib.TimeZone | null
    getTimezoneStr(): string | null
    getTimezones(): GLib.TimeZone[]
    hasCoords(): boolean
    nextChild(child?: Location | null): Location | null
    serialize(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newDetached(name: string, icao: string | null, latitude: number, longitude: number): Location
    static detectNearestCityFinish(result: Gio.AsyncResult): Location
    static getWorld(): Location | null
    static $gtype: GObject.Type
}
export class Conditions {
    /* Fields of GWeather-4.0.GWeather.Conditions */
    significant: boolean
    phenomenon: ConditionPhenomenon
    qualifier: ConditionQualifier
    /* Methods of GWeather-4.0.GWeather.Conditions */
    toString(): string
    toStringFull(options: FormatOptions): string
    static name: string
}
export abstract class InfoClass {
    /* Fields of GWeather-4.0.GWeather.InfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class LocationClass {
    /* Fields of GWeather-4.0.GWeather.LocationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export type MoonLatitude = number
export type MoonPhase = number
}