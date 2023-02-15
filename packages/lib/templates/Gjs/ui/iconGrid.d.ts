// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/iconGrid.js

<%_ const Clutter = dep.find('Clutter', '..') _%>
<%_ const St = dep.find('St', '..') _%>
<%_ const Shell = dep.find('Shell', '..') _%>
<%- Clutter ? Clutter.importDef : '' %>
<%- St ? St.importDef : '' %>
<%- Shell ? Shell.importDef : '' %>

export namespace BaseIcon {
    export interface ConstructorProperties {
        createIcon?: any | null;
        setSizeManually?: boolean;
        showLabel?: boolean
    }
}

export class BaseIcon extends Shell.SquareBin {

    public createIcon: any | null;
    public icon: St.Icon | null;
    public label: St.Label | null;

    protected _setSizeManually?: boolean;

    constructor(label: string, params?: BaseIcon.ConstructorProperties)

    public _init(params?: Shell.SquareBin.ConstructorProperties): void;
    public _init(label: string, params?: BaseIcon.ConstructorProperties): void;

}

export namespace IconGrid {
    export interface ConstructorProperties {
        allow_incomplete_pages?: boolean;
        orientation?: Clutter.Orientation;
        columns_per_page: number;
        rows_per_page: number;
        page_halign: Clutter.ActorAlign;
        page_padding: Clutter.Margin;
        page_valign: Clutter.ActorAlign;
        last_row_align: Clutter.ActorAlign;
        column_spacing: number;
        row_spacing: number;
    }
}

export class IconGrid extends St.Viewport {

    public currentPage: number;
    public readonly nPages: number;
    public readonly itemsPerPage: number;

    protected _currentPage: number;

    constructor(layoutParams?: IconGrid.ConstructorProperties);

    /** @hidden */
    public _init(params?: St.Viewport.ConstructorProperties): void;
    public _init(layoutParams?: IconGrid.ConstructorProperties): void;

    protected _childAdded(grid: IconGrid, child: St.Widget): void;
    protected _ensureItemIsVisible(item: St.Widget): void;
    protected _setGridMode(modeIndex: number): void;
    protected _findBestModeForSize(width: number, height: number): void;
    protected _childRemoved(grid: IconGrid, child: St.Widget): void;

    /**
     * addItem:
     * @param item: item to append to the grid
     * @param page: page number
     * @param index: position in the page
     *
     * Adds @item to the grid. @item must not be part of the grid.
     *
     * If @index exceeds the number of items per page, @item will
     * be added to the next page.
     *
     * @page must be a number between 0 and the number of pages.
     * Adding to the page after next will create a new page.
     */
    public addItem(item: Clutter.Actor, page?: number, index?: number): void;

    /**
     * appendItem:
     * @param item: item to append to the grid
     *
     * Appends @item to the grid. @item must not be part of the grid.
     */
    appendItem(item: Clutter.Actor): void;

    /**
     * moveItem:
     * @param item: item to move
     * @param newPage: new page of the item
     * @param newPosition: new page of the item
     *
     * Moves @item to the grid. @item must be part of the grid.
     */
    moveItem(item: Clutter.Actor, newPage: number, newPosition: number): void;

    /**
     * removeItem:
     * @param item: item to remove from the grid
     *
     * Removes @item to the grid. @item must be part of the grid.
     */
    removeItem(item: Clutter.Actor): void;

    /**
     * goToPage:
     * @param pageIndex: page index
     * @param animate: animate the page transition
     *
     * Moves the current page to @pageIndex. @pageIndex must be a valid page
     * number.
     */
    goToPage(pageIndex: number, animate?: boolean): void;

    /**
     * getItemPage:
     * @param item: the item
     *
     * Retrieves the page @item is in, or -1 if @item is not part of the grid.
     *
     * @returns the page where @item is in
     */
    getItemPage(item: BaseIcon): number;

    /**
     * getItemPosition:
     * @param item: the item
     *
     * Retrieves the position of @item is its page, or -1 if @item is not
     * part of the grid.
     *
     * @returns the page and position of @item
     */
    getItemPosition(item: BaseIcon): [number, number];

    /**
     * getItemAt:
     * @param {int} page: the page
     * @param {int} position: the position in page
     *
     * Retrieves the item at @page and @position.
     *
     * @returns The item at @page and @position, or null
     */
    getItemAt(page: number, position: number): BaseIcon | null;

    /**
     * getItemsAtPage:
     * @param page: the page index
     *
     * Retrieves the children at page @page, including invisible children.
     *
     * @returns an array of {Clutter.Actor}s
     */
    getItemsAtPage(page: number): Clutter.Actor[];

    setGridModes(modes: [number, number][]): void;

    getDropTarget(x: number, y: number): [number, number];
}