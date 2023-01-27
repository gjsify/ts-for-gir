// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/altTab.js

<% const glib = dep.find('GLib') %>
<% const Clutter = dep.find('Clutter') %>
<% const Meta = dep.find('Meta') %>

<%_ if(useNamespace){ _%>
    import type GLib from '../<%= glib.packageName %>.js';
    import type Clutter from '../<%= Clutter.packageName %>.js';
    import type Meta from '../<%= Meta.packageName %>.js';
<%_ } else { _%>
    import type * as GLib from '../<%= glib.packageName %>.js';
    import type * as Clutter from '../<%= Clutter.packageName %>.js';
    import type * as Meta from '../<%= Meta.packageName %>.js';
<%_ } _%>

import { SwitcherPopup } from './switcherPopup.js'

export class AppSwitcherPopup extends SwitcherPopup {
    constructor()
    _init(): void

    _initialSelection(backward: any, binding: any): void

    _nextWindow(): void

    _previousWindow(): void

    _closeAppWindow(appIndex: number, windowIndex: number): void

    _quitApplication(appIndex: number): void

    _keyPressHandler(keysym: any, action: any): typeof Clutter.EVENT_STOP | typeof Clutter.EVENT_PROPAGATE

    _scrollHandler(direction: Clutter.ScrollDirection): void;

    _itemActivatedHandler(n: any): void

    _windowActivated(thumbnailSwitcher: any, n: any): void

    _windowEntered(thumbnailSwitcher: any, n: any): void

    _windowRemoved(thumbnailSwitcher: any, n: number): void

    _finish(timestamp: number): void

    _onDestroy(): void

    /**
     * _select:
     * @param app: index of the app to select
     * @param window: index of which of @app's windows to select
     * @param forceAppFocus: optional flag, see below
     *
     * Selects the indicated @app, and optional @window, and sets
     * this._thumbnailsFocused appropriately to indicate whether the
     * arrow keys should act on the app list or the thumbnail list.
     *
     * If @app is specified and @window is unspecified or %null, then
     * the app is highlighted (ie, given a light background), and the
     * current thumbnail list, if any, is destroyed. If @app has
     * multiple windows, and @forceAppFocus is not %true, then a
     * timeout is started to open a thumbnail list.
     *
     * If @app and @window are specified (and @forceAppFocus is not),
     * then @app will be outlined, a thumbnail list will be created
     * and focused (if it hasn't been already), and the @window'th
     * window in it will be highlighted.
     *
     * If @app and @window are specified and @forceAppFocus is %true,
     * then @app will be highlighted, and @window outlined, and the
     * app list will have the keyboard focus.
     */
    _select(app: number, window?: number, forceAppFocus?: undefined): void

    _timeoutPopupThumbnails(): typeof GLib.SOURCE_REMOVE | typeof GLib.SOURCE_CONTINUE

    _destroyThumbnails(): void

    _createThumbnails(): void

}

declare class CyclerPopup extends SwitcherPopup {
    constructor()
    _init(): void

    _highlightItem(index: number, _justOutline: boolean): void

    _finish(): void

    onDestroy(): void
}

export class GroupCyclerPopup extends CyclerPopup {
    constructor()
    _init(): void

    _getWindows(): Meta.Window[]

    _keyPressHandler(keysym: any, action: any): typeof Clutter.EVENT_STOP | typeof Clutter.EVENT_PROPAGATE
}

export class WindowSwitcherPopup extends SwitcherPopup {
    constructor()
    _init(): void

    _getWindowList(): Meta.Window[]

    _closeWindow(windowIndex: number): void

    _keyPressHandler(keysym: any, action: any): typeof Clutter.EVENT_STOP | typeof Clutter.EVENT_PROPAGATE

    _finish(): void

}

export class WindowCyclerPopup extends CyclerPopup {
    init(): void

    _getWindows(): Meta.Window[]

    _keyPressHandler(keysym: any, action: any): typeof Clutter.EVENT_STOP | typeof Clutter.EVENT_PROPAGATE
}