// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/panelMenu.js
<%_ if(useNamespace){ _%>
    import type St from '../St-1.0.js';
<%_ } else { _%>
    import type * as St from '../St-1.0.js';
<%_ } _%>
import type { PopupMenu, PopupDummyMenu } from './popupMenu.js';

declare namespace ButtonBox {
    interface ConstructorProperties {
        style_class?: string;
        x_expand: boolean;
        y_expand: boolean;
    }
}

declare class ButtonBox extends St.Widget {
    constructor(params?: ButtonBox.ConstructorProperties);
    // _init(params: ButtonBox.ConstructorProperties): void;
    _init(...args: any[]): void;
    container: St.Bin;
}


export class Button extends ButtonBox {
    menu: PopupMenu | PopupDummyMenu;
    constructor(menuAlignment: number, nameText: string, dontCreateMenu?: boolean);
    _init(menuAlignment: number, nameText: string, dontCreateMenu?: boolean): void;
    setSensitive(sensitive: boolean): void;
    setMenu(menu: PopupMenu | PopupDummyMenu): void;
}

/**
 * SystemIndicator:
 * This class manages one system indicator, which are the icons
 * that you see at the top right. A system indicator is composed
 * of an icon and a menu section, which will be composed into the
 * aggregate menu.
 */
export class SystemIndicator extends St.BoxLayout {
    constructor();
    _init(): void;
}