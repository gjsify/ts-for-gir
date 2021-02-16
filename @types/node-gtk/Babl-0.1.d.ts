/**
 * Babl-0.1
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace Babl {

export enum IccIntent {
    PERCEPTUAL,
    RELATIVE_COLORIMETRIC,
    SATURATION,
    ABSOLUTE_COLORIMETRIC,
    PERFORMANCE,
}
export enum SpaceFlags {
    NONE,
    EQUALIZE,
}
export enum ModelFlag {
    ALPHA,
    ASSOCIATED,
    INVERTED,
    LINEAR,
    NONLINEAR,
    PERCEPTUAL,
    GRAY,
    RGB,
    CIE,
    CMYK,
}
export const ALPHA_FLOOR: number
export const ALPHA_FLOOR_F: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function component(name: string): Object
export function conversionGetDestinationSpace(conversion: Object): Object
export function conversionGetSourceSpace(conversion: Object): Object
export function exit(): void
export function fastFish(sourceFormat: object | null, destinationFormat: object | null, performance: string): Object
export function fish(sourceFormat?: object | null, destinationFormat?: object | null): Object
export function format(encoding: string): Object
export function formatExists(name: string): number
export function formatGetBytesPerPixel(format: Object): number
export function formatGetEncoding(babl: Object): string
export function formatGetModel(format: Object): Object
export function formatGetNComponents(format: Object): number
export function formatGetSpace(format: Object): Object
export function formatGetType(format: Object, componentIndex: number): Object
export function formatHasAlpha(format: Object): number
export function formatIsFormatN(format: Object): number
export function formatIsPalette(format: Object): number
export function formatN(type: Object, components: number): Object
export function formatWithSpace(encoding: string, space: Object): Object
export function getModelFlags(model: Object): ModelFlag
export function getName(babl: Object): string
export function getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
export function iccGetKey(iccData: string, iccLength: number, key: string, language: string, country: string): string
export function iccMakeSpace(iccData: string, iccLength: number, intent: IccIntent, error: string): Object
export function init(): void
export function introspect(babl: Object): void
export function model(name: string): Object
export function modelIs(babl: Object, modelName: string): number
export function modelWithSpace(name: string, space: Object): Object
export function newPalette(name: string, formatU8: Object, formatU8WithAlpha: Object): Object
export function newPaletteWithSpace(name: string, space: Object, formatU8: Object, formatU8WithAlpha: Object): Object
export function paletteReset(babl: Object): void
export function paletteSetPalette(babl: Object, format: Object, data: any, count: number): void
export function process(bablFish: Object, source: object | null, destination: object | null, n: number): number
export function processRows(bablFish: Object, source: object | null, sourceStride: number, dest: object | null, destStride: number, n: number, rows: number): number
export function sampling(horizontal: number, vertical: number): Object
export function space(name: string): Object
export function spaceFromChromaticities(name: string | null, wx: number, wy: number, rx: number, ry: number, gx: number, gy: number, bx: number, by: number, trcRed: Object, trcGreen: Object | null, trcBlue: Object | null, flags: SpaceFlags): Object
export function spaceFromIcc(iccData: string, iccLength: number, intent: IccIntent): [ /* returnType */ Object, /* error */ string ]
export function spaceFromRgbxyzMatrix(name: string | null, wx: number, wy: number, wz: number, rx: number, gx: number, bx: number, ry: number, gy: number, by: number, rz: number, gz: number, bz: number, trcRed: Object, trcGreen?: Object | null, trcBlue?: Object | null): Object
export function spaceGet(space: Object): [ /* xw */ number | null, /* yw */ number | null, /* xr */ number | null, /* yr */ number | null, /* xg */ number | null, /* yg */ number | null, /* xb */ number | null, /* yb */ number | null, /* redTrc */ Object | null, /* greenTrc */ Object | null, /* blueTrc */ Object | null ]
export function spaceGetGamma(space: Object): number
export function spaceGetIcc(babl: Object): [ /* returnType */ string, /* length */ number | null ]
export function spaceGetRgbLuminance(space: Object): [ /* redLuminance */ number | null, /* greenLuminance */ number | null, /* blueLuminance */ number | null ]
export function spaceIsCmyk(space: Object): number
export function spaceIsGray(space: Object): number
export function spaceWithTrc(space: Object, trc: Object): Object
export function trc(name: string): Object
export function trcGamma(gamma: number): Object
export function type(name: string): Object
export interface FuncLinear {
    (conversion: Object, src: string, dst: string, n: number): void
}
export interface FuncPlanar {
    (conversion: Object, srcBands: number, src: string, srcPitch: number, dstBands: number, dst: string, dstPitch: number, n: number): void
}
export class Object {
    static name: string
}
}