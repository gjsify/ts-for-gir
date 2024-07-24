<%_ const Cairo = await dep.get('cairo', '1.0') _%>

<%_ if(!package){ -%>
declare module 'cairo' {
<% } -%>

// Cairo 1.0
import type Cairo from '<%- Cairo.importPath %>';

<%- package ? 'declare' : '' %> namespace giCairo {

// Add overrides here
// See
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/cairo.md
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairoModule.js
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairo.js
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/cairo-context.cpp

// Re-exported enums
export type Status = Cairo.Status;
export type Content = Cairo.Content;
export type Operator = Cairo.Operator;
export type Antialias = Cairo.Antialias;
export type FillRule = Cairo.FillRule;
export type LineCap = Cairo.LineCap;
export type LineJoin = Cairo.LineJoin;
export type TextClusterFlags = Cairo.TextClusterFlags;
export type FontSlant = Cairo.FontSlant;
export type FontWeight = Cairo.FontWeight;
export type SubpixelOrder = Cairo.SubpixelOrder;
export type HintStyle = Cairo.HintStyle;
export type HintMetrics = Cairo.HintMetrics;
export type FontType = Cairo.FontType;
export type PathDataType = Cairo.PathDataType;
export type DeviceType = Cairo.DeviceType;
export type SurfaceType = Cairo.SurfaceType;
export type Format = Cairo.Format;
export type PatternType = Cairo.PatternType;
export type Extend = Cairo.Extend;
export type Filter = Cairo.Filter;
export type RegionOverlap = Cairo.RegionOverlap;

export class Context extends Cairo.Context {
    constructor(surface: Surface);

    arc(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;
    arcNegative(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;
    curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    clip(): void;
    clipPreserve(): void;
    clipExtents(): [number, number, number, number];
    closePath(): void;
    copyPage(): void;
    deviceToUser(x: number, y: number): [number, number];
    deviceToUserDistance(x: number, y: number): [number, number];
    fill(): void;
    fillPreserve(): void;
    fillExtents(): [number, number, number, number];
    getAntialias(): Antialias;
    getCurrentPoint(): [number, number];
    getDashCount(): number;
    getFillRule(): FillRule;
    getLineCap(): LineCap;
    getLineJoin(): LineJoin;
    getLineWidth(): number;
    getMiterLimit(): number;
    getOperator(): Operator;
    getTolerance(): number;
    hasCurrentPoint(): boolean;
    identityMatrix(): void;
    inFill(x: number, y: number): boolean;
    inStroke(x: number, y: number): boolean;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    newPath(): void;
    newSubPath(): void;
    paint(): void;
    paintWithAlpha(alpha: number): void;
    pathExtents(): [number, number, number, number];
    popGroup(): Pattern;
    popGroupToSource(): void;
    pushGroup(): void;
    pushGroupWithContent(content: Content): void;
    rectangle(x: number, y: number, width: number, height: number): void;
    relCurveTo(dx1: number, dy1: number, dx2: number, dy2: number, dx3: number, dy3: number): void;
    relLineTo(dx: number, dy: number): void;
    relMoveTo(dx: number, dy: number): void;
    resetClip(): void;
    restore(): void;
    rotate(angle: number): void;
    save(): void;
    scale(sx: number, sy: number): void;
    selectFontFace(family: string, slant: number, weight: number): void;
    setAntialias(antialias: Antialias): void;
    setDash(dashes: number[], offset: number): void;
    setFontSize(size: number): void;
    setFillRule(fillRule: FillRule): void;
    setLineCap(lineCap: LineCap): void;
    setLineJoin(lineJoin: LineJoin): void;
    setLineWidth(width: number): void;
    setMiterLimit(limit: number): void;
    setOperator(op: Operator): void;
    setSource(pattern: Pattern): void;
    setSourceRGB(red: number, green: number, blue: number): void;
    setSourceRGBA(red: number, green: number, blue: number, alpha: number): void;
    setSourceSurface(surface: Surface, x: number, y: number): void;
    setTolerance(tolerance: number): void;
    showPage(): void;
    showText(utf8: string): void;
    stroke(): void;
    strokePreserve(): void;
    strokeExtents(): [number, number, number, number];
    textExtents(utf8: string): TextExtents;
    translate(tx: number, ty: number): void;
    userToDevice(x: number, y: number): [number, number];
    userToDeviceDistance(x: number, y: number): [number, number];
}

export abstract class Surface extends Cairo.Surface {
    // TODO
}

export class ImageSurface extends Surface {
    constructor(format: Format, width: number, height: number);

    static createFromPNG(filename: string): ImageSurface;

    // TODO
}

export class PDFSurface extends Surface {
    constructor(filename: string, width: number, height: number);

    // TODO
}

export class PSSurface extends Surface {
    constructor(filename: string, width: number, height: number);

    // TODO
}

export class SVGSurface extends Surface {
    constructor(filename: string, width: number, height: number);

    // TODO
}

export class Pattern extends Cairo.Pattern {
    // TODO
}

export class Gradient extends Pattern {
    // TODO
}

export class LinearGradient extends Gradient {
    // TODO
}

export class RadialGradient extends Gradient {
    // TODO
}

export class SurfacePattern extends Pattern {
    // TODO
}

export class SolidPattern extends Pattern {
    // TODO
}

export class Path extends Cairo.Path {
    // TODO
}

export interface TextExtents {
    xBearing: number;
    yBearing: number;
    width: number;
    height: number;
    xAdvance: number;
    yAdvance: number;
}

}

export default giCairo;

<%_ if(!package){ -%>
}
<% } -%>