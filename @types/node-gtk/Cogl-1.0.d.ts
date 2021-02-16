/**
 * Cogl-1.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />

declare namespace Cogl {

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
export enum FilterReturn {
    CONTINUE,
    REMOVE,
}
export enum FogMode {
    LINEAR,
    EXPONENTIAL,
    EXPONENTIAL_SQUARED,
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
export enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
export enum ShaderType {
    VERTEX,
    FRAGMENT,
}
export enum StereoMode {
    BOTH,
    LEFT,
    RIGHT,
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
export enum BufferBit {
    COLOR,
    DEPTH,
    STENCIL,
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
export const FIXED_0_5: number
export const FIXED_1: number
export const FIXED_2_PI: number
export const FIXED_BITS: number
export const FIXED_EPSILON: number
export const FIXED_MAX: number
export const FIXED_MIN: number
export const FIXED_PI: number
export const FIXED_PI_2: number
export const FIXED_PI_4: number
export const FIXED_Q: number
export const PREMULT_BIT: number
export const RADIANS_TO_DEGREES: number
export const SQRTI_ARG_10_PERCENT: number
export const SQRTI_ARG_5_PERCENT: number
export const SQRTI_ARG_MAX: number
export const STENCIL_BIT: number
export const TEXTURE_MAX_WASTE: number
export function beginGl(): void
export function bitmapErrorQuark(): number
export function blendStringErrorQuark(): number
export function checkExtension(name: string, ext: string): Bool
export function clear(color: Color, buffers: number): void
export function clipEnsure(): void
export function clipPop(): void
export function clipPush(xOffset: number, yOffset: number, width: number, height: number): void
export function clipPushRectangle(x0: number, y0: number, x1: number, y1: number): void
export function clipPushWindowRect(xOffset: number, yOffset: number, width: number, height: number): void
export function clipPushWindowRectangle(xOffset: number, yOffset: number, width: number, height: number): void
export function clipStackRestore(): void
export function clipStackSave(): void
export function clutterCheckExtensionCLUTTER(name: string, ext: string): Bool
export function clutterWinsysHasFeatureCLUTTER(feature: WinsysFeature): Bool
export function colorEqual(v1?: object | null, v2?: object | null): Bool
export function colorInitFromHsl(hue: number, saturation: number, luminance: number): /* color */ Color
export function createProgram(): Handle
export function createShader(shaderType: ShaderType): Handle
export function debugMatrixPrint(matrix: Matrix): void
export function disableFog(): void
export function doubleToInt(value: number): number
export function doubleToUint(value: number): number
export function endGl(): void
export function featuresAvailable(features: FeatureFlags): Bool
export function flush(): void
export function frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
export function getBackfaceCullingEnabled(): Bool
export function getBitmasks(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
export function getDepthTestEnabled(): Bool
export function getFeatures(): FeatureFlags
export function getModelviewMatrix(): /* matrix */ Matrix
export function getOptionGroup(): GLib.OptionGroup
export function getProjectionMatrix(): /* matrix */ Matrix
export function getSource(): object | null
export function getViewport(): /* v */ number[]
export function gtypeMatrixGetType(): GObject.Type
export function handleGetType(): GObject.Type
export function handleRef(handle: Handle): Handle
export function handleUnref(handle: Handle): void
export function isBitmap(object?: object | null): Bool
export function isMaterial(handle: Handle): Bool
export function isOffscreen(object?: object | null): Bool
export function isProgram(handle: Handle): Bool
export function isShader(handle: Handle): Bool
export function isTexture(object?: object | null): Bool
export function isVertexBuffer(handle: Handle): Bool
export function isVertexBufferIndices(handle: Handle): Bool
export function materialRef(material: Handle): Handle
export function materialUnref(material: Handle): void
export function matrixEqual(v1?: object | null, v2?: object | null): Bool
export function onscreenClutterBackendSetSizeCLUTTER(width: number, height: number): void
export function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
export function perspective(fovy: number, aspect: number, zNear: number, zFar: number): void
export function polygon(vertices: TextureVertex, nVertices: number, useColor: Bool): void
export function popDrawBuffer(): void
export function popFramebuffer(): void
export function popMatrix(): void
export function popSource(): void
export function programAttachShader(programHandle: Handle, shaderHandle: Handle): void
export function programGetUniformLocation(handle: Handle, uniformName: string): number
export function programLink(handle: Handle): void
export function programRef(handle: Handle): Handle
export function programSetUniform1f(program: Handle, uniformLocation: number, value: number): void
export function programSetUniform1i(program: Handle, uniformLocation: number, value: number): void
export function programSetUniformFloat(program: Handle, uniformLocation: number, nComponents: number, value: number[]): void
export function programSetUniformInt(program: Handle, uniformLocation: number, nComponents: number, value: number[]): void
export function programSetUniformMatrix(program: Handle, uniformLocation: number, dimensions: number, transpose: Bool, value: number[]): void
export function programUniform1f(uniformNo: number, value: number): void
export function programUniform1i(uniformNo: number, value: number): void
export function programUniformFloat(uniformNo: number, size: number, value: number[]): void
export function programUniformInt(uniformNo: number, size: number, value: number[]): void
export function programUniformMatrix(uniformNo: number, size: number, transpose: Bool, value: number[]): void
export function programUnref(handle: Handle): void
export function programUse(handle: Handle): void
export function pushDrawBuffer(): void
export function pushMatrix(): void
export function pushSource(material?: object | null): void
export function readPixels(x: number, y: number, width: number, height: number, source: ReadPixelsFlags, format: PixelFormat, pixels: number): void
export function rectangle(x1: number, y1: number, x2: number, y2: number): void
export function rectangleWithMultitextureCoords(x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
export function rectangleWithTextureCoords(x1: number, y1: number, x2: number, y2: number, tx1: number, ty1: number, tx2: number, ty2: number): void
export function rectangles(verts: number[], nRects: number): void
export function rectanglesWithTextureCoords(verts: number[], nRects: number): void
export function rotate(angle: number, x: number, y: number, z: number): void
export function scale(x: number, y: number, z: number): void
export function setBackfaceCullingEnabled(setting: Bool): void
export function setDepthTestEnabled(setting: Bool): void
export function setDrawBuffer(target: BufferTarget, offscreen: Handle): void
export function setFog(fogColor: Color, mode: FogMode, density: number, zNear: number, zFar: number): void
export function setModelviewMatrix(matrix: Matrix): void
export function setProjectionMatrix(matrix: Matrix): void
export function setSource(material?: object | null): void
export function setSourceColor(color: Color): void
export function setSourceColor4f(red: number, green: number, blue: number, alpha: number): void
export function setSourceColor4ub(red: number, green: number, blue: number, alpha: number): void
export function setSourceTexture(texture: Texture): void
export function setViewport(x: number, y: number, width: number, height: number): void
export function shaderCompile(handle: Handle): void
export function shaderGetInfoLog(handle: Handle): string
export function shaderGetType(handle: Handle): ShaderType
export function shaderIsCompiled(handle: Handle): Bool
export function shaderRef(handle: Handle): Handle
export function shaderSource(shader: Handle, source: string): void
export function shaderUnref(handle: Handle): void
export function sqrti(x: number): number
export function textureErrorQuark(): number
export function transform(matrix: Matrix): void
export function translate(x: number, y: number, z: number): void
export function vertexBufferAdd(handle: Handle, attributeName: string, nComponents: number, type: AttributeType, normalized: Bool, stride: number, pointer?: object | null): void
export function vertexBufferDelete(handle: Handle, attributeName: string): void
export function vertexBufferDisable(handle: Handle, attributeName: string): void
export function vertexBufferDraw(handle: Handle, mode: VerticesMode, first: number, count: number): void
export function vertexBufferDrawElements(handle: Handle, mode: VerticesMode, indices: Handle, minIndex: number, maxIndex: number, indicesOffset: number, count: number): void
export function vertexBufferEnable(handle: Handle, attributeName: string): void
export function vertexBufferGetNVertices(handle: Handle): number
export function vertexBufferIndicesGetForQuads(nIndices: number): Handle
export function vertexBufferIndicesGetType(indices: Handle): IndicesType
export function vertexBufferNew(nVertices: number): Handle
export function vertexBufferRef(handle: Handle): Handle
export function vertexBufferSubmit(handle: Handle): void
export function vertexBufferUnref(handle: Handle): void
export function viewport(width: number, height: number): void
export interface FuncPtr {
    (): void
}
export class Texture {
    /* Methods of Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): [ /* returnType */ Bool, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    static name: string
}
export class Bitmap {
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromFile(filename: string): Bitmap
    static getSizeFromFile(filename: string): [ /* returnType */ Bool, /* width */ number, /* height */ number ]
}
export class Fixed {
    /* Methods of Cogl.Fixed */
    pow2(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static pow(x: number, y: Fixed): number
}
export class Offscreen {
    static name: string
    /* Static methods and pseudo-constructors */
    static newToTexture(texture: Texture): Offscreen
    static newWithTexture(texture: Texture): Offscreen
    static ref(offscreen?: object | null): object | null
    static unref(offscreen?: object | null): void
}
export class Color {
    /* Methods of Cogl.Color */
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
    toHsl(): [ /* hue */ number, /* saturation */ number, /* luminance */ number ]
    unpremultiply(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
    static equal(v1?: object | null, v2?: object | null): Bool
    static initFromHsl(hue: number, saturation: number, luminance: number): /* color */ Color
}
export class Euler {
    static name: string
}
export class Material {
    /* Methods of Cogl.Material */
    getAmbient(ambient: Color): void
    getColor(): /* color */ Color
    getDiffuse(diffuse: Color): void
    getEmission(emission: Color): void
    getLayerPointSpriteCoordsEnabled(layerIndex: number): Bool
    getLayerWrapModeP(layerIndex: number): MaterialWrapMode
    getLayerWrapModeS(layerIndex: number): MaterialWrapMode
    getLayerWrapModeT(layerIndex: number): MaterialWrapMode
    getLayers(): MaterialLayer[]
    getNLayers(): number
    getPointSize(): number
    getShininess(): number
    getSpecular(specular: Color): void
    getUserProgram(): Handle
    removeLayer(layerIndex: number): void
    setAlphaTestFunction(alphaFunc: MaterialAlphaFunc, alphaReference: number): void
    setAmbient(ambient: Color): void
    setAmbientAndDiffuse(color: Color): void
    setBlend(blendString: string): Bool
    setBlendConstant(constantColor: Color): void
    setColor(color: Color): void
    setColor4f(red: number, green: number, blue: number, alpha: number): void
    setColor4ub(red: number, green: number, blue: number, alpha: number): void
    setDiffuse(diffuse: Color): void
    setEmission(emission: Color): void
    setLayer(layerIndex: number, texture: Handle): void
    setLayerCombine(layerIndex: number, blendString: string): Bool
    setLayerCombineConstant(layerIndex: number, constant: Color): void
    setLayerFilters(layerIndex: number, minFilter: MaterialFilter, magFilter: MaterialFilter): void
    setLayerMatrix(layerIndex: number, matrix: Matrix): void
    setLayerPointSpriteCoordsEnabled(layerIndex: number, enable: Bool): Bool
    setLayerWrapMode(layerIndex: number, mode: MaterialWrapMode): void
    setLayerWrapModeP(layerIndex: number, mode: MaterialWrapMode): void
    setLayerWrapModeS(layerIndex: number, mode: MaterialWrapMode): void
    setLayerWrapModeT(layerIndex: number, mode: MaterialWrapMode): void
    setPointSize(pointSize: number): void
    setShininess(shininess: number): void
    setSpecular(specular: Color): void
    setUserProgram(program: Handle): void
    static name: string
    /* Static methods and pseudo-constructors */
    static ref(material: Handle): Handle
    static unref(material: Handle): void
}
export class MaterialLayer {
    /* Methods of Cogl.MaterialLayer */
    getMagFilter(): MaterialFilter
    getMinFilter(): MaterialFilter
    getTexture(): Handle
    getType(): MaterialLayerType
    getWrapModeP(): MaterialWrapMode
    getWrapModeS(): MaterialWrapMode
    getWrapModeT(): MaterialWrapMode
    static name: string
}
export class Matrix {
    /* Fields of Cogl.Matrix */
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
    /* Methods of Cogl.Matrix */
    copy(): Matrix
    free(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getArray(): number
    getInverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    initFromArray(array: number): void
    initIdentity(): void
    initTranslation(tx: number, ty: number, tz: number): void
    isIdentity(): Bool
    lookAt(eyePositionX: number, eyePositionY: number, eyePositionZ: number, objectX: number, objectY: number, objectZ: number, worldUpX: number, worldUpY: number, worldUpZ: number): void
    multiply(a: Matrix, b: Matrix): void
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    scale(sx: number, sy: number, sz: number): void
    transformPoint(x: number, y: number, z: number, w: number): [ /* x */ number, /* y */ number, /* z */ number, /* w */ number ]
    translate(x: number, y: number, z: number): void
    transpose(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
export class Quaternion {
    static name: string
}
export class TextureVertex {
    /* Fields of Cogl.TextureVertex */
    x: number
    y: number
    z: number
    tx: number
    ty: number
    color: Color
    static name: string
}
export class _ColorSizeCheck {
    /* Fields of Cogl._ColorSizeCheck */
    compileTimeAssertCoglColorSize: number[]
    static name: string
}
export class _MatrixSizeCheck {
    /* Fields of Cogl._MatrixSizeCheck */
    compileTimeAssertCoglMatrixSize: number[]
    static name: string
}
export class _TextureVertexSizeCheck {
    /* Fields of Cogl._TextureVertexSizeCheck */
    compileTimeAssertCoglTextureVertexSize: number[]
    static name: string
}
type Angle = number
type Bool = number
type Handle = object
}