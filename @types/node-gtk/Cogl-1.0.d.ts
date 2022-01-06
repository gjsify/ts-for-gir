/**
 * Cogl-1.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GL } from './GL-1.0';

declare namespace Cogl {

enum AttributeType {
    BYTE,
    UNSIGNED_BYTE,
    SHORT,
    UNSIGNED_SHORT,
    FLOAT,
}
enum BitmapError {
    FAILED,
    UNKNOWN_TYPE,
    CORRUPT_IMAGE,
}
enum BlendStringError {
    PARSE_ERROR,
    ARGUMENT_PARSE_ERROR,
    INVALID_ERROR,
    GPU_UNSUPPORTED_ERROR,
}
enum DepthTestFunction {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
enum FilterReturn {
    CONTINUE,
    REMOVE,
}
enum FogMode {
    LINEAR,
    EXPONENTIAL,
    EXPONENTIAL_SQUARED,
}
enum IndicesType {
    BYTE,
    SHORT,
    INT,
}
enum MaterialAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
enum MaterialFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
enum MaterialLayerType {
    TEXTURE,
}
enum MaterialWrapMode {
    REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
enum PixelFormat {
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
enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
enum ShaderType {
    VERTEX,
    FRAGMENT,
}
enum StereoMode {
    BOTH,
    LEFT,
    RIGHT,
}
enum SystemError {
    COGL_SYSTEM_ERROR_UNSUPPORTED,
    COGL_SYSTEM_ERROR_NO_MEMORY,
}
enum TextureComponents {
    A,
    RG,
    RGB,
    RGBA,
    DEPTH,
}
enum TextureError {
    SIZE,
    FORMAT,
    BAD_PARAMETER,
    TYPE,
}
enum TextureType {
    /* 2D (invalid, starts with a number) */
    /* 3D (invalid, starts with a number) */
    RECTANGLE,
}
enum VerticesMode {
    POINTS,
    LINES,
    LINE_LOOP,
    LINE_STRIP,
    TRIANGLES,
    TRIANGLE_STRIP,
    TRIANGLE_FAN,
}
enum Winding {
    CLOCKWISE,
    COUNTER_CLOCKWISE,
}
enum WinsysFeature {
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
enum BufferBit {
    COLOR,
    DEPTH,
    STENCIL,
}
enum BufferTarget {
    WINDOW_BUFFER,
    OFFSCREEN_BUFFER,
}
enum ColorMask {
    NONE,
    RED,
    GREEN,
    BLUE,
    ALPHA,
    ALL,
}
enum FeatureFlags {
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
enum ReadPixelsFlags {
    COLOR_BUFFER,
}
enum TextureFlags {
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
function beginGl(): void
function bitmapErrorQuark(): number
function blendStringErrorQuark(): number
function checkExtension(name: string, ext: string): Bool
function clear(color: Color, buffers: number): void
function clipEnsure(): void
function clipPop(): void
function clipPush(xOffset: number, yOffset: number, width: number, height: number): void
function clipPushRectangle(x0: number, y0: number, x1: number, y1: number): void
function clipPushWindowRect(xOffset: number, yOffset: number, width: number, height: number): void
function clipPushWindowRectangle(xOffset: number, yOffset: number, width: number, height: number): void
function clipStackRestore(): void
function clipStackSave(): void
function clutterCheckExtensionCLUTTER(name: string, ext: string): Bool
function clutterWinsysHasFeatureCLUTTER(feature: WinsysFeature): Bool
function colorEqual(v1?: object | null, v2?: object | null): Bool
function colorInitFromHsl(hue: number, saturation: number, luminance: number): { color: Color }
function createProgram(): Handle
function createShader(shaderType: ShaderType): Handle
function debugMatrixPrint(matrix: Matrix): void
function disableFog(): void
function doubleToInt(value: number): number
function doubleToUint(value: number): number
function endGl(): void
function featuresAvailable(features: FeatureFlags): Bool
function flush(): void
function frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
function getBackfaceCullingEnabled(): Bool
function getBitmasks(): { red: number, green: number, blue: number, alpha: number }
function getDepthTestEnabled(): Bool
function getFeatures(): FeatureFlags
function getModelviewMatrix(): { matrix: Matrix }
function getOptionGroup(): GLib.OptionGroup
function getProjectionMatrix(): { matrix: Matrix }
function getSource(): object | null
function getViewport(): { v: number[] }
function gtypeMatrixGetType(): GObject.Type
function handleGetType(): GObject.Type
function handleRef(handle: Handle): Handle
function handleUnref(handle: Handle): void
function isBitmap(object?: object | null): Bool
function isMaterial(handle: Handle): Bool
function isOffscreen(object?: object | null): Bool
function isProgram(handle: Handle): Bool
function isShader(handle: Handle): Bool
function isTexture(object?: object | null): Bool
function isVertexBuffer(handle: Handle): Bool
function isVertexBufferIndices(handle: Handle): Bool
function materialRef(material: Handle): Handle
function materialUnref(material: Handle): void
function matrixEqual(v1?: object | null, v2?: object | null): Bool
function onscreenClutterBackendSetSizeCLUTTER(width: number, height: number): void
function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
function perspective(fovy: number, aspect: number, zNear: number, zFar: number): void
function polygon(vertices: TextureVertex, nVertices: number, useColor: Bool): void
function popDrawBuffer(): void
function popFramebuffer(): void
function popMatrix(): void
function popSource(): void
function programAttachShader(programHandle: Handle, shaderHandle: Handle): void
function programGetUniformLocation(handle: Handle, uniformName: string): number
function programLink(handle: Handle): void
function programRef(handle: Handle): Handle
function programSetUniform1f(program: Handle, uniformLocation: number, value: number): void
function programSetUniform1i(program: Handle, uniformLocation: number, value: number): void
function programSetUniformFloat(program: Handle, uniformLocation: number, nComponents: number, value: number[]): void
function programSetUniformInt(program: Handle, uniformLocation: number, nComponents: number, value: number[]): void
function programSetUniformMatrix(program: Handle, uniformLocation: number, dimensions: number, transpose: Bool, value: number[]): void
function programUniform1f(uniformNo: number, value: number): void
function programUniform1i(uniformNo: number, value: number): void
function programUniformFloat(uniformNo: number, size: number, value: number[]): void
function programUniformInt(uniformNo: number, size: number, value: number[]): void
function programUniformMatrix(uniformNo: number, size: number, transpose: Bool, value: number[]): void
function programUnref(handle: Handle): void
function programUse(handle: Handle): void
function pushDrawBuffer(): void
function pushMatrix(): void
function pushSource(material?: object | null): void
function readPixels(x: number, y: number, width: number, height: number, source: ReadPixelsFlags, format: PixelFormat, pixels: number): void
function rectangle(x1: number, y1: number, x2: number, y2: number): void
function rectangleWithMultitextureCoords(x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
function rectangleWithTextureCoords(x1: number, y1: number, x2: number, y2: number, tx1: number, ty1: number, tx2: number, ty2: number): void
function rectangles(verts: number[], nRects: number): void
function rectanglesWithTextureCoords(verts: number[], nRects: number): void
function rotate(angle: number, x: number, y: number, z: number): void
function scale(x: number, y: number, z: number): void
function setBackfaceCullingEnabled(setting: Bool): void
function setDepthTestEnabled(setting: Bool): void
function setDrawBuffer(target: BufferTarget, offscreen: Handle): void
function setFog(fogColor: Color, mode: FogMode, density: number, zNear: number, zFar: number): void
function setModelviewMatrix(matrix: Matrix): void
function setProjectionMatrix(matrix: Matrix): void
function setSource(material?: object | null): void
function setSourceColor(color: Color): void
function setSourceColor4f(red: number, green: number, blue: number, alpha: number): void
function setSourceColor4ub(red: number, green: number, blue: number, alpha: number): void
function setSourceTexture(texture: Texture): void
function setViewport(x: number, y: number, width: number, height: number): void
function shaderCompile(handle: Handle): void
function shaderGetInfoLog(handle: Handle): string
function shaderGetType(handle: Handle): ShaderType
function shaderIsCompiled(handle: Handle): Bool
function shaderRef(handle: Handle): Handle
function shaderSource(shader: Handle, source: string): void
function shaderUnref(handle: Handle): void
function sqrti(x: number): number
function textureErrorQuark(): number
function transform(matrix: Matrix): void
function translate(x: number, y: number, z: number): void
function vertexBufferAdd(handle: Handle, attributeName: string, nComponents: number, type: AttributeType, normalized: Bool, stride: number, pointer?: object | null): void
function vertexBufferDelete(handle: Handle, attributeName: string): void
function vertexBufferDisable(handle: Handle, attributeName: string): void
function vertexBufferDraw(handle: Handle, mode: VerticesMode, first: number, count: number): void
function vertexBufferDrawElements(handle: Handle, mode: VerticesMode, indices: Handle, minIndex: number, maxIndex: number, indicesOffset: number, count: number): void
function vertexBufferEnable(handle: Handle, attributeName: string): void
function vertexBufferGetNVertices(handle: Handle): number
function vertexBufferIndicesGetForQuads(nIndices: number): Handle
function vertexBufferIndicesGetType(indices: Handle): IndicesType
function vertexBufferNew(nVertices: number): Handle
function vertexBufferRef(handle: Handle): Handle
function vertexBufferSubmit(handle: Handle): void
function vertexBufferUnref(handle: Handle): void
function viewport(width: number, height: number): void
interface FuncPtr {
    (): void
}
class Texture {
    /* Methods of Cogl-1.0.Cogl.Texture */
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
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    static name: string
}
class Bitmap {
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromFile(filename: string): Bitmap
    static getSizeFromFile(filename: string): { returnType: Bool, width: number, height: number }
}
class Fixed {
    /* Methods of Cogl-1.0.Cogl.Fixed */
    pow2(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static pow(x: number, y: Fixed): number
}
class Offscreen {
    static name: string
    /* Static methods and pseudo-constructors */
    static newToTexture(texture: Texture): Offscreen
    static newWithTexture(texture: Texture): Offscreen
    static ref(offscreen?: object | null): object | null
    static unref(offscreen?: object | null): void
}
class Color {
    /* Methods of Cogl-1.0.Cogl.Color */
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
class Euler {
    static name: string
}
class Material {
    /* Methods of Cogl-1.0.Cogl.Material */
    getAmbient(ambient: Color): void
    getColor(): { color: Color }
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
class MaterialLayer {
    /* Methods of Cogl-1.0.Cogl.MaterialLayer */
    getMagFilter(): MaterialFilter
    getMinFilter(): MaterialFilter
    getTexture(): Handle
    getType(): MaterialLayerType
    getWrapModeP(): MaterialWrapMode
    getWrapModeS(): MaterialWrapMode
    getWrapModeT(): MaterialWrapMode
    static name: string
}
class Matrix {
    /* Fields of Cogl-1.0.Cogl.Matrix */
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
    /* Methods of Cogl-1.0.Cogl.Matrix */
    copy(): Matrix
    free(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getArray(): number
    getInverse(): { returnType: Bool, inverse: Matrix }
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
    transformPoint(x: number, y: number, z: number, w: number): { x: number, y: number, z: number, w: number }
    translate(x: number, y: number, z: number): void
    transpose(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class Quaternion {
    static name: string
}
class TextureVertex {
    /* Fields of Cogl-1.0.Cogl.TextureVertex */
    x: number
    y: number
    z: number
    tx: number
    ty: number
    color: Color
    static name: string
}
class _ColorSizeCheck {
    /* Fields of Cogl-1.0.Cogl._ColorSizeCheck */
    compileTimeAssertCoglColorSize: number[]
    static name: string
}
class _MatrixSizeCheck {
    /* Fields of Cogl-1.0.Cogl._MatrixSizeCheck */
    compileTimeAssertCoglMatrixSize: number[]
    static name: string
}
class _TextureVertexSizeCheck {
    /* Fields of Cogl-1.0.Cogl._TextureVertexSizeCheck */
    compileTimeAssertCoglTextureVertexSize: number[]
    static name: string
}
type Angle = number
type Bool = number
type Handle = object
}
export default Cogl