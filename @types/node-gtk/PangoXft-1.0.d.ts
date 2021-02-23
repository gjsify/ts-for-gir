/**
 * PangoXft-1.0
 */

import "node"
import type { xlib } from './xlib-2.0';
import type { xft } from './xft-2.0';
import type { PangoOT } from './PangoOT-1.0';
import type { freetype2 } from './freetype2-2.0';
import type { PangoFc } from './PangoFc-1.0';
import type { fontconfig } from './fontconfig-2.0';
import type { Pango } from './Pango-1.0';
import type { cairo } from './cairo-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { PangoFT2 } from './PangoFT2-1.0';

export declare namespace PangoXft {

export function getFontMap(display: xlib.Display, screen: number): Pango.FontMap
export function pictureRender(display: xlib.Display, srcPicture: xlib.Picture, destPicture: xlib.Picture, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function render(draw: xft.Draw, color: xft.Color, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function renderLayout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void
export function renderLayoutLine(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void
export function renderTransformed(draw: xft.Draw, color: xft.Color, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function setDefaultSubstitute(display: xlib.Display, screen: number, func: SubstituteFunc): void
export function shutdownDisplay(display: xlib.Display, screen: number): void
export function substituteChanged(display: xlib.Display, screen: number): void
export interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data?: object | null): void
}
export interface Font_ConstructProps extends PangoFc.Font_ConstructProps {
}
export class Font {
    /* Properties of PangoFc-1.0.PangoFc.Font */
    fontmap: PangoFc.FontMap
    /* Fields of PangoFc-1.0.PangoFc.Font */
    parentInstance: Pango.Font
    fontPattern: fontconfig.Pattern
    priv: object
    matrix: Pango.Matrix
    description: Pango.FontDescription
    metricsByLang: object[]
    isHinted: number
    isTransformed: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoXft-1.0.PangoXft.Font */
    getGlyph(wc: number): number
    getUnknownGlyph(wc: number): Pango.Glyph
    hasChar(wc: number): boolean
    /* Methods of PangoFc-1.0.PangoFc.Font */
    getLanguages(): Pango.Language | null
    kernGlyphs(glyphs: Pango.GlyphString): void
    unlockFace(): void
    /* Methods of Pango-1.0.Pango.Font */
    describe(): Pango.FontDescription
    describeWithAbsoluteSize(): Pango.FontDescription
    findShaper(language: Pango.Language, ch: number): Pango.EngineShape
    getCoverage(language: Pango.Language): Pango.Coverage
    getFace(): Pango.FontFace
    getFeatures(numFeatures: number): { features: HarfBuzz.feature_t[], numFeatures: number }
    getFontMap(): Pango.FontMap | null
    getGlyphExtents(glyph: Pango.Glyph): { inkRect: Pango.Rectangle | null, logicalRect: Pango.Rectangle | null }
    getMetrics(language?: Pango.Language | null): Pango.FontMetrics
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fontmap", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fontmap", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fontmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fontmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fontmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface FontMap_ConstructProps extends PangoFc.FontMap_ConstructProps {
}
export class FontMap {
    /* Fields of Pango-1.0.Pango.FontMap */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoFc-1.0.PangoFc.FontMap */
    cacheClear(): void
    configChanged(): void
    createContext(): Pango.Context
    findDecoder(pattern: fontconfig.Pattern): PangoFc.Decoder | null
    setDefaultSubstitute(func: PangoFc.SubstituteFunc): void
    shutdown(): void
    substituteChanged(): void
    /* Methods of Pango-1.0.Pango.FontMap */
    changed(): void
    getFamily(name: string): Pango.FontFamily
    getSerial(): number
    listFamilies(): { families: Pango.FontFamily[] }
    loadFont(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    loadFontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
    /* Methods of GObject-2.0.GObject.Object */
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
    static $gtype: GObject.Type
}
export interface Renderer_ConstructProps extends Pango.Renderer_ConstructProps {
    display?: object
    screen?: number
}
export class Renderer {
    /* Fields of Pango-1.0.Pango.Renderer */
    matrix: Pango.Matrix
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoXft-1.0.PangoXft.Renderer */
    setDefaultColor(defaultColor: Pango.Color): void
    setDraw(draw: xft.Draw): void
    /* Methods of Pango-1.0.Pango.Renderer */
    activate(): void
    deactivate(): void
    drawErrorUnderline(x: number, y: number, width: number, height: number): void
    drawGlyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    drawGlyphItem(text: string | null, glyphItem: Pango.GlyphItem, x: number, y: number): void
    drawGlyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    drawLayout(layout: Pango.Layout, x: number, y: number): void
    drawLayoutLine(line: Pango.LayoutLine, x: number, y: number): void
    drawRectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    drawTrapezoid(part: Pango.RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    getAlpha(part: Pango.RenderPart): number
    getColor(part: Pango.RenderPart): Pango.Color | null
    getLayout(): Pango.Layout | null
    getLayoutLine(): Pango.LayoutLine | null
    getMatrix(): Pango.Matrix | null
    partChanged(part: Pango.RenderPart): void
    setAlpha(part: Pango.RenderPart, alpha: number): void
    setColor(part: Pango.RenderPart, color?: Pango.Color | null): void
    setMatrix(matrix?: Pango.Matrix | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: xlib.Display, screen: number): Renderer
    static $gtype: GObject.Type
}
export abstract class RendererClass {
    /* Fields of PangoXft-1.0.PangoXft.RendererClass */
    compositeTrapezoids: (xftrenderer: Renderer, part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, nTrapezoids: number) => void
    compositeGlyphs: (xftrenderer: Renderer, xftFont: xft.Font, glyphs: xft.GlyphSpec, nGlyphs: number) => void
    static name: string
}
export class RendererPrivate {
    static name: string
}
}