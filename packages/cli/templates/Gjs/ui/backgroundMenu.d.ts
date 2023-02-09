// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/backgroundMenu.js

<% const Clutter = dep.find('Clutter') %>

<%_ if(noNamespace){ _%>
    import type * as Clutter from '../<%= Clutter.packageName %>.js';
<%_ } else { _%>
    import type Clutter from '../<%= Clutter.packageName %>.js';
<%_ } _%>


import type { PopupMenu } from './popupMenu.js';
import type { LayoutManager } from './layout.js';

declare class BackgroundMenu extends PopupMenu {
    constructor(layoutManager: LayoutManager);
}

export function addBackgroundMenu(actor: Clutter.Actor, layoutManager: LayoutManager): BackgroundMenu;