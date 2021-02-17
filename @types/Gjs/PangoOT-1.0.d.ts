/**
 * PangoOT-1.0
 */

import type * as Gjs from './Gjs';
import type * as freetype2 from './freetype2-2.0';
import type * as PangoFc from './PangoFc-1.0';
import type * as fontconfig from './fontconfig-2.0';
import type * as Pango from './Pango-1.0';
import type * as cairo from './cairo-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum TableType {
    GSUB,
    GPOS,
}
export const ALL_GLYPHS: number
export const DEFAULT_LANGUAGE: number
export const NO_FEATURE: number
export const NO_SCRIPT: number
export function tag_from_language(language?: Pango.Language | null): Tag
export function tag_from_script(script: Pango.Script): Tag
export function tag_to_language(language_tag: Tag): Pango.Language
export function tag_to_script(script_tag: Tag): Pango.Script
export interface Info_ConstructProps extends GObject.Object_ConstructProps {
}
export class Info {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PangoOT.Info */
    find_feature(table_type: TableType, feature_tag: Tag, script_index: number, language_index: number): [ /* returnType */ boolean, /* feature_index */ number | null ]
    find_language(table_type: TableType, script_index: number, language_tag: Tag): [ /* returnType */ boolean, /* language_index */ number | null, /* required_feature_index */ number | null ]
    find_script(table_type: TableType, script_tag: Tag): [ /* returnType */ boolean, /* script_index */ number | null ]
    list_features(table_type: TableType, tag: Tag, script_index: number, language_index: number): Tag
    list_languages(table_type: TableType, script_index: number, language_tag: Tag): Tag
    list_scripts(table_type: TableType): Tag
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
    connect(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of PangoOT.Ruleset */
    add_feature(table_type: TableType, feature_index: number, property_bit: number): void
    get_feature_count(): [ /* returnType */ number, /* n_gsub_features */ number | null, /* n_gpos_features */ number | null ]
    maybe_add_feature(table_type: TableType, feature_tag: Tag, property_bit: number): boolean
    maybe_add_features(table_type: TableType, features: FeatureMap, n_features: number): number
    position(buffer: Buffer): void
    substitute(buffer: Buffer): void
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
    connect(sigName: "notify", callback: (($obj: Ruleset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ruleset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Ruleset_ConstructProps)
    _init (config?: Ruleset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(info: Info): Ruleset
    static new_for(info: Info, script: Pango.Script, language: Pango.Language): Ruleset
    static new_from_description(info: Info, desc: RulesetDescription): Ruleset
    static get_for_description(info: Info, desc: RulesetDescription): Ruleset
    static $gtype: GObject.Type
}
export class Buffer {
    /* Methods of PangoOT.Buffer */
    add_glyph(glyph: number, properties: number, cluster: number): void
    clear(): void
    destroy(): void
    get_glyphs(): /* glyphs */ Glyph[] | null
    output(glyphs: Pango.GlyphString): void
    set_rtl(rtl: boolean): void
    set_zero_width_marks(zero_width_marks: boolean): void
    static name: string
    static new(font: PangoFc.Font): Buffer
    constructor(font: PangoFc.Font)
    /* Static methods and pseudo-constructors */
    static new(font: PangoFc.Font): Buffer
}
export class FeatureMap {
    /* Fields of PangoOT.FeatureMap */
    feature_name: number[]
    property_bit: number
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
    static_gsub_features: FeatureMap
    n_static_gsub_features: number
    static_gpos_features: FeatureMap
    n_static_gpos_features: number
    other_features: FeatureMap
    n_other_features: number
    /* Methods of PangoOT.RulesetDescription */
    copy(): RulesetDescription
    equal(desc2: RulesetDescription): boolean
    free(): void
    hash(): number
    static name: string
}
export type Tag = number