// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/appMenu.js

<%_ const St = dep.find('St', '..') _%>
<%_ const Clutter = dep.find('Clutter', '..') _%>
<%_ const Shell = dep.find('Shell', '..') _%>
<%- St ? St.importDef : '' %>
<%- Clutter ? Clutter.importDef : '' %>
<%- Shell ? Shell.importDef : '' %>

import type { PopupMenu, PopupSeparatorMenuItem, PopupMenuSection } from './popupMenu.js';
import type { getAppFavorites } from './appFavorites.js';
import type { getDefault } from '../misc/parentalControlsManager.js';

export class AppMenu extends PopupMenu {

    protected _app: Shell.App | null;
    protected _appSystem: Shell.AppSystem;
    protected _parentalControlsManager: ReturnType<typeof getDefault>;
    protected _appFavorites: ReturnType<typeof getAppFavorites>;
    protected _enableFavorites: boolean;
    protected _showSingleWindows: boolean;

    protected _windowsChangedId: number;
    protected _updateWindowsLaterId: number;

    protected _openWindowsHeader: PopupSeparatorMenuItem;
    protected _windowSection: PopupMenuSection;
    protected _newWindowItem: ReturnType<typeof this.addAction>;
    protected _actionSection: PopupMenuSection;
    protected _onGpuMenuItem: ReturnType<typeof this.addAction>;
    protected _detailsItem: ReturnType<typeof this.addAction>;
    protected _quitItem: ReturnType<typeof this.addAction>;

    /**
     * @param sourceActor - actor the menu is attached to
     * @param side - arrow side
     * @param params - options
     * @param params.favoritesSection - show items to add/remove favorite
     * @param params.showSingleWindow - show window section for a single window
     */
    constructor(sourceActor: Clutter.Actor, side?: St.Side, params?: { favoritesSection?: boolean; showSingleWindow: boolean; })

    protected _onAppStateChanged(sys: any, app: any): void;
    protected _updateQuitItem(): void;
    protected _updateNewWindowItem(): void;
    protected _updateFavoriteItem(): void;
    protected _updateGpuItem(): void;
    protected _updateDetailsVisibility(): void;
    protected _animateLaunch(): void;
    protected _getNonDefaultLaunchGpu(): Shell.AppLaunchGpu;
    protected _queueUpdateWindowsSection(): void;
    protected _updateWindowsSection(): void;


    public destroy(): void;

    /**
     * @returns true if the menu is empty
     */
    public isEmpty(): boolean;

    /**
     * @param app the app the menu represents
     */
    public setApp(app: Shell.App): void;
}