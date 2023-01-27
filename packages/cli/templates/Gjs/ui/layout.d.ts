// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/layout.js

<% const Gio = dep.find('Gio') %>
<% const Clutter = dep.find('Clutter') %>
<% const St = dep.find('St') %>
<% const Meta = dep.find('Meta') %>

<%_ if(useNamespace){ _%>
    import type Gio from '../<%= Gio.packageName %>.js';
    import type Clutter from '../<%= Clutter.packageName %>.js';
    import type St from '../<%= St.packageName %>.js';
    import type Meta from '../<%= Meta.packageName %>.js';
<%_ } else { _%>
    import type * as Gio from '../<%= Gio.packageName %>.js';
    import type * as Clutter from '../<%= Clutter.packageName %>.js';
    import type * as St from '../<%= St.packageName %>.js';
    import type * as Meta from '../<%= Meta.packageName %>.js';
<%_ } _%>

import { EventEmitter } from '../misc/signals.js';

import type { DragMotionResult } from './dnd.js';
import type { SystemBackground } from './background.js';
import type { Ripples } from './ripples.js';
import type { BackgroundManager } from './background.js';

export interface Geometry {
    x: number;
    y: number;
    width: number;
    height: number;
}

export class MonitorConstraint extends Clutter.Constraint {

    protected _primary: boolean;
    protected _index: number;
    protected _workArea: boolean;

    public primary: boolean;
    public index: number;
    public workArea: boolean;

    constructor(props: Clutter.Constraint.ConstructorProperties);
    public _init(props: Clutter.Constraint.ConstructorProperties): void;

    public vfunc_update_allocation(actor: Clutter.Actor, actorBox: Clutter.ActorBox): void;
}

declare class Monitor {

    public index: number;
    public geometryScale: number;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public readonly inFullscreen: boolean;

    constructor(index: number, geometry: Geometry, geometryScale: number);
}

declare class UiActor extends St.Widget {
    public constructor(props?: St.Widget.ConstructorProperties);
    public _init(props?: St.Widget.ConstructorProperties): void;

    public vfunc_get_preferred_width(_forHeight: number): [number, number];
    public vfunc_get_preferred_height(_forWidth: number): [number, number];
}

declare class ScreenTransition extends Clutter.Actor {
    constructor();

    /** @hidden */
    public _init(params?: Clutter.Actor.ConstructorProperties): void;
    public _init(): void;

    public run(): void;
}

/**
 * This class manages a "hot corner" that can toggle switching to
 * overview.
 */
declare class HotCorner extends Clutter.Actor {

    protected _entered: boolean;
    protected _monitor: Monitor;
    protected _x: number;
    protected _y: number;
    protected _pressureBarrier: PressureBarrier;
    protected _ripples: Ripples;

    constructor(layoutManager: LayoutManager, monitor: Monitor, x: number, y: number);

    public _init(props?: Clutter.Actor.ConstructorProperties): void;
    public _init(layoutManager: LayoutManager, monitor: Monitor, x: number, y: number): void;

    public setBarrierSize(size: number): void;
    public handleDragOver(source: any, actor: any, x: number, y: number, time: number): DragMotionResult;

    protected _setupFallbackCornerIfNeeded(layoutManager: LayoutManager): void;
    protected _onDestroy(): void;
    protected _toggleOverview(): void;
    protected _onCornerEntered(): void;
    protected _onCornerLeft(actor: Clutter.Actor, event: Clutter.Event): void;
}

export class LayoutManager extends GObject.Object {

    protected _rtl: boolean;
    protected _keyboardIndex: number;
    protected _rightPanelBarrier: Meta.Barrier | null;
    protected _inOverview: boolean;
    protected _updateRegionIdle: number;
    protected _trackedActors: { trackFullscreen: boolean; affectsStruts: boolean; affectsInputRegion: boolean; }[];
    protected _keyboardHeightNotifyId: number;
    protected _backgroundGroup: Meta.BackgroundGroup;
    protected _interfaceSettings: Gio.Settings;
    protected _pendingLoadBackground: boolean;
    protected _systemBackground: SystemBackground;

    public monitors: Monitor[];
    public primaryMonitor: Monitor | null;
    public primaryIndex: number;
    public hotCorners: HotCorner[];
    public uiGroup: UiActor;
    public overviewGroup: St.Widget;
    public screenShieldGroup: St.Widget;
    public panelBox: St.BoxLayout;
    public modalDialogGroup: St.Widget;
    public keyboardBox: St.BoxLayout;
    public screenshotUIGroup: St.Widget;
    public dummyCursor: St.Widget;
    public screenTransition: ScreenTransition;
    public readonly currentMonitor: Monitor | undefined;
    public readonly keyboardMonitor: Monitor | undefined;
    public readonly focusIndex: number;
    public readonly focusMonitor: Monitor | undefined;
    public keyboardIndex: number;

    constructor();
    public _init(): void;

    public init(): void;
    public showOverview(): void;
    public hideOverview(): void;

    /**
     * setDummyCursorGeometry:
     *
     * The cursor dummy is a standard widget commonly used for popup
     * menus and box pointers to track, as the box pointer API only
     * tracks actors. If you want to pop up a menu based on where the
     * user clicked, or where the text cursor is, the cursor dummy
     * is what you should use. Given that the menu should not track
     * the actual mouse pointer as it moves, you need to call this
     * function before you show the menu to ensure it is at the right
     * position and has the right size.
     * @param x
     * @param y 
     * @param width 
     * @param height 
     */
    public setDummyCursorGeometry(x: number, y: number, width: number, height: number): void;
    
