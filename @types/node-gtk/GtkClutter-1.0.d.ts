/**
 * GtkClutter-1.0
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
/// <reference path="Clutter-1.0.d.ts" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />
/// <reference path="CoglPango-1.0.d.ts" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="Cogl-1.0.d.ts" />

declare namespace GtkClutter {

export enum TextureError {
    TEXTURE_ERROR_INVALID_STOCK_ID,
}
export function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export function initWithArgs(argv?: string[] | null, parameterString?: string | null, entries?: GLib.OptionEntry[] | null, translationDomain?: string | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export interface Actor_ConstructProps extends Clutter.Actor_ConstructProps {
    contents?: Gtk.Widget
}
export class Actor {
    /* Properties of GtkClutter.Actor */
    contents: Gtk.Widget
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    anchorGravity: Clutter.Gravity
    anchorX: number
    anchorY: number
    backgroundColor: Clutter.Color
    readonly backgroundColorSet: boolean
    childTransform: Clutter.Matrix
    readonly childTransformSet: boolean
    clip: Clutter.Geometry
    clipRect: Clutter.Rect
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly contentBox: Clutter.ActorBox
    contentGravity: Clutter.ContentGravity
    contentRepeat: Clutter.ContentRepeat
    depth: number
    effect: Clutter.Effect
    readonly firstChild: Clutter.Actor
    fixedPositionSet: boolean
    fixedX: number
    fixedY: number
    readonly hasClip: boolean
    readonly hasPointer: boolean
    height: number
    readonly lastChild: Clutter.Actor
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    marginBottom: number
    marginLeft: number
    marginRight: number
    marginTop: number
    minHeight: number
    minHeightSet: boolean
    minWidth: number
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    name: string
    naturalHeight: number
    naturalHeightSet: boolean
    naturalWidth: number
    naturalWidthSet: boolean
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivotPoint: Clutter.Point
    pivotPointZ: number
    position: Clutter.Point
    reactive: boolean
    readonly realized: boolean
    requestMode: Clutter.RequestMode
    rotationAngleX: number
    rotationAngleY: number
    rotationAngleZ: number
    rotationCenterX: Clutter.Vertex
    rotationCenterY: Clutter.Vertex
    rotationCenterZ: Clutter.Vertex
    rotationCenterZGravity: Clutter.Gravity
    scaleCenterX: number
    scaleCenterY: number
    scaleGravity: Clutter.Gravity
    scaleX: number
    scaleY: number
    scaleZ: number
    showOnSetParent: boolean
    size: Clutter.Size
    textDirection: Clutter.TextDirection
    transform: Clutter.Matrix
    readonly transformSet: boolean
    translationX: number
    translationY: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    xAlign: Clutter.ActorAlign
    xExpand: boolean
    y: number
    yAlign: Clutter.ActorAlign
    yExpand: boolean
    zPosition: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkClutter.Actor */
    getContents(): Gtk.Widget
    getWidget(): Gtk.Widget
    /* Methods of Clutter.Actor */
    addAction(action: Clutter.Action): void
    addActionWithName(name: string, action: Clutter.Action): void
    addChild(child: Clutter.Actor): void
    addConstraint(constraint: Clutter.Constraint): void
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    addEffect(effect: Clutter.Effect): void
    addEffectWithName(name: string, effect: Clutter.Effect): void
    addTransition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean, flags: Clutter.AllocationFlags): void
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number, flags: Clutter.AllocationFlags): void
    allocatePreferredSize(flags: Clutter.AllocationFlags): void
    animateWithAlphav(alpha: Clutter.Alpha, properties: string[], values: any): Clutter.Animation
    animateWithTimelinev(mode: number, timeline: Clutter.Timeline, properties: string[], values: any): Clutter.Animation
    animatev(mode: number, duration: number, properties: string[], values: any): Clutter.Animation
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    applyTransformToPoint(point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    clearActions(): void
    clearConstraints(): void
    clearEffects(): void
    contains(descendant: Clutter.Actor): boolean
    continuePaint(): void
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyAllChildren(): void
    detachAnimation(): void
    event(event: Clutter.Event, capture: boolean): boolean
    getAbsAllocationVertices(): /* verts */ Clutter.Vertex[]
    getAccessible(): Atk.Object
    getAction(name: string): Clutter.Action
    getActions(): Clutter.Action[]
    getAllocationBox(): /* box */ Clutter.ActorBox
    getAllocationGeometry(): /* geom */ Clutter.Geometry
    getAllocationVertices(ancestor?: Clutter.Actor | null): /* verts */ Clutter.Vertex[]
    getAnchorPoint(): [ /* anchorX */ number, /* anchorY */ number ]
    getAnchorPointGravity(): Clutter.Gravity
    getAnimation(): Clutter.Animation
    getBackgroundColor(): /* color */ Clutter.Color
    getChildAtIndex(index: number): Clutter.Actor
    getChildTransform(): /* transform */ Clutter.Matrix
    getChildren(): Clutter.Actor[]
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    getClipToAllocation(): boolean
    getConstraint(name: string): Clutter.Constraint
    getConstraints(): Clutter.Constraint[]
    getContent(): Clutter.Content
    getContentBox(): /* box */ Clutter.ActorBox
    getContentGravity(): Clutter.ContentGravity
    getContentRepeat(): Clutter.ContentRepeat
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    getDefaultPaintVolume(): Clutter.PaintVolume
    getDepth(): number
    getEasingDelay(): number
    getEasingDuration(): number
    getEasingMode(): Clutter.AnimationMode
    getEffect(name: string): Clutter.Effect
    getEffects(): Clutter.Effect[]
    getFirstChild(): Clutter.Actor
    getFixedPositionSet(): boolean
    getFlags(): Clutter.ActorFlags
    getGeometry(): /* geometry */ Clutter.Geometry
    getGid(): number
    getHeight(): number
    getLastChild(): Clutter.Actor
    getLayoutManager(): Clutter.LayoutManager
    getMargin(): /* margin */ Clutter.Margin
    getMarginBottom(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginTop(): number
    getNChildren(): number
    getName(): string
    getNextSibling(): Clutter.Actor
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    getOpacity(): number
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    getPaintOpacity(): number
    getPaintVisibility(): boolean
    getPaintVolume(): Clutter.PaintVolume
    getPangoContext(): Pango.Context
    getParent(): Clutter.Actor
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    getPivotPointZ(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    getPreviousSibling(): Clutter.Actor
    getReactive(): boolean
    getRequestMode(): Clutter.RequestMode
    getRotation(axis: Clutter.RotateAxis): [ /* returnType */ number, /* x */ number, /* y */ number, /* z */ number ]
    getRotationAngle(axis: Clutter.RotateAxis): number
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    getScaleCenter(): [ /* centerX */ number | null, /* centerY */ number | null ]
    getScaleGravity(): Clutter.Gravity
    getScaleZ(): number
    getShader(): Clutter.Shader
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getStage(): Clutter.Stage
    getTextDirection(): Clutter.TextDirection
    getTransform(): /* transform */ Clutter.Matrix
    getTransformationMatrix(): /* matrix */ Clutter.Matrix
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    getTransition(name: string): Clutter.Transition
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    getWidth(): number
    getX(): number
    getXAlign(): Clutter.ActorAlign
    getXExpand(): boolean
    getY(): number
    getYAlign(): Clutter.ActorAlign
    getYExpand(): boolean
    getZPosition(): number
    getZRotationGravity(): Clutter.Gravity
    grabKeyFocus(): void
    hasActions(): boolean
    hasAllocation(): boolean
    hasConstraints(): boolean
    hasEffects(): boolean
    hasKeyFocus(): boolean
    hasOverlaps(): boolean
    hide(): void
    hideAll(): void
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    isInClonePaint(): boolean
    isMapped(): boolean
    isRealized(): boolean
    isRotated(): boolean
    isScaled(): boolean
    isVisible(): boolean
    lower(above?: Clutter.Actor | null): void
    lowerBottom(): void
    map(): void
    moveAnchorPoint(anchorX: number, anchorY: number): void
    moveAnchorPointFromGravity(gravity: Clutter.Gravity): void
    moveBy(dx: number, dy: number): void
    needsExpand(orientation: Clutter.Orientation): boolean
    paint(): void
    popInternal(): void
    pushInternal(): void
    queueRedraw(): void
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    queueRelayout(): void
    raise(below?: Clutter.Actor | null): void
    raiseTop(): void
    realize(): void
    removeAction(action: Clutter.Action): void
    removeActionByName(name: string): void
    removeAllChildren(): void
    removeAllTransitions(): void
    removeChild(child: Clutter.Actor): void
    removeClip(): void
    removeConstraint(constraint: Clutter.Constraint): void
    removeConstraintByName(name: string): void
    removeEffect(effect: Clutter.Effect): void
    removeEffectByName(name: string): void
    removeTransition(name: string): void
    reparent(newParent: Clutter.Actor): void
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    restoreEasingState(): void
    saveEasingState(): void
    setAllocation(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    setAnchorPoint(anchorX: number, anchorY: number): void
    setAnchorPointFromGravity(gravity: Clutter.Gravity): void
    setBackgroundColor(color?: Clutter.Color | null): void
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildAtIndex(child: Clutter.Actor, index: number): void
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildTransform(transform?: Clutter.Matrix | null): void
    setClip(xoff: number, yoff: number, width: number, height: number): void
    setClipToAllocation(clipSet: boolean): void
    setContent(content?: Clutter.Content | null): void
    setContentGravity(gravity: Clutter.ContentGravity): void
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    setDepth(depth: number): void
    setEasingDelay(msecs: number): void
    setEasingDuration(msecs: number): void
    setEasingMode(mode: Clutter.AnimationMode): void
    setFixedPositionSet(isSet: boolean): void
    setFlags(flags: Clutter.ActorFlags): void
    setGeometry(geometry: Clutter.Geometry): void
    setHeight(height: number): void
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    setMargin(margin: Clutter.Margin): void
    setMarginBottom(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    setOpacity(opacity: number): void
    setParent(parent: Clutter.Actor): void
    setPivotPoint(pivotX: number, pivotY: number): void
    setPivotPointZ(pivotZ: number): void
    setPosition(x: number, y: number): void
    setReactive(reactive: boolean): void
    setRequestMode(mode: Clutter.RequestMode): void
    setRotation(axis: Clutter.RotateAxis, angle: number, x: number, y: number, z: number): void
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    setScale(scaleX: number, scaleY: number): void
    setScaleFull(scaleX: number, scaleY: number, centerX: number, centerY: number): void
    setScaleWithGravity(scaleX: number, scaleY: number, gravity: Clutter.Gravity): void
    setScaleZ(scaleZ: number): void
    setShader(shader?: Clutter.Shader | null): boolean
    setShaderParam(param: string, value: any): void
    setShaderParamFloat(param: string, value: number): void
    setShaderParamInt(param: string, value: number): void
    setSize(width: number, height: number): void
    setTextDirection(textDir: Clutter.TextDirection): void
    setTransform(transform?: Clutter.Matrix | null): void
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    setWidth(width: number): void
    setX(x: number): void
    setXAlign(xAlign: Clutter.ActorAlign): void
    setXExpand(expand: boolean): void
    setY(y: number): void
    setYAlign(yAlign: Clutter.ActorAlign): void
    setYExpand(expand: boolean): void
    setZPosition(zPosition: number): void
    setZRotationFromGravity(angle: number, gravity: Clutter.Gravity): void
    shouldPickPaint(): boolean
    show(): void
    showAll(): void
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetFlags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    animateProperty(animation: Clutter.Animation, propertyName: string, initialValue: any, finalValue: any, progress: number, value: any): boolean
    findProperty(propertyName: string): GObject.ParamSpec
    getInitialState(propertyName: string, value: any): void
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter.Container */
    addActor(actor: Clutter.Actor): void
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    createChildMeta(actor: Clutter.Actor): void
    destroyChildMeta(actor: Clutter.Actor): void
    findChildByName(childName: string): Clutter.Actor
    foreach(callback: Clutter.Callback): void
    foreachWithInternals(callback: Clutter.Callback): void
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    removeActor(actor: Clutter.Actor): void
    sortDepthOrder(): void
    /* Methods of Clutter.Scriptable */
    getId(): string
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    setId(id: string): void
    /* Virtual methods of GtkClutter.Actor */
    vfuncAnimateProperty(animation: Clutter.Animation, propertyName: string, initialValue: any, finalValue: any, progress: number, value: any): boolean
    vfuncFindProperty(propertyName: string): GObject.ParamSpec
    vfuncGetInitialState(propertyName: string, value: any): void
    vfuncInterpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfuncSetFinalState(propertyName: string, value: any): void
    vfuncActorAdded(actor: Clutter.Actor): void
    vfuncActorRemoved(actor: Clutter.Actor): void
    vfuncAdd(actor: Clutter.Actor): void
    vfuncChildNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfuncCreateChildMeta(actor: Clutter.Actor): void
    vfuncDestroyChildMeta(actor: Clutter.Actor): void
    vfuncForeach(callback: Clutter.Callback): void
    vfuncForeachWithInternals(callback: Clutter.Callback): void
    vfuncGetChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    vfuncLower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRaise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRemove(actor: Clutter.Actor): void
    vfuncSortDepthOrder(): void
    vfuncGetId(): string
    vfuncParseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfuncSetCustomProperty(script: Clutter.Script, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Clutter.Actor */
    vfuncAllocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    vfuncApplyTransform(matrix: Clutter.Matrix): void
    vfuncButtonPressEvent(event: Clutter.ButtonEvent): boolean
    vfuncButtonReleaseEvent(event: Clutter.ButtonEvent): boolean
    vfuncCapturedEvent(event: Clutter.Event): boolean
    vfuncDestroy(): void
    vfuncEnterEvent(event: Clutter.CrossingEvent): boolean
    vfuncEvent(event: Clutter.Event): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPaintVolume(volume: Clutter.PaintVolume): boolean
    vfuncGetPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    vfuncGetPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    vfuncHasOverlaps(): boolean
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncKeyFocusIn(): void
    vfuncKeyFocusOut(): void
    vfuncKeyPressEvent(event: Clutter.KeyEvent): boolean
    vfuncKeyReleaseEvent(event: Clutter.KeyEvent): boolean
    vfuncLeaveEvent(event: Clutter.CrossingEvent): boolean
    vfuncMap(): void
    vfuncMotionEvent(event: Clutter.MotionEvent): boolean
    vfuncPaint(): void
    vfuncPaintNode(root: Clutter.PaintNode): void
    vfuncParentSet(oldParent: Clutter.Actor): void
    vfuncPick(color: Clutter.Color): void
    vfuncQueueRedraw(leafThatQueued: Clutter.Actor): void
    vfuncQueueRelayout(): void
    vfuncRealize(): void
    vfuncScrollEvent(event: Clutter.ScrollEvent): boolean
    vfuncShow(): void
    vfuncShowAll(): void
    vfuncTouchEvent(event: Clutter.TouchEvent): boolean
    vfuncUnmap(): void
    vfuncUnrealize(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Actor, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Actor, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    on(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: Actor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Actor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: Actor, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Actor, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "captured-event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    on(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Actor) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-event", callback: (($obj: Actor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Actor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    on(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Actor) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-in", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Actor) => void)): number
    emit(sigName: "key-focus-in"): void
    on(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-out", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Actor) => void)): number
    emit(sigName: "key-focus-out"): void
    on(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: Actor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Actor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: Actor, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Actor, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-event", callback: (($obj: Actor, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Actor, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    on(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-event", callback: (($obj: Actor, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Actor, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    on(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paint", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Actor) => void)): number
    emit(sigName: "paint"): void
    on(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: Actor, oldParent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Actor, oldParent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick", callback: (($obj: Actor, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Actor, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    on(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-redraw", callback: (($obj: Actor, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Actor, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    on(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-relayout", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Actor) => void)): number
    emit(sigName: "queue-relayout"): void
    on(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Actor) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: Actor, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Actor, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "show", callback: (($obj: Actor) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Actor, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transition-stopped", callback: (($obj: Actor, name: string, isFinished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Actor, name: string, isFinished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    on(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitions-completed", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Actor) => void)): number
    emit(sigName: "transitions-completed"): void
    on(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Actor) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Actor) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Actor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Actor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    on(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "actor-removed", callback: (($obj: Actor, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Actor, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    on(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: Actor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Actor, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::depth", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Actor_ConstructProps)
    _init (config?: Actor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Actor
    static newWithContents(contents: Gtk.Widget): Actor
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Embed_ConstructProps extends Gtk.Container_ConstructProps {
    useLayoutSize?: boolean
}
export class Embed {
    /* Properties of GtkClutter.Embed */
    useLayoutSize: boolean
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
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkClutter.Embed */
    getStage(): Clutter.Actor
    getUseLayoutSize(): boolean
    setUseLayoutSize(useLayoutSize: boolean): void
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
    /* Virtual methods of GtkClutter.Embed */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
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
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-resize", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Embed) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus-child", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Embed, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Embed) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Embed, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Embed, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Embed) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Embed, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Embed, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "map", callback: (($obj: Embed) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Embed, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Embed, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Embed, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Embed, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Embed, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Embed, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Embed) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "show", callback: (($obj: Embed) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Embed, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Embed, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Embed) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Embed) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Embed) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-layout-size", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-layout-size", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-layout-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-layout-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-layout-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Embed, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Embed_ConstructProps)
    _init (config?: Embed_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Embed
    static $gtype: GObject.Type
}
export interface Texture_ConstructProps extends Clutter.Texture_ConstructProps {
}
export class Texture {
    /* Properties of Clutter.Texture */
    filename: string
    filterQuality: Clutter.TextureQuality
    keepAspectRatio: boolean
    loadAsync: boolean
    loadDataAsync: boolean
    pickWithAlpha: boolean
    readonly pixelFormat: Cogl.PixelFormat
    repeatX: boolean
    repeatY: boolean
    syncSize: boolean
    readonly tileWaste: number
    /* Properties of Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    anchorGravity: Clutter.Gravity
    anchorX: number
    anchorY: number
    backgroundColor: Clutter.Color
    readonly backgroundColorSet: boolean
    childTransform: Clutter.Matrix
    readonly childTransformSet: boolean
    clip: Clutter.Geometry
    clipRect: Clutter.Rect
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly contentBox: Clutter.ActorBox
    contentGravity: Clutter.ContentGravity
    contentRepeat: Clutter.ContentRepeat
    depth: number
    effect: Clutter.Effect
    readonly firstChild: Clutter.Actor
    fixedPositionSet: boolean
    fixedX: number
    fixedY: number
    readonly hasClip: boolean
    readonly hasPointer: boolean
    height: number
    readonly lastChild: Clutter.Actor
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    marginBottom: number
    marginLeft: number
    marginRight: number
    marginTop: number
    minHeight: number
    minHeightSet: boolean
    minWidth: number
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    name: string
    naturalHeight: number
    naturalHeightSet: boolean
    naturalWidth: number
    naturalWidthSet: boolean
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivotPoint: Clutter.Point
    pivotPointZ: number
    position: Clutter.Point
    reactive: boolean
    readonly realized: boolean
    requestMode: Clutter.RequestMode
    rotationAngleX: number
    rotationAngleY: number
    rotationAngleZ: number
    rotationCenterX: Clutter.Vertex
    rotationCenterY: Clutter.Vertex
    rotationCenterZ: Clutter.Vertex
    rotationCenterZGravity: Clutter.Gravity
    scaleCenterX: number
    scaleCenterY: number
    scaleGravity: Clutter.Gravity
    scaleX: number
    scaleY: number
    scaleZ: number
    showOnSetParent: boolean
    size: Clutter.Size
    textDirection: Clutter.TextDirection
    transform: Clutter.Matrix
    readonly transformSet: boolean
    translationX: number
    translationY: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    xAlign: Clutter.ActorAlign
    xExpand: boolean
    y: number
    yAlign: Clutter.ActorAlign
    yExpand: boolean
    zPosition: number
    /* Fields of Clutter.Actor */
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkClutter.Texture */
    setFromIconName(widget: Gtk.Widget | null, iconName: string, iconSize: Gtk.IconSize): boolean
    setFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean
    setFromStock(widget: Gtk.Widget, stockId: string, iconSize: Gtk.IconSize): boolean
    /* Methods of Clutter.Texture */
    getBaseSize(): [ /* width */ number, /* height */ number ]
    getCoglMaterial(): Cogl.Handle
    getCoglTexture(): Cogl.Handle
    getFilterQuality(): Clutter.TextureQuality
    getKeepAspectRatio(): boolean
    getLoadAsync(): boolean
    getLoadDataAsync(): boolean
    getMaxTileWaste(): number
    getPickWithAlpha(): boolean
    getPixelFormat(): Cogl.PixelFormat
    getRepeat(): [ /* repeatX */ boolean, /* repeatY */ boolean ]
    getSyncSize(): boolean
    setAreaFromRgbData(data: any, hasAlpha: boolean, x: number, y: number, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    setCoglMaterial(coglMaterial: Cogl.Handle): void
    setCoglTexture(coglTex: Cogl.Handle): void
    setFilterQuality(filterQuality: Clutter.TextureQuality): void
    setFromFile(filename: string): boolean
    setFromRgbData(data: any, hasAlpha: boolean, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    setFromYuvData(data: any, width: number, height: number, flags: Clutter.TextureFlags): boolean
    setKeepAspectRatio(keepAspect: boolean): void
    setLoadAsync(loadAsync: boolean): void
    setLoadDataAsync(loadAsync: boolean): void
    setPickWithAlpha(pickWithAlpha: boolean): void
    setRepeat(repeatX: boolean, repeatY: boolean): void
    setSyncSize(syncSize: boolean): void
    /* Methods of Clutter.Actor */
    addAction(action: Clutter.Action): void
    addActionWithName(name: string, action: Clutter.Action): void
    addChild(child: Clutter.Actor): void
    addConstraint(constraint: Clutter.Constraint): void
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    addEffect(effect: Clutter.Effect): void
    addEffectWithName(name: string, effect: Clutter.Effect): void
    addTransition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean, flags: Clutter.AllocationFlags): void
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number, flags: Clutter.AllocationFlags): void
    allocatePreferredSize(flags: Clutter.AllocationFlags): void
    animateWithAlphav(alpha: Clutter.Alpha, properties: string[], values: any): Clutter.Animation
    animateWithTimelinev(mode: number, timeline: Clutter.Timeline, properties: string[], values: any): Clutter.Animation
    animatev(mode: number, duration: number, properties: string[], values: any): Clutter.Animation
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    applyTransformToPoint(point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    clearActions(): void
    clearConstraints(): void
    clearEffects(): void
    contains(descendant: Clutter.Actor): boolean
    continuePaint(): void
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyAllChildren(): void
    detachAnimation(): void
    event(event: Clutter.Event, capture: boolean): boolean
    getAbsAllocationVertices(): /* verts */ Clutter.Vertex[]
    getAccessible(): Atk.Object
    getAction(name: string): Clutter.Action
    getActions(): Clutter.Action[]
    getAllocationBox(): /* box */ Clutter.ActorBox
    getAllocationGeometry(): /* geom */ Clutter.Geometry
    getAllocationVertices(ancestor?: Clutter.Actor | null): /* verts */ Clutter.Vertex[]
    getAnchorPoint(): [ /* anchorX */ number, /* anchorY */ number ]
    getAnchorPointGravity(): Clutter.Gravity
    getAnimation(): Clutter.Animation
    getBackgroundColor(): /* color */ Clutter.Color
    getChildAtIndex(index: number): Clutter.Actor
    getChildTransform(): /* transform */ Clutter.Matrix
    getChildren(): Clutter.Actor[]
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    getClipToAllocation(): boolean
    getConstraint(name: string): Clutter.Constraint
    getConstraints(): Clutter.Constraint[]
    getContent(): Clutter.Content
    getContentBox(): /* box */ Clutter.ActorBox
    getContentGravity(): Clutter.ContentGravity
    getContentRepeat(): Clutter.ContentRepeat
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    getDefaultPaintVolume(): Clutter.PaintVolume
    getDepth(): number
    getEasingDelay(): number
    getEasingDuration(): number
    getEasingMode(): Clutter.AnimationMode
    getEffect(name: string): Clutter.Effect
    getEffects(): Clutter.Effect[]
    getFirstChild(): Clutter.Actor
    getFixedPositionSet(): boolean
    getFlags(): Clutter.ActorFlags
    getGeometry(): /* geometry */ Clutter.Geometry
    getGid(): number
    getHeight(): number
    getLastChild(): Clutter.Actor
    getLayoutManager(): Clutter.LayoutManager
    getMargin(): /* margin */ Clutter.Margin
    getMarginBottom(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginTop(): number
    getNChildren(): number
    getName(): string
    getNextSibling(): Clutter.Actor
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    getOpacity(): number
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    getPaintOpacity(): number
    getPaintVisibility(): boolean
    getPaintVolume(): Clutter.PaintVolume
    getPangoContext(): Pango.Context
    getParent(): Clutter.Actor
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    getPivotPointZ(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    getPreviousSibling(): Clutter.Actor
    getReactive(): boolean
    getRequestMode(): Clutter.RequestMode
    getRotation(axis: Clutter.RotateAxis): [ /* returnType */ number, /* x */ number, /* y */ number, /* z */ number ]
    getRotationAngle(axis: Clutter.RotateAxis): number
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    getScaleCenter(): [ /* centerX */ number | null, /* centerY */ number | null ]
    getScaleGravity(): Clutter.Gravity
    getScaleZ(): number
    getShader(): Clutter.Shader
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getStage(): Clutter.Stage
    getTextDirection(): Clutter.TextDirection
    getTransform(): /* transform */ Clutter.Matrix
    getTransformationMatrix(): /* matrix */ Clutter.Matrix
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    getTransition(name: string): Clutter.Transition
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    getWidth(): number
    getX(): number
    getXAlign(): Clutter.ActorAlign
    getXExpand(): boolean
    getY(): number
    getYAlign(): Clutter.ActorAlign
    getYExpand(): boolean
    getZPosition(): number
    getZRotationGravity(): Clutter.Gravity
    grabKeyFocus(): void
    hasActions(): boolean
    hasAllocation(): boolean
    hasConstraints(): boolean
    hasEffects(): boolean
    hasKeyFocus(): boolean
    hasOverlaps(): boolean
    hide(): void
    hideAll(): void
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    isInClonePaint(): boolean
    isMapped(): boolean
    isRealized(): boolean
    isRotated(): boolean
    isScaled(): boolean
    isVisible(): boolean
    lower(above?: Clutter.Actor | null): void
    lowerBottom(): void
    map(): void
    moveAnchorPoint(anchorX: number, anchorY: number): void
    moveAnchorPointFromGravity(gravity: Clutter.Gravity): void
    moveBy(dx: number, dy: number): void
    needsExpand(orientation: Clutter.Orientation): boolean
    paint(): void
    popInternal(): void
    pushInternal(): void
    queueRedraw(): void
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    queueRelayout(): void
    raise(below?: Clutter.Actor | null): void
    raiseTop(): void
    realize(): void
    removeAction(action: Clutter.Action): void
    removeActionByName(name: string): void
    removeAllChildren(): void
    removeAllTransitions(): void
    removeChild(child: Clutter.Actor): void
    removeClip(): void
    removeConstraint(constraint: Clutter.Constraint): void
    removeConstraintByName(name: string): void
    removeEffect(effect: Clutter.Effect): void
    removeEffectByName(name: string): void
    removeTransition(name: string): void
    reparent(newParent: Clutter.Actor): void
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    restoreEasingState(): void
    saveEasingState(): void
    setAllocation(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    setAnchorPoint(anchorX: number, anchorY: number): void
    setAnchorPointFromGravity(gravity: Clutter.Gravity): void
    setBackgroundColor(color?: Clutter.Color | null): void
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildAtIndex(child: Clutter.Actor, index: number): void
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildTransform(transform?: Clutter.Matrix | null): void
    setClip(xoff: number, yoff: number, width: number, height: number): void
    setClipToAllocation(clipSet: boolean): void
    setContent(content?: Clutter.Content | null): void
    setContentGravity(gravity: Clutter.ContentGravity): void
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    setDepth(depth: number): void
    setEasingDelay(msecs: number): void
    setEasingDuration(msecs: number): void
    setEasingMode(mode: Clutter.AnimationMode): void
    setFixedPositionSet(isSet: boolean): void
    setFlags(flags: Clutter.ActorFlags): void
    setGeometry(geometry: Clutter.Geometry): void
    setHeight(height: number): void
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    setMargin(margin: Clutter.Margin): void
    setMarginBottom(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    setOpacity(opacity: number): void
    setParent(parent: Clutter.Actor): void
    setPivotPoint(pivotX: number, pivotY: number): void
    setPivotPointZ(pivotZ: number): void
    setPosition(x: number, y: number): void
    setReactive(reactive: boolean): void
    setRequestMode(mode: Clutter.RequestMode): void
    setRotation(axis: Clutter.RotateAxis, angle: number, x: number, y: number, z: number): void
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    setScale(scaleX: number, scaleY: number): void
    setScaleFull(scaleX: number, scaleY: number, centerX: number, centerY: number): void
    setScaleWithGravity(scaleX: number, scaleY: number, gravity: Clutter.Gravity): void
    setScaleZ(scaleZ: number): void
    setShader(shader?: Clutter.Shader | null): boolean
    setShaderParam(param: string, value: any): void
    setShaderParamFloat(param: string, value: number): void
    setShaderParamInt(param: string, value: number): void
    setSize(width: number, height: number): void
    setTextDirection(textDir: Clutter.TextDirection): void
    setTransform(transform?: Clutter.Matrix | null): void
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    setWidth(width: number): void
    setX(x: number): void
    setXAlign(xAlign: Clutter.ActorAlign): void
    setXExpand(expand: boolean): void
    setY(y: number): void
    setYAlign(yAlign: Clutter.ActorAlign): void
    setYExpand(expand: boolean): void
    setZPosition(zPosition: number): void
    setZRotationFromGravity(angle: number, gravity: Clutter.Gravity): void
    shouldPickPaint(): boolean
    show(): void
    showAll(): void
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetFlags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter.Animatable */
    animateProperty(animation: Clutter.Animation, propertyName: string, initialValue: any, finalValue: any, progress: number, value: any): boolean
    findProperty(propertyName: string): GObject.ParamSpec
    getInitialState(propertyName: string, value: any): void
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter.Container */
    addActor(actor: Clutter.Actor): void
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    createChildMeta(actor: Clutter.Actor): void
    destroyChildMeta(actor: Clutter.Actor): void
    findChildByName(childName: string): Clutter.Actor
    foreach(callback: Clutter.Callback): void
    foreachWithInternals(callback: Clutter.Callback): void
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    removeActor(actor: Clutter.Actor): void
    sortDepthOrder(): void
    /* Methods of Clutter.Scriptable */
    getId(): string
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    setId(id: string): void
    /* Virtual methods of GtkClutter.Texture */
    vfuncAnimateProperty(animation: Clutter.Animation, propertyName: string, initialValue: any, finalValue: any, progress: number, value: any): boolean
    vfuncFindProperty(propertyName: string): GObject.ParamSpec
    vfuncGetInitialState(propertyName: string, value: any): void
    vfuncInterpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfuncSetFinalState(propertyName: string, value: any): void
    vfuncActorAdded(actor: Clutter.Actor): void
    vfuncActorRemoved(actor: Clutter.Actor): void
    vfuncAdd(actor: Clutter.Actor): void
    vfuncChildNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfuncCreateChildMeta(actor: Clutter.Actor): void
    vfuncDestroyChildMeta(actor: Clutter.Actor): void
    vfuncForeach(callback: Clutter.Callback): void
    vfuncForeachWithInternals(callback: Clutter.Callback): void
    vfuncGetChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    vfuncLower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRaise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfuncRemove(actor: Clutter.Actor): void
    vfuncSortDepthOrder(): void
    vfuncGetId(): string
    vfuncParseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfuncSetCustomProperty(script: Clutter.Script, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Clutter.Texture */
    vfuncLoadFinished(error: GLib.Error): void
    vfuncPixbufChange(): void
    vfuncSizeChange(width: number, height: number): void
    /* Virtual methods of Clutter.Actor */
    vfuncAllocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    vfuncApplyTransform(matrix: Clutter.Matrix): void
    vfuncButtonPressEvent(event: Clutter.ButtonEvent): boolean
    vfuncButtonReleaseEvent(event: Clutter.ButtonEvent): boolean
    vfuncCapturedEvent(event: Clutter.Event): boolean
    vfuncDestroy(): void
    vfuncEnterEvent(event: Clutter.CrossingEvent): boolean
    vfuncEvent(event: Clutter.Event): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPaintVolume(volume: Clutter.PaintVolume): boolean
    vfuncGetPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    vfuncGetPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    vfuncHasOverlaps(): boolean
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncKeyFocusIn(): void
    vfuncKeyFocusOut(): void
    vfuncKeyPressEvent(event: Clutter.KeyEvent): boolean
    vfuncKeyReleaseEvent(event: Clutter.KeyEvent): boolean
    vfuncLeaveEvent(event: Clutter.CrossingEvent): boolean
    vfuncMap(): void
    vfuncMotionEvent(event: Clutter.MotionEvent): boolean
    vfuncPaint(): void
    vfuncPaintNode(root: Clutter.PaintNode): void
    vfuncParentSet(oldParent: Clutter.Actor): void
    vfuncPick(color: Clutter.Color): void
    vfuncQueueRedraw(leafThatQueued: Clutter.Actor): void
    vfuncQueueRelayout(): void
    vfuncRealize(): void
    vfuncScrollEvent(event: Clutter.ScrollEvent): boolean
    vfuncShow(): void
    vfuncShowAll(): void
    vfuncTouchEvent(event: Clutter.TouchEvent): boolean
    vfuncUnmap(): void
    vfuncUnrealize(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Clutter.Texture */
    connect(sigName: "load-finished", callback: (($obj: Texture, error: GLib.Error) => void)): number
    connect_after(sigName: "load-finished", callback: (($obj: Texture, error: GLib.Error) => void)): number
    emit(sigName: "load-finished", error: GLib.Error): void
    on(sigName: "load-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pixbuf-change", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "pixbuf-change", callback: (($obj: Texture) => void)): number
    emit(sigName: "pixbuf-change"): void
    on(sigName: "pixbuf-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pixbuf-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pixbuf-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-change", callback: (($obj: Texture, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Texture, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    on(sigName: "size-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: Texture, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: Texture, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    on(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: Texture, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Texture, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: Texture, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Texture, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "captured-event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    on(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Texture) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-event", callback: (($obj: Texture, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: Texture, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    on(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Texture) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-in", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: Texture) => void)): number
    emit(sigName: "key-focus-in"): void
    on(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-out", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: Texture) => void)): number
    emit(sigName: "key-focus-out"): void
    on(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: Texture, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Texture, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: Texture, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Texture, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-event", callback: (($obj: Texture, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: Texture, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    on(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-event", callback: (($obj: Texture, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: Texture, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    on(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paint", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "paint", callback: (($obj: Texture) => void)): number
    emit(sigName: "paint"): void
    on(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: Texture, oldParent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Texture, oldParent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick", callback: (($obj: Texture, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: Texture, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    on(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-redraw", callback: (($obj: Texture, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: Texture, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    on(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-relayout", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: Texture) => void)): number
    emit(sigName: "queue-relayout"): void
    on(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Texture) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: Texture, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Texture, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "show", callback: (($obj: Texture) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: Texture, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transition-stopped", callback: (($obj: Texture, name: string, isFinished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: Texture, name: string, isFinished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    on(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitions-completed", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: Texture) => void)): number
    emit(sigName: "transitions-completed"): void
    on(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Texture) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: Texture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: Texture, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    on(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "actor-removed", callback: (($obj: Texture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: Texture, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    on(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: Texture, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Texture, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filename", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-quality", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keep-aspect-ratio", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-async", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-data-async", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pick-with-alpha", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixel-format", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-size", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-waste", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::depth", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Texture_ConstructProps)
    _init (config?: Texture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Texture
    static errorQuark(): GLib.Quark
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export interface Window_ConstructProps extends Gtk.Window_ConstructProps {
}
export class Window {
    /* Properties of Gtk.Window */
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    defaultHeight: number
    defaultWidget: Gtk.Widget
    defaultWidth: number
    deletable: boolean
    destroyWithParent: boolean
    display: Gdk.Display
    focusVisible: boolean
    focusWidget: Gtk.Widget
    fullscreened: boolean
    hideOnClose: boolean
    iconName: string
    readonly isActive: boolean
    maximized: boolean
    mnemonicsVisible: boolean
    modal: boolean
    resizable: boolean
    startupId: string
    title: string
    transientFor: Gtk.Window
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
    /* Fields of Gtk.Window */
    parentInstance: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GtkClutter.Window */
    getStage(): Clutter.Actor
    /* Methods of Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreenOnMonitor(monitor: Gdk.Monitor): void
    getApplication(): Gtk.Application | null
    getChild(): Gtk.Widget | null
    getDecorated(): boolean
    getDefaultSize(): [ /* width */ number | null, /* height */ number | null ]
    getDefaultWidget(): Gtk.Widget | null
    getDeletable(): boolean
    getDestroyWithParent(): boolean
    getFocus(): Gtk.Widget | null
    getFocusVisible(): boolean
    getGroup(): Gtk.WindowGroup
    getHideOnClose(): boolean
    getIconName(): string | null
    getMnemonicsVisible(): boolean
    getModal(): boolean
    getResizable(): boolean
    getTitle(): string | null
    getTitlebar(): Gtk.Widget | null
    getTransientFor(): Gtk.Window | null
    hasGroup(): boolean
    isFullscreen(): boolean
    isMaximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    presentWithTime(timestamp: number): void
    setApplication(application?: Gtk.Application | null): void
    setChild(child?: Gtk.Widget | null): void
    setDecorated(setting: boolean): void
    setDefaultSize(width: number, height: number): void
    setDefaultWidget(defaultWidget?: Gtk.Widget | null): void
    setDeletable(setting: boolean): void
    setDestroyWithParent(setting: boolean): void
    setDisplay(display: Gdk.Display): void
    setFocus(focus?: Gtk.Widget | null): void
    setFocusVisible(setting: boolean): void
    setHideOnClose(setting: boolean): void
    setIconName(name?: string | null): void
    setMnemonicsVisible(setting: boolean): void
    setModal(modal: boolean): void
    setResizable(resizable: boolean): void
    setStartupId(startupId: string): void
    setTitle(title?: string | null): void
    setTitlebar(titlebar?: Gtk.Widget | null): void
    setTransientFor(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
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
    getFocusChild(): Gtk.Widget | null
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
    setFocusChild(child?: Gtk.Widget | null): void
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
    /* Virtual methods of GtkClutter.Window */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Gtk.Window */
    vfuncActivateDefault(): void
    vfuncActivateFocus(): void
    vfuncCloseRequest(): boolean
    vfuncEnableDebugging(toggle: boolean): boolean
    vfuncKeysChanged(): void
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
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: Window) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: Window) => void)): number
    emit(sigName: "activate-default"): void
    on(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "activate-focus", callback: (($obj: Window) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: Window) => void)): number
    emit(sigName: "activate-focus"): void
    on(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "close-request", callback: (($obj: Window) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: Window) => boolean)): number
    emit(sigName: "close-request"): void
    on(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enable-debugging", callback: (($obj: Window, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: Window, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    on(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keys-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "keys-changed"): void
    on(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: Window) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Window) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Window, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Window, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Window) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Window) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Window, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Window, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Window) => void)): number
    connect_after(sigName: "map", callback: (($obj: Window) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Window, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Window, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Window, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Window, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Window, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Window, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Window) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Window) => void)): number
    connect_after(sigName: "show", callback: (($obj: Window) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: Window, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Window, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Window) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Window) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreened", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hide-on-close", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Window
    static $gtype: GObject.Type
}
export abstract class ActorClass {
    static name: string
}
export class ActorPrivate {
    static name: string
}
export abstract class EmbedClass {
    static name: string
}
export class EmbedPrivate {
    static name: string
}
export abstract class TextureClass {
    static name: string
}
export abstract class WindowClass {
    static name: string
}
export class WindowPrivate {
    static name: string
}
}