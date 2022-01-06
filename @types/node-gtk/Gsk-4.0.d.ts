/**
 * Gsk-4.0
 */

import "node"
import type { Graphene } from './Graphene-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gdk } from './Gdk-4.0';
import type { cairo } from './cairo-1.0';
import type { PangoCairo } from './PangoCairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace Gsk {

export enum BlendMode {
    DEFAULT,
    MULTIPLY,
    SCREEN,
    OVERLAY,
    DARKEN,
    LIGHTEN,
    COLOR_DODGE,
    COLOR_BURN,
    HARD_LIGHT,
    SOFT_LIGHT,
    DIFFERENCE,
    EXCLUSION,
    COLOR,
    HUE,
    SATURATION,
    LUMINOSITY,
}
export enum Corner {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT,
}
export enum GLUniformType {
    NONE,
    FLOAT,
    INT,
    UINT,
    BOOL,
    VEC2,
    VEC3,
    VEC4,
}
export enum RenderNodeType {
    NOT_A_RENDER_NODE,
    CONTAINER_NODE,
    CAIRO_NODE,
    COLOR_NODE,
    LINEAR_GRADIENT_NODE,
    REPEATING_LINEAR_GRADIENT_NODE,
    RADIAL_GRADIENT_NODE,
    REPEATING_RADIAL_GRADIENT_NODE,
    CONIC_GRADIENT_NODE,
    BORDER_NODE,
    TEXTURE_NODE,
    INSET_SHADOW_NODE,
    OUTSET_SHADOW_NODE,
    TRANSFORM_NODE,
    OPACITY_NODE,
    COLOR_MATRIX_NODE,
    REPEAT_NODE,
    CLIP_NODE,
    ROUNDED_CLIP_NODE,
    SHADOW_NODE,
    BLEND_NODE,
    CROSS_FADE_NODE,
    TEXT_NODE,
    BLUR_NODE,
    DEBUG_NODE,
    GL_SHADER_NODE,
}
export enum ScalingFilter {
    LINEAR,
    NEAREST,
    TRILINEAR,
}
export enum SerializationError {
    UNSUPPORTED_FORMAT,
    UNSUPPORTED_VERSION,
    INVALID_DATA,
}
export enum TransformCategory {
    UNKNOWN,
    ANY,
    /* 3D (invalid, starts with a number) */
    /* 2D (invalid, starts with a number) */
    /* 2D_AFFINE (invalid, starts with a number) */
    /* 2D_TRANSLATE (invalid, starts with a number) */
    IDENTITY,
}
export function serializationErrorQuark(): GLib.Quark
export function transformParse(string: string): { returnType: boolean, outTransform: Transform }
export function valueDupRenderNode(value: any): RenderNode | null
export function valueGetRenderNode(value: any): RenderNode | null
export function valueSetRenderNode(value: any, node: RenderNode): void
export function valueTakeRenderNode(value: any, node?: RenderNode | null): void
export interface ParseErrorFunc {
    (start: ParseLocation, end: ParseLocation, error: GLib.Error): void
}
export class BlendNode {
    /* Methods of Gsk-4.0.Gsk.BlendNode */
    getBlendMode(): BlendMode
    getBottomChild(): RenderNode
    getTopChild(): RenderNode
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(bottom: RenderNode, top: RenderNode, blendMode: BlendMode): BlendNode
    constructor(bottom: RenderNode, top: RenderNode, blendMode: BlendMode)
    /* Static methods and pseudo-constructors */
    static new(bottom: RenderNode, top: RenderNode, blendMode: BlendMode): BlendNode
}
export class BlurNode {
    /* Methods of Gsk-4.0.Gsk.BlurNode */
    getChild(): RenderNode
    getRadius(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, radius: number): BlurNode
    constructor(child: RenderNode, radius: number)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, radius: number): BlurNode
}
export class BorderNode {
    /* Methods of Gsk-4.0.Gsk.BorderNode */
    getColors(): Gdk.RGBA
    getOutline(): RoundedRect
    getWidths(): number[]
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, borderWidth: number[], borderColor: Gdk.RGBA[]): BorderNode
    constructor(outline: RoundedRect, borderWidth: number[], borderColor: Gdk.RGBA[])
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, borderWidth: number[], borderColor: Gdk.RGBA[]): BorderNode
}
export interface BroadwayRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class BroadwayRenderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    getSurface(): Gdk.Surface | null
    isRealized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BroadwayRenderer_ConstructProps)
    _init (config?: BroadwayRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BroadwayRenderer
    static $gtype: GObject.Type
}
export class CairoNode {
    /* Methods of Gsk-4.0.Gsk.CairoNode */
    getDrawContext(): cairo.Context
    getSurface(): cairo.Surface
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect): CairoNode
    constructor(bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect): CairoNode
}
export interface CairoRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class CairoRenderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    getSurface(): Gdk.Surface | null
    isRealized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CairoRenderer_ConstructProps)
    _init (config?: CairoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CairoRenderer
    static $gtype: GObject.Type
}
export class ClipNode {
    /* Methods of Gsk-4.0.Gsk.ClipNode */
    getChild(): RenderNode
    getClip(): Graphene.Rect
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
    constructor(child: RenderNode, clip: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
}
export class ColorMatrixNode {
    /* Methods of Gsk-4.0.Gsk.ColorMatrixNode */
    getChild(): RenderNode
    getColorMatrix(): Graphene.Matrix
    getColorOffset(): Graphene.Vec4
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, colorMatrix: Graphene.Matrix, colorOffset: Graphene.Vec4): ColorMatrixNode
    constructor(child: RenderNode, colorMatrix: Graphene.Matrix, colorOffset: Graphene.Vec4)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, colorMatrix: Graphene.Matrix, colorOffset: Graphene.Vec4): ColorMatrixNode
}
export class ColorNode {
    /* Methods of Gsk-4.0.Gsk.ColorNode */
    getColor(): Gdk.RGBA
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
    constructor(rgba: Gdk.RGBA, bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
}
export class ConicGradientNode {
    /* Methods of Gsk-4.0.Gsk.ConicGradientNode */
    getAngle(): number
    getCenter(): Graphene.Point
    getColorStops(): ColorStop[]
    getNColorStops(): number
    getRotation(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, colorStops: ColorStop[]): ConicGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, colorStops: ColorStop[]): ConicGradientNode
}
export class ContainerNode {
    /* Methods of Gsk-4.0.Gsk.ContainerNode */
    getChild(idx: number): RenderNode
    getNChildren(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(children: RenderNode[]): ContainerNode
    constructor(children: RenderNode[])
    /* Static methods and pseudo-constructors */
    static new(children: RenderNode[]): ContainerNode
}
export class CrossFadeNode {
    /* Methods of Gsk-4.0.Gsk.CrossFadeNode */
    getEndChild(): RenderNode
    getProgress(): number
    getStartChild(): RenderNode
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
    constructor(start: RenderNode, end: RenderNode, progress: number)
    /* Static methods and pseudo-constructors */
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
}
export class DebugNode {
    /* Methods of Gsk-4.0.Gsk.DebugNode */
    getChild(): RenderNode
    getMessage(): string
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, message: string): DebugNode
    constructor(child: RenderNode, message: string)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, message: string): DebugNode
}
export interface GLRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class GLRenderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    getSurface(): Gdk.Surface | null
    isRealized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GLRenderer_ConstructProps)
    _init (config?: GLRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLRenderer
    static $gtype: GObject.Type
}
export interface GLShader_ConstructProps extends GObject.Object_ConstructProps {
    resource?: string
    source?: any
}
export class GLShader {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.GLShader */
    compile(renderer: Renderer): boolean
    findUniformByName(name: string): number
    getArgBool(args: any, idx: number): boolean
    getArgFloat(args: any, idx: number): number
    getArgInt(args: any, idx: number): number
    getArgUint(args: any, idx: number): number
    getArgVec2(args: any, idx: number, outValue: Graphene.Vec2): void
    getArgVec3(args: any, idx: number, outValue: Graphene.Vec3): void
    getArgVec4(args: any, idx: number, outValue: Graphene.Vec4): void
    getArgsSize(): number
    getNTextures(): number
    getNUniforms(): number
    getResource(): string | null
    getSource(): any
    getUniformName(idx: number): string
    getUniformOffset(idx: number): number
    getUniformType(idx: number): GLUniformType
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
    connect(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GLShader_ConstructProps)
    _init (config?: GLShader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromBytes(sourcecode: any): GLShader
    static newFromResource(resourcePath: string): GLShader
    static $gtype: GObject.Type
}
export class GLShaderNode {
    /* Methods of Gsk-4.0.Gsk.GLShaderNode */
    getArgs(): any
    getChild(idx: number): RenderNode
    getNChildren(): number
    getShader(): GLShader
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(shader: GLShader, bounds: Graphene.Rect, args: any, children: RenderNode[]): GLShaderNode
    constructor(shader: GLShader, bounds: Graphene.Rect, args: any, children: RenderNode[])
    /* Static methods and pseudo-constructors */
    static new(shader: GLShader, bounds: Graphene.Rect, args: any, children: RenderNode[]): GLShaderNode
}
export class InsetShadowNode {
    /* Methods of Gsk-4.0.Gsk.InsetShadowNode */
    getBlurRadius(): number
    getColor(): Gdk.RGBA
    getDx(): number
    getDy(): number
    getOutline(): RoundedRect
    getSpread(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number): InsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number)
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number): InsetShadowNode
}
export class LinearGradientNode {
    /* Methods of Gsk-4.0.Gsk.LinearGradientNode */
    getColorStops(): ColorStop[]
    getEnd(): Graphene.Point
    getNColorStops(): number
    getStart(): Graphene.Point
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[]): LinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[]): LinearGradientNode
}
export interface NglRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class NglRenderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    getSurface(): Gdk.Surface | null
    isRealized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NglRenderer_ConstructProps)
    _init (config?: NglRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NglRenderer
    static $gtype: GObject.Type
}
export class OpacityNode {
    /* Methods of Gsk-4.0.Gsk.OpacityNode */
    getChild(): RenderNode
    getOpacity(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, opacity: number): OpacityNode
    constructor(child: RenderNode, opacity: number)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, opacity: number): OpacityNode
}
export class OutsetShadowNode {
    /* Methods of Gsk-4.0.Gsk.OutsetShadowNode */
    getBlurRadius(): number
    getColor(): Gdk.RGBA
    getDx(): number
    getDy(): number
    getOutline(): RoundedRect
    getSpread(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number): OutsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number)
    /* Static methods and pseudo-constructors */
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blurRadius: number): OutsetShadowNode
}
export class RadialGradientNode {
    /* Methods of Gsk-4.0.Gsk.RadialGradientNode */
    getCenter(): Graphene.Point
    getColorStops(): ColorStop[]
    getEnd(): number
    getHradius(): number
    getNColorStops(): number
    getStart(): number
    getVradius(): number
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[]): RadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[]): RadialGradientNode
}
export class RenderNode {
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static deserialize(bytes: any): RenderNode | null
}
export interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Renderer {
    /* Properties of Gsk-4.0.Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gsk-4.0.Gsk.Renderer */
    getSurface(): Gdk.Surface | null
    isRealized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    renderTexture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify::realized", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::surface", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newForSurface(surface: Gdk.Surface): Renderer
    static $gtype: GObject.Type
}
export class RepeatNode {
    /* Methods of Gsk-4.0.Gsk.RepeatNode */
    getChild(): RenderNode
    getChildBounds(): Graphene.Rect
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, child: RenderNode, childBounds?: Graphene.Rect | null): RepeatNode
    constructor(bounds: Graphene.Rect, child: RenderNode, childBounds?: Graphene.Rect | null)
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, child: RenderNode, childBounds?: Graphene.Rect | null): RepeatNode
}
export class RepeatingLinearGradientNode {
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[]): RepeatingLinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, colorStops: ColorStop[]): RepeatingLinearGradientNode
}
export class RepeatingRadialGradientNode {
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[]): RepeatingRadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[])
    /* Static methods and pseudo-constructors */
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, colorStops: ColorStop[]): RepeatingRadialGradientNode
}
export class RoundedClipNode {
    /* Methods of Gsk-4.0.Gsk.RoundedClipNode */
    getChild(): RenderNode
    getClip(): RoundedRect
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
    constructor(child: RenderNode, clip: RoundedRect)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
}
export class ShadowNode {
    /* Methods of Gsk-4.0.Gsk.ShadowNode */
    getChild(): RenderNode
    getNShadows(): number
    getShadow(i: number): Shadow
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
    constructor(child: RenderNode, shadows: Shadow[])
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
}
export class TextNode {
    /* Methods of Gsk-4.0.Gsk.TextNode */
    getColor(): Gdk.RGBA
    getFont(): Pango.Font
    getGlyphs(): Pango.GlyphInfo[]
    getNumGlyphs(): number
    getOffset(): Graphene.Point
    hasColorGlyphs(): boolean
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode
    constructor(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point)
    /* Static methods and pseudo-constructors */
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode
}
export class TextureNode {
    /* Methods of Gsk-4.0.Gsk.TextureNode */
    getTexture(): Gdk.Texture
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
    constructor(texture: Gdk.Texture, bounds: Graphene.Rect)
    /* Static methods and pseudo-constructors */
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
}
export class TransformNode {
    /* Methods of Gsk-4.0.Gsk.TransformNode */
    getChild(): RenderNode
    getTransform(): Transform
    /* Methods of Gsk-4.0.Gsk.RenderNode */
    draw(cr: cairo.Context): void
    getBounds(): { bounds: Graphene.Rect }
    getNodeType(): RenderNodeType
    ref(): RenderNode
    serialize(): any
    unref(): void
    writeToFile(filename: string): boolean
    static name: string
    static new(child: RenderNode, transform: Transform): TransformNode
    constructor(child: RenderNode, transform: Transform)
    /* Static methods and pseudo-constructors */
    static new(child: RenderNode, transform: Transform): TransformNode
}
export abstract class BroadwayRendererClass {
    static name: string
}
export abstract class CairoRendererClass {
    static name: string
}
export class ColorStop {
    /* Fields of Gsk-4.0.Gsk.ColorStop */
    offset: number
    color: Gdk.RGBA
    static name: string
}
export abstract class GLRendererClass {
    static name: string
}
export abstract class GLShaderClass {
    /* Fields of Gsk-4.0.Gsk.GLShaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ParseLocation {
    /* Fields of Gsk-4.0.Gsk.ParseLocation */
    bytes: number
    chars: number
    lines: number
    lineBytes: number
    lineChars: number
    static name: string
}
export abstract class RendererClass {
    static name: string
}
export class RoundedRect {
    /* Fields of Gsk-4.0.Gsk.RoundedRect */
    bounds: Graphene.Rect
    corner: Graphene.Size[]
    /* Methods of Gsk-4.0.Gsk.RoundedRect */
    containsPoint(point: Graphene.Point): boolean
    containsRect(rect: Graphene.Rect): boolean
    init(bounds: Graphene.Rect, topLeft: Graphene.Size, topRight: Graphene.Size, bottomRight: Graphene.Size, bottomLeft: Graphene.Size): RoundedRect
    initCopy(src: RoundedRect): RoundedRect
    initFromRect(bounds: Graphene.Rect, radius: number): RoundedRect
    intersectsRect(rect: Graphene.Rect): boolean
    isRectilinear(): boolean
    normalize(): RoundedRect
    offset(dx: number, dy: number): RoundedRect
    shrink(top: number, right: number, bottom: number, left: number): RoundedRect
    static name: string
}
export class ShaderArgsBuilder {
    /* Methods of Gsk-4.0.Gsk.ShaderArgsBuilder */
    ref(): ShaderArgsBuilder
    setBool(idx: number, value: boolean): void
    setFloat(idx: number, value: number): void
    setInt(idx: number, value: number): void
    setUint(idx: number, value: number): void
    setVec2(idx: number, value: Graphene.Vec2): void
    setVec3(idx: number, value: Graphene.Vec3): void
    setVec4(idx: number, value: Graphene.Vec4): void
    toArgs(): any
    unref(): void
    static name: string
    static new(shader: GLShader, initialValues?: any | null): ShaderArgsBuilder
    constructor(shader: GLShader, initialValues?: any | null)
    /* Static methods and pseudo-constructors */
    static new(shader: GLShader, initialValues?: any | null): ShaderArgsBuilder
}
export class Shadow {
    /* Fields of Gsk-4.0.Gsk.Shadow */
    color: Gdk.RGBA
    dx: number
    dy: number
    radius: number
    static name: string
}
export class Transform {
    /* Methods of Gsk-4.0.Gsk.Transform */
    equal(second?: Transform | null): boolean
    getCategory(): TransformCategory
    invert(): Transform | null
    matrix(matrix: Graphene.Matrix): Transform
    perspective(depth: number): Transform
    print(string: GLib.String): void
    ref(): Transform
    rotate(angle: number): Transform
    rotate3d(angle: number, axis: Graphene.Vec3): Transform
    scale(factorX: number, factorY: number): Transform
    scale3d(factorX: number, factorY: number, factorZ: number): Transform
    skew(skewX: number, skewY: number): Transform
    to2d(): { outXx: number, outYx: number, outXy: number, outYy: number, outDx: number, outDy: number }
    to2dComponents(): { outSkewX: number, outSkewY: number, outScaleX: number, outScaleY: number, outAngle: number, outDx: number, outDy: number }
    toAffine(): { outScaleX: number, outScaleY: number, outDx: number, outDy: number }
    toMatrix(): { outMatrix: Graphene.Matrix }
    toString(): string
    toTranslate(): { outDx: number, outDy: number }
    transform(other?: Transform | null): Transform
    transformBounds(rect: Graphene.Rect): { outRect: Graphene.Rect }
    transformPoint(point: Graphene.Point): { outPoint: Graphene.Point }
    translate(point: Graphene.Point): Transform
    translate3d(point: Graphene.Point3D): Transform
    unref(): void
    static name: string
    static new(): Transform
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Transform
    static parse(string: string): { returnType: boolean, outTransform: Transform }
}
}