    /**
     * Adds `actor` to the chrome, and (unless `affectsInputRegion` in
     * `params` is `false`) extends the input region to include it.
     * Changes in `actor`'s size, position, and visibility will
     * automatically result in appropriate changes to the input
     * region.
     *
     * If `affectsStruts` in `params` is `true` (and `actor` is along a
     * screen edge), then `actor`'s size and position will also affect
     * the window manager struts. Changes to `actor`'s visibility will
     * NOT affect whether or not the strut is present, however.
     *
     * If `trackFullscreen` in `params` is `true`, the actor's visibility
     * will be bound to the presence of fullscreen windows on the same
     * monitor (it will be hidden whenever a fullscreen window is visible,
     * and shown otherwise)
     * @param actor An actor to add to the chrome
     * @param params Additional params
     */
    public addChrome(actor: Clutter.Actor, params?: { affectsStruts?: boolean; affectsInputRegion?: boolean; trackFullscreen?: boolean; }): void;

    /**
     * Like {@link addChrome()}, but adds `actor` above all windows, including popups.
     * @param actor An actor to add to the chrome
     * @param params Additional params
     */
    public addTopChrome(actor: Clutter.Actor, params?: { affectsStruts?: boolean; affectsInputRegion?: boolean; trackFullscreen?: boolean; }): void;
    
    /**
     * Tells the chrome to track `actor`. This can be used to extend the
     * struts or input region to cover specific children.
     * 
     * `params` can have any of the same values as in {@link addChrome()},
     * though some possibilities don't make sense. By default, `actor` has
     * the same params as its chrome ancestor.
     * 
     * @param actor a descendant of the chrome to begin tracking
     * @param params parameters describing how to track `actor`
     */
    public trackChrome(actor: Clutter.Actor, params?: { affectsStruts?: boolean; affectsInputRegion?: boolean; trackFullscreen?: boolean; }): void;

    /**
     * Undoes the effect of {@link trackChrome()}
     * `params` is `false`) removes it from the input region.
     * @param actor An actor previously tracked via {@link trackChrome()}
     */
    public untrackChrome(actor: Clutter.Actor): void;

    /**
     * Removes `actor` from the chrome
     * @param actor An actor previously added via {@link addChrome()}
     */
    public removeChrome(actor: Clutter.Actor): void;

    public getWorkAreaForMonitor(monitorIndex: number) : void

    /**
     * This call guarantees that we return some monitor to simplify usage of it
     * In practice all tracked actors should be visible on some monitor anyway
     * @param actor 
     */
    public findIndexForActor(actor: Clutter.Actor): number

    public findMonitorForActor(actor: Clutter.Actor): Monitor | undefined

    public modalEnded(): void;


    protected _sessionUpdated(): void;
    protected _updateMonitors(): void;
    protected _updateHotCorners(): void;
    protected _addBackgroundMenu(bgManager: BackgroundManager): void;
    protected _createBackgroundManager(monitorIndex: number): BackgroundManager;
    protected _showSecondaryBackgrounds(): void;
    protected _waitLoaded(bgManager: BackgroundManager): void;
    protected _updateBackgrounds(): Promise<void>;
    protected _updateKeyboardBox(): void;
    protected _updateBoxes(): void;
    protected _panelBoxChanged(): void;
    protected _updatePanelBarrier(): void;
    protected _monitorsChanged(): void;
    protected _isAboveOrBelowPrimary(monitor: Monitor): boolean;
    protected _loadBackground(): void;
    /**
     * Startup Animations
     *
     * We have two different animations, depending on whether we're a greeter
     * or a normal session.
     *
     * In the greeter, we want to animate the panel from the top, and smoothly
     * fade the login dialog on top of whatever plymouth left on screen which
     * we get as a still frame background before drawing anything else.
     *
     * Here we just have the code to animate the panel, and fade up the background.
     * The login dialog animation is handled by modalDialog.js
     *
     * When starting a normal user session, we want to grow it out of the middle
     * of the screen.
     */
    protected _prepareStartupAnimation(): Promise<void>;
    protected _startupAnimation(): void;
    protected _startupAnimationGreeter(): void;
    protected _startupAnimationSession(): void;
    protected _startupAnimationComplete(): void;
    protected _findActor(actor: Clutter.Actor): number;
    protected _trackActor(actor: Clutter.Actor, params?: { affectsStruts?: boolean; affectsInputRegion?: boolean; trackFullscreen?: boolean; }): void;
    protected _untrackActor(actor: Clutter.Actor): void;
    protected _updateActorVisibility(actorData: any): void;
    protected _updateVisibility(): void;
    protected _queueUpdateRegions(): void;
    protected _updateFullscreen(): void;
    protected _windowsRestacked(): void;
    protected _updateRegions(): boolean;
}

declare class PressureBarrier extends EventEmitter {

    protected _threshold: number;
    protected _timeout: number;
    protected _actionMode: number;
    protected _barriers: any[];
    protected _eventFilter: any | null;
    protected _isTriggered: boolean;
    protected _barrierEvents: any[];
    protected _currentPressure: number;
    protected _lastTime: number;

    constructor(threshold: number, timeout: number, actionMode: number);

    public addBarrier(barrier: Meta.Barrier): void;
    public removeBarrier(barrier: Meta.Barrier): void;
    public destroy(): void;
    public setEventFilter(filter: any): void;

    protected _disconnectBarrier(barrier: Meta.Barrier): void;
    protected _reset(): void;
    protected _isHorizontal(barrier: Meta.Barrier): boolean;
    protected _getDistanceAcrossBarrier(barrier: Meta.Barrier, event: any): number;
    protected _getDistanceAlongBarrier(barrier: Meta.Barrier, event: any): number;
    protected _trimBarrierEvents(): void;
    protected _onBarrierLeft(barrier: Meta.Barrier, event: any): void;
    protected _trigger(): void;
    protected _onBarrierHit(barrier: Meta.Barrier, event: any): void;
}

