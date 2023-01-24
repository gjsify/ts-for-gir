// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/appDisplay.js

<% const gio = dep.find('Gio') %>
<% const st = dep.find('St') %>
<% const clutter = dep.find('Clutter') %>

<%_ if(useNamespace){ _%>
    import type Gio from '../<%= gio.packageName %>.js';
    import type St from '../<%= st.packageName %>.js';
    import type Clutter from '../<%= clutter.packageName %>.js';
<%_ } else { _%>
    import type * as Gio from '../<%= gio.packageName %>.js';
    import type * as St from '../<%= st.packageName %>.js';
    import type * as Clutter from '../<%= clutter.packageName %>.js';
<%_ } _%>

import { GridSearchResult } from './search.js';

import { IconGrid, BaseIcon } from './iconGrid.js';
import { DragMotionResult } from './dnd.js';

export class AppGrid extends IconGrid {

    public indicatorsPadding: number;

    /** @hidden */
    public _init(params?: St.Viewport.ConstructorProperties): void;
    public _init(layoutParams?: IconGrid.ConstructorProperties): void;

    protected _updatePadding(): void;

}

export abstract class BaseAppView extends St.Widget {
    // TODO: 'view-loaded' signal
    constructor(params?: St.Widget.ConstructorProperties);
    public _init(params?: St.Widget.ConstructorProperties): void;

    protected _onDestroy(): void;
    protected _createGrid(): AppGrid;
    protected _onScroll(actor: St.Widget, event: Clutter.ScrollEvent): boolean;
    protected _swipeBegin(tracker: any, monitor: Clutter.EventSequence): void;
    protected _swipeUpdate(tracker: any, progress: number): void;
    protected _swipeEnd(tracker: any, duration: number, endProgress: number): void;
    protected _connectDnD(): void;
    protected _disconnectDnD(): void
    protected _maybeMoveItem(dragEvent: Clutter.Event): void;
    protected _removeDelayedMove(): void;
    protected _resetDragPageSwitch(): void;
    protected _setupDragPageSwitchRepeat(direction: number): void;
    protected _dragMaybeSwitchPageImmediately(dragEvent: Clutter.Event): void;
    protected _maybeSetupDragPageSwitchInitialTimeout(dragEvent: Clutter.Event): void;
    protected _onDragBegin(): void;
    protected _onDragMotion(dragEvent: Clutter.Event): boolean;
    protected _onDragDrop(dropEvent: Clutter.Event): boolean;
    protected _onDragEnd(): void;
    protected _onDragCancelled(): void;
    protected _canAccept(source: any): boolean;
    protected _findBestPageToAppend(startPage?: number): number;
    protected _getLinearPosition(page: number, position: number): number;
    protected _addItem(item: any, page: number, position: number): void;
    protected _removeItem(item: any): void;
    protected _redisplay(): void;
    protected _compareItems(a: any, b: any): number;
    protected _selectAppInternal(id: string): void;
    protected _getDropTarget(x: number, y: number, source: any): [number, number, number];
    protected _moveItem(item: any, newPage: number, newPosition: number): void;

    public handleDragOver(source: any): DragMotionResult;
    public acceptDrop(source: any): boolean;
    public getItemPosition(item: any): [number, number];
    public getAllItems(): any[];
    public selectApp(id: string): void;
    public animateSwitch(animationDirection: number): void;
    public goToPage(pageNumber: number, animate: boolean): void;
    public updateDragFocus(dragFocus: any): void;
}

export class AppDisplay extends BaseAppView {
    constructor();
    public _init(): void;

    protected _onDestroy(): void;
    protected _redisplay(): void;
    protected _savePages(): void;
    protected _ensureDefaultFolders(): void;
    protected _ensurePlaceholder(source: any): void;
    protected _removePlaceholder(): void;
    protected _getItemPosition(item: any): [number, number];
    protected _compareItems(a: any, b: any): number;
    protected _loadApps(): void;
    protected _onScroll(actor: St.Widget, event: Clutter.ScrollEvent): boolean;
    protected _onKeyPressEvent(actor: St.Widget, event: Clutter.KeyEvent): boolean;
    protected _maybeMoveItem(dragEvent: Clutter.Event): void;
    /** @hidden */
    protected _onDragBegin(): void;
    protected _onDragBegin(overview: any, source: any): void;
    protected _onDragMotion(dragEvent: Clutter.Event): boolean;
    protected _onDragEnd(): void;
    /** @hidden */
    protected _onDragCancelled(): void;
    protected _onDragCancelled(overview: any, source: any): void;

