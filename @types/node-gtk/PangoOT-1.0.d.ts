/**
 * PangoOT-1.0
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

export declare namespace PangoOT {

export enum TableType {
    GSUB,
    GPOS,
}
export const ALL_GLYPHS: number
export const DEFAULT_LANGUAGE: number
export const NO_FEATURE: number
export const NO_SCRIPT: number
export function tagFromLanguage(language?: Pango.Language | null): Tag
export function tagFromScript(script: Pango.Script): Tag
export function tagToLanguage(languageTag: Tag): Pango.Language
export function tagToScript(scriptTag: Tag): Pango.Script
export interface Info_ConstructProps extends GObject.Object_ConstructProps {
}
export class Info {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoOT.Info */
    findFeature(tableType: TableType, featureTag: Tag, scriptIndex: number, languageIndex: number): [ /* returnType */ boolean, /* featureIndex */ number | null ]
    findLanguage(tableType: TableType, scriptIndex: number, languageTag: Tag): [ /* returnType */ boolean, /* languageIndex */ number | null, /* requiredFeatureIndex */ number | null ]
    findScript(tableType: TableType, scriptTag: Tag): [ /* returnType */ boolean, /* scriptIndex */ number | null ]
    listFeatures(tableType: TableType, tag: Tag, scriptIndex: number, languageIndex: number): Tag
    listLanguages(tableType: TableType, scriptIndex: number, languageTag: Tag): Tag
    listScripts(tableType: TableType): Tag
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static get(face: freetype2.Face): Info
    static $gtype: GObject.Type
}
export interface Ruleset_ConstructProps extends GObject.Object_ConstructProps {
}
export class Ruleset {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of PangoOT.Ruleset */
    addFeature(tableType: TableType, featureIndex: number, propertyBit: number): void
    getFeatureCount(): [ /* returnType */ number, /* nGsubFeatures */ number | null, /* nGposFeatures */ number | null ]
    maybeAddFeature(tableType: TableType, featureTag: Tag, propertyBit: number): boolean
    maybeAddFeatures(tableType: TableType, features: FeatureMap, nFeatures: number): number
    position(buffer: Buffer): void
    substitute(buffer: Buffer): void
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Ruleset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ruleset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Ruleset_ConstructProps)
    _init (config?: Ruleset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(info: Info): Ruleset
    static newFor(info: Info, script: Pango.Script, language: Pango.Language): Ruleset
    static newFromDescription(info: Info, desc: RulesetDescription): Ruleset
    static getForDescription(info: Info, desc: RulesetDescription): Ruleset
    static $gtype: GObject.Type
}
export class Buffer {
    /* Methods of PangoOT.Buffer */
    addGlyph(glyph: number, properties: number, cluster: number): void
    clear(): void
    destroy(): void
    getGlyphs(): /* glyphs */ Glyph[] | null
    output(glyphs: Pango.GlyphString): void
    setRtl(rtl: boolean): void
    setZeroWidthMarks(zeroWidthMarks: boolean): void
    static name: string
    static new(font: PangoFc.Font): Buffer
    constructor(font: PangoFc.Font)
    /* Static methods and pseudo-constructors */
    static new(font: PangoFc.Font): Buffer
}
export class FeatureMap {
    /* Fields of PangoOT.FeatureMap */
    featureName: number[]
    propertyBit: number
    static name: string
}
export class Glyph {
    /* Fields of PangoOT.Glyph */
    glyph: number
    properties: number
    cluster: number
    component: number
    ligID: number
    internal: number
    static name: string
}
export class RulesetDescription {
    /* Fields of PangoOT.RulesetDescription */
    script: Pango.Script
    language: Pango.Language
    staticGsubFeatures: FeatureMap
    nStaticGsubFeatures: number
    staticGposFeatures: FeatureMap
    nStaticGposFeatures: number
    otherFeatures: FeatureMap
    nOtherFeatures: number
    /* Methods of PangoOT.RulesetDescription */
    copy(): RulesetDescription
    equal(desc2: RulesetDescription): boolean
    free(): void
    hash(): number
    static name: string
}
export type Tag = number
}