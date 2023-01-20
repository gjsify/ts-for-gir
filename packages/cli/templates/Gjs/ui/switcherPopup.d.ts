// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/switcherPopup.js

<%_ if(useNamespace){ _%>
    import type GLib from '../GLib-2.0.js';
    import type St from '../St-1.0.js';
<%_ } else { _%>
    import type * as GLib from '../GLib-2.0.js';
    import type * as St from '../St-1.0.js';
<%_ } _%>

export abstract class SwitcherPopup extends St.Widget {
    /** @hidden Only defined to resolve type conflict */
    _init(props: St.Widget.ConstructorProperties): void;
    _init(items: any[]): void;

    _initialSelection(backward: boolean, _binding?: any): void;

    /** @hidden Only defined to resolve type conflict */
    show(): boolean;
    show(backward: boolean, binding: any, mask: any): boolean;

    _showImmediately(): void

    _next(): any;

    _previous(): any;

    _keyPressHandler(_keysym: any, _action: any): boolean /* Clutter.EVENT_PROPAGATE | Clutter.EVENT_STOP */

    vfunc_key_press_event(keyEvent: any /* Clutter.KeyEvent */): boolean /* Clutter.EVENT_PROPAGATE | Clutter.EVENT_STOP */

    vfunc_key_release_event(keyEvent: any /* Clutter.KeyEvent */): boolean /* Clutter.EVENT_PROPAGATE | Clutter.EVENT_STOP */

    vfunc_button_press_event(): boolean /* Clutter.EVENT_PROPAGATE | Clutter.EVENT_STOP */

    _scrollHandler(direction: any): void;

    vfunc_scroll_event(scrollEvent: any /* Clutter.ScrollEvent */): boolean /* Clutter.EVENT_PROPAGATE | Clutter.EVENT_STOP */

    _itemActivatedHandler(n: number): void;

    itemEnteredHandler(n: number): void;

    _itemEntered(switcher: any, n: number): void;

    itemRemovedHandler(n: number): void;

    _itemRemoved(switcher: any, n: number): void;

    _disableHover(): void;

    _mouseTimedOut(): typeof GLib.SOURCE_REMOVE | typeof GLib.SOURCE_CONTINUE;

    _resetNoModsTimeout(): void;

    _popModal(): void;

    fadeAndDestroy(): void;

    _finish(_timestamp: number): void;

    _onDestroy(): void;

    _select(num: number): void;
}

export class SwitcherList extends St.Widget {
    /** @hidden Defined only to resolve type conflicts */
    _init(config?: St.Widget.ConstructorProperties): void;
    _init(squareItems: any[]): void

    addItem(item: any, label: string): void;

    removeItem(index: number): void;

    addAccessibleState(index: number, state: any): void;

    removeAccessibleState(index: number, state: any): void

    _onItemClicked(item: any): void

    _onItemMotion(item: any): void

    highlight(index: number, justOutline: boolean): void

    _scrollToLeft(index: number): void

    _scrollToRight(index: number): void

    _itemActivated(n: number): void

    _itemEntered(n: number): void

    _maxChildWidth(forHeight: number): number

    vfunc_get_preferred_width(forHeight: number): [number, number]

    vfunc_get_preferred_height(_forWidth: number): [number, number]

    vfunc_allocate(box: any): void
}