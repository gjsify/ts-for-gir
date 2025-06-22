<%_ const Cairo = await dep.get('cairo', '1.0', true) _%>
<%_ const GObject = await dep.get('GObject', '2.0') _%>

<%_ if(!package){ -%>
declare module 'cairo' {
<% } -%>

// Cairo 1.0
import Cairo from '<%- Cairo.importPath %>';
<%- GObject.importDef %>

<%- package ? 'declare' : '' %> namespace giCairo {
    // Re-export enums directly from Cairo
    export import Status = Cairo.Status;
    export import Content = Cairo.Content;
    export import Operator = Cairo.Operator;
    export import Antialias = Cairo.Antialias;
    export import FillRule = Cairo.FillRule;
    export import LineCap = Cairo.LineCap;
    export import LineJoin = Cairo.LineJoin;
    export import TextClusterFlags = Cairo.TextClusterFlags;
    export import FontSlant = Cairo.FontSlant;
    export import FontWeight = Cairo.FontWeight;
    export import SubpixelOrder = Cairo.SubpixelOrder;
    export import HintStyle = Cairo.HintStyle;
    export import HintMetrics = Cairo.HintMetrics;
    export import FontType = Cairo.FontType;
    export import PathDataType = Cairo.PathDataType;
    export import DeviceType = Cairo.DeviceType;
    export import SurfaceType = Cairo.SurfaceType;
    export import Format = Cairo.Format;
    export import PatternType = Cairo.PatternType;
    export import Extend = Cairo.Extend;
    export import Filter = Cairo.Filter;
    export import RegionOverlap = Cairo.RegionOverlap;

    /**
     * Describes the metrics of a string of text
     */
    export interface TextExtents {
        /** The horizontal distance from the origin to the leftmost part of the text */
        xBearing: number;
        /** The vertical distance from the origin to the topmost part of the text */
        yBearing: number;
        /** The width of the text */
        width: number;
        /** The height of the text */
        height: number;
        /** The distance to advance horizontally after drawing the text */
        xAdvance: number;
        /** The distance to advance vertically after drawing the text */
        yAdvance: number;
    }

    /**
     * The main Cairo drawing context
     * 
     * A Cairo context is used to draw to surfaces and perform drawing operations.
     * When you're done with a context, you must call $dispose() to free memory.
     */
    export class Context extends Cairo.Context {
        /**
         * Creates a new Cairo context for drawing to the given surface
         * @param surface The surface to draw on
         */
        constructor(surface: Surface);

        /**
         * Free a Cairo.Context and all associated memory
         * 
         * Unlike other objects in GJS, Cairo contexts must be explicitly disposed
         * to avoid memory leaks.
         */
        $dispose(): void;

        /**
         * Adds a circular arc of the given radius to the current path
         * @param xc X coordinate of the center of the arc
         * @param yc Y coordinate of the center of the arc
         * @param radius Radius of the arc
         * @param angle1 Starting angle in radians
         * @param angle2 End angle in radians
         */
        arc(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;

        /**
         * Adds a circular arc of the given radius to the current path, but draws
         * the arc in the opposite direction from arc()
         * @param xc X coordinate of the center of the arc
         * @param yc Y coordinate of the center of the arc
         * @param radius Radius of the arc
         * @param angle1 Starting angle in radians
         * @param angle2 End angle in radians
         */
        arcNegative(xc: number, yc: number, radius: number, angle1: number, angle2: number): void;

        /**
         * Adds a cubic Bézier spline to the current path
         * @param x1 X coordinate of the first control point
         * @param y1 Y coordinate of the first control point
         * @param x2 X coordinate of the second control point
         * @param y2 Y coordinate of the second control point
         * @param x3 X coordinate of the end point
         * @param y3 Y coordinate of the end point
         */
        curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

        /**
         * Establishes a new clip region by intersecting the current clip region
         * with the current path, then clearing the current path
         */
        clip(): void;

        /**
         * Like clip() but preserves the current path
         */
        clipPreserve(): void;

        /**
         * Returns the current clip extents as [x1, y1, x2, y2]
         * @returns An array with [x1, y1, x2, y2] clip extents
         */
        clipExtents(): [number, number, number, number];

        /**
         * Closes the current path by drawing a line to the beginning of the current subpath
         */
        closePath(): void;

        /**
         * Emits the current page, but doesn't clear it
         */
        copyPage(): void;

        /**
         * Transforms a coordinate from device space to user space
         * @param x X coordinate
         * @param y Y coordinate
         * @returns An array with [x, y] transformed coordinates
         */
        deviceToUser(x: number, y: number): [number, number];

        /**
         * Transforms a distance vector from device space to user space
         * @param x X component of the distance vector
         * @param y Y component of the distance vector
         * @returns An array with [x, y] transformed distance vector
         */
        deviceToUserDistance(x: number, y: number): [number, number];

        /**
         * Fills the current path using the current fill rule, then clears the path
         */
        fill(): void;

        /**
         * Fills the current path using the current fill rule, but doesn't clear the path
         */
        fillPreserve(): void;

        /**
         * Returns the current fill extents as [x1, y1, x2, y2]
         * @returns An array with [x1, y1, x2, y2] fill extents
         */
        fillExtents(): [number, number, number, number];

        /**
         * Gets the current antialiasing mode
         * @returns The current antialiasing mode
         */
        getAntialias(): Antialias;

        /**
         * Gets the current point of the current path
         * @returns An array with [x, y] coordinates of the current point
         */
        getCurrentPoint(): [number, number];

        /**
         * Gets the current dash count
         * @returns The number of elements in the current dash pattern
         */
        getDashCount(): number;

        /**
         * Gets the current fill rule
         * @returns The current fill rule
         */
        getFillRule(): FillRule;

        /**
         * Gets the current line cap style
         * @returns The current line cap style
         */
        getLineCap(): LineCap;

        /**
         * Gets the current line join style
         * @returns The current line join style
         */
        getLineJoin(): LineJoin;

        /**
         * Gets the current line width
         * @returns The current line width
         */
        getLineWidth(): number;

        /**
         * Gets the current miter limit
         * @returns The current miter limit
         */
        getMiterLimit(): number;

        /**
         * Gets the current compositing operator
         * @returns The current compositing operator
         */
        getOperator(): Operator;

        /**
         * Gets the current source pattern
         * @returns The current source pattern
         */
        getSource(): Pattern;

        /**
         * Gets the surface the Cairo context is drawing on
         * @returns The target surface
         */
        getTarget(): Surface;

        /**
         * Gets the current tolerance value
         * @returns The current tolerance value
         */
        getTolerance(): number;

        /**
         * Checks if there is a current point defined
         * @returns True if there is a current point
         */
        hasCurrentPoint(): boolean;

        /**
         * Resets the current transformation matrix to the identity matrix
         */
        identityMatrix(): void;

        /**
         * Tests whether the given point is inside the area filled by the current path
         * @param x X coordinate of the point to test
         * @param y Y coordinate of the point to test
         * @returns True if the point is inside the path
         */
        inFill(x: number, y: number): boolean;

        /**
         * Tests whether the given point is inside the area that would be inked
         * by the current path with the current line width and stroke parameters
         * @param x X coordinate of the point to test
         * @param y Y coordinate of the point to test
         * @returns True if the point would be inked
         */
        inStroke(x: number, y: number): boolean;

        /**
         * Adds a line to the current path from the current point to the given point
         * @param x X coordinate of the end point
         * @param y Y coordinate of the end point
         */
        lineTo(x: number, y: number): void;

        /**
         * Sets the current mask pattern used for painting operations
         * @param pattern A pattern to use as mask
         */
        mask(pattern: Pattern): void;

        /**
         * Sets the current mask to a surface
         * @param surface A surface to use as mask
         * @param x X coordinate at which to place the origin of the surface
         * @param y Y coordinate at which to place the origin of the surface
         */
        maskSurface(surface: Surface, x: number, y: number): void;

        /**
         * Begins a new subpath at the given point
         * @param x X coordinate of the new position
         * @param y Y coordinate of the new position
         */
        moveTo(x: number, y: number): void;

        /**
         * Clears the current path and begins a new path
         */
        newPath(): void;

        /**
         * Begins a new subpath without changing the current point
         */
        newSubPath(): void;

        /**
         * Paints the current source everywhere within the current clip region
         */
        paint(): void;

        /**
         * Paints the current source everywhere within the current clip region
         * using the given alpha value
         * @param alpha Alpha value to use, between 0 and 1
         */
        paintWithAlpha(alpha: number): void;

        /**
         * Returns the current path extents as [x1, y1, x2, y2]
         * @returns An array with [x1, y1, x2, y2] path extents
         */
        pathExtents(): [number, number, number, number];

        /**
         * Terminates the current pattern group and returns a new pattern
         * representing everything drawn to the group
         * @returns A new pattern representing the group
         */
        popGroup(): Pattern;

        /**
         * Terminates the current pattern group and makes it the current source pattern
         */
        popGroupToSource(): void;

        /**
         * Temporarily redirects drawing to an intermediate surface
         */
        pushGroup(): void;

        /**
         * Temporarily redirects drawing to an intermediate surface with the given content
         * @param content The content type for the group
         */
        pushGroupWithContent(content: Content): void;

        /**
         * Adds a rectangle to the current path
         * @param x X coordinate of the top-left corner
         * @param y Y coordinate of the top-left corner
         * @param width Width of the rectangle
         * @param height Height of the rectangle
         */
        rectangle(x: number, y: number, width: number, height: number): void;

        /**
         * Adds a cubic Bézier spline to the current path using relative coordinates
         * @param dx1 X offset to the first control point from current point
         * @param dy1 Y offset to the first control point from current point
         * @param dx2 X offset to the second control point from current point
         * @param dy2 Y offset to the second control point from current point
         * @param dx3 X offset to the end point from current point
         * @param dy3 Y offset to the end point from current point
         */
        relCurveTo(dx1: number, dy1: number, dx2: number, dy2: number, dx3: number, dy3: number): void;

        /**
         * Adds a line to the current path relative to the current point
         * @param dx X offset from the current point
         * @param dy Y offset from the current point
         */
        relLineTo(dx: number, dy: number): void;

        /**
         * Begins a new subpath relative to the current point
         * @param dx X offset from the current point
         * @param dy Y offset from the current point
         */
        relMoveTo(dx: number, dy: number): void;

        /**
         * Resets the current clip region to its original, unrestricted state
         */
        resetClip(): void;

        /**
         * Restores the context state from the stack
         */
        restore(): void;

        /**
         * Rotates the current transformation matrix
         * @param angle Angle of rotation in radians
         */
        rotate(angle: number): void;

        /**
         * Saves the current context state to the stack
         */
        save(): void;

        /**
         * Scales the current transformation matrix
         * @param sx Scale factor for the X dimension
         * @param sy Scale factor for the Y dimension
         */
        scale(sx: number, sy: number): void;

        /**
         * Selects a font face
         * @param family A font family name
         * @param slant A font slant
         * @param weight A font weight
         */
        selectFontFace(family: string, slant: number, weight: number): void;

        /**
         * Sets the antialiasing mode
         * @param antialias The new antialiasing mode
         */
        setAntialias(antialias: Antialias): void;

        /**
         * Sets the dash pattern to be used by stroke()
         * @param dashes Array of dash lengths
         * @param offset Offset into the dash pattern
         */
        setDash(dashes: number[], offset: number): void;

        /**
         * Sets the current font size in user space units
         * @param size Font size in user space units
         */
        setFontSize(size: number): void;

        /**
         * Sets the current fill rule
         * @param fillRule The new fill rule
         */
        setFillRule(fillRule: FillRule): void;

        /**
         * Sets the current line cap style
         * @param lineCap The new line cap style
         */
        setLineCap(lineCap: LineCap): void;

        /**
         * Sets the current line join style
         * @param lineJoin The new line join style
         */
        setLineJoin(lineJoin: LineJoin): void;

        /**
         * Sets the current line width
         * @param width The new line width
         */
        setLineWidth(width: number): void;

        /**
         * Sets the current miter limit
         * @param limit The new miter limit
         */
        setMiterLimit(limit: number): void;

        /**
         * Sets the current compositing operator
         * @param op The new compositing operator
         */
        setOperator(op: Operator): void;

        /**
         * Sets the current source pattern
         * @param pattern The new source pattern
         */
        setSource(pattern: Pattern): void;

        /**
         * Sets the source pattern to an RGB opaque color
         * @param red Red component, between 0 and 1
         * @param green Green component, between 0 and 1
         * @param blue Blue component, between 0 and 1
         */
        setSourceRGB(red: number, green: number, blue: number): void;

        /**
         * Sets the source pattern to an RGBA color
         * @param red Red component, between 0 and 1
         * @param green Green component, between 0 and 1
         * @param blue Blue component, between 0 and 1
         * @param alpha Alpha component, between 0 and 1
         */
        setSourceRGBA(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Sets the source pattern to the given surface
         * @param surface The new source surface
         * @param x X coordinate where to place the surface origin
         * @param y Y coordinate where to place the surface origin
         */
        setSourceSurface(surface: Surface, x: number, y: number): void;

        /**
         * Sets the tolerance used when converting paths to trapezoids
         * @param tolerance The new tolerance value
         */
        setTolerance(tolerance: number): void;

        /**
         * Emits the current page and clears it
         */
        showPage(): void;

        /**
         * Draws text at the current position
         * @param utf8 A string of text encoded in UTF-8
         */
        showText(utf8: string): void;

        /**
         * Strokes the current path using the current line width, line join,
         * line cap, and dash settings, then clears the path
         */
        stroke(): void;

        /**
         * Like stroke() but preserves the current path
         */
        strokePreserve(): void;

        /**
         * Returns the current stroke extents as [x1, y1, x2, y2]
         * @returns An array with [x1, y1, x2, y2] stroke extents
         */
        strokeExtents(): [number, number, number, number];

        /**
         * Gets the extents of the given text if it were drawn at the current point
         * @param utf8 A string of text encoded in UTF-8
         * @returns Text extents information
         */
        textExtents(utf8: string): TextExtents;

        /**
         * Translates the current transformation matrix
         * @param tx Translation in the X direction
         * @param ty Translation in the Y direction
         */
        translate(tx: number, ty: number): void;

        /**
         * Transforms a coordinate from user space to device space
         * @param x X coordinate
         * @param y Y coordinate
         * @returns An array with [x, y] transformed coordinates
         */
        userToDevice(x: number, y: number): [number, number];

        /**
         * Transforms a distance vector from user space to device space
         * @param x X component of the distance vector
         * @param y Y component of the distance vector
         * @returns An array with [x, y] transformed distance vector
         */
        userToDeviceDistance(x: number, y: number): [number, number];

        /**
         * Creates a copy of the current path and returns it
         * @returns A copy of the current path
         */
        copyPath(): Path;

        /**
         * Appends a path to the current path
         * @param path A path to append
         */
        appendPath(path: Path): void;
    }

    /**
     * Base class for all Cairo surfaces
     */
    export abstract class Surface extends Cairo.Surface {
        /**
         * Gets the device scale of the surface
         * @returns An array with [x, y] device scale
         */
        getDeviceScale(): [number, number];

        /**
         * Sets the device scale of the surface
         * @param x X scale factor
         * @param y Y scale factor
         */
        setDeviceScale(x: number, y: number): void;

        /**
         * Gets the device offset of the surface
         * @returns An array with [x, y] device offset
         */
        getDeviceOffset(): [number, number];

        /**
         * Sets the device offset of the surface
         * @param x X offset
         * @param y Y offset
         */
        setDeviceOffset(x: number, y: number): void;

        /**
         * Performs all pending drawing operations
         */
        flush(): void;

        /**
         * Finishes the surface and drops all references to external resources
         */
        finish(): void;
    }

    /**
     * A surface that uses in-memory image data buffers
     */
    export class ImageSurface extends Surface {
        /**
         * Creates a new image surface
         * @param format The format of pixels in the surface
         * @param width Width of the surface in pixels
         * @param height Height of the surface in pixels
         */
        constructor(format: Format, width: number, height: number);

        /**
         * Creates a new image surface from a PNG file
         * @param filename Path to a PNG file
         * @returns A new image surface
         */
        static createFromPNG(filename: string): ImageSurface;

        /**
         * Gets the format of the surface
         * @returns The format of the surface
         */
        getFormat(): Format;

        /**
         * Gets the width of the surface in pixels
         * @returns The width of the surface
         */
        getWidth(): number;

        /**
         * Gets the height of the surface in pixels
         * @returns The height of the surface
         */
        getHeight(): number;

        /**
         * Writes the contents of the surface to a PNG file
         * @param filename Path to the PNG file to write
         */
        writeToPNG(filename: string): void;
    }

    /**
     * A surface that produces output in the PDF format
     */
    export class PDFSurface extends Surface {
        /**
         * Creates a new PDF surface
         * @param filename Path to the PDF file to write to
         * @param width Width of the surface in points (1 point = 1/72 inch)
         * @param height Height of the surface in points (1 point = 1/72 inch)
         */
        constructor(filename: string, width: number, height: number);
    }

    /**
     * A surface that produces output in the PostScript format
     */
    export class PSSurface extends Surface {
        /**
         * Creates a new PostScript surface
         * @param filename Path to the PostScript file to write to
         * @param width Width of the surface in points (1 point = 1/72 inch)
         * @param height Height of the surface in points (1 point = 1/72 inch)
         */
        constructor(filename: string, width: number, height: number);
    }

    /**
     * A surface that produces output in the SVG format
     */
    export class SVGSurface extends Surface {
        /**
         * Creates a new SVG surface
         * @param filename Path to the SVG file to write to
         * @param width Width of the surface in points (1 point = 1/72 inch)
         * @param height Height of the surface in points (1 point = 1/72 inch)
         */
        constructor(filename: string, width: number, height: number);
    }

    /**
     * Base class for all Cairo patterns
     */
    export class Pattern extends Cairo.Pattern {
    }

    /**
     * Base class for all gradient patterns
     */
    export class Gradient extends Pattern {
        /**
         * Adds a color stop to the gradient at the given offset
         * @param offset Offset position of the stop, between 0 and 1
         * @param red Red component, between 0 and 1
         * @param green Green component, between 0 and 1
         * @param blue Blue component, between 0 and 1
         * @param alpha Alpha component, between 0 and 1
         */
        addColorStopRGBA(offset: number, red: number, green: number, blue: number, alpha: number): void;

        /**
         * Adds an opaque color stop to the gradient at the given offset
         * @param offset Offset position of the stop, between 0 and 1
         * @param red Red component, between 0 and 1
         * @param green Green component, between 0 and 1
         * @param blue Blue component, between 0 and 1
         */
        addColorStopRGB(offset: number, red: number, green: number, blue: number): void;
    }

    /**
     * A pattern for linear gradients
     */
    export class LinearGradient extends Gradient {
        /**
         * Creates a new linear gradient pattern
         * @param x0 X coordinate of the start point
         * @param y0 Y coordinate of the start point
         * @param x1 X coordinate of the end point
         * @param y1 Y coordinate of the end point
         */
        constructor(x0: number, y0: number, x1: number, y1: number);
    }

    /**
     * A pattern for radial gradients
     */
    export class RadialGradient extends Gradient {
        /**
         * Creates a new radial gradient pattern
         * @param cx0 X coordinate of the start circle
         * @param cy0 Y coordinate of the start circle
         * @param radius0 Radius of the start circle
         * @param cx1 X coordinate of the end circle
         * @param cy1 Y coordinate of the end circle
         * @param radius1 Radius of the end circle
         */
        constructor(cx0: number, cy0: number, radius0: number, cx1: number, cy1: number, radius1: number);
    }

    /**
     * A pattern that uses a surface as its source
     */
    export class SurfacePattern extends Pattern {
        /**
         * Creates a new pattern for the given surface
         * @param surface The surface to use
         */
        constructor(surface: Surface);
    }

    /**
     * A pattern for solid colors
     */
    export class SolidPattern extends Pattern {
        /**
         * Creates a new solid pattern with an opaque color
         * @param red Red component, between 0 and 1
         * @param green Green component, between 0 and 1
         * @param blue Blue component, between 0 and 1
         * @returns A new solid pattern
         */
        static createRGB(red: number, green: number, blue: number): SolidPattern;

        /**
         * Creates a new solid pattern with a transparent color
         * @param red Red component, between 0 and 1
         * @param green Green component, between 0 and 1
         * @param blue Blue component, between 0 and 1
         * @param alpha Alpha component, between 0 and 1
         * @returns A new solid pattern
         */
        static createRGBA(red: number, green: number, blue: number, alpha: number): SolidPattern;
    }

    export class Path extends Cairo.Path {}

    /**
     * A rectangle
     */
    export class Rectangle extends Cairo.Rectangle {}

    /**
     * A rectangle integer
     */
    export class RectangleInt extends Cairo.RectangleInt {}

    /**
     * A region object used for representing a set of pixels
     */
    export class Region extends Cairo.Region {}

    /**
     * A matrix object used for transforming coordinates
     */
    export class Matrix extends Cairo.Matrix {}

    /**
     * A font face object used for storing and manipulating font faces
     */
    export class FontFace extends Cairo.FontFace {}

    /**
     * A scaled font object used for storing and manipulating scaled fonts
     */
    export class ScaledFont extends Cairo.ScaledFont {}

    /**
     * A glyph object used for storing and manipulating glyphs
     */
    export class Glyph extends Cairo.Glyph {}

    /**
     * A text cluster object used for storing and manipulating text clusters
     */
    export class TextCluster extends Cairo.TextCluster {}

    /**
     * A font options object used for storing and manipulating font options
     */
    export class FontOptions extends Cairo.FontOptions {}

    /**
     * A device object used for storing and manipulating devices
     */
    export class Device extends Cairo.Device {}
}

export default giCairo;

<%_ if(!package){ -%>
}
<% } -%>