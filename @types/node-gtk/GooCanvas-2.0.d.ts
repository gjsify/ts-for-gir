/**
 * GooCanvas-2.0
 */

/// <reference types="node" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace GooCanvas {

export enum CairoAntialias {
    DEFAULT,
    NONE,
    GRAY,
    SUBPIXEL,
}
export enum CairoFillRule {
    WINDING,
    EVEN_ODD,
}
export enum CairoHintMetrics {
    DEFAULT,
    OFF,
    ON,
}
export enum CairoLineCap {
    BUTT,
    ROUND,
    SQUARE,
}
export enum CairoLineJoin {
    MITER,
    ROUND,
    BEVEL,
}
export enum CairoOperator {
    CLEAR,
    SOURCE,
    OVER,
    IN,
    OUT,
    ATOP,
    DEST,
    DEST_OVER,
    DEST_IN,
    DEST_OUT,
    DEST_ATOP,
    XOR,
    ADD,
    SATURATE,
}
export enum CanvasAnchorType {
    CENTER,
    NORTH,
    NORTH_WEST,
    NORTH_EAST,
    SOUTH,
    SOUTH_WEST,
    SOUTH_EAST,
    WEST,
    EAST,
    N,
    NW,
    NE,
    S,
    SW,
    SE,
    W,
    E,
}
export enum CanvasAnimateType {
    FREEZE,
    RESET,
    RESTART,
    BOUNCE,
}
export enum CanvasItemVisibility {
    HIDDEN,
    INVISIBLE,
    VISIBLE,
    VISIBLE_ABOVE_THRESHOLD,
}
export enum CanvasPathCommandType {
    MOVE_TO,
    CLOSE_PATH,
    LINE_TO,
    HORIZONTAL_LINE_TO,
    VERTICAL_LINE_TO,
    CURVE_TO,
    SMOOTH_CURVE_TO,
    QUADRATIC_CURVE_TO,
    SMOOTH_QUADRATIC_CURVE_TO,
    ELLIPTICAL_ARC,
}
export enum CanvasPointerEvents {
    VISIBLE_MASK,
    PAINTED_MASK,
    FILL_MASK,
    STROKE_MASK,
    NONE,
    VISIBLE_PAINTED,
    VISIBLE_FILL,
    VISIBLE_STROKE,
    VISIBLE,
    PAINTED,
    FILL,
    STROKE,
    ALL,
}
export const CANVAS_POLYLINE_NUM_ARROW_POINTS: number
export function cairoMatrixCopy(matrix: cairo.Matrix): cairo.Matrix
export function cairoMatrixFree(matrix: cairo.Matrix): void
export function canvasItemClassFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
export function canvasItemClassInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
export function canvasItemClassListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
export function canvasItemModelClassFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
export function canvasItemModelClassInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
export function canvasItemModelClassListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
export class CanvasItem {
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItem */
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasItem, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasItem, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasItem, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasItem, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasItem, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
}
export class CanvasItemModel {
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModel */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasItemModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasItemModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasItemModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasItemModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasItemModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasItemModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasItemModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasItemModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasItemModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasItemModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasItemModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
}
export interface Canvas_ConstructProps extends Gtk.Container_ConstructProps {
    anchor?: CanvasAnchorType
    automaticBounds?: boolean
    backgroundColor?: string
    backgroundColorGdkRgba?: Gdk.RGBA
    backgroundColorRgb?: number
    boundsFromOrigin?: boolean
    boundsPadding?: number
    clearBackground?: boolean
    integerLayout?: boolean
    redrawWhenScrolled?: boolean
    resolutionX?: number
    resolutionY?: number
    scale?: number
    scaleX?: number
    scaleY?: number
    units?: Gtk.Unit
    x1?: number
    x2?: number
    y1?: number
    y2?: number
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
export class Canvas {
    /* Properties of GooCanvas.Canvas */
    anchor: CanvasAnchorType
    automaticBounds: boolean
    backgroundColor: string
    backgroundColorGdkRgba: Gdk.RGBA
    backgroundColorRgb: number
    boundsFromOrigin: boolean
    boundsPadding: number
    clearBackground: boolean
    integerLayout: boolean
    redrawWhenScrolled: boolean
    resolutionX: number
    resolutionY: number
    scale: number
    scaleX: number
    scaleY: number
    units: Gtk.Unit
    x1: number
    x2: number
    y1: number
    y2: number
    /* Properties of Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of GooCanvas.Canvas */
    container: Gtk.Container
    rootItemModel: CanvasItemModel
    rootItem: CanvasItem
    bounds: CanvasBounds
    idleId: number
    needUpdate: number
    needEntireSubtreeUpdate: number
    beforeInitialDraw: number
    pointerItem: CanvasItem
    pointerGrabItem: CanvasItem
    pointerGrabInitialItem: CanvasItem
    pointerGrabButton: number
    focusedItem: CanvasItem
    keyboardGrabItem: CanvasItem
    crossingEvent: Gdk.EventCrossing
    canvasWindow: Gdk.Window
    canvasXOffset: number
    canvasYOffset: number
    freezeCount: number
    tmpWindow: Gdk.Window
    modelToItem: GLib.HashTable
    deviceToPixelsX: number
    deviceToPixelsY: number
    widgetItems: object[]
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.Canvas */
    convertBoundsToItemSpace(item: CanvasItem, bounds: CanvasBounds): void
    convertFromItemSpace(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
    convertFromPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convertToItemSpace(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
    convertToPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convertUnitsFromPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convertUnitsToPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    createCairoContext(): cairo.Context
    createItem(model: CanvasItemModel): CanvasItem
    getBounds(): [ /* left */ number | null, /* top */ number | null, /* right */ number | null, /* bottom */ number | null ]
    getDefaultLineWidth(): number
    getItem(model: CanvasItemModel): CanvasItem
    getItemAt(x: number, y: number, isPointerEvent: boolean): CanvasItem
    getItemsAt(x: number, y: number, isPointerEvent: boolean): CanvasItem[]
    getItemsInArea(area: CanvasBounds, insideArea: boolean, allowOverlaps: boolean, includeContainers: boolean): CanvasItem[]
    getRootItem(): CanvasItem
    getRootItemModel(): CanvasItemModel
    getScale(): number
    getStaticRootItem(): CanvasItem
    getStaticRootItemModel(): CanvasItemModel
    grabFocus(item: CanvasItem): void
    keyboardGrab(item: CanvasItem, ownerEvents: boolean, time: number): Gdk.GrabStatus
    keyboardUngrab(item: CanvasItem, time: number): void
    pointerGrab(item: CanvasItem, eventMask: Gdk.EventMask, cursor: Gdk.Cursor | null, time: number): Gdk.GrabStatus
    pointerUngrab(item: CanvasItem, time: number): void
    registerWidgetItem(witem: CanvasWidget): void
    render(cr: cairo.Context, bounds: CanvasBounds | null, scale: number): void
    requestItemRedraw(bounds: CanvasBounds, isStatic: boolean): void
    requestRedraw(bounds: CanvasBounds): void
    requestUpdate(): void
    scrollTo(left: number, top: number): void
    setBounds(left: number, top: number, right: number, bottom: number): void
    setRootItem(item: CanvasItem): void
    setRootItemModel(model: CanvasItemModel): void
    setScale(scale: number): void
    setStaticRootItem(item: CanvasItem): void
    setStaticRootItemModel(model: CanvasItemModel): void
    unregisterItem(model: CanvasItemModel): void
    unregisterWidgetItem(witem: CanvasWidget): void
    update(): void
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    getBuildableId(): string
    /* Methods of Gtk.Scrollable */
    getBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    getHadjustment(): Gtk.Adjustment
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVadjustment(): Gtk.Adjustment
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Virtual methods of GooCanvas.Canvas */
    vfuncCreateItem(model: CanvasItemModel): CanvasItem
    vfuncItemCreated(item: CanvasItem, model: CanvasItemModel): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    vfuncGetBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    /* Virtual methods of Gtk.Container */
    vfuncAdd(widget: Gtk.Widget): void
    vfuncCheckResize(): void
    vfuncChildType(): GObject.Type
    vfuncCompositeName(child: Gtk.Widget): string
    vfuncForall(includeInternals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove(widget: Gtk.Widget): void
    vfuncSetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains(x: number, y: number): boolean
    vfuncCssChanged(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabFocus(): boolean
    vfuncHide(): void
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncMap(): void
    vfuncMeasure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncRoot(): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    vfuncShow(): void
    vfuncSizeAllocate(width: number, height: number, baseline: number): void
    vfuncSnapshot(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged(settings: Gtk.SystemSetting): void
    vfuncUnmap(): void
    vfuncUnrealize(): void
    vfuncUnroot(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas.Canvas */
    connect(sigName: "item-created", callback: (($obj: Canvas, item: CanvasItem, model: CanvasItemModel) => void)): number
    connect_after(sigName: "item-created", callback: (($obj: Canvas, item: CanvasItem, model: CanvasItemModel) => void)): number
    emit(sigName: "item-created", item: CanvasItem, model: CanvasItemModel): void
    on(sigName: "item-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "item-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "item-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-resize", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Canvas) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus-child", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Canvas, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Canvas) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Canvas, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Canvas, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Canvas) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Canvas, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Canvas, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "map", callback: (($obj: Canvas) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Canvas, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Canvas, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Canvas, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Canvas, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Canvas, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Canvas, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Canvas) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "show", callback: (($obj: Canvas) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Canvas, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Canvas, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Canvas) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Canvas) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Canvas) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-bounds", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-bounds", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-bounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-bounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-bounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-gdk-rgba", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-gdk-rgba", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-rgb", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-rgb", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounds-from-origin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounds-from-origin", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounds-from-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounds-from-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounds-from-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounds-padding", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounds-padding", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounds-padding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounds-padding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounds-padding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clear-background", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clear-background", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clear-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clear-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clear-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::integer-layout", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::integer-layout", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::integer-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::integer-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::integer-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::redraw-when-scrolled", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redraw-when-scrolled", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::redraw-when-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::redraw-when-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::redraw-when-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::units", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::units", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y1", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y2", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Canvas, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Canvas_ConstructProps)
    _init (config?: Canvas_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Canvas
    static createPath(commands: CanvasPathCommand[], cr: cairo.Context): void
    static marshalBOOLEANBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalBOOLEANDOUBLEDOUBLEBOOLEANOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalBOOLEANOBJECTBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDINTINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDOBJECTOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static parsePathData(pathData: string): CanvasPathCommand[]
    static $gtype: GObject.Type
}
export interface CanvasAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
export class CanvasAccessibleFactory {
    /* Fields of Atk.ObjectFactory */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Atk.Object
    getAccessibleType(): GObject.Type
    invalidate(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Atk.ObjectFactory */
    vfuncInvalidate(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasAccessibleFactory_ConstructProps)
    _init (config?: CanvasAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasEllipse_ConstructProps extends CanvasItemSimple_ConstructProps {
    centerX?: number
    centerY?: number
    height?: number
    radiusX?: number
    radiusY?: number
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasEllipse {
    /* Properties of GooCanvas.CanvasEllipse */
    centerX: number
    centerY: number
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasEllipse */
    parentObject: CanvasItemSimple
    ellipseData: CanvasEllipseData
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasEllipse, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasEllipse, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasEllipse, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasEllipse, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasEllipse, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::center-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::center-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipse, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasEllipse_ConstructProps)
    _init (config?: CanvasEllipse_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasEllipseModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    centerX?: number
    centerY?: number
    height?: number
    radiusX?: number
    radiusY?: number
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasEllipseModel {
    /* Properties of GooCanvas.CanvasEllipseModel */
    centerX: number
    centerY: number
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasEllipseModel */
    parentObject: CanvasItemModelSimple
    ellipseData: CanvasEllipseData
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasEllipseModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasEllipseModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasEllipseModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasEllipseModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasEllipseModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasEllipseModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasEllipseModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasEllipseModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasEllipseModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasEllipseModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::center-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::center-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasEllipseModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasEllipseModel_ConstructProps)
    _init (config?: CanvasEllipseModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasGrid_ConstructProps extends CanvasItemSimple_ConstructProps {
    borderColor?: string
    borderColorGdkRgba?: Gdk.RGBA
    borderColorRgba?: number
    borderPattern?: any
    borderPixbuf?: GdkPixbuf.Pixbuf
    borderWidth?: number
    height?: number
    horzGridLineColor?: string
    horzGridLineColorGdkRgba?: Gdk.RGBA
    horzGridLineColorRgba?: number
    horzGridLinePattern?: any
    horzGridLinePixbuf?: GdkPixbuf.Pixbuf
    horzGridLineWidth?: number
    showHorzGridLines?: boolean
    showVertGridLines?: boolean
    vertGridLineColor?: string
    vertGridLineColorGdkRgba?: Gdk.RGBA
    vertGridLineColorRgba?: number
    vertGridLinePattern?: any
    vertGridLinePixbuf?: GdkPixbuf.Pixbuf
    vertGridLineWidth?: number
    vertGridLinesOnTop?: boolean
    width?: number
    x?: number
    xOffset?: number
    xStep?: number
    y?: number
    yOffset?: number
    yStep?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasGrid {
    /* Properties of GooCanvas.CanvasGrid */
    borderColor: string
    borderColorGdkRgba: Gdk.RGBA
    borderColorRgba: number
    borderPattern: any
    borderPixbuf: GdkPixbuf.Pixbuf
    borderWidth: number
    height: number
    horzGridLineColor: string
    horzGridLineColorGdkRgba: Gdk.RGBA
    horzGridLineColorRgba: number
    horzGridLinePattern: any
    horzGridLinePixbuf: GdkPixbuf.Pixbuf
    horzGridLineWidth: number
    showHorzGridLines: boolean
    showVertGridLines: boolean
    vertGridLineColor: string
    vertGridLineColorGdkRgba: Gdk.RGBA
    vertGridLineColorRgba: number
    vertGridLinePattern: any
    vertGridLinePixbuf: GdkPixbuf.Pixbuf
    vertGridLineWidth: number
    vertGridLinesOnTop: boolean
    width: number
    x: number
    xOffset: number
    xStep: number
    y: number
    yOffset: number
    yStep: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasGrid */
    parentObject: CanvasItemSimple
    gridData: CanvasGridData
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasGrid, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasGrid, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasGrid, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasGrid, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasGrid, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-offset", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-step", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGrid, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasGrid_ConstructProps)
    _init (config?: CanvasGrid_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasGridModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    borderColor?: string
    borderColorGdkRgba?: Gdk.RGBA
    borderColorRgba?: number
    borderPattern?: any
    borderPixbuf?: GdkPixbuf.Pixbuf
    borderWidth?: number
    height?: number
    horzGridLineColor?: string
    horzGridLineColorGdkRgba?: Gdk.RGBA
    horzGridLineColorRgba?: number
    horzGridLinePattern?: any
    horzGridLinePixbuf?: GdkPixbuf.Pixbuf
    horzGridLineWidth?: number
    showHorzGridLines?: boolean
    showVertGridLines?: boolean
    vertGridLineColor?: string
    vertGridLineColorGdkRgba?: Gdk.RGBA
    vertGridLineColorRgba?: number
    vertGridLinePattern?: any
    vertGridLinePixbuf?: GdkPixbuf.Pixbuf
    vertGridLineWidth?: number
    vertGridLinesOnTop?: boolean
    width?: number
    x?: number
    xOffset?: number
    xStep?: number
    y?: number
    yOffset?: number
    yStep?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasGridModel {
    /* Properties of GooCanvas.CanvasGridModel */
    borderColor: string
    borderColorGdkRgba: Gdk.RGBA
    borderColorRgba: number
    borderPattern: any
    borderPixbuf: GdkPixbuf.Pixbuf
    borderWidth: number
    height: number
    horzGridLineColor: string
    horzGridLineColorGdkRgba: Gdk.RGBA
    horzGridLineColorRgba: number
    horzGridLinePattern: any
    horzGridLinePixbuf: GdkPixbuf.Pixbuf
    horzGridLineWidth: number
    showHorzGridLines: boolean
    showVertGridLines: boolean
    vertGridLineColor: string
    vertGridLineColorGdkRgba: Gdk.RGBA
    vertGridLineColorRgba: number
    vertGridLinePattern: any
    vertGridLinePixbuf: GdkPixbuf.Pixbuf
    vertGridLineWidth: number
    vertGridLinesOnTop: boolean
    width: number
    x: number
    xOffset: number
    xStep: number
    y: number
    yOffset: number
    yStep: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasGridModel */
    parentObject: CanvasItemModelSimple
    gridData: CanvasGridData
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasGridModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasGridModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasGridModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasGridModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasGridModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasGridModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasGridModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasGridModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasGridModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasGridModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-horz-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-vert-grid-lines", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-lines-on-top", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-offset", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-step", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGridModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasGridModel_ConstructProps)
    _init (config?: CanvasGridModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasGroup_ConstructProps extends CanvasItemSimple_ConstructProps {
    height?: number
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasGroup {
    /* Properties of GooCanvas.CanvasGroup */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasGroup */
    parentObject: CanvasItemSimple
    items: object[]
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasGroup, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasGroup, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasGroup, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasGroup, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasGroup, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasGroup_ConstructProps)
    _init (config?: CanvasGroup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasGroupModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    height?: number
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasGroupModel {
    /* Properties of GooCanvas.CanvasGroupModel */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasGroupModel */
    parentObject: CanvasItemModelSimple
    children: object[]
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasGroupModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasGroupModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasGroupModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasGroupModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasGroupModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasGroupModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasGroupModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasGroupModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasGroupModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasGroupModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasGroupModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasGroupModel_ConstructProps)
    _init (config?: CanvasGroupModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasImage_ConstructProps extends CanvasItemSimple_ConstructProps {
    alpha?: number
    height?: number
    pattern?: any
    pixbuf?: GdkPixbuf.Pixbuf
    scaleToFit?: boolean
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasImage {
    /* Properties of GooCanvas.CanvasImage */
    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scaleToFit: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasImage */
    parentObject: CanvasItemSimple
    imageData: CanvasImageData
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasImage, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasImage, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasImage, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasImage, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasImage, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alpha", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasImage_ConstructProps)
    _init (config?: CanvasImage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasImageModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    alpha?: number
    height?: number
    pattern?: any
    pixbuf?: GdkPixbuf.Pixbuf
    scaleToFit?: boolean
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasImageModel {
    /* Properties of GooCanvas.CanvasImageModel */
    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scaleToFit: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasImageModel */
    parentObject: CanvasItemModelSimple
    imageData: CanvasImageData
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasImageModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasImageModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasImageModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasImageModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasImageModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasImageModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasImageModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasImageModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasImageModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasImageModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alpha", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-to-fit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasImageModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasImageModel_ConstructProps)
    _init (config?: CanvasImageModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasItemAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
export class CanvasItemAccessibleFactory {
    /* Fields of Atk.ObjectFactory */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Atk.Object
    getAccessibleType(): GObject.Type
    invalidate(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Atk.ObjectFactory */
    vfuncInvalidate(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasItemAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasItemAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasItemAccessibleFactory_ConstructProps)
    _init (config?: CanvasItemAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasItemModelSimple_ConstructProps extends GObject.Object_ConstructProps {
    antialias?: CairoAntialias
    clipFillRule?: CairoFillRule
    clipPath?: string
    fillColor?: string
    fillColorGdkRgba?: Gdk.RGBA
    fillColorRgba?: number
    fillPattern?: any
    fillPixbuf?: GdkPixbuf.Pixbuf
    fillRule?: CairoFillRule
    font?: string
    fontDesc?: Pango.FontDescription
    hintMetrics?: CairoHintMetrics
    lineCap?: CairoLineCap
    lineDash?: CanvasLineDash
    lineJoin?: CairoLineJoin
    lineJoinMiterLimit?: number
    lineWidth?: number
    operator?: CairoOperator
    strokeColor?: string
    strokeColorGdkRgba?: Gdk.RGBA
    strokeColorRgba?: number
    strokePattern?: any
    strokePixbuf?: GdkPixbuf.Pixbuf
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasItemModelSimple {
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasItemModelSimple */
    parentObject: GObject.Object
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasItemModelSimple, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasItemModelSimple, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasItemModelSimple, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasItemModelSimple, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasItemModelSimple, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasItemModelSimple, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasItemModelSimple, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasItemModelSimple, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasItemModelSimple, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasItemModelSimple, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemModelSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasItemModelSimple_ConstructProps)
    _init (config?: CanvasItemModelSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface CanvasItemSimple_ConstructProps extends GObject.Object_ConstructProps {
    antialias?: CairoAntialias
    clipFillRule?: CairoFillRule
    clipPath?: string
    fillColor?: string
    fillColorGdkRgba?: Gdk.RGBA
    fillColorRgba?: number
    fillPattern?: any
    fillPixbuf?: GdkPixbuf.Pixbuf
    fillRule?: CairoFillRule
    font?: string
    fontDesc?: Pango.FontDescription
    hintMetrics?: CairoHintMetrics
    lineCap?: CairoLineCap
    lineDash?: CanvasLineDash
    lineJoin?: CairoLineJoin
    lineJoinMiterLimit?: number
    lineWidth?: number
    operator?: CairoOperator
    strokeColor?: string
    strokeColorGdkRgba?: Gdk.RGBA
    strokeColorRgba?: number
    strokePattern?: any
    strokePixbuf?: GdkPixbuf.Pixbuf
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasItemSimple {
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasItemSimple, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasItemSimple, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasItemSimple, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasItemSimple, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasItemSimple, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasItemSimple, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasItemSimple_ConstructProps)
    _init (config?: CanvasItemSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface CanvasPath_ConstructProps extends CanvasItemSimple_ConstructProps {
    data?: string
    height?: number
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasPath {
    /* Properties of GooCanvas.CanvasPath */
    data: string
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasPath */
    pathData: CanvasPathData
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasPath, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasPath, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasPath, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasPath, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasPath, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPath, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasPath_ConstructProps)
    _init (config?: CanvasPath_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasPathModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    data?: string
    height?: number
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasPathModel {
    /* Properties of GooCanvas.CanvasPathModel */
    data: string
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasPathModel */
    parentObject: CanvasItemModelSimple
    pathData: CanvasPathData
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasPathModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasPathModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasPathModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasPathModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasPathModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasPathModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasPathModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasPathModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasPathModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasPathModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPathModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasPathModel_ConstructProps)
    _init (config?: CanvasPathModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasPolyline_ConstructProps extends CanvasItemSimple_ConstructProps {
    arrowLength?: number
    arrowTipLength?: number
    arrowWidth?: number
    closePath?: boolean
    endArrow?: boolean
    height?: number
    points?: CanvasPoints
    startArrow?: boolean
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasPolyline {
    /* Properties of GooCanvas.CanvasPolyline */
    arrowLength: number
    arrowTipLength: number
    arrowWidth: number
    closePath: boolean
    endArrow: boolean
    height: number
    points: CanvasPoints
    startArrow: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasPolyline */
    polylineData: CanvasPolylineData
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasPolyline, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasPolyline, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasPolyline, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasPolyline, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasPolyline, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::points", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::points", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-arrow", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolyline, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasPolyline_ConstructProps)
    _init (config?: CanvasPolyline_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasPolylineModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    arrowLength?: number
    arrowTipLength?: number
    arrowWidth?: number
    closePath?: boolean
    endArrow?: boolean
    height?: number
    points?: CanvasPoints
    startArrow?: boolean
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasPolylineModel {
    /* Properties of GooCanvas.CanvasPolylineModel */
    arrowLength: number
    arrowTipLength: number
    arrowWidth: number
    closePath: boolean
    endArrow: boolean
    height: number
    points: CanvasPoints
    startArrow: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasPolylineModel */
    parentObject: CanvasItemModelSimple
    polylineData: CanvasPolylineData
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasPolylineModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasPolylineModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasPolylineModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasPolylineModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasPolylineModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasPolylineModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasPolylineModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasPolylineModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasPolylineModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasPolylineModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-tip-length", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::points", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::points", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-arrow", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasPolylineModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasPolylineModel_ConstructProps)
    _init (config?: CanvasPolylineModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasRect_ConstructProps extends CanvasItemSimple_ConstructProps {
    height?: number
    radiusX?: number
    radiusY?: number
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasRect {
    /* Properties of GooCanvas.CanvasRect */
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasRect */
    rectData: CanvasRectData
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasRect, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasRect, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasRect, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasRect, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasRect, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasRect_ConstructProps)
    _init (config?: CanvasRect_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasRectModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    height?: number
    radiusX?: number
    radiusY?: number
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasRectModel {
    /* Properties of GooCanvas.CanvasRectModel */
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasRectModel */
    parentObject: CanvasItemModelSimple
    rectData: CanvasRectData
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasRectModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasRectModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasRectModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasRectModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasRectModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasRectModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasRectModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasRectModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasRectModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasRectModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasRectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasRectModel_ConstructProps)
    _init (config?: CanvasRectModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasStyle_ConstructProps extends GObject.Object_ConstructProps {
}
export class CanvasStyle {
    /* Fields of GooCanvas.CanvasStyle */
    parent: CanvasStyle
    properties: object[]
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasStyle */
    copy(): CanvasStyle
    getParent(): CanvasStyle
    getProperty(propertyId: GLib.Quark): any
    setFillOptions(cr: cairo.Context): boolean
    setParent(parent: CanvasStyle): void
    setProperty(propertyId: GLib.Quark, value: any): void
    setStrokeOptions(cr: cairo.Context): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasStyle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasStyle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasStyle_ConstructProps)
    _init (config?: CanvasStyle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CanvasStyle
    static $gtype: GObject.Type
}
export interface CanvasTable_ConstructProps extends CanvasGroup_ConstructProps {
    columnSpacing?: number
    homogeneousColumns?: boolean
    homogeneousRows?: boolean
    horzGridLineWidth?: number
    rowSpacing?: number
    vertGridLineWidth?: number
    xBorderSpacing?: number
    yBorderSpacing?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasTable {
    /* Properties of GooCanvas.CanvasTable */
    columnSpacing: number
    homogeneousColumns: boolean
    homogeneousRows: boolean
    horzGridLineWidth: number
    rowSpacing: number
    vertGridLineWidth: number
    xBorderSpacing: number
    yBorderSpacing: number
    /* Properties of GooCanvas.CanvasGroup */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasTable */
    tableData: CanvasTableData
    /* Fields of GooCanvas.CanvasGroup */
    parentObject: CanvasItemSimple
    items: object[]
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasTable, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasTable, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasTable, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasTable, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasTable, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::column-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasTable_ConstructProps)
    _init (config?: CanvasTable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasTableModel_ConstructProps extends CanvasGroupModel_ConstructProps {
    columnSpacing?: number
    homogeneousColumns?: boolean
    homogeneousRows?: boolean
    horzGridLineWidth?: number
    rowSpacing?: number
    vertGridLineWidth?: number
    xBorderSpacing?: number
    yBorderSpacing?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasTableModel {
    /* Properties of GooCanvas.CanvasTableModel */
    columnSpacing: number
    homogeneousColumns: boolean
    homogeneousRows: boolean
    horzGridLineWidth: number
    rowSpacing: number
    vertGridLineWidth: number
    xBorderSpacing: number
    yBorderSpacing: number
    /* Properties of GooCanvas.CanvasGroupModel */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasTableModel */
    parentObject: CanvasGroupModel
    tableData: CanvasTableData
    /* Fields of GooCanvas.CanvasGroupModel */
    children: object[]
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasTableModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasTableModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasTableModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasTableModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasTableModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasTableModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasTableModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasTableModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasTableModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasTableModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::column-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-columns", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-rows", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-border-spacing", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTableModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasTableModel_ConstructProps)
    _init (config?: CanvasTableModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasText_ConstructProps extends CanvasItemSimple_ConstructProps {
    alignment?: Pango.Alignment
    anchor?: CanvasAnchorType
    ellipsize?: Pango.EllipsizeMode
    height?: number
    text?: string
    useMarkup?: boolean
    width?: number
    wrap?: Pango.WrapMode
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasText {
    /* Properties of GooCanvas.CanvasText */
    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string
    useMarkup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasText */
    textData: CanvasTextData
    layoutWidth: number
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasText */
    getNaturalExtents(): [ /* inkRect */ Pango.Rectangle | null, /* logicalRect */ Pango.Rectangle | null ]
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasText, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasText, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasText, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasText, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasText, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ellipsize", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-markup", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasText_ConstructProps)
    _init (config?: CanvasText_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasTextModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    alignment?: Pango.Alignment
    anchor?: CanvasAnchorType
    ellipsize?: Pango.EllipsizeMode
    height?: number
    text?: string
    useMarkup?: boolean
    width?: number
    wrap?: Pango.WrapMode
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasTextModel {
    /* Properties of GooCanvas.CanvasTextModel */
    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string
    useMarkup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasTextModel */
    parentObject: CanvasItemModelSimple
    textData: CanvasTextData
    /* Fields of GooCanvas.CanvasItemModelSimple */
    simpleData: CanvasItemSimpleData
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Virtual methods of GooCanvas.CanvasItemModelSimple */
    vfuncAddChild(child: CanvasItemModel, position: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncChanged(recomputeBounds: boolean): void
    vfuncChildAdded(childNum: number): void
    vfuncChildMoved(oldChildNum: number, newChildNum: number): void
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncChildRemoved(childNum: number): void
    vfuncGetChild(childNum: number): CanvasItemModel
    vfuncGetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItemModel
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(transform: cairo.Matrix): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncRemoveChild(childNum: number): void
    vfuncSetChildProperty(child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetParent(parent: CanvasItemModel): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: (($obj: CanvasTextModel, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasTextModel, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: CanvasTextModel, recomputeBounds: boolean) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CanvasTextModel, recomputeBounds: boolean) => void)): number
    emit(sigName: "changed", recomputeBounds: boolean): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-added", callback: (($obj: CanvasTextModel, childNum: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: CanvasTextModel, childNum: number) => void)): number
    emit(sigName: "child-added", childNum: number): void
    on(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-moved", callback: (($obj: CanvasTextModel, oldChildNum: number, newChildNum: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: CanvasTextModel, oldChildNum: number, newChildNum: number) => void)): number
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    on(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-removed", callback: (($obj: CanvasTextModel, childNum: number) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: CanvasTextModel, childNum: number) => void)): number
    emit(sigName: "child-removed", childNum: number): void
    on(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ellipsize", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-markup", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasTextModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasTextModel_ConstructProps)
    _init (config?: CanvasTextModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasWidget_ConstructProps extends CanvasItemSimple_ConstructProps {
    anchor?: CanvasAnchorType
    height?: number
    widget?: Gtk.Widget
    width?: number
    x?: number
    y?: number
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
export class CanvasWidget {
    /* Properties of GooCanvas.CanvasWidget */
    anchor: CanvasAnchorType
    height: number
    widget: Gtk.Widget
    width: number
    x: number
    y: number
    /* Properties of GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas.CanvasWidget */
    parentObject: CanvasItemSimple
    /* Fields of GooCanvas.CanvasItemSimple */
    canvas: Canvas
    model: CanvasItemModelSimple
    simpleData: CanvasItemSimpleData
    bounds: CanvasBounds
    needUpdate: number
    needEntireSubtreeUpdate: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GooCanvas.CanvasItemSimple */
    vfuncSimpleCreatePath(cr: cairo.Context): void
    vfuncSimpleIsItemAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean): boolean
    vfuncSimplePaint(cr: cairo.Context, bounds: CanvasBounds): void
    vfuncSimpleUpdate(cr: cairo.Context): void
    vfuncAddChild(child: CanvasItem, position: number): void
    vfuncAllocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    vfuncAnimationFinished(stopped: boolean): void
    vfuncButtonPressEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(target: CanvasItem, event: Gdk.EventButton): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncEnterNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncFocusInEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(target: CanvasItem, event: Gdk.EventFocus): boolean
    vfuncGetBounds(): /* bounds */ CanvasBounds
    vfuncGetCanvas(): Canvas
    vfuncGetChild(childNum: number): CanvasItem
    vfuncGetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetIsStatic(): boolean
    vfuncGetItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    vfuncGetModel(): CanvasItemModel
    vfuncGetNChildren(): number
    vfuncGetParent(): CanvasItem
    vfuncGetRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    vfuncGetRequestedHeight(cr: cairo.Context, width: number): number
    vfuncGetStyle(): CanvasStyle
    vfuncGetTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGetTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    vfuncGrabBrokenEvent(target: CanvasItem, event: Gdk.EventGrabBroken): boolean
    vfuncIsVisible(): boolean
    vfuncKeyPressEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(target: CanvasItem, event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(target: CanvasItem, event: Gdk.EventCrossing): boolean
    vfuncMotionNotifyEvent(target: CanvasItem, event: Gdk.EventMotion): boolean
    vfuncMoveChild(oldPosition: number, newPosition: number): void
    vfuncPaint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRemoveChild(childNum: number): void
    vfuncRequestUpdate(): void
    vfuncScrollEvent(target: CanvasItem, event: Gdk.EventScroll): boolean
    vfuncSetCanvas(canvas: Canvas): void
    vfuncSetChildProperty(child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetIsStatic(isStatic: boolean): void
    vfuncSetModel(model: CanvasItemModel): void
    vfuncSetParent(parent: CanvasItem): void
    vfuncSetStyle(style: CanvasStyle): void
    vfuncSetTransform(transform?: cairo.Matrix | null): void
    vfuncUpdate(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: (($obj: CanvasWidget, stopped: boolean) => void)): number
    connect_after(sigName: "animation-finished", callback: (($obj: CanvasWidget, stopped: boolean) => void)): number
    emit(sigName: "animation-finished", stopped: boolean): void
    on(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: CanvasWidget, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CanvasWidget, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: CanvasWidget, targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::widget", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: (($obj: CanvasWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasWidget_ConstructProps)
    _init (config?: CanvasWidget_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CanvasWidgetAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
export class CanvasWidgetAccessibleFactory {
    /* Fields of Atk.ObjectFactory */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Atk.Object
    getAccessibleType(): GObject.Type
    invalidate(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Atk.ObjectFactory */
    vfuncInvalidate(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CanvasWidgetAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CanvasWidgetAccessibleFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasWidgetAccessibleFactory_ConstructProps)
    _init (config?: CanvasWidgetAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
export class CanvasBounds {
    /* Fields of GooCanvas.CanvasBounds */
    x1: number
    y1: number
    x2: number
    y2: number
    static name: string
}
export abstract class CanvasClass {
    /* Fields of GooCanvas.CanvasClass */
    createItem: (canvas: Canvas, model: CanvasItemModel) => CanvasItem
    itemCreated: (canvas: Canvas, item: CanvasItem, model: CanvasItemModel) => void
    static name: string
}
export abstract class CanvasEllipseClass {
    /* Fields of GooCanvas.CanvasEllipseClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export class CanvasEllipseData {
    /* Fields of GooCanvas.CanvasEllipseData */
    centerX: number
    centerY: number
    radiusX: number
    radiusY: number
    static name: string
}
export abstract class CanvasEllipseModelClass {
    /* Fields of GooCanvas.CanvasEllipseModelClass */
    parentClass: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasGridClass {
    /* Fields of GooCanvas.CanvasGridClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export class CanvasGridData {
    /* Fields of GooCanvas.CanvasGridData */
    x: number
    y: number
    width: number
    height: number
    xStep: number
    yStep: number
    xOffset: number
    yOffset: number
    horzGridLineWidth: number
    vertGridLineWidth: number
    horzGridLinePattern: cairo.Pattern
    vertGridLinePattern: cairo.Pattern
    borderWidth: number
    borderPattern: cairo.Pattern
    showHorzGridLines: number
    showVertGridLines: number
    vertGridLinesOnTop: number
    static name: string
}
export abstract class CanvasGridModelClass {
    /* Fields of GooCanvas.CanvasGridModelClass */
    parentClass: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasGroupClass {
    /* Fields of GooCanvas.CanvasGroupClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export abstract class CanvasGroupModelClass {
    /* Fields of GooCanvas.CanvasGroupModelClass */
    parentClass: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasImageClass {
    /* Fields of GooCanvas.CanvasImageClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export class CanvasImageData {
    /* Fields of GooCanvas.CanvasImageData */
    pattern: cairo.Pattern
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export abstract class CanvasImageModelClass {
    /* Fields of GooCanvas.CanvasImageModelClass */
    parentClass: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasItemIface {
    /* Fields of GooCanvas.CanvasItemIface */
    getCanvas: (item: CanvasItem) => Canvas
    setCanvas: (item: CanvasItem, canvas: Canvas) => void
    getNChildren: (item: CanvasItem) => number
    getChild: (item: CanvasItem, childNum: number) => CanvasItem
    requestUpdate: (item: CanvasItem) => void
    addChild: (item: CanvasItem, child: CanvasItem, position: number) => void
    moveChild: (item: CanvasItem, oldPosition: number, newPosition: number) => void
    removeChild: (item: CanvasItem, childNum: number) => void
    getChildProperty: (item: CanvasItem, child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    setChildProperty: (item: CanvasItem, child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    getTransformForChild: (item: CanvasItem, child: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getParent: (item: CanvasItem) => CanvasItem
    setParent: (item: CanvasItem, parent: CanvasItem) => void
    getBounds: (item: CanvasItem) => /* bounds */ CanvasBounds
    getItemsAt: (item: CanvasItem, x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]) => CanvasItem[]
    update: (item: CanvasItem, entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds) => void
    paint: (item: CanvasItem, cr: cairo.Context, bounds: CanvasBounds, scale: number) => void
    getRequestedArea: (item: CanvasItem, cr: cairo.Context, requestedArea: CanvasBounds) => boolean
    allocateArea: (item: CanvasItem, cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number) => void
    getTransform: (item: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    setTransform: (item: CanvasItem, transform?: cairo.Matrix | null) => void
    getStyle: (item: CanvasItem) => CanvasStyle
    setStyle: (item: CanvasItem, style: CanvasStyle) => void
    isVisible: (item: CanvasItem) => boolean
    getRequestedHeight: (item: CanvasItem, cr: cairo.Context, width: number) => number
    getModel: (item: CanvasItem) => CanvasItemModel
    setModel: (item: CanvasItem, model: CanvasItemModel) => void
    enterNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    leaveNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    motionNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventMotion) => boolean
    buttonPressEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    buttonReleaseEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    focusInEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    focusOutEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    keyPressEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    keyReleaseEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    grabBrokenEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventGrabBroken) => boolean
    childNotify: (item: CanvasItem, pspec: GObject.ParamSpec) => void
    queryTooltip: (item: CanvasItem, x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip) => boolean
    getIsStatic: (item: CanvasItem) => boolean
    setIsStatic: (item: CanvasItem, isStatic: boolean) => void
    animationFinished: (item: CanvasItem, stopped: boolean) => void
    scrollEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventScroll) => boolean
    getRequestedAreaForWidth: (item: CanvasItem, cr: cairo.Context, width: number, requestedArea: CanvasBounds) => boolean
    static name: string
}
export abstract class CanvasItemModelIface {
    /* Fields of GooCanvas.CanvasItemModelIface */
    getNChildren: (model: CanvasItemModel) => number
    getChild: (model: CanvasItemModel, childNum: number) => CanvasItemModel
    addChild: (model: CanvasItemModel, child: CanvasItemModel, position: number) => void
    moveChild: (model: CanvasItemModel, oldPosition: number, newPosition: number) => void
    removeChild: (model: CanvasItemModel, childNum: number) => void
    getChildProperty: (model: CanvasItemModel, child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    setChildProperty: (item: CanvasItemModel, child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    getParent: (model: CanvasItemModel) => CanvasItemModel
    setParent: (model: CanvasItemModel, parent: CanvasItemModel) => void
    getTransform: (model: CanvasItemModel, transform: cairo.Matrix) => boolean
    setTransform: (model: CanvasItemModel, transform?: cairo.Matrix | null) => void
    getStyle: (model: CanvasItemModel) => CanvasStyle
    setStyle: (model: CanvasItemModel, style: CanvasStyle) => void
    childAdded: (model: CanvasItemModel, childNum: number) => void
    childMoved: (model: CanvasItemModel, oldChildNum: number, newChildNum: number) => void
    childRemoved: (model: CanvasItemModel, childNum: number) => void
    changed: (model: CanvasItemModel, recomputeBounds: boolean) => void
    childNotify: (model: CanvasItemModel, pspec: GObject.ParamSpec) => void
    animationFinished: (model: CanvasItemModel, stopped: boolean) => void
    static name: string
}
export abstract class CanvasItemModelSimpleClass {
    /* Fields of GooCanvas.CanvasItemModelSimpleClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CanvasItemSimpleClass {
    /* Fields of GooCanvas.CanvasItemSimpleClass */
    simpleCreatePath: (simple: CanvasItemSimple, cr: cairo.Context) => void
    simpleUpdate: (simple: CanvasItemSimple, cr: cairo.Context) => void
    simplePaint: (simple: CanvasItemSimple, cr: cairo.Context, bounds: CanvasBounds) => void
    simpleIsItemAt: (simple: CanvasItemSimple, x: number, y: number, cr: cairo.Context, isPointerEvent: boolean) => boolean
    static name: string
}
export class CanvasItemSimpleData {
    /* Fields of GooCanvas.CanvasItemSimpleData */
    style: CanvasStyle
    transform: cairo.Matrix
    clipPathCommands: object[]
    tooltip: string
    visibilityThreshold: number
    visibility: number
    pointerEvents: number
    canFocus: number
    ownStyle: number
    clipFillRule: number
    isStatic: number
    static name: string
}
export class CanvasLineDash {
    /* Fields of GooCanvas.CanvasLineDash */
    refCount: number
    numDashes: number
    dashes: number
    dashOffset: number
    /* Methods of GooCanvas.CanvasLineDash */
    ref(): CanvasLineDash
    setOffset(dashOffset: number): void
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newv(dashes: number[]): CanvasLineDash
}
export abstract class CanvasPathClass {
    /* Fields of GooCanvas.CanvasPathClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export class CanvasPathData {
    /* Fields of GooCanvas.CanvasPathData */
    pathCommands: object[]
    static name: string
}
export abstract class CanvasPathModelClass {
    /* Fields of GooCanvas.CanvasPathModelClass */
    parentClass: CanvasItemModelSimpleClass
    static name: string
}
export class CanvasPoints {
    /* Fields of GooCanvas.CanvasPoints */
    coords: number
    numPoints: number
    refCount: number
    /* Methods of GooCanvas.CanvasPoints */
    getPoint(idx: number): [ /* x */ number, /* y */ number ]
    ref(): CanvasPoints
    setPoint(idx: number, x: number, y: number): void
    unref(): void
    static name: string
    static new(numPoints: number): CanvasPoints
    constructor(numPoints: number)
    /* Static methods and pseudo-constructors */
    static new(numPoints: number): CanvasPoints
}
export class CanvasPolylineArrowData {
    /* Fields of GooCanvas.CanvasPolylineArrowData */
    arrowWidth: number
    arrowLength: number
    arrowTipLength: number
    lineStart: number[]
    lineEnd: number[]
    startArrowCoords: number[]
    endArrowCoords: number[]
    static name: string
}
export abstract class CanvasPolylineClass {
    /* Fields of GooCanvas.CanvasPolylineClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export class CanvasPolylineData {
    /* Fields of GooCanvas.CanvasPolylineData */
    coords: number
    arrowData: CanvasPolylineArrowData
    numPoints: number
    closePath: number
    startArrow: number
    endArrow: number
    reconfigureArrows: number
    static name: string
}
export abstract class CanvasPolylineModelClass {
    /* Fields of GooCanvas.CanvasPolylineModelClass */
    parentClass: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasRectClass {
    /* Fields of GooCanvas.CanvasRectClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export class CanvasRectData {
    /* Fields of GooCanvas.CanvasRectData */
    x: number
    y: number
    width: number
    height: number
    radiusX: number
    radiusY: number
    static name: string
}
export abstract class CanvasRectModelClass {
    /* Fields of GooCanvas.CanvasRectModelClass */
    parentClass: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasStyleClass {
    /* Fields of GooCanvas.CanvasStyleClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CanvasStyleProperty {
    /* Fields of GooCanvas.CanvasStyleProperty */
    id: GLib.Quark
    value: any
    static name: string
}
export abstract class CanvasTableClass {
    /* Fields of GooCanvas.CanvasTableClass */
    parentClass: CanvasGroupClass
    static name: string
}
export class CanvasTableData {
    /* Fields of GooCanvas.CanvasTableData */
    width: number
    height: number
    dimensions: CanvasTableDimension[]
    borderWidth: number
    children: object[]
    layoutData: CanvasTableLayoutData
    static name: string
}
export class CanvasTableDimension {
    /* Fields of GooCanvas.CanvasTableDimension */
    size: number
    defaultSpacing: number
    spacings: number
    homogeneous: number
    static name: string
}
export class CanvasTableLayoutData {
    static name: string
}
export abstract class CanvasTableModelClass {
    /* Fields of GooCanvas.CanvasTableModelClass */
    parentClass: CanvasGroupModelClass
    static name: string
}
export abstract class CanvasTextClass {
    /* Fields of GooCanvas.CanvasTextClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export class CanvasTextData {
    /* Fields of GooCanvas.CanvasTextData */
    text: string
    x: number
    y: number
    width: number
    useMarkup: number
    anchor: number
    alignment: number
    ellipsize: number
    wrap: number
    static name: string
}
export abstract class CanvasTextModelClass {
    /* Fields of GooCanvas.CanvasTextModelClass */
    parentClass: CanvasItemModelSimpleClass
    static name: string
}
export abstract class CanvasWidgetClass {
    /* Fields of GooCanvas.CanvasWidgetClass */
    parentClass: CanvasItemSimpleClass
    static name: string
}
export class CanvasPathCommand {
    static name: string
}
}