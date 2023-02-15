// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/dnd.js

<%_ const Meta = dep.find('Meta', '..') _%>
<%_ const Clutter = dep.find('Clutter', '..') _%>
<%- Meta ? Meta.importDef : '' %>
<%- Clutter ? Clutter.importDef : '' %>

import { EventEmitter } from '../misc/signals.js';

export enum DragMotionResult {
    NO_DROP =   0,
    COPY_DROP = 1,
    MOVE_DROP = 2,
    CONTINUE =  3,
}

export enum DragState {
    INIT =      0,
    DRAGGING =  1,
    CANCELLED = 2,
}

export enum DragDropResult {
    FAILURE =  0,
    SUCCESS =  1,
    CONTINUE = 2,
}

export function addDragMonitor(monitor: _Draggable): void;

export function removeDragMonitor(monitor: _Draggable): void;

declare namespace _Draggable {
    export interface ConstructorProperties {
        manualMode?: boolean;
        timeoutThreshold?: number;
        restoreOnSuccess?: boolean;
        dragActorMaxSize?: number;
        dragActorOpacity?: number;
    }
}

declare class _Draggable extends EventEmitter {

    public actor: Clutter.Actor;

    constructor(actor: Clutter.Actor, params: _Draggable.ConstructorProperties);

    /**
     * fakeRelease:
     *
     * Fake a release event.
     * Must be called if you want to intercept release events on draggable
     * actors for other purposes (for example if you're using
     * PopupMenu.ignoreRelease())
     */
    public fakeRelease(): void;

    /**
     * startDrag:
     * @param stageX: X coordinate of event
     * @param stageY: Y coordinate of event
     * @param time: Event timestamp
     * @param sequence: Event sequence
     * @param device: device that originated the event
     *
     * Directly initiate a drag and drop operation from the given actor.
     * This function is useful to call if you've specified manualMode
     * for the draggable.
     */
    public startDrag(stageX: number, stageY: number, time: number, sequence?: Clutter.EventSequence, device?: Clutter.InputDevice): void;

    protected _onButtonPress(actor: Clutter.Actor, event: Clutter.Event): boolean;
    protected _onTouchEvent(actor: Clutter.Actor, event: Clutter.Event): boolean;
    protected _grabDevice(actor: Clutter.Actor, pointer: Clutter.InputDevice, touchSequence: Clutter.EventSequence): boolean;
    protected _ungrabDevice(): void;
    protected _grabActor(device: Clutter.InputDevice, touchSequence: Clutter.EventSequence): void;
    protected _ungrabActor(): void;
    protected _grabEvents(device: Clutter.InputDevice, touchSequence: Clutter.EventSequence): void;
    protected _ungrabEvents(): void;
    protected _eventIsRelease(event: Clutter.Event): boolean;
    protected _onEvent(actor: Clutter.Actor, event: Clutter.Event): boolean;
    protected _updateActorPosition(origScale: number, origDragOffsetX: number, origDragOffsetY: number, transX: number, transY: number): void;
    protected _maybeStartDrag(event: Clutter.Event): void;
    protected _pickTargetActor(): Clutter.Actor;
    protected _updateDragHover(): void;
    protected _queueUpdateDragHover(): void;
    protected _updateDragPosition(event: Clutter.Event): void;
    protected _dragActorDropped(event: Clutter.Event): void;
    protected _getRestoreLocation(): [number, number, number];
    protected _cancelDrag(eventTime: number): void;
    protected _restoreDragActor(eventTime: number): void;
    protected _animateDragEnd(eventTime: number, params: { opacity: number; mode: Clutter.AnimationMode; onComplete: () => void; }): void;
    protected _finishAnimation(): void;
    protected _onAnimationComplete(dragActor: Clutter.Actor, eventTime: number): void;
    protected _dragComplete(): void;
}

/**
 * makeDraggable:
 * @param actor: Source actor
 * @param params: Additional parameters
 * @returns a new Draggable
 *
 * Create an object which controls drag and drop for the given actor.
 *
 * If %manualMode is %true in @params, do not automatically start
 * drag and drop on click
 *
 * If %dragActorMaxSize is present in @params, the drag actor will
 * be scaled down to be no larger than that size in pixels.
 *
 * If %dragActorOpacity is present in @params, the drag actor will
 * will be set to have that opacity during the drag.
 *
 * Note that when the drag actor is the source actor and the drop
 * succeeds, the actor scale and opacity aren't reset; if the drop
 * target wants to reuse the actor, it's up to the drop target to
 * reset these values.
 */
export function makeDraggable(actor: Clutter.Actor, params: any): _Draggable;
