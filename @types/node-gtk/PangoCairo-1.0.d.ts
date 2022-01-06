/**
 * PangoCairo-1.0
 */

import "node"
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace PangoCairo {

function contextGetFontOptions(context: Pango.Context): cairo.FontOptions | null
function contextGetResolution(context: Pango.Context): number
function contextSetFontOptions(context: Pango.Context, options?: cairo.FontOptions | null): void
function contextSetResolution(context: Pango.Context, dpi: number): void
function contextSetShapeRenderer(context: Pango.Context, func?: ShapeRendererFunc | null): void
function createContext(cr: cairo.Context): Pango.Context
function createLayout(cr: cairo.Context): Pango.Layout
function errorUnderlinePath(cr: cairo.Context, x: number, y: number, width: number, height: number): void
function fontMapGetDefault(): Pango.FontMap
function fontMapNew(): Pango.FontMap
function fontMapNewForFontType(fonttype: cairo.FontType): Pango.FontMap | null
function glyphStringPath(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void
function layoutLinePath(cr: cairo.Context, line: Pango.LayoutLine): void
function layoutPath(cr: cairo.Context, layout: Pango.Layout): void
function showErrorUnderline(cr: cairo.Context, x: number, y: number, width: number, height: number): void
function showGlyphItem(cr: cairo.Context, text: string, glyphItem: Pango.GlyphItem): void
function showGlyphString(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void
function showLayout(cr: cairo.Context, layout: Pango.Layout): void
function showLayoutLine(cr: cairo.Context, line: Pango.LayoutLine): void
function updateContext(cr: cairo.Context, context: Pango.Context): void
function updateLayout(cr: cairo.Context, layout: Pango.Layout): void
interface ShapeRendererFunc {
    (cr: cairo.Context, attr: Pango.AttrShape, doPath: boolean): void
}
export interface Font_ConstructProps extends Pango.Font_ConstructProps {
}
class Font {
    /* Fields of Pango-1.0.Pango.Font */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoCairo-1.0.PangoCairo.Font */
    getScaledFont(): cairo.ScaledFont | null
    /* Methods of Pango-1.0.Pango.Font */
    describe(): Pango.FontDescription
    describeWithAbsoluteSize(): Pango.FontDescription
    getCoverage(language: Pango.Language): Pango.Coverage
    getFace(): Pango.FontFace
    getFeatures(numFeatures: number): { features: HarfBuzz.feature_t[], numFeatures: number }
    getFontMap(): Pango.FontMap | null
    getGlyphExtents(glyph: Pango.Glyph): { inkRect: Pango.Rectangle | null, logicalRect: Pango.Rectangle | null }
    getLanguages(): Pango.Language[] | null
    getMetrics(language?: Pango.Language | null): Pango.FontMetrics
    hasChar(wc: number): boolean
    serialize(): any
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
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FontMap_ConstructProps extends Pango.FontMap_ConstructProps {
}
class FontMap {
    /* Fields of Pango-1.0.Pango.FontMap */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoCairo-1.0.PangoCairo.FontMap */
    getFontType(): cairo.FontType
    getResolution(): number
    setDefault(): void
    setResolution(dpi: number): void
    /* Methods of Pango-1.0.Pango.FontMap */
    changed(): void
    createContext(): Pango.Context
    getFamily(name: string): Pango.FontFamily
    getSerial(): number
    listFamilies(): { families: Pango.FontFamily[] }
    loadFont(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    loadFontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
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
    connect(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Pango.FontMap
    static newForFontType(fonttype: cairo.FontType): Pango.FontMap | null
    static $gtype: GObject.Type
}
}
export default PangoCairo