    public getAppInfos(): any[];
    public animateSwitch(animationDirection: number): void;
    public goToPage(pageNumber: number, animate?: boolean): void;
    public addFolderDialog(dialog: any): void;
    public acceptDrop(source: any): boolean;
    public createFolder(apps: any[]): boolean;
}

export class AppSearchProvider {
    constructor();

    public getResultMetas(apps: any[]): Promise<any[]>;
    public filterResults(results: any[], maxNumber: number): any[];
    public getInitialResultSet(terms: string[], cancellable: Gio.Cancellable): Promise<any[]>;
    public getSubsearchResultSet(previousResults: any[], terms: string[], cancellable: Gio.Cancellable): any[];
    public createResultObject(resultMeta: any): AppIcon | SystemActionIcon;
}

export class AppViewItem extends St.Button {

    readonly id: string;
    readonly app: any;

    constructor(params?: St.Button.ConstructorProperties);
    public _init(params?: St.Button.ConstructorProperties, isDraggable?: boolean, expandTitleOnHover?: boolean): void;

    protected _onDestroy(): void;
    protected _updateMultiline(): void;
    protected _onHover(): void;
    protected _onDragBegin(): void;
    protected _onDragCancelled(): void;
    protected _onDragEnd(): void;
    protected _canAccept(source: any): boolean;
    protected _setHoveringByDnd(hovering: boolean): void;
    protected _onDragMotion(dragEvent: Clutter.Event): boolean;
    protected _withinLeeways(x: number): boolean;

    public scaleIn(): void;
    public scaleAndFade(): void;
    public undoScaleAndFade(): void;
    public handleDragOver(source: any, actor: St.Widget, x: number): DragMotionResult;
    public acceptDrop(source: any, actor: St.Widget, x: number): boolean;
    public cancelActions(): void;
    public setForcedHighlight(highlight: boolean): void;
}

export namespace AppIcon {
    export interface ConstructorProperties extends BaseIcon.ConstructorProperties {
        isDraggable?: boolean;
        expandTitleOnHover?: boolean;
    }
}

export class AppIcon extends AppViewItem {

    public app: any;
    public icon: BaseIcon;

    protected _id: string;
    protected _name: string;
    protected _iconContainer: St.Widget;
    protected _folderPreviewId: number;

    constructor(app: any, iconParams?: AppIcon.ConstructorProperties);

    /** @hidden */
    public _init(params?: St.Button.ConstructorProperties, isDraggable?: boolean, expandTitleOnHover?: boolean): void;
    public _init(app: any, iconParams?: AppIcon.ConstructorProperties): void;

    protected _onDestroy(): void;
    protected _createIcon(iconSize: number): St.Widget;
    protected _removeMenuTimeout(): void;
    protected _setPopupTimeout(): void;
    protected _onKeyboardPopupMenu(): void;
    protected _onMenuPoppedDown(): void;
    protected _onMenuPoppedDown(button: St.Button): void;
    protected _showFolderPreview(): void;
    protected _hideFolderPreview(): void;
    protected _canAccept(source: any): boolean;
    protected _setHoveringByDnd(hovering: boolean): void;

    public onDragBegin(): void;
    public updateRunningStyle(): void;
    public getId(): string;
    public popupMenu(side?: St.Side): void;
    public animateLaunch(): void;
    public animateLaunchAtPos(x: number, y: number): void;
    public shellWorkspaceLaunch(params?: { workspace: number; timestamp: number }): void;
    public getDragActor(): St.Widget;
    /**
     * @returns The original actor that should align with the actor we show as the item is being dragged.
     */
    public getDragActorSource(): St.Widget;
    public shouldShowTooltip(): boolean;
    public acceptDrop(source: any, actor: St.Widget, x: number): boolean;
    public cancelActions(): void;
}

export class SystemActionIcon extends GridSearchResult {
    activate(): void;
}