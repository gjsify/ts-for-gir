/**
 * PangoFT2-1.0
 */

import "node"
import type { freetype2 } from './freetype2-2.0';
import type { PangoFc } from './PangoFc-1.0';
import type { fontconfig } from './fontconfig-2.0';
import type { Pango } from './Pango-1.0';
import type { cairo } from './cairo-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace PangoFT2 {

export function fontGetCoverage(font: Pango.Font, language: Pango.Language): Pango.Coverage
export function fontGetKerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number
export function getUnknownGlyph(font: Pango.Font): Pango.Glyph
export function render(bitmap: freetype2.Bitmap, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function renderLayout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void
export function renderLayoutLine(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void
export function renderLayoutLineSubpixel(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void
export function renderLayoutSubpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void
export function renderTransformed(bitmap: freetype2.Bitmap, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function shutdownDisplay(): void
export interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data?: object | null): void
}
export interface FontMap_ConstructProps extends PangoFc.FontMap_ConstructProps {
}
export class FontMap {
    /* Fields of Pango-1.0.Pango.FontMap */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoFT2-1.0.PangoFT2.FontMap */
    setDefaultSubstitute(func: SubstituteFunc): void
    setResolution(dpiX: number, dpiY: number): void
    substituteChanged(): void
    /* Methods of PangoFc-1.0.PangoFc.FontMap */
    cacheClear(): void
    configChanged(): void
    createContext(): Pango.Context
    findDecoder(pattern: fontconfig.Pattern): PangoFc.Decoder | null
    setDefaultSubstitute(func: PangoFc.SubstituteFunc): void
    shutdown(): void
    /* Methods of Pango-1.0.Pango.FontMap */
    changed(): void
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
    static new(): FontMap
    static $gtype: GObject.Type
}
}