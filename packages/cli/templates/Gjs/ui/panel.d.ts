// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/panel.js
<%_ if(useNamespace){ _%>
    import type St from '../St-1.0.js';
    // TODO: on Ubuntu 22.04 this is Clutter-10
    // import type Clutter from '../Clutter-11.js';
    // import type Meta from '../Meta-11.js';
<%_ } else { _%>
    import type * as St from '../St-1.0.js';
    // TODO: on Ubuntu 22.04 this is Clutter-10
    // import type * as Clutter from '../Clutter-11.js';
    // import type * as Meta from '../Meta-11.js';
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

    _tryDragWindow(event: any /*Clutter.Event*/): boolean; /*Clutter.EVENT_STOP | Clutter.EVENT_PROPAGATE*/;

    _onButtonPress(actor: St.Widget, event: any /*Clutter.Event*/): boolean; /*Clutter.EVENT_STOP | Clutter.EVENT_PROPAGATE*/;

    _onTouchEvent(actor: St.Widget, event: any /*Clutter.Event*/): boolean; /*Clutter.EVENT_STOP | Clutter.EVENT_PROPAGATE*/;

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

    _getDraggableWindowForPosition(stageX: number): any; /*Meta.Window | null*/;
}