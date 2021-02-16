/**
 * GWeather-3.0
 */

/// <reference types="node" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace GWeather {

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
export function locationDetectNearestCityFinish(result: Gio.AsyncResult): Location
export function locationGetWorld(): Location | null
export function locationLevelToString(level: LocationLevel): string
export function skyToString(sky: Sky): string
export function skyToStringFull(sky: Sky, options: FormatOptions): string
export function speedUnitToString(unit: SpeedUnit): string
export function temperatureUnitToReal(unit: TemperatureUnit): TemperatureUnit
export function timezoneGetByTzid(tzid: string): Timezone
export function timezoneGetUtc(): Timezone
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
    /* Properties of GWeather.Info */
    applicationId: string
    contactInfo: string
    enabledProviders: Provider
    location: Location
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GWeather.Info */
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
    getRadar(): GdkPixbuf.PixbufAnimation
    getSky(): string
    getSunrise(): string
    getSunset(): string
    getSymbolicIconName(): string
    getTemp(): string
    getTempMax(): string
    getTempMin(): string
    getTempSummary(): string
    getUpcomingMoonphases(): [ /* returnType */ boolean, /* phases */ number[] ]
    getUpdate(): string
    getValueApparent(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueConditions(): [ /* returnType */ boolean, /* phenomenon */ ConditionPhenomenon, /* qualifier */ ConditionQualifier ]
    getValueDew(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueMoonphase(): [ /* returnType */ boolean, /* value */ MoonPhase, /* lat */ MoonLatitude ]
    getValuePressure(unit: PressureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueSky(): [ /* returnType */ boolean, /* sky */ Sky ]
    getValueSunrise(): [ /* returnType */ boolean, /* value */ number ]
    getValueSunset(): [ /* returnType */ boolean, /* value */ number ]
    getValueTemp(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueTempMax(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueTempMin(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueUpdate(): [ /* returnType */ boolean, /* value */ number ]
    getValueVisibility(unit: DistanceUnit): [ /* returnType */ boolean, /* value */ number ]
    getValueWind(unit: SpeedUnit): [ /* returnType */ boolean, /* speed */ number, /* direction */ WindDirection ]
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
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GWeather.Info */
    connect(sigName: "updated", callback: (($obj: Info) => void)): number
    connect_after(sigName: "updated", callback: (($obj: Info) => void)): number
    emit(sigName: "updated"): void
    on(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface LocationEntry_ConstructProps extends Gtk.SearchEntry_ConstructProps {
    location?: Location
    showNamedTimezones?: boolean
    top?: Location
    editingCanceled?: boolean
    editable?: boolean
    enableUndo?: boolean
    maxWidthChars?: number
    text?: string
    widthChars?: number
    xalign?: number
}
export class LocationEntry {
    /* Properties of GWeather.LocationEntry */
    location: Location
    /* Properties of Gtk.SearchEntry */
    activatesDefault: boolean
    placeholderText: string
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk.CellEditable */
    editingCanceled: boolean
    /* Properties of Gtk.Editable */
    readonly cursorPosition: number
    editable: boolean
    enableUndo: boolean
    maxWidthChars: number
    readonly selectionBound: number
    text: string
    widthChars: number
    xalign: number
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GWeather.LocationEntry */
    getLocation(): Location | null
    hasCustomText(): boolean
    setCity(cityName: string | null, code: string): boolean
    setLocation(loc?: Location | null): void
    /* Methods of Gtk.SearchEntry */
    getKeyCaptureWidget(): Gtk.Widget
    setKeyCaptureWidget(widget?: Gtk.Widget | null): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Methods of Gtk.CellEditable */
    editingDone(): void
    removeWidget(): void
    startEditing(event?: Gdk.Event | null): void
    /* Methods of Gtk.Editable */
    deleteSelection(): void
    deleteText(startPos: number, endPos: number): void
    finishDelegate(): void
    getAlignment(): number
    getChars(startPos: number, endPos: number): string
    getDelegate(): Gtk.Editable | null
    getEditable(): boolean
    getEnableUndo(): boolean
    getMaxWidthChars(): number
    getPosition(): number
    getSelectionBounds(): [ /* returnType */ boolean, /* startPos */ number | null, /* endPos */ number | null ]
    getText(): string
    getWidthChars(): number
    initDelegate(): void
    insertText(text: string, length: number, position: number): /* position */ number
    selectRegion(startPos: number, endPos: number): void
    setAlignment(xalign: number): void
    setEditable(isEditable: boolean): void
    setEnableUndo(enableUndo: boolean): void
    setMaxWidthChars(nChars: number): void
    setPosition(position: number): void
    setText(text: string): void
    setWidthChars(nChars: number): void
    /* Virtual methods of GWeather.LocationEntry */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    vfuncEditingDone(): void
    vfuncRemoveWidget(): void
    vfuncStartEditing(event?: Gdk.Event | null): void
    vfuncChanged(): void
    vfuncDeleteText(startPos: number, endPos: number): void
    vfuncDoDeleteText(startPos: number, endPos: number): void
    vfuncDoInsertText(text: string, length: number, position: number): /* position */ number
    vfuncGetDelegate(): Gtk.Editable | null
    vfuncGetSelectionBounds(): [ /* returnType */ boolean, /* startPos */ number | null, /* endPos */ number | null ]
    vfuncGetText(): string
    vfuncInsertText(text: string, length: number, position: number): /* position */ number
    vfuncSetSelectionBounds(startPos: number, endPos: number): void
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains(x: number, y: number): boolean
    vfuncCssChanged(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabFocus(): boolean
    vfuncHide(): void
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncMap(): void
    vfuncMeasure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncRoot(): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    vfuncShow(): void
    vfuncSizeAllocate(width: number, height: number, baseline: number): void
    vfuncSnapshot(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged(settings: Gtk.SystemSetting): void
    vfuncUnmap(): void
    vfuncUnrealize(): void
    vfuncUnroot(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.SearchEntry */
    connect(sigName: "activate", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "activate", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "activate"): void
    on(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "next-match", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "next-match", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "next-match"): void
    on(sigName: "next-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "next-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "next-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "previous-match", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "previous-match", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "previous-match"): void
    on(sigName: "previous-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "previous-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "previous-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "search-changed", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "search-changed", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "search-changed"): void
    on(sigName: "search-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "search-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "search-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "search-started", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "search-started", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "search-started"): void
    on(sigName: "search-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "search-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "search-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "stop-search", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "stop-search", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "stop-search"): void
    on(sigName: "stop-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "stop-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "stop-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: LocationEntry, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: LocationEntry, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "hide", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: LocationEntry, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: LocationEntry, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "map", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: LocationEntry, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: LocationEntry, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: LocationEntry, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: LocationEntry, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: LocationEntry, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: LocationEntry, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "realize", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "show", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: LocationEntry, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: LocationEntry, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.CellEditable */
    connect(sigName: "editing-done", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "editing-done", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "editing-done"): void
    on(sigName: "editing-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "editing-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "editing-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove-widget", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "remove-widget", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "remove-widget"): void
    on(sigName: "remove-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Editable */
    connect(sigName: "changed", callback: (($obj: LocationEntry) => void)): number
    connect_after(sigName: "changed", callback: (($obj: LocationEntry) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-text", callback: (($obj: LocationEntry, startPos: number, endPos: number) => void)): number
    connect_after(sigName: "delete-text", callback: (($obj: LocationEntry, startPos: number, endPos: number) => void)): number
    emit(sigName: "delete-text", startPos: number, endPos: number): void
    on(sigName: "delete-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "insert-text", callback: (($obj: LocationEntry, text: string, length: number, position: number) => void)): number
    connect_after(sigName: "insert-text", callback: (($obj: LocationEntry, text: string, length: number, position: number) => void)): number
    emit(sigName: "insert-text", text: string, length: number, position: number): void
    on(sigName: "insert-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "insert-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "insert-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::activates-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activates-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::activates-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::activates-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::placeholder-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::placeholder-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::placeholder-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::placeholder-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editing-canceled", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-position", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-undo", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-undo", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-width-chars", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-width-chars", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-width-chars", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selection-bound", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selection-bound", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selection-bound", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selection-bound", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-chars", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-chars", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-chars", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocationEntry_ConstructProps)
    _init (config?: LocationEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(top: Location): LocationEntry
    static new(): LocationEntry
    static delegateGetProperty(object: GObject.Object, propId: number, value: any, pspec: GObject.ParamSpec): boolean
    static delegateSetProperty(object: GObject.Object, propId: number, value: any, pspec: GObject.ParamSpec): boolean
    static installProperties(objectClass: GObject.ObjectClass, firstProp: number): number
    static $gtype: GObject.Type
}
export interface TimezoneMenu_ConstructProps extends Gtk.ComboBox_ConstructProps {
    top?: Location
    tzid?: string
    editingCanceled?: boolean
}
export class TimezoneMenu {
    /* Properties of GWeather.TimezoneMenu */
    tzid: string
    /* Properties of Gtk.ComboBox */
    active: number
    activeId: string
    buttonSensitivity: Gtk.SensitivityType
    child: Gtk.Widget
    entryTextColumn: number
    hasFrame: boolean
    idColumn: number
    model: Gtk.TreeModel
    popupFixedWidth: boolean
    readonly popupShown: boolean
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk.CellEditable */
    editingCanceled: boolean
    /* Fields of Gtk.ComboBox */
    parentInstance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GWeather.TimezoneMenu */
    getTzid(): string | null
    setTzid(tzid?: string | null): void
    /* Methods of Gtk.ComboBox */
    getActive(): number
    getActiveId(): string | null
    getActiveIter(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    getButtonSensitivity(): Gtk.SensitivityType
    getChild(): Gtk.Widget | null
    getEntryTextColumn(): number
    getHasEntry(): boolean
    getIdColumn(): number
    getModel(): Gtk.TreeModel | null
    getPopupFixedWidth(): boolean
    popdown(): void
    popup(): void
    popupForDevice(device: Gdk.Device): void
    setActive(index: number): void
    setActiveId(activeId?: string | null): boolean
    setActiveIter(iter?: Gtk.TreeIter | null): void
    setButtonSensitivity(sensitivity: Gtk.SensitivityType): void
    setChild(child?: Gtk.Widget | null): void
    setEntryTextColumn(textColumn: number): void
    setIdColumn(idColumn: number): void
    setModel(model?: Gtk.TreeModel | null): void
    setPopupFixedWidth(fixed: boolean): void
    setRowSeparatorFunc(func?: Gtk.TreeViewRowSeparatorFunc | null): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Methods of Gtk.CellEditable */
    editingDone(): void
    removeWidget(): void
    startEditing(event?: Gdk.Event | null): void
    /* Methods of Gtk.CellLayout */
    addAttribute(cell: Gtk.CellRenderer, attribute: string, column: number): void
    clear(): void
    clearAttributes(cell: Gtk.CellRenderer): void
    getArea(): Gtk.CellArea | null
    getCells(): Gtk.CellRenderer[]
    packEnd(cell: Gtk.CellRenderer, expand: boolean): void
    packStart(cell: Gtk.CellRenderer, expand: boolean): void
    reorder(cell: Gtk.CellRenderer, position: number): void
    setCellDataFunc(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void
    /* Virtual methods of GWeather.TimezoneMenu */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    vfuncEditingDone(): void
    vfuncRemoveWidget(): void
    vfuncStartEditing(event?: Gdk.Event | null): void
    vfuncAddAttribute(cell: Gtk.CellRenderer, attribute: string, column: number): void
    vfuncClear(): void
    vfuncClearAttributes(cell: Gtk.CellRenderer): void
    vfuncGetArea(): Gtk.CellArea | null
    vfuncGetCells(): Gtk.CellRenderer[]
    vfuncPackEnd(cell: Gtk.CellRenderer, expand: boolean): void
    vfuncPackStart(cell: Gtk.CellRenderer, expand: boolean): void
    vfuncReorder(cell: Gtk.CellRenderer, position: number): void
    vfuncSetCellDataFunc(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void
    /* Virtual methods of Gtk.ComboBox */
    vfuncChanged(): void
    vfuncFormatEntryText(path: string): string
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains(x: number, y: number): boolean
    vfuncCssChanged(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabFocus(): boolean
    vfuncHide(): void
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncMap(): void
    vfuncMeasure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncRoot(): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    vfuncShow(): void
    vfuncSizeAllocate(width: number, height: number, baseline: number): void
    vfuncSnapshot(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged(settings: Gtk.SystemSetting): void
    vfuncUnmap(): void
    vfuncUnrealize(): void
    vfuncUnroot(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.ComboBox */
    connect(sigName: "changed", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "changed", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "format-entry-text", callback: (($obj: TimezoneMenu, path: string) => string)): number
    connect_after(sigName: "format-entry-text", callback: (($obj: TimezoneMenu, path: string) => string)): number
    emit(sigName: "format-entry-text", path: string): void
    on(sigName: "format-entry-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "format-entry-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "format-entry-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-active", callback: (($obj: TimezoneMenu, scrollType: Gtk.ScrollType) => void)): number
    connect_after(sigName: "move-active", callback: (($obj: TimezoneMenu, scrollType: Gtk.ScrollType) => void)): number
    emit(sigName: "move-active", scrollType: Gtk.ScrollType): void
    on(sigName: "move-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "popdown", callback: (($obj: TimezoneMenu) => boolean)): number
    connect_after(sigName: "popdown", callback: (($obj: TimezoneMenu) => boolean)): number
    emit(sigName: "popdown"): void
    on(sigName: "popdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "popdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "popdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "popup", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "popup", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "popup"): void
    on(sigName: "popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: TimezoneMenu, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: TimezoneMenu, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "hide", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: TimezoneMenu, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: TimezoneMenu, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "map", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: TimezoneMenu, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: TimezoneMenu, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: TimezoneMenu, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: TimezoneMenu, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: TimezoneMenu, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: TimezoneMenu, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "realize", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "show", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: TimezoneMenu, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: TimezoneMenu, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.CellEditable */
    connect(sigName: "editing-done", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "editing-done", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "editing-done"): void
    on(sigName: "editing-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "editing-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "editing-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove-widget", callback: (($obj: TimezoneMenu) => void)): number
    connect_after(sigName: "remove-widget", callback: (($obj: TimezoneMenu) => void)): number
    emit(sigName: "remove-widget"): void
    on(sigName: "remove-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tzid", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tzid", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tzid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tzid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tzid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-id", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-id", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::button-sensitivity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::button-sensitivity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::button-sensitivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::button-sensitivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::button-sensitivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entry-text-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry-text-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entry-text-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entry-text-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entry-text-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-frame", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-fixed-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-fixed-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-fixed-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-fixed-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-fixed-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-shown", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-shown", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-shown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-shown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-shown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editing-canceled", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    toString(): string
    toStringFull(options: FormatOptions): string
    static name: string
}
export abstract class InfoClass {
    /* Fields of GWeather.InfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Location {
    /* Methods of GWeather.Location */
    deserialize(serialized: GLib.Variant): Location
    detectNearestCity(lat: number, lon: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    equal(two: Location): boolean
    findByCountryCode(countryCode: string): Location
    findByStationCode(stationCode: string): Location
    findNearestCity(lat: number, lon: number): Location
    findNearestCityFull(lat: number, lon: number, func: FilterFunc | null): Location
    freeTimezones(zones: Timezone): void
    getChildren(): Location[]
    getCityName(): string | null
    getCode(): string | null
    getCoords(): [ /* latitude */ number, /* longitude */ number ]
    getCountry(): string | null
    getCountryName(): string | null
    getDistance(loc2: Location): number
    getEnglishName(): string
    getEnglishSortName(): string
    getLevel(): LocationLevel
    getName(): string
    getParent(): Location | null
    getSortName(): string
    getTimezone(): Timezone | null
    getTimezoneStr(): string | null
    getTimezones(): Timezone[]
    hasCoords(): boolean
    nextChild(child?: Location | null): Location | null
    ref(): Location
    serialize(): GLib.Variant
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newDetached(name: string, icao: string | null, latitude: number, longitude: number): Location
    static detectNearestCityFinish(result: Gio.AsyncResult): Location
    static getWorld(): Location | null
}
export abstract class LocationEntryClass {
    /* Fields of GWeather.LocationEntryClass */
    parentClass: Gtk.SearchEntryClass
    static name: string
}
export class LocationEntryPrivate {
    static name: string
}
export class Timezone {
    /* Methods of GWeather.Timezone */
    getDstOffset(): number
    getName(): string
    getOffset(): number
    getTzid(): string
    hasDst(): boolean
    ref(): Timezone
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static getByTzid(tzid: string): Timezone
    static getUtc(): Timezone
}
export abstract class TimezoneMenuClass {
    /* Fields of GWeather.TimezoneMenuClass */
    parentClass: Gtk.ComboBoxClass
    static name: string
}
type MoonLatitude = number
type MoonPhase = number
}