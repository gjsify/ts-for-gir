/**
 * ClutterX11-1.0
 */

/// <reference types="node" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Clutter-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GL-1.0.d.ts" />
/// <reference path="CoglPango-1.0.d.ts" />
/// <reference path="PangoCairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="Cogl-1.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />

declare namespace ClutterX11 {

export enum FilterReturn {
    CONTINUE,
    TRANSLATE,
    REMOVE,
}
export function disableEventRetrieval(): void
export function enableXinput(): void
export function eventGetKeyGroup(event: Clutter.Event): number
export function eventSequenceGetTouchDetail(sequence: Clutter.EventSequence): number
export function getDefaultDisplay(): xlib.Display
export function getDefaultScreen(): number
export function getInputDevices(): Clutter.InputDevice[]
export function getStageFromWindow(win: xlib.Window): Clutter.Stage
export function getUseArgbVisual(): boolean
export function getUseStereoStage(): boolean
export function handleEvent(xevent: xlib.XEvent): FilterReturn
export function hasCompositeExtension(): boolean
export function hasEventRetrieval(): boolean
export function hasXinput(): boolean
export function setDisplay(xdpy: xlib.Display): void
export function setStageForeign(stage: Clutter.Stage, xwindow: xlib.Window): boolean
export function setUseArgbVisual(useArgb: boolean): void
export function setUseStereoStage(useStereo: boolean): void
export function trapXErrors(): void
export function untrapXErrors(): number
export interface FilterFunc {
    (xev: xlib.XEvent, cev: Clutter.Event): FilterReturn
}
export interface TexturePixmap_ConstructProps extends Clutter.Texture_ConstructProps {
    automaticUpdates?: boolean
    pixmap?: number
    window?: number
    windowRedirectAutomatic?: boolean
}
export class TexturePixmap {
    /* Properties of ClutterX11.TexturePixmap */
    automaticUpdates: boolean
    readonly destroyed: boolean
    pixmap: number
    readonly pixmapDepth: number
    readonly pixmapHeight: number
    readonly pixmapWidth: number
    window: number
    readonly windowMapped: boolean
    readonly windowOverrideRedirect: boolean
    windowRedirectAutomatic: boolean
    readonly windowX: number
    readonly windowY: number
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
    /* Methods of ClutterX11.TexturePixmap */
    setAutomatic(setting: boolean): void
    setPixmap(pixmap: xlib.Pixmap): void
    setWindow(window: xlib.Window, automatic: boolean): void
    syncWindow(): void
    updateArea(x: number, y: number, width: number, height: number): void
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
    /* Virtual methods of ClutterX11.TexturePixmap */
    vfuncUpdateArea(x: number, y: number, width: number, height: number): void
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
    /* Signals of ClutterX11.TexturePixmap */
    connect(sigName: "queue-damage-redraw", callback: (($obj: TexturePixmap, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "queue-damage-redraw", callback: (($obj: TexturePixmap, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "queue-damage-redraw", x: number, y: number, width: number, height: number): void
    on(sigName: "queue-damage-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-damage-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-damage-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "update-area", callback: (($obj: TexturePixmap, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "update-area", callback: (($obj: TexturePixmap, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "update-area", x: number, y: number, width: number, height: number): void
    on(sigName: "update-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "update-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "update-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Texture */
    connect(sigName: "load-finished", callback: (($obj: TexturePixmap, error: GLib.Error) => void)): number
    connect_after(sigName: "load-finished", callback: (($obj: TexturePixmap, error: GLib.Error) => void)): number
    emit(sigName: "load-finished", error: GLib.Error): void
    on(sigName: "load-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "load-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "load-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pixbuf-change", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "pixbuf-change", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "pixbuf-change"): void
    on(sigName: "pixbuf-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pixbuf-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pixbuf-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-change", callback: (($obj: TexturePixmap, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: TexturePixmap, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    on(sigName: "size-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: TexturePixmap, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: TexturePixmap, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    on(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "allocation-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: TexturePixmap, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: TexturePixmap, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: TexturePixmap, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: TexturePixmap, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "captured-event", callback: (($obj: TexturePixmap, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: TexturePixmap, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    on(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-event", callback: (($obj: TexturePixmap, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: TexturePixmap, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    on(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: TexturePixmap, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: TexturePixmap, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "hide", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-in", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "key-focus-in"): void
    on(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-focus-out", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "key-focus-out"): void
    on(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: TexturePixmap, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: TexturePixmap, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: TexturePixmap, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: TexturePixmap, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-event", callback: (($obj: TexturePixmap, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: TexturePixmap, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    on(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-event", callback: (($obj: TexturePixmap, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: TexturePixmap, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    on(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "paint", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "paint", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "paint"): void
    on(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "paint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: TexturePixmap, oldParent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: TexturePixmap, oldParent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "pick", callback: (($obj: TexturePixmap, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: TexturePixmap, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    on(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "pick", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-redraw", callback: (($obj: TexturePixmap, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: TexturePixmap, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    on(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-redraw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "queue-relayout", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "queue-relayout"): void
    on(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "realize", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: TexturePixmap, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: TexturePixmap, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "show", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: TexturePixmap, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: TexturePixmap, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transition-stopped", callback: (($obj: TexturePixmap, name: string, isFinished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: TexturePixmap, name: string, isFinished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    on(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "transitions-completed", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "transitions-completed"): void
    on(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: TexturePixmap) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: TexturePixmap) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: TexturePixmap, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: TexturePixmap, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    on(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "actor-removed", callback: (($obj: TexturePixmap, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: TexturePixmap, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    on(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: TexturePixmap, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: TexturePixmap, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-updates", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-updates", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-updates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destroyed", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroyed", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroyed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destroyed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destroyed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixmap", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixmap", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixmap-depth", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixmap-depth", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixmap-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixmap-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixmap-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixmap-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixmap-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixmap-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixmap-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixmap-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixmap-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixmap-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixmap-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixmap-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixmap-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-mapped", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-mapped", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-override-redirect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-override-redirect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-override-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-override-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-override-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-redirect-automatic", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-redirect-automatic", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-redirect-automatic", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-redirect-automatic", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-redirect-automatic", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filename", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-quality", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keep-aspect-ratio", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-async", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-data-async", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pick-with-alpha", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixel-format", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-size", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-waste", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::depth", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TexturePixmap_ConstructProps)
    _init (config?: TexturePixmap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TexturePixmap
    static newWithPixmap(pixmap: xlib.Pixmap): TexturePixmap
    static newWithWindow(window: xlib.Window): TexturePixmap
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
export abstract class TexturePixmapClass {
    /* Fields of ClutterX11.TexturePixmapClass */
    updateArea: (texture: TexturePixmap, x: number, y: number, width: number, height: number) => void
    static name: string
}
export class TexturePixmapPrivate {
    static name: string
}
export class XInputDevice {
    static name: string
}
}