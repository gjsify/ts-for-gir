// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/dialog.js

<%_ const Clutter = dep.find('Clutter', '..') _%>
<%_ const St = dep.find('St', '..') _%>
<%- Clutter ? Clutter.importDef : '' %>
<%- St ? St.importDef : '' %>

export interface ButtonInfo {
    action: () => void;
    label: string;
    key?: number;
    modifiers?: Clutter.ModifierType;
    default?: boolean;
}

export class Dialog extends St.Widget {

    protected _parentActor: St.Widget;
    protected _dialog: St.BoxLayout;
    protected _initialKeyFocus: St.Widget;

    public contentLayout: St.BoxLayout;
    public buttonLayout: St.Widget;
    public readonly initialKeyFocus: St.Widget;

    public _init(parentActor: St.Widget, styleClass?: string | null): void;
    public makeInactive(): void;
    public vfunc_event(event: Clutter.Event): boolean;
    public addButton(buttonInfo: ButtonInfo): void;
    public clearButtons(): void;

    protected _createDialog(): void;
    protected _onDestroy(): void;
    protected _setInitialKeyFocus(actor: St.Widget): void;
}

export class MessageDialogContent extends St.BoxLayout {
    public title: string;
    public description: string;

    constructor(params: St.BoxLayout.ConstructorProperties);
    public _init(params: St.BoxLayout.ConstructorProperties): void;

    protected _onDestroy(): void;
    protected _updateTitleStyle(): void;
}

export class ListSection extends St.BoxLayout {

    protected _listScrollView: St.ScrollView;
    protected _title: St.Label;

    public list: St.BoxLayout;
    public title: string;
    public label_actor: St.Label;

    constructor(params: St.BoxLayout.ConstructorProperties);
    public _init(params: St.BoxLayout.ConstructorProperties): void;
}

export class ListSectionItem extends St.BoxLayout {

    protected _iconActorBin: St.Bin;
    protected _title: St.Label;

    public title: string;
    public description: string;
    public iconActor: St.Widget;

    constructor(params: { style_class?: string | null });
    public _init(params: { style_class?: string | null }): void;
}