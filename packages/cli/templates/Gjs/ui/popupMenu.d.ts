// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/popupMenu.js
<%_ if(useNamespace){ _%>
    import type St from '../St-1.0.js';
    import type Clutter from '../Clutter-11.js';
    import type Gio from '../Gio-2.0.js';
<%_ } else { _%>
    import type * as St from '../St-1.0.js';
    import type * as Clutter from '../Clutter-11.js';
    import type * as Gio from '../Gio-2.0.js';
<%_ } _%>
import * as Signals from '../misc/signals.js';

export enum Ornament {
    NONE = 0,
    DOT = 1,
    CHECK = 2,
    HIDDEN = 3,
};

declare namespace PopupBaseMenuItem {
    export interface ConstructorProperties {
        reactive?: boolean;
        activate?: boolean;
        hover?: boolean;
        style_class?: string;
        can_focus?: boolean;
    }
}

declare class PopupBaseMenuItem extends St.BoxLayout {
    readonly actor: PopupBaseMenuItem;
    active: boolean;
    sensitive: boolean;

    constructor(params?: PopupBaseMenuItem.ConstructorProperties);
    override _init(...args: any[]): void;

    activate(event: Clutter.Event): void;

    // General signal handler methods
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Specific signal handler methods
    connect(sigName: "activate", callback: (($obj: PopupBaseMenuItem, event: Clutter.Event) => void)): number
    connect_after(sigName: "activate", callback: (($obj: PopupBaseMenuItem, event: Clutter.Event) => void)): number

    syncSensitive(): boolean;
    getSensitive(): boolean;
    setSensitive(sensitive: boolean): void;
    setOrnament(ornament: Ornament): void;
}

export namespace PopupMenuItem {
    export interface ConstructorProperties extends PopupBaseMenuItem.ConstructorProperties {}
}

export class PopupMenuItem extends PopupBaseMenuItem {
    constructor(text: string, params?: PopupMenuItem.ConstructorProperties);
    override _init(text: string, params?: PopupMenuItem.ConstructorProperties): void;
}

export class PopupSeparatorMenuItem extends PopupBaseMenuItem {
    constructor(text: string);
    override _init(text: string): void;
}

export class Switch extends St.Bin {
    state: boolean;
    constructor(state: boolean);
    /** @ignore */
    override _init(config?: St.Bin.ConstructorProperties): void
    override _init(state: boolean): void;

    setToggleState(state: boolean): void;
    toggle(): void;

    // General signal handler methods
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void

    // Specific signal handler methods
    connect(sigName: "notify::state", callback: (($obj: Switch) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Switch) => void)): number
}

export namespace PopupSwitchMenuItem {
    export interface ConstructorProperties extends PopupBaseMenuItem.ConstructorProperties {}
}

export class PopupSwitchMenuItem extends PopupBaseMenuItem {
    readonly state: boolean;

    constructor(text: string, active: boolean, params?: PopupSwitchMenuItem.ConstructorProperties);
    override _init(text: string, active: boolean, params?: PopupSwitchMenuItem.ConstructorProperties): void;

    setStatus(text: string): void;
    activate(event: Clutter.Event): void;
    toggle(): void;
    setToggleState(state: boolean): void;
    checkAccessibleState(): void;
}

export namespace PopupImageMenuItem {
    export interface ConstructorProperties extends PopupBaseMenuItem.ConstructorProperties {}
}

export class PopupImageMenuItem extends PopupBaseMenuItem {
    constructor(text: string, icon: Gio.Icon, params?: PopupImageMenuItem.ConstructorProperties);
    override _init(text: string, icon: Gio.Icon, params?: PopupImageMenuItem.ConstructorProperties): void;

    setIcon(icon: Gio.Icon): void;
}

declare class PopupMenuBase extends Signals.EventEmitter {
    protected constructor(sourceActor: St.Widget, styleClass?: string);
    readonly sourceActor: St.Widget;
    readonly focusActor: St.Widget;
    readonly length: number;
    readonly isOpen: boolean;
    readonly box: St.BoxLayout;
    sensitive: boolean;
    readonly firstMenuItem: PopupBaseMenuItem | null;
    readonly numMenuItems: number;
   
    getSensitive(): boolean;
    setSensitive(sensitive: boolean): void;
    addAction(title: string, callback: () => void, icon: Gio.Icon): void;
    addSettingsAction(title: string, desktopFile: string): void;
    isEmpty(): boolean;
    itemActivated(animate: boolean): void;
    moveMenuItem(item: PopupBaseMenuItem, position: number): void;
    addMenuItem(item: PopupBaseMenuItem, position?: number): void;
    removeAll(): void;
    toggle(): void;
    destroy(): void;
}

export class PopupMenu extends PopupMenuBase {
    constructor(sourceActor: St.Widget, arrowAlignment: number, arrowSide: St.Side);

    setArrowOrigin(origin: number): void;
    setSourceAlignment(alignment: number): void;
    open(animate: boolean): void;
    close(animate: boolean): void;
    destroy(): void;
}

export class PopupDummyMenu extends Signals.EventEmitter {
    constructor(sourceActor: St.Widget);

    readonly sensitive: boolean;

    getSensitive(): boolean;
    open(): void;
    close(): void;
    toggle(): void;
    destroy(): void;
}

export class PopupSubMenu extends PopupMenuBase {
    actor: St.ScrollView;

    constructor(sourceActor: St.Widget, sourceArrow: St.Widget);

    readonly sensitive: boolean;

    getSensitive(): boolean;
    open(animate: boolean): void;
    close(animate: boolean): void;
}


/**
 * PopupMenuSection:
 *
 * A section of a PopupMenu which is handled like a submenu
 * (you can add and remove items, you can destroy it, you
 * can add it to another menu), but is completely transparent
 * to the user
 */
export class PopupMenuSection extends PopupMenuBase {
    constructor();

    readonly sensitive: boolean;

    open(): void;
    close(): void;
}

export class PopupSubMenuMenuItem extends PopupBaseMenuItem {
    readonly menu: PopupSubMenu;

    constructor(text: string, wantIcon?: boolean);
    override _init(text: string, wantIcon?: boolean): void;

    syncSensitive(): boolean;
    setSubmenuShown(open: boolean): void;
    activate(event: Clutter.Event): void;
}

export namespace PopupMenuManager {
    export interface ConstructorProperties {
        actionMode?: any; // TODO: Shell.ActionMode;
    }
}

export class PopupMenuManager {
    constructor(owner: any, grabParams?: PopupMenuManager.ConstructorProperties);

    addMenu(menu: PopupMenuBase, position: number): void;
    removeMenu(menu: PopupMenuBase): void;
    ignoreRelease(): void;
}