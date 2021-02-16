/**
 * GdkPixdata-2.0
 */

/// <reference types="node" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GdkPixdata {

export enum PixdataDumpType {
    PIXDATA_STREAM,
    PIXDATA_STRUCT,
    MACROS,
    GTYPES,
    CTYPES,
    STATIC,
    CONST,
    RLE_DECODER,
}
export enum PixdataType {
    COLOR_TYPE_RGB,
    COLOR_TYPE_RGBA,
    COLOR_TYPE_MASK,
    SAMPLE_WIDTH_8,
    SAMPLE_WIDTH_MASK,
    ENCODING_RAW,
    ENCODING_RLE,
    ENCODING_MASK,
}
export const PIXBUF_MAGIC_NUMBER: number
export const PIXDATA_HEADER_LENGTH: number
export function pixbufFromPixdata(pixdata: Pixdata, copyPixels: boolean): GdkPixbuf.Pixbuf
export class Pixdata {
    /* Fields of GdkPixdata.Pixdata */
    magic: number
    length: number
    pixdataType: number
    rowstride: number
    width: number
    height: number
    pixelData: any
    /* Methods of GdkPixdata.Pixdata */
    deserialize(stream: any): boolean
    serialize(): any
    toCsource(name: string, dumpType: PixdataDumpType): GLib.String
    static name: string
}
}