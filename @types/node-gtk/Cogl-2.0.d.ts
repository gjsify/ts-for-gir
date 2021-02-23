/**
 * Cogl-2.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GL } from './GL-1.0';

export declare namespace Cogl {

export enum AttributeType {
    BYTE,
    UNSIGNED_BYTE,
    SHORT,
    UNSIGNED_SHORT,
    FLOAT,
}
export enum BitmapError {
    FAILED,
    UNKNOWN_TYPE,
    CORRUPT_IMAGE,
}
export enum BlendStringError {
    PARSE_ERROR,
    ARGUMENT_PARSE_ERROR,
    INVALID_ERROR,
    GPU_UNSUPPORTED_ERROR,
}
export enum BufferError {
    BUFFER_ERROR_MAP,
}
export enum BufferUpdateHint {
    STATIC,
    DYNAMIC,
    STREAM,
}
export enum DepthTestFunction {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum Driver {
    ANY,
    NOP,
    GL,
    GL3,
    GLES1,
    GLES2,
    WEBGL,
}
export enum FeatureID {
    OGL_FEATURE_ID_TEXTURE_NPOT_BASIC,
    OGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP,
    OGL_FEATURE_ID_TEXTURE_NPOT_REPEAT,
    OGL_FEATURE_ID_TEXTURE_NPOT,
    OGL_FEATURE_ID_TEXTURE_RECTANGLE,
    OGL_FEATURE_ID_TEXTURE_3D,
    OGL_FEATURE_ID_GLSL,
    OGL_FEATURE_ID_ARBFP,
    OGL_FEATURE_ID_OFFSCREEN,
    OGL_FEATURE_ID_OFFSCREEN_MULTISAMPLE,
    OGL_FEATURE_ID_ONSCREEN_MULTIPLE,
    OGL_FEATURE_ID_UNSIGNED_INT_INDICES,
    OGL_FEATURE_ID_DEPTH_RANGE,
    OGL_FEATURE_ID_POINT_SPRITE,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_READ,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE,
    OGL_FEATURE_ID_MIRRORED_REPEAT,
    OGL_FEATURE_ID_SWAP_BUFFERS_EVENT,
    OGL_FEATURE_ID_GLES2_CONTEXT,
    OGL_FEATURE_ID_DEPTH_TEXTURE,
    OGL_FEATURE_ID_PRESENTATION_TIME,
    OGL_FEATURE_ID_FENCE,
    OGL_FEATURE_ID_PER_VERTEX_POINT_SIZE,
    OGL_FEATURE_ID_TEXTURE_RG,
    OGL_FEATURE_ID_BUFFER_AGE,
}
export enum FilterReturn {
    CONTINUE,
    REMOVE,
}
export enum FogMode {
    LINEAR,
    EXPONENTIAL,
    EXPONENTIAL_SQUARED,
}
export enum FrameEvent {
    SYNC,
    COMPLETE,
}
export enum FramebufferError {
    FRAMEBUFFER_ERROR_ALLOCATE,
}
export enum GLES2ContextError {
    UNSUPPORTED,
    DRIVER,
}
export enum IndicesType {
    BYTE,
    SHORT,
    INT,
}
export enum MaterialAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum MaterialFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
export enum MaterialLayerType {
    TEXTURE,
}
export enum MaterialWrapMode {
    REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
export enum PipelineAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum PipelineCullFaceMode {
    NONE,
    FRONT,
    BACK,
    BOTH,
}
export enum PipelineFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
export enum PipelineWrapMode {
    REPEAT,
    MIRRORED_REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
export enum PixelFormat {
    ANY,
    A_8,
    RGB_565,
    RGBA_4444,
    RGBA_5551,
    YUV,
    G_8,
    RG_88,
    RGB_888,
    BGR_888,
    RGBA_8888,
    BGRA_8888,
    ARGB_8888,
    ABGR_8888,
    RGBA_1010102,
    BGRA_1010102,
    ARGB_2101010,
    ABGR_2101010,
    RGBA_8888_PRE,
    BGRA_8888_PRE,
    ARGB_8888_PRE,
    ABGR_8888_PRE,
    RGBA_4444_PRE,
    RGBA_5551_PRE,
    RGBA_1010102_PRE,
    BGRA_1010102_PRE,
    ARGB_2101010_PRE,
    ABGR_2101010_PRE,
    DEPTH_16,
    DEPTH_32,
    DEPTH_24_STENCIL_8,
}
export enum PollFDEvent {
    IN,
    PRI,
    OUT,
    ERR,
    HUP,
    NVAL,
}
export enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
export enum ShaderType {
    VERTEX,
    FRAGMENT,
}
export enum SnippetHook {
    VERTEX,
    VERTEX_TRANSFORM,
    VERTEX_GLOBALS,
    POINT_SIZE,
    FRAGMENT,
    FRAGMENT_GLOBALS,
    TEXTURE_COORD_TRANSFORM,
    LAYER_FRAGMENT,
    TEXTURE_LOOKUP,
}
export enum StereoMode {
    BOTH,
    LEFT,
    RIGHT,
}
export enum SubpixelOrder {
    UNKNOWN,
    NONE,
    HORIZONTAL_RGB,
    HORIZONTAL_BGR,
    VERTICAL_RGB,
    VERTICAL_BGR,
}
export enum SystemError {
    COGL_SYSTEM_ERROR_UNSUPPORTED,
    COGL_SYSTEM_ERROR_NO_MEMORY,
}
export enum TextureComponents {
    A,
    RG,
    RGB,
    RGBA,
    DEPTH,
}
export enum TextureError {
    SIZE,
    FORMAT,
    BAD_PARAMETER,
    TYPE,
}
export enum TexturePixmapX11Error {
    TEXTURE_PIXMAP_X11_ERROR_X11,
}
export enum TexturePixmapX11ReportLevel {
    RAW_RECTANGLES,
    DELTA_RECTANGLES,
    BOUNDING_BOX,
    NON_EMPTY,
}
export enum TextureType {
    /* 2D (invalid, starts with a number) */
    /* 3D (invalid, starts with a number) */
    RECTANGLE,
}
export enum VerticesMode {
    POINTS,
    LINES,
    LINE_LOOP,
    LINE_STRIP,
    TRIANGLES,
    TRIANGLE_STRIP,
    TRIANGLE_FAN,
}
export enum Winding {
    CLOCKWISE,
    COUNTER_CLOCKWISE,
}
export enum WinsysFeature {
    MULTIPLE_ONSCREEN,
    SWAP_THROTTLE,
    VBLANK_COUNTER,
    VBLANK_WAIT,
    TEXTURE_FROM_PIXMAP,
    SWAP_BUFFERS_EVENT,
    SWAP_REGION,
    SWAP_REGION_THROTTLE,
    SWAP_REGION_SYNCHRONIZED,
    BUFFER_AGE,
    SYNC_AND_COMPLETE_EVENT,
    N_FEATURES,
}
export enum WinsysID {
    ANY,
    STUB,
    GLX,
    EGL_XLIB,
    EGL_NULL,
    EGL_GDL,
    EGL_WAYLAND,
    EGL_KMS,
    EGL_ANDROID,
    EGL_MIR,
    WGL,
    SDL,
}
export enum BufferAccess {
    READ,
    WRITE,
    READ_WRITE,
}
export enum BufferBit {
    COLOR,
    DEPTH,
    STENCIL,
}
export enum BufferMapHint {
    COGL_BUFFER_MAP_HINT_DISCARD,
    _RANGE,
}
export enum BufferTarget {
    WINDOW_BUFFER,
    OFFSCREEN_BUFFER,
}
export enum ColorMask {
    NONE,
    RED,
    GREEN,
    BLUE,
    ALPHA,
    ALL,
}
export enum FeatureFlags {
    TEXTURE_RECTANGLE,
    TEXTURE_NPOT,
    TEXTURE_YUV,
    TEXTURE_READ_PIXELS,
    SHADERS_GLSL,
    OFFSCREEN,
    OFFSCREEN_MULTISAMPLE,
    OFFSCREEN_BLIT,
    FOUR_CLIP_PLANES,
    STENCIL_BUFFER,
    VBOS,
    PBOS,
    UNSIGNED_INT_INDICES,
    DEPTH_RANGE,
    TEXTURE_NPOT_BASIC,
    TEXTURE_NPOT_MIPMAP,
    TEXTURE_NPOT_REPEAT,
    POINT_SPRITE,
    TEXTURE_3D,
    SHADERS_ARBFP,
    MAP_BUFFER_FOR_READ,
    MAP_BUFFER_FOR_WRITE,
    ONSCREEN_MULTIPLE,
    DEPTH_TEXTURE,
}
export enum ReadPixelsFlags {
    COLOR_BUFFER,
}
export enum RendererConstraint {
    USES_X11,
    USES_XLIB,
    USES_EGL,
    SUPPORTS_COGL_GLES2,
}
export enum TextureFlags {
    NONE,
    NO_AUTO_MIPMAP,
    NO_SLICING,
    NO_ATLAS,
}
export const AFIRST_BIT: number
export const A_BIT: number
export const BGR_BIT: number
export const DEPTH_BIT: number
export const PREMULT_BIT: number
export const STENCIL_BIT: number
export const TEXTURE_MAX_WASTE: number
export const VERSION_COMPONENT_BITS: number
export const VERSION_MAX_COMPONENT_VALUE: number
export function bitmapErrorQuark(): number
export function blendStringErrorQuark(): number
export function bufferGetSize(buffer: Buffer): number
export function bufferGetUpdateHint(buffer: Buffer): BufferUpdateHint
export function bufferMap(buffer: Buffer, access: BufferAccess, hints: BufferMapHint): object | null
export function bufferMapRange(buffer: Buffer, offset: number, size: number, access: BufferAccess, hints: BufferMapHint): object | null
export function bufferSetData(buffer: Buffer, offset: number, data: object | null, size: number): Bool
export function bufferSetUpdateHint(buffer: Buffer, hint: BufferUpdateHint): void
export function bufferUnmap(buffer: Buffer): void
export function colorEqual(v1?: object | null, v2?: object | null): Bool
export function colorInitFromHsl(hue: number, saturation: number, luminance: number): { color: Color }
export function debugMatrixEntryPrint(entry: MatrixEntry): void
export function debugMatrixPrint(matrix: Matrix): void
export function debugObjectForeachType(func: DebugObjectForeachTypeCallback): void
export function debugObjectPrintInstances(): void
export function errorCopy(error: GLib.Error): GLib.Error
export function errorFree(error: GLib.Error): void
export function errorMatches(error: GLib.Error, domain: number, code: number): Bool
export function eulerEqual(v1?: object | null, v2?: object | null): Bool
export function foreachFeature(context: Context, callback: FeatureCallback): void
export function framebufferErrorQuark(): number
export function getClockTime(context: Context): number
export function getDrawFramebuffer(): Framebuffer
export function getStaticIdentityQuaternion(): Quaternion
export function getStaticZeroQuaternion(): Quaternion
export function gles2TextureGetHandle(texture: Texture, handle: number, target: number): Bool
export function glibRendererSourceNew(renderer: Renderer, priority: number): GLib.Source
export function glibSourceNew(context: Context, priority: number): GLib.Source
export function gtypeMatrixGetType(): GObject.Type
export function handleGetType(): GObject.Type
export function handleRef(handle: Handle): Handle
export function handleUnref(handle: Handle): void
export function hasFeature(context: Context, feature: FeatureID): Bool
export function isAtlasTexture(object?: object | null): Bool
export function isAttribute(object?: object | null): Bool
export function isAttributeBuffer(object?: object | null): Bool
export function isBitmap(object?: object | null): Bool
export function isBuffer(object?: object | null): Bool
export function isContext(object?: object | null): Bool
export function isDisplay(object?: object | null): Bool
export function isFrameInfo(object?: object | null): Bool
export function isFramebuffer(object?: object | null): Bool
export function isGles2Context(object?: object | null): Bool
export function isIndexBuffer(object?: object | null): Bool
export function isIndices(object?: object | null): Bool
export function isMatrixStack(object?: object | null): Bool
export function isOnscreen(object?: object | null): Bool
export function isOnscreenTemplate(object?: object | null): Bool
export function isOutput(object?: object | null): Bool
export function isPipeline(object?: object | null): Bool
export function isPixelBuffer(object?: object | null): Bool
export function isPrimitive(object?: object | null): Bool
export function isPrimitiveTexture(object?: object | null): Bool
export function isRenderer(object?: object | null): Bool
export function isSnippet(object?: object | null): Bool
export function isSubTexture(object?: object | null): Bool
export function isSwapChain(object?: object | null): Bool
export function isTexture(object?: object | null): Bool
export function isTexture2d(object?: object | null): Bool
export function isTexture2dSliced(object?: object | null): Bool
export function isTexture3d(object?: object | null): Bool
export function isTexturePixmapX11(object?: object | null): Bool
export function isTextureRectangle(object?: object | null): Bool
export function kmsDisplayQueueModesReset(display: Display): void
export function kmsDisplaySetIgnoreCrtc(display: Display, id: number, ignore: Bool): void
export function kmsDisplaySetLayout(display: Display, width: number, height: number, crtcs: KmsCrtc, nCrtcs: number): Bool
export function kmsRendererGetGbm(renderer: Renderer): object | null
export function kmsRendererGetKmsFd(renderer: Renderer): number
export function kmsRendererSetKmsFd(renderer: Renderer, fd: number): void
export function matrixEqual(v1?: object | null, v2?: object | null): Bool
export function pollRendererDispatch(renderer: Renderer, pollFds: PollFD, nPollFds: number): void
export function pollRendererGetInfo(renderer: Renderer, pollFds: PollFD, nPollFds: number, timeout: number): number
export function popGles2Context(ctx: Context): void
export function pushGles2Context(ctx: Context, gles2Ctx: GLES2Context, readBuffer: Framebuffer, writeBuffer: Framebuffer): Bool
export function quaternionEqual(v1?: object | null, v2?: object | null): Bool
export function rendererErrorQuark(): number
export function textureErrorQuark(): number
export function vector3Add(result: number, a: number, b: number): void
export function vector3Copy(vector: number): number
export function vector3CrossProduct(result: number, u: number, v: number): void
export function vector3Distance(a: number, b: number): number
export function vector3DivideScalar(vector: number, scalar: number): void
export function vector3DotProduct(a: number, b: number): number
export function vector3Equal(v1?: object | null, v2?: object | null): Bool
export function vector3EqualWithEpsilon(vector0: number, vector1: number, epsilon: number): Bool
export function vector3Free(vector: number): void
export function vector3Init(vector: number, x: number, y: number, z: number): void
export function vector3InitZero(vector: number): void
export function vector3Invert(vector: number): void
export function vector3Magnitude(vector: number): number
export function vector3MultiplyScalar(vector: number, scalar: number): void
export function vector3Normalize(vector: number): void
export function vector3Subtract(result: number, a: number, b: number): void
export function waylandDisplaySetCompositorDisplay(display: Display, waylandDisplay?: object | null): void
export function waylandOnscreenGetShellSurface(onscreen: Onscreen): object | null
export function waylandOnscreenGetSurface(onscreen: Onscreen): object | null
export function waylandOnscreenResize(onscreen: Onscreen, width: number, height: number, offsetX: number, offsetY: number): void
export function waylandOnscreenSetForeignSurface(onscreen: Onscreen, surface?: object | null): void
export function waylandRendererGetDisplay(renderer: Renderer): object | null
export function waylandRendererSetEventDispatchEnabled(renderer: Renderer, enable: Bool): void
export function waylandRendererSetForeignDisplay(renderer: Renderer, display?: object | null): void
export function waylandTextureSetRegionFromShmBuffer(texture: Texture, srcX: number, srcY: number, width: number, height: number, shmBuffer: object | null, dstX: number, dstY: number, level: number): Bool
export function x11OnscreenGetVisualXid(onscreen: Onscreen): number
export function x11OnscreenGetWindowXid(onscreen: Onscreen): number
export interface DebugObjectForeachTypeCallback {
    (info: DebugObjectTypeInfo): void
}
export interface FeatureCallback {
    (feature: FeatureID): void
}
export interface FenceCallback {
    (fence: Fence): void
}
export interface FrameCallback {
    (onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void
}
export interface FuncPtr {
    (): void
}
export interface MetaTextureCallback {
    (subTexture: Texture, subTextureCoords: number, metaCoords: number): void
}
export interface OnscreenDirtyCallback {
    (onscreen: Onscreen, info: OnscreenDirtyInfo): void
}
export interface OnscreenResizeCallback {
    (onscreen: Onscreen, width: number, height: number): void
}
export interface OnscreenX11MaskCallback {
    (onscreen: Onscreen, eventMask: number): void
}
export interface OutputCallback {
    (output: Output): void
}
export interface PipelineLayerCallback {
    (pipeline: Pipeline, layerIndex: number): Bool
}
export interface PrimitiveAttributeCallback {
    (primitive: Primitive, attribute: Attribute): Bool
}
export interface SwapBuffersNotify {
    (framebuffer: Framebuffer): void
}
export class Framebuffer {
    /* Methods of Cogl-2.0.Cogl.Framebuffer */
    allocate(): Bool
    cancelFenceCallback(closure: FenceClosure): void
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discardBuffers(buffers: number): void
    drawAttributes(pipeline: Pipeline, mode: VerticesMode, firstVertex: number, nVertices: number, attributes: Attribute, nAttributes: number): void
    drawIndexedAttributes(pipeline: Pipeline, mode: VerticesMode, firstVertex: number, nVertices: number, indices: Indices, attributes: Attribute, nAttributes: number): void
    drawMultitexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
    drawPrimitive(pipeline: Pipeline, primitive: Primitive): void
    drawRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number): void
    drawRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    drawTexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, s1: number, t1: number, s2: number, t2: number): void
    drawTexturedRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    finish(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getAlphaBits(): number
    getBlueBits(): number
    getColorMask(): ColorMask
    getContext(): Context
    getDepthBits(): number
    getDepthTexture(): Texture
    getDepthTextureEnabled(): Bool
    getDepthWriteEnabled(): Bool
    getDitherEnabled(): Bool
    getGreenBits(): number
    getHeight(): number
    getIsStereo(): Bool
    getModelviewMatrix(): { matrix: Matrix }
    getProjectionMatrix(): { matrix: Matrix }
    getRedBits(): number
    getSamplesPerPixel(): number
    getStereoMode(): StereoMode
    getViewport4fv(): { viewport: number[] }
    getViewportHeight(): number
    getViewportWidth(): number
    getViewportX(): number
    getViewportY(): number
    getWidth(): number
    identityMatrix(): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    popClip(): void
    popMatrix(): void
    pushMatrix(): void
    pushPrimitiveClip(primitive: Primitive, boundsX1: number, boundsY1: number, boundsX2: number, boundsY2: number): void
    pushRectangleClip(x1: number, y1: number, x2: number, y2: number): void
    pushScissorClip(x: number, y: number, width: number, height: number): void
    readPixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool
    readPixelsIntoBitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool
    resolveSamples(): void
    resolveSamplesRegion(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Euler): void
    rotateQuaternion(quaternion: Quaternion): void
    scale(x: number, y: number, z: number): void
    setColorMask(colorMask: ColorMask): void
    setDepthTextureEnabled(enabled: Bool): void
    setDepthWriteEnabled(depthWriteEnabled: Bool): void
    setDitherEnabled(ditherEnabled: Bool): void
    setModelviewMatrix(matrix: Matrix): void
    setProjectionMatrix(matrix: Matrix): void
    setSamplesPerPixel(samplesPerPixel: number): void
    setStereoMode(stereoMode: StereoMode): void
    setViewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): number
}
export class Texture {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): { returnType: Bool, outGlHandle: number | null, outGlTarget: number | null }
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
}
export class AtlasTexture {
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bmp: Bitmap): AtlasTexture
    static newFromData(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): AtlasTexture
    static newFromFile(ctx: Context, filename: string): AtlasTexture
    static newWithSize(ctx: Context, width: number, height: number): AtlasTexture
}
export class Attribute {
    /* Methods of Cogl-2.0.Cogl.Attribute */
    getBuffer(): AttributeBuffer
    getNormalized(): Bool
    setBuffer(attributeBuffer: AttributeBuffer): void
    setNormalized(normalized: Bool): void
    static name: string
    static new(attributeBuffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute
    constructor(attributeBuffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType)
    /* Static methods and pseudo-constructors */
    static new(attributeBuffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute
    static newConst1f(context: Context, name: string, value: number): Attribute
    static newConst2f(context: Context, name: string, component0: number, component1: number): Attribute
    static newConst2fv(context: Context, name: string, value: number): Attribute
    static newConst2x2fv(context: Context, name: string, matrix2x2: number, transpose: Bool): Attribute
    static newConst3f(context: Context, name: string, component0: number, component1: number, component2: number): Attribute
    static newConst3fv(context: Context, name: string, value: number): Attribute
    static newConst3x3fv(context: Context, name: string, matrix3x3: number, transpose: Bool): Attribute
    static newConst4f(context: Context, name: string, component0: number, component1: number, component2: number, component3: number): Attribute
    static newConst4fv(context: Context, name: string, value: number): Attribute
    static newConst4x4fv(context: Context, name: string, matrix4x4: number, transpose: Bool): Attribute
}
export class AttributeBuffer {
    static name: string
    /* Static methods and pseudo-constructors */
    static newWithSize(context: Context, bytes: number): AttributeBuffer
}
export class Bitmap {
    /* Methods of Cogl-2.0.Cogl.Bitmap */
    getBuffer(): PixelBuffer
    getFormat(): PixelFormat
    getHeight(): number
    getRowstride(): number
    getWidth(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static newForData(context: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bitmap
    static newFromBuffer(buffer: Buffer, format: PixelFormat, width: number, height: number, rowstride: number, offset: number): Bitmap
    static newFromFile(filename: string): Bitmap
    static newWithSize(context: Context, width: number, height: number, format: PixelFormat): Bitmap
    static getSizeFromFile(filename: string): { returnType: Bool, width: number, height: number }
}
export class Context {
    /* Methods of Cogl-2.0.Cogl.Context */
    getDisplay(): Display
    getRenderer(): Renderer
    static name: string
    static new(display?: Display | null): Context
    constructor(display?: Display | null)
    /* Static methods and pseudo-constructors */
    static new(display?: Display | null): Context
}
export class Display {
    /* Methods of Cogl-2.0.Cogl.Display */
    getRenderer(): Renderer
    setOnscreenTemplate(onscreenTemplate: OnscreenTemplate): void
    setup(): Bool
    static name: string
    static new(renderer: Renderer, onscreenTemplate: OnscreenTemplate): Display
    constructor(renderer: Renderer, onscreenTemplate: OnscreenTemplate)
    /* Static methods and pseudo-constructors */
    static new(renderer: Renderer, onscreenTemplate: OnscreenTemplate): Display
}
export class Fixed {
    static name: string
}
export class FrameInfo {
    /* Methods of Cogl-2.0.Cogl.FrameInfo */
    getFrameCounter(): number
    getOutput(): Output
    getPresentationTime(): number
    getRefreshRate(): number
    static name: string
}
export class GLES2Context {
    /* Methods of Cogl-2.0.Cogl.GLES2Context */
    getVtable(): GLES2Vtable
    static name: string
    static new(ctx: Context): GLES2Context
    constructor(ctx: Context)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): GLES2Context
}
export class IndexBuffer {
    static name: string
    static new(context: Context, bytes: number): IndexBuffer
    constructor(context: Context, bytes: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, bytes: number): IndexBuffer
}
export class Indices {
    /* Methods of Cogl-2.0.Cogl.Indices */
    getOffset(): number
    getType(): IndicesType
    setOffset(offset: number): void
    static name: string
    static new(context: Context, type: IndicesType, indicesData: object | null, nIndices: number): Indices
    constructor(context: Context, type: IndicesType, indicesData: object | null, nIndices: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, type: IndicesType, indicesData: object | null, nIndices: number): Indices
    static newForBuffer(type: IndicesType, buffer: IndexBuffer, offset: number): Indices
}
export class MatrixStack {
    /* Methods of Cogl-2.0.Cogl.MatrixStack */
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    get(): { returnType: Matrix, matrix: Matrix }
    getEntry(): MatrixEntry
    getInverse(): { returnType: Bool, inverse: Matrix }
    loadIdentity(): void
    multiply(matrix: Matrix): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    pop(): void
    push(): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Euler): void
    rotateQuaternion(quaternion: Quaternion): void
    scale(x: number, y: number, z: number): void
    set(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    static new(ctx: Context): MatrixStack
    constructor(ctx: Context)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): MatrixStack
}
export class Object {
    static name: string
    /* Static methods and pseudo-constructors */
    static valueGetObject(value: any): object | null
    static valueSetObject(value: any, object?: object | null): void
}
export class Onscreen {
    /* Methods of Cogl-2.0.Cogl.Onscreen */
    addDirtyCallback(callback: OnscreenDirtyCallback, destroy?: UserDataDestroyCallback | null): OnscreenDirtyClosure
    addFrameCallback(callback: FrameCallback, destroy?: UserDataDestroyCallback | null): FrameClosure
    addResizeCallback(callback: OnscreenResizeCallback, destroy?: UserDataDestroyCallback | null): OnscreenResizeClosure
    addSwapBuffersCallback(callback: SwapBuffersNotify): number
    getBufferAge(): number
    getFrameCounter(): number
    getResizable(): Bool
    hide(): void
    removeDirtyCallback(closure: OnscreenDirtyClosure): void
    removeFrameCallback(closure: FrameClosure): void
    removeResizeCallback(closure: OnscreenResizeClosure): void
    removeSwapBuffersCallback(id: number): void
    setResizable(resizable: Bool): void
    setSwapThrottled(throttled: Bool): void
    show(): void
    swapBuffers(): void
    swapBuffersWithDamage(rectangles: number, nRectangles: number): void
    swapRegion(rectangles: number, nRectangles: number): void
    /* Methods of Cogl-2.0.Cogl.Framebuffer */
    allocate(): Bool
    cancelFenceCallback(closure: FenceClosure): void
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discardBuffers(buffers: number): void
    drawAttributes(pipeline: Pipeline, mode: VerticesMode, firstVertex: number, nVertices: number, attributes: Attribute, nAttributes: number): void
    drawIndexedAttributes(pipeline: Pipeline, mode: VerticesMode, firstVertex: number, nVertices: number, indices: Indices, attributes: Attribute, nAttributes: number): void
    drawMultitexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
    drawPrimitive(pipeline: Pipeline, primitive: Primitive): void
    drawRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number): void
    drawRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    drawTexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, s1: number, t1: number, s2: number, t2: number): void
    drawTexturedRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    finish(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getAlphaBits(): number
    getBlueBits(): number
    getColorMask(): ColorMask
    getContext(): Context
    getDepthBits(): number
    getDepthTexture(): Texture
    getDepthTextureEnabled(): Bool
    getDepthWriteEnabled(): Bool
    getDitherEnabled(): Bool
    getGreenBits(): number
    getHeight(): number
    getIsStereo(): Bool
    getModelviewMatrix(): { matrix: Matrix }
    getProjectionMatrix(): { matrix: Matrix }
    getRedBits(): number
    getSamplesPerPixel(): number
    getStereoMode(): StereoMode
    getViewport4fv(): { viewport: number[] }
    getViewportHeight(): number
    getViewportWidth(): number
    getViewportX(): number
    getViewportY(): number
    getWidth(): number
    identityMatrix(): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    popClip(): void
    popMatrix(): void
    pushMatrix(): void
    pushPrimitiveClip(primitive: Primitive, boundsX1: number, boundsY1: number, boundsX2: number, boundsY2: number): void
    pushRectangleClip(x1: number, y1: number, x2: number, y2: number): void
    pushScissorClip(x: number, y: number, width: number, height: number): void
    readPixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool
    readPixelsIntoBitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool
    resolveSamples(): void
    resolveSamplesRegion(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Euler): void
    rotateQuaternion(quaternion: Quaternion): void
    scale(x: number, y: number, z: number): void
    setColorMask(colorMask: ColorMask): void
    setDepthTextureEnabled(enabled: Bool): void
    setDepthWriteEnabled(depthWriteEnabled: Bool): void
    setDitherEnabled(ditherEnabled: Bool): void
    setModelviewMatrix(matrix: Matrix): void
    setProjectionMatrix(matrix: Matrix): void
    setSamplesPerPixel(samplesPerPixel: number): void
    setStereoMode(stereoMode: StereoMode): void
    setViewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    static new(context: Context, width: number, height: number): Onscreen
    constructor(context: Context, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, width: number, height: number): Onscreen
    static errorQuark(): number
}
export class OnscreenTemplate {
    /* Methods of Cogl-2.0.Cogl.OnscreenTemplate */
    setSamplesPerPixel(n: number): void
    setStereoEnabled(enabled: Bool): void
    setSwapThrottled(throttled: Bool): void
    static name: string
    static new(swapChain: SwapChain): OnscreenTemplate
    constructor(swapChain: SwapChain)
    /* Static methods and pseudo-constructors */
    static new(swapChain: SwapChain): OnscreenTemplate
}
export class Output {
    /* Methods of Cogl-2.0.Cogl.Output */
    getHeight(): number
    getMmHeight(): number
    getMmWidth(): number
    getRefreshRate(): number
    getSubpixelOrder(): SubpixelOrder
    getWidth(): number
    getX(): number
    getY(): number
    static name: string
}
export class Pipeline {
    /* Methods of Cogl-2.0.Cogl.Pipeline */
    addLayerSnippet(layer: number, snippet: Snippet): void
    addSnippet(snippet: Snippet): void
    copy(): Pipeline
    foreachLayer(callback: PipelineLayerCallback): void
    getAlphaTestFunction(): PipelineAlphaFunc
    getAlphaTestReference(): number
    getAmbient(ambient: Color): void
    getColor(): { color: Color }
    getColorMask(): ColorMask
    getCullFaceMode(): PipelineCullFaceMode
    getDepthState(): { stateOut: DepthState }
    getDiffuse(diffuse: Color): void
    getEmission(emission: Color): void
    getFrontFaceWinding(): Winding
    getLayerMagFilter(layerIndex: number): PipelineFilter
    getLayerMinFilter(layerIndex: number): PipelineFilter
    getLayerPointSpriteCoordsEnabled(layerIndex: number): Bool
    getLayerTexture(layerIndex: number): Texture
    getLayerWrapModeP(layerIndex: number): PipelineWrapMode
    getLayerWrapModeS(layerIndex: number): PipelineWrapMode
    getLayerWrapModeT(layerIndex: number): PipelineWrapMode
    getNLayers(): number
    getPerVertexPointSize(): Bool
    getPointSize(): number
    getShininess(): number
    getSpecular(specular: Color): void
    getUniformLocation(uniformName: string): number
    getUserProgram(): Handle
    removeLayer(layerIndex: number): void
    setAlphaTestFunction(alphaFunc: PipelineAlphaFunc, alphaReference: number): void
    setAmbient(ambient: Color): void
    setAmbientAndDiffuse(color: Color): void
    setBlend(blendString: string): Bool
    setBlendConstant(constantColor: Color): void
    setColor(color: Color): void
    setColor4f(red: number, green: number, blue: number, alpha: number): void
    setColor4ub(red: number, green: number, blue: number, alpha: number): void
    setColorMask(colorMask: ColorMask): void
    setCullFaceMode(cullFaceMode: PipelineCullFaceMode): void
    setDepthState(state: DepthState): Bool
    setDiffuse(diffuse: Color): void
    setEmission(emission: Color): void
    setFrontFaceWinding(frontWinding: Winding): void
    setLayerCombine(layerIndex: number, blendString: string): Bool
    setLayerCombineConstant(layerIndex: number, constant: Color): void
    setLayerFilters(layerIndex: number, minFilter: PipelineFilter, magFilter: PipelineFilter): void
    setLayerMatrix(layerIndex: number, matrix: Matrix): void
    setLayerNullTexture(layerIndex: number, textureType: TextureType): void
    setLayerPointSpriteCoordsEnabled(layerIndex: number, enable: Bool): Bool
    setLayerTexture(layerIndex: number, texture: Texture): void
    setLayerWrapMode(layerIndex: number, mode: PipelineWrapMode): void
    setLayerWrapModeP(layerIndex: number, mode: PipelineWrapMode): void
    setLayerWrapModeS(layerIndex: number, mode: PipelineWrapMode): void
    setLayerWrapModeT(layerIndex: number, mode: PipelineWrapMode): void
    setPerVertexPointSize(enable: Bool): Bool
    setPointSize(pointSize: number): void
    setShininess(shininess: number): void
    setSpecular(specular: Color): void
    setUniform1f(uniformLocation: number, value: number): void
    setUniform1i(uniformLocation: number, value: number): void
    setUniformFloat(uniformLocation: number, nComponents: number, count: number, value: number): void
    setUniformInt(uniformLocation: number, nComponents: number, count: number, value: number): void
    setUniformMatrix(uniformLocation: number, dimensions: number, count: number, transpose: Bool, value: number): void
    setUserProgram(program: Handle): void
    static name: string
    static new(context: Context): Pipeline
    constructor(context: Context)
    /* Static methods and pseudo-constructors */
    static new(context: Context): Pipeline
}
export class PixelBuffer {
    static name: string
    static new(context: Context, size: number, data?: object | null): PixelBuffer
    constructor(context: Context, size: number, data?: object | null)
    /* Static methods and pseudo-constructors */
    static new(context: Context, size: number, data?: object | null): PixelBuffer
}
export class Primitive {
    /* Methods of Cogl-2.0.Cogl.Primitive */
    copy(): Primitive
    draw(framebuffer: Framebuffer, pipeline: Pipeline): void
    foreachAttribute(callback: PrimitiveAttributeCallback): void
    getFirstVertex(): number
    getIndices(): Indices
    getMode(): VerticesMode
    getNVertices(): number
    setAttributes(attributes: Attribute, nAttributes: number): void
    setFirstVertex(firstVertex: number): void
    setIndices(indices: Indices, nIndices: number): void
    setMode(mode: VerticesMode): void
    setNVertices(nVertices: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newP2(context: Context, mode: VerticesMode, data: VertexP2[]): Primitive
    static newP2c4(context: Context, mode: VerticesMode, data: VertexP2C4[]): Primitive
    static newP2t2(context: Context, mode: VerticesMode, data: VertexP2T2[]): Primitive
    static newP2t2c4(context: Context, mode: VerticesMode, data: VertexP2T2C4[]): Primitive
    static newP3(context: Context, mode: VerticesMode, data: VertexP3[]): Primitive
    static newP3c4(context: Context, mode: VerticesMode, data: VertexP3C4[]): Primitive
    static newP3t2(context: Context, mode: VerticesMode, data: VertexP3T2[]): Primitive
    static newP3t2c4(context: Context, mode: VerticesMode, data: VertexP3T2C4[]): Primitive
    static newWithAttributes(mode: VerticesMode, nVertices: number, attributes: Attribute, nAttributes: number): Primitive
    static textureSetAutoMipmap(primitiveTexture: PrimitiveTexture, value: Bool): void
}
export class Renderer {
    /* Methods of Cogl-2.0.Cogl.Renderer */
    addConstraint(constraint: RendererConstraint): void
    checkOnscreenTemplate(onscreenTemplate: OnscreenTemplate): Bool
    connect(): Bool
    foreachOutput(callback: OutputCallback): void
    getDriver(): Driver
    getNFragmentTextureUnits(): number
    getWinsysId(): WinsysID
    removeConstraint(constraint: RendererConstraint): void
    setDriver(driver: Driver): void
    setWinsysId(winsysId: WinsysID): void
    static name: string
    static new(): Renderer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Renderer
}
export class Snippet {
    /* Methods of Cogl-2.0.Cogl.Snippet */
    getDeclarations(): string
    getHook(): SnippetHook
    getPost(): string
    getPre(): string
    getReplace(): string
    setDeclarations(declarations: string): void
    setPost(post: string): void
    setPre(pre: string): void
    setReplace(replace: string): void
    static name: string
    static new(hook: SnippetHook, declarations: string, post: string): Snippet
    constructor(hook: SnippetHook, declarations: string, post: string)
    /* Static methods and pseudo-constructors */
    static new(hook: SnippetHook, declarations: string, post: string): Snippet
}
export class SubTexture {
    /* Methods of Cogl-2.0.Cogl.SubTexture */
    getParent(): Texture
    static name: string
    static new(ctx: Context, parentTexture: Texture, subX: number, subY: number, subWidth: number, subHeight: number): SubTexture
    constructor(ctx: Context, parentTexture: Texture, subX: number, subY: number, subWidth: number, subHeight: number)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context, parentTexture: Texture, subX: number, subY: number, subWidth: number, subHeight: number): SubTexture
}
export class SwapChain {
    /* Methods of Cogl-2.0.Cogl.SwapChain */
    setHasAlpha(hasAlpha: Bool): void
    setLength(length: number): void
    static name: string
    static new(): SwapChain
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SwapChain
}
export class Texture2D {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): { returnType: Bool, outGlHandle: number | null, outGlTarget: number | null }
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static glNewFromForeign(ctx: Context, glHandle: number, width: number, height: number, format: PixelFormat): Texture2D
    static newFromBitmap(bitmap: Bitmap): Texture2D
    static newFromData(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Texture2D
    static newFromFile(ctx: Context, filename: string): Texture2D
    static newWithSize(ctx: Context, width: number, height: number): Texture2D
}
export class Texture2DSliced {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): { returnType: Bool, outGlHandle: number | null, outGlTarget: number | null }
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bmp: Bitmap, maxWaste: number): Texture2DSliced
    static newFromData(ctx: Context, width: number, height: number, maxWaste: number, format: PixelFormat, rowstride: number, data: number): Texture2DSliced
    static newFromFile(ctx: Context, filename: string, maxWaste: number): Texture2DSliced
    static newWithSize(ctx: Context, width: number, height: number, maxWaste: number): Texture2DSliced
}
export class Texture3D {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): { returnType: Bool, outGlHandle: number | null, outGlTarget: number | null }
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bitmap: Bitmap, height: number, depth: number): Texture3D
    static newFromData(context: Context, width: number, height: number, depth: number, format: PixelFormat, rowstride: number, imageStride: number, data: number): Texture3D
    static newWithSize(context: Context, width: number, height: number, depth: number): Texture3D
}
export class TexturePixmapX11 {
    /* Methods of Cogl-2.0.Cogl.TexturePixmapX11 */
    isUsingTfpExtension(): Bool
    setDamageObject(damage: number, reportLevel: TexturePixmapX11ReportLevel): void
    updateArea(x: number, y: number, width: number, height: number): void
    static name: string
    static new(context: Context, pixmap: number, automaticUpdates: Bool): TexturePixmapX11
    constructor(context: Context, pixmap: number, automaticUpdates: Bool)
    /* Static methods and pseudo-constructors */
    static new(context: Context, pixmap: number, automaticUpdates: Bool): TexturePixmapX11
    static newLeft(context: Context, pixmap: number, automaticUpdates: Bool): TexturePixmapX11
    static errorQuark(): number
}
export class TextureRectangle {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): { returnType: Bool, outGlHandle: number | null, outGlTarget: number | null }
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bitmap: Bitmap): TextureRectangle
    static newFromForeign(ctx: Context, glHandle: number, width: number, height: number, format: PixelFormat): TextureRectangle
    static newWithSize(ctx: Context, width: number, height: number): TextureRectangle
}
export class Color {
    /* Methods of Cogl-2.0.Cogl.Color */
    copy(): Color
    free(): void
    getAlpha(): number
    getAlphaByte(): number
    getAlphaFloat(): number
    getBlue(): number
    getBlueByte(): number
    getBlueFloat(): number
    getGreen(): number
    getGreenByte(): number
    getGreenFloat(): number
    getRed(): number
    getRedByte(): number
    getRedFloat(): number
    initFrom4f(red: number, green: number, blue: number, alpha: number): void
    initFrom4fv(colorArray: number): void
    initFrom4ub(red: number, green: number, blue: number, alpha: number): void
    premultiply(): void
    setAlpha(alpha: number): void
    setAlphaByte(alpha: number): void
    setAlphaFloat(alpha: number): void
    setBlue(blue: number): void
    setBlueByte(blue: number): void
    setBlueFloat(blue: number): void
    setFrom4f(red: number, green: number, blue: number, alpha: number): void
    setFrom4ub(red: number, green: number, blue: number, alpha: number): void
    setGreen(green: number): void
    setGreenByte(green: number): void
    setGreenFloat(green: number): void
    setRed(red: number): void
    setRedByte(red: number): void
    setRedFloat(red: number): void
    toHsl(): { hue: number, saturation: number, luminance: number }
    unpremultiply(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
    static equal(v1?: object | null, v2?: object | null): Bool
    static initFromHsl(hue: number, saturation: number, luminance: number): { color: Color }
}
export class DebugObjectTypeInfo {
    /* Fields of Cogl-2.0.Cogl.DebugObjectTypeInfo */
    name: string
    instanceCount: number
    static name: string
}
export class DepthState {
    /* Methods of Cogl-2.0.Cogl.DepthState */
    getRange(nearVal: number, farVal: number): void
    getTestEnabled(): Bool
    getTestFunction(): DepthTestFunction
    getWriteEnabled(): Bool
    init(): void
    setRange(nearVal: number, farVal: number): void
    setTestEnabled(enable: Bool): void
    setTestFunction(function_: DepthTestFunction): void
    setWriteEnabled(enable: Bool): void
    static name: string
}
export class Euler {
    /* Fields of Cogl-2.0.Cogl.Euler */
    heading: number
    pitch: number
    roll: number
    /* Methods of Cogl-2.0.Cogl.Euler */
    copy(): Euler
    free(): void
    init(heading: number, pitch: number, roll: number): void
    initFromMatrix(matrix: Matrix): void
    initFromQuaternion(quaternion: Quaternion): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
export class Fence {
    static name: string
}
export class FenceClosure {
    /* Methods of Cogl-2.0.Cogl.FenceClosure */
    getUserData(): object | null
    static name: string
}
export class FrameClosure {
    static name: string
}
export class GLES2Vtable {
    /* Fields of Cogl-2.0.Cogl.GLES2Vtable */
    glBindTexture: any
    glBlendFunc: (sfactor: any, dfactor: any) => void
    glClear: any
    glClearColor: any
    glClearStencil: any
    glColorMask: (red: any, green: any, blue: any, alpha: any) => void
    glCopyTexSubImage2D: any
    glDeleteTextures: any
    glDepthFunc: (func: any) => void
    glDepthMask: (flag: any) => void
    glDisable: (cap: any) => void
    glDrawArrays: any
    glDrawElements: any
    glEnable: (cap: any) => void
    glFinish: () => void
    glFlush: () => void
    glFrontFace: (mode: any) => void
    glCullFace: (mode: any) => void
    glGenTextures: any
    glGetIntegerv: any
    glGetBooleanv: (pname: any, params: any) => void
    glGetFloatv: any
    glHint: (target: any, mode: any) => void
    glPixelStorei: any
    glReadPixels: any
    glScissor: any
    glStencilFunc: any
    glStencilMask: any
    glStencilOp: (fail: any, zfail: any, zpass: any) => void
    glTexImage2D: any
    glTexParameterf: any
    glTexParameterfv: any
    glTexParameteri: any
    glTexParameteriv: any
    glGetTexParameterfv: any
    glGetTexParameteriv: any
    glTexSubImage2D: any
    glCopyTexImage2D: any
    glViewport: any
    glLineWidth: any
    glPolygonOffset: any
    glDepthRangef: any
    glClearDepthf: any
    glCompressedTexImage2D: any
    glCompressedTexSubImage2D: any
    glSampleCoverage: any
    glGetBufferParameteriv: any
    glGenBuffers: any
    glBindBuffer: any
    glBufferData: any
    glBufferSubData: any
    glDeleteBuffers: any
    glActiveTexture: (texture: any) => void
    glGenRenderbuffers: any
    glDeleteRenderbuffers: any
    glBindRenderbuffer: any
    glRenderbufferStorage: any
    glGenFramebuffers: any
    glBindFramebuffer: any
    glFramebufferTexture2D: any
    glFramebufferRenderbuffer: any
    glDeleteFramebuffers: any
    glGenerateMipmap: (target: any) => void
    glGetFramebufferAttachmentParameteriv: any
    glGetRenderbufferParameteriv: any
    glBlendEquation: (mode: any) => void
    glBlendColor: any
    glBlendFuncSeparate: (srcRGB: any, dstRGB: any, srcAlpha: any, dstAlpha: any) => void
    glBlendEquationSeparate: (modeRGB: any, modeAlpha: any) => void
    glReleaseShaderCompiler: () => void
    glGetShaderPrecisionFormat: any
    glShaderBinary: any
    glStencilFuncSeparate: any
    glStencilMaskSeparate: any
    glStencilOpSeparate: (face: any, fail: any, zfail: any, zpass: any) => void
    glDeleteShader: any
    glAttachShader: any
    glUseProgram: any
    glDeleteProgram: any
    glGetShaderInfoLog: any
    glGetProgramInfoLog: any
    glGetShaderiv: any
    glGetProgramiv: any
    glDetachShader: any
    glGetAttachedShaders: any
    glShaderSource: any
    glCompileShader: any
    glLinkProgram: any
    glUniform1f: any
    glUniform2f: any
    glUniform3f: any
    glUniform4f: any
    glUniform1fv: any
    glUniform2fv: any
    glUniform3fv: any
    glUniform4fv: any
    glUniform1i: any
    glUniform2i: any
    glUniform3i: any
    glUniform4i: any
    glUniform1iv: any
    glUniform2iv: any
    glUniform3iv: any
    glUniform4iv: any
    glUniformMatrix2fv: any
    glUniformMatrix3fv: any
    glUniformMatrix4fv: any
    glGetUniformfv: any
    glGetUniformiv: any
    glValidateProgram: any
    glVertexAttribPointer: any
    glEnableVertexAttribArray: any
    glDisableVertexAttribArray: any
    glVertexAttrib1f: any
    glVertexAttrib1fv: any
    glVertexAttrib2f: any
    glVertexAttrib2fv: any
    glVertexAttrib3f: any
    glVertexAttrib3fv: any
    glVertexAttrib4f: any
    glVertexAttrib4fv: any
    glGetVertexAttribfv: any
    glGetVertexAttribiv: any
    glGetVertexAttribPointerv: any
    static name: string
}
export class GtypeClass {
    /* Fields of Cogl-2.0.Cogl.GtypeClass */
    baseClass: GObject.TypeClass
    dummy: number
    static name: string
}
export class GtypeObject {
    /* Fields of Cogl-2.0.Cogl.GtypeObject */
    parentInstance: GObject.TypeInstance
    dummy: number
    static name: string
}
export class KmsCrtc {
    /* Fields of Cogl-2.0.Cogl.KmsCrtc */
    id: number
    x: number
    y: number
    connectors: number
    count: number
    ignore: Bool
    static name: string
}
export class Matrix {
    /* Fields of Cogl-2.0.Cogl.Matrix */
    xx: number
    yx: number
    zx: number
    wx: number
    xy: number
    yy: number
    zy: number
    wy: number
    xz: number
    yz: number
    zz: number
    wz: number
    xw: number
    yw: number
    zw: number
    ww: number
    /* Methods of Cogl-2.0.Cogl.Matrix */
    copy(): Matrix
    free(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getArray(): number
    getInverse(): { returnType: Bool, inverse: Matrix }
    initFromArray(array: number): void
    initFromEuler(euler: Euler): void
    initFromQuaternion(quaternion: Quaternion): void
    initIdentity(): void
    initTranslation(tx: number, ty: number, tz: number): void
    isIdentity(): Bool
    lookAt(eyePositionX: number, eyePositionY: number, eyePositionZ: number, objectX: number, objectY: number, objectZ: number, worldUpX: number, worldUpY: number, worldUpZ: number): void
    multiply(a: Matrix, b: Matrix): void
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    projectPoints(nComponents: number, strideIn: number, pointsIn: object | null, strideOut: number, pointsOut: object | null, nPoints: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Euler): void
    rotateQuaternion(quaternion: Quaternion): void
    scale(sx: number, sy: number, sz: number): void
    transformPoint(x: number, y: number, z: number, w: number): { x: number, y: number, z: number, w: number }
    transformPoints(nComponents: number, strideIn: number, pointsIn: object | null, strideOut: number, pointsOut: object | null, nPoints: number): void
    translate(x: number, y: number, z: number): void
    transpose(): void
    view2dInFrustum(left: number, right: number, bottom: number, top: number, zNear: number, z2d: number, width2d: number, height2d: number): void
    view2dInPerspective(fovY: number, aspect: number, zNear: number, z2d: number, width2d: number, height2d: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
export class MatrixEntry {
    /* Methods of Cogl-2.0.Cogl.MatrixEntry */
    calculateTranslation(entry1: MatrixEntry): { returnType: Bool, x: number, y: number, z: number }
    equal(entry1: MatrixEntry): Bool
    get(): { returnType: Matrix, matrix: Matrix }
    isIdentity(): Bool
    ref(): MatrixEntry
    unref(): void
    static name: string
}
export class OnscreenDirtyClosure {
    static name: string
}
export class OnscreenDirtyInfo {
    /* Fields of Cogl-2.0.Cogl.OnscreenDirtyInfo */
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export class OnscreenResizeClosure {
    static name: string
}
export class PollFD {
    /* Fields of Cogl-2.0.Cogl.PollFD */
    fd: number
    static name: string
}
export class Quaternion {
    /* Fields of Cogl-2.0.Cogl.Quaternion */
    w: number
    x: number
    y: number
    z: number
    /* Methods of Cogl-2.0.Cogl.Quaternion */
    copy(): Quaternion
    dotProduct(b: Quaternion): number
    free(): void
    getRotationAngle(): number
    getRotationAxis(): { vector3: number }
    init(angle: number, x: number, y: number, z: number): void
    initFromAngleVector(angle: number, axis3f: number): void
    initFromArray(array: number): void
    initFromEuler(euler: Euler): void
    initFromMatrix(matrix: Matrix): void
    initFromQuaternion(src: Quaternion): void
    initFromXRotation(angle: number): void
    initFromYRotation(angle: number): void
    initFromZRotation(angle: number): void
    initIdentity(): void
    invert(): void
    multiply(left: Quaternion, right: Quaternion): void
    nlerp(a: Quaternion, b: Quaternion, t: number): void
    normalize(): void
    pow(exponent: number): void
    slerp(a: Quaternion, b: Quaternion, t: number): void
    squad(prev: Quaternion, a: Quaternion, b: Quaternion, next: Quaternion, t: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
export class TextureVertex {
    /* Fields of Cogl-2.0.Cogl.TextureVertex */
    x: number
    y: number
    z: number
    tx: number
    ty: number
    color: Color
    static name: string
}
export class UserDataKey {
    /* Fields of Cogl-2.0.Cogl.UserDataKey */
    unused: number
    static name: string
}
export class VertexP2 {
    /* Fields of Cogl-2.0.Cogl.VertexP2 */
    x: number
    y: number
    static name: string
}
export class VertexP2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP2C4 */
    x: number
    y: number
    r: number
    g: number
    b: number
    a: number
    static name: string
}
export class VertexP2T2 {
    /* Fields of Cogl-2.0.Cogl.VertexP2T2 */
    x: number
    y: number
    s: number
    t: number
    static name: string
}
export class VertexP2T2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP2T2C4 */
    x: number
    y: number
    s: number
    t: number
    r: number
    g: number
    b: number
    a: number
    static name: string
}
export class VertexP3 {
    /* Fields of Cogl-2.0.Cogl.VertexP3 */
    x: number
    y: number
    z: number
    static name: string
}
export class VertexP3C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP3C4 */
    x: number
    y: number
    z: number
    r: number
    g: number
    b: number
    a: number
    static name: string
}
export class VertexP3T2 {
    /* Fields of Cogl-2.0.Cogl.VertexP3T2 */
    x: number
    y: number
    z: number
    s: number
    t: number
    static name: string
}
export class VertexP3T2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP3T2C4 */
    x: number
    y: number
    z: number
    s: number
    t: number
    r: number
    g: number
    b: number
    a: number
    static name: string
}
export class _ColorSizeCheck {
    /* Fields of Cogl-2.0.Cogl._ColorSizeCheck */
    compileTimeAssertCoglColorSize: number[]
    static name: string
}
export class _EulerSizeCheck {
    /* Fields of Cogl-2.0.Cogl._EulerSizeCheck */
    compileTimeAssertCoglEulerSize: number[]
    static name: string
}
export class _MatrixSizeCheck {
    /* Fields of Cogl-2.0.Cogl._MatrixSizeCheck */
    compileTimeAssertCoglMatrixSize: number[]
    static name: string
}
export class _QuaternionSizeCheck {
    /* Fields of Cogl-2.0.Cogl._QuaternionSizeCheck */
    compileTimeAssertCoglQuaternionSize: number[]
    static name: string
}
export class _TextureVertexSizeCheck {
    /* Fields of Cogl-2.0.Cogl._TextureVertexSizeCheck */
    compileTimeAssertCoglTextureVertexSize: number[]
    static name: string
}
export type Angle = number
export type Bool = number
export type Buffer = void
export type Handle = object
export type MetaTexture = void
export type PrimitiveTexture = void
export type UserDataDestroyCallback = GLib.DestroyNotify
}