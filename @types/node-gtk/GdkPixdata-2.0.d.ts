/**
 * GdkPixdata-2.0
 */

import "node"
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GdkPixdata {

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
    /* Fields of GdkPixdata-2.0.GdkPixdata.Pixdata */
    magic: number
    length: number
    pixdataType: number
    rowstride: number
    width: number
    height: number
    pixelData: any[]
    /* Methods of GdkPixdata-2.0.GdkPixdata.Pixdata */
    deserialize(stream: any[]): boolean
    serialize(): any[]
    toCsource(name: string, dumpType: PixdataDumpType): GLib.String
    static name: string
}
}