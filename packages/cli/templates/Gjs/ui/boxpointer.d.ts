<% const St = dep.find('St') %>
<% const Clutter = dep.find('Clutter') %>

<%_ if(noNamespace){ _%>
    import type * as St from '../<%= St.packageName %>.js';
    import type * as Clutter from '../<%= Clutter.packageName %>.js';
<%_ } else { _%>
    import type St from '../<%= St.packageName %>.js';
    import type Clutter from '../<%= Clutter.packageName %>.js';
<%_ } _%>

import type { LayoutManager } from './layout.js';

export enum PopupAnimation {
    NONE = 0,
    SLIDE =1 << 0,
    FADE = 1 << 1,
    FULL = ~0,
}

/**
 * An actor which displays a triangle "arrow" pointing to a given
 * side.  The .bin property is a container in which content can be
 * placed.  The arrow position may be controlled via
 * setArrowOrigin(). The arrow side might be temporarily flipped
 * depending on the box size and source position to keep the box
 * totally inside the monitor workarea if possible.
 *
 */
export class BoxPointer extends St.Widget {
    protected _arrowSide: St.Side;
    protected _userArrowSide: St.Side;
    protected _arrowOrigin: number;
    protected _arrowActor: St.Widget | null;
    protected _border: St.DrawingArea;
    protected _arrowAlignment: number;
    protected _sourceAlignment: number;
    protected _muteKeys: boolean;
    protected _muteInput: boolean;
    protected _sourceActor: Clutter.Actor | null;
    protected _sourceExtents: ReturnType<typeof Clutter.Actor.prototype.get_transformed_extents>;
    protected _workArea: ReturnType<typeof LayoutManager.prototype.getWorkAreaForMonitor>;

    public bin: St.Bin;
    public readonly arrowSide: St.Side;

    /**
     * @param arrowSide side to draw the arrow on
     * @param binProperties Properties to set on contained bin
     */
    constructor(arrowSide: St.Side, binProperties?: St.Bin.ConstructorProperties)

    /** @hidden */
    public _init(params?: St.Widget.ConstructorProperties): void;

    /**
     * @param arrowSide side to draw the arrow on
     * @param binProperties Properties to set on contained bin
     */
    public _init(arrowSide: St.Side, binProperties?: St.Bin.ConstructorProperties): void;

    public vfunc_captured_event(event: Clutter.Event): boolean;

    public vfunc_get_preferred_width(forHeight: number): [number, number];

    public vfunc_get_preferred_height(forWidth: number): [number, number];

    public vfunc_allocate(box: Clutter.ActorBox): void;

    public open(animate: boolean, onComplete: () => void): void;

    public close(animate: boolean, onComplete: () => void): void;

    public setPosition(sourceActor: Clutter.Actor, arrowAlignment: number): void;

    public setSourceAlignment(sourceAlignment: number): void;

    /**
     * @param origin Coordinate specifying middle of the arrow, along
     * the Y axis for St.Side.LEFT, St.Side.RIGHT from the top and X axis from
     * the left for St.Side.TOP and St.Side.BOTTOM.
     */
    public setArrowOrigin(origin: number): void;

    /**
     * @param actor an actor relative to which the arrow is positioned.
     * Differently from setPosition, this will not move the boxpointer itself,
     * on the arrow
     */
    public setArrowActor(actor: St.Widget): void;

    public updateArrowSide(side: St.Side): void;

    public getPadding(side: St.Side): number;

    public getArrowHeight(): number;

    protected _adjustAllocationForArrow(isWidth: boolean, minSize: number, naturalSize: number): void;
    protected _drawBorder(area: St.DrawingArea): void;
    protected _reposition(allocationBox: Clutter.ActorBox): void;
    protected _calculateArrowSide(arrowSide: St.Side): St.Side;
    protected _updateFlip(allocationBox: Clutter.ActorBox): void;
}