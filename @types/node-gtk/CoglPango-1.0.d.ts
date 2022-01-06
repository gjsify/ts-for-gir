/**
 * CoglPango-1.0
 */

import "node"
import type { PangoCairo } from './PangoCairo-1.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Cogl } from './Cogl-1.0';
import type { GL } from './GL-1.0';

declare namespace CoglPango {

function ensureGlyphCacheForLayout(layout: Pango.Layout): void
function fontMapClearGlyphCache(fontMap: FontMap): void
function fontMapCreateContext(fontMap: FontMap): Pango.Context
function fontMapGetRenderer(fontMap: FontMap): Pango.Renderer
function fontMapGetUseMipmapping(fontMap: FontMap): Cogl.Bool
function fontMapNew(): Pango.FontMap
function fontMapSetResolution(fontMap: FontMap, dpi: number): void
function fontMapSetUseMipmapping(fontMap: FontMap, value: Cogl.Bool): void
function renderLayout(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void
function renderLayoutLine(line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void
function renderLayoutSubpixel(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void
export interface Renderer_ConstructProps extends Pango.Renderer_ConstructProps {
    context?: object
}
class Renderer {
    /* Fields of Pango-1.0.Pango.Renderer */
    matrix: Pango.Matrix
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    static $gtype: GObject.Type
}
abstract class RendererClass {
    static name: string
}
type FontMap = PangoCairo.FontMap
}
export default CoglPango