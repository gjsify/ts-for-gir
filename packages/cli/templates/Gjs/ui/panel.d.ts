// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/panel.js

<% const St = dep.find('St') %>
<% const Clutter = dep.find('Clutter') %>
<% const Meta = dep.find('Meta') %>

<%_ if(useNamespace){ _%>
    import type St from '../<%= St.packageName %>.js';
    import type Clutter from '../<%= Clutter.packageName %>.js';
    import type Meta from '../<%= Meta.packageName %>.js';
<%_ } else { _%>
    import type * as St from '../<%= St.packageName %>.js';
    import type * as Clutter from '../<%= Clutter.packageName %>.js';
    import type * as Meta from '../<%= Meta.packageName %>.js';
<%_ } _%>

import type { Button } from './panelMenu.js';

export class Panel extends St.Widget {

    statusArea: {
        appMenu: any;
        dateMenu: any;
        quickSettings: any;
    };

    boxOpacity: number;

    constructor()
    _init(): void;

    _tryDragWindow(event: Clutter.Event): typeof Clutter.EVENT_STOP | typeof Clutter.EVENT_PROPAGATE;

    _onButtonPress(actor: St.Widget, event: Clutter.Event): typeof Clutter.EVENT_STOP | typeof Clutter.EVENT_PROPAGATE;

    _onTouchEvent(actor: St.Widget, event: Clutter.Event): typeof Clutter.EVENT_STOP | typeof Clutter.EVENT_PROPAGATE;

    _toggleMenu(indicator: Button): void;

    _closeMenu(indicator: Button): void;

    toggleAppMenu(): void;

    toggleCalendar(): void;

    closeCalendar(): void;

    closeQuickSettings(): void;

    _updatePanel(): void;

    _hideIndicators(): void;

    _ensureIndicator(role: string): any;

    updateBox(elements: any[], box: any): void;

    _addToPanelBox(role: string, indicator: Button, position: number, box: any): void;

    addToStatusArea(role: string, indicator: Button, position?: number, box?: any): any;

    _onMenuSet(indicator: Button): void;

    _getDraggableWindowForPosition(stageX: number): Meta.Window | null;
}