// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/messageList.js

<% const St = dep.find('St') %>
<% const Clutter = dep.find('Clutter') %>

<%_ if(noNamespace){ _%>
    import type * as St from '../<%= St.packageName %>.js';
    import type * as Clutter from '../<%= Clutter.packageName %>.js';
<%_ } else { _%>
    import type St from '../<%= St.packageName %>.js';
    import type Clutter from '../<%= Clutter.packageName %>.js';
<%_ } _%>

declare function _fixMarkup(text: string, allowMarkup?: boolean): string;

declare class URLHighlighter extends St.Label {

    constructor(text?: string, lineWrap?: boolean, allowMarkup?: boolean);

    /** @hidden */
    public _init(params?: St.Label.ConstructorProperties): void;
    public _init(text?: string, lineWrap?: boolean, allowMarkup?: boolean): void;

    public vfunc_button_press_event(buttonEvent: Clutter.ButtonEvent): boolean;
    public vfunc_button_release_event(buttonEvent: Clutter.ButtonEvent): boolean;
    public vfunc_motion_event(motionEvent: Clutter.MotionEvent): boolean;
    public vfunc_leave_event(crossingEvent: Clutter.CrossingEvent): boolean;
    public setMarkup(text: string, allowMarkup?: boolean): void;

    protected _highlightUrls(): void;
    protected _findUrlAtPos(event: Clutter.Event): [number, number];
}

declare class ScaleLayout extends Clutter.BinLayout {
    constructor(params?: Clutter.BinLayout.ConstructorProperties);
    public _init(params?: Clutter.BinLayout.ConstructorProperties): void;

    public vfunc_get_preferred_width(container: Clutter.Container, forHeight: number): [number, number];
    public vfunc_get_preferred_height(container: Clutter.Container, forWidth: number): [number, number];

    protected _connectContainer(container: Clutter.Container): void;
}

declare class LabelExpanderLayout extends Clutter.LayoutManager {

    protected _expansion: number;
    protected _expandLines: number;
    protected _container: Clutter.Container;

    public expansion: number;
    public readonly expandLines: number;


    constructor(params?: Clutter.LayoutManager.ConstructorProperties)
    _init(params?: Clutter.LayoutManager.ConstructorProperties): void;

    vfunc_set_container(container: Clutter.Container): void;
    vfunc_get_preferred_width(container: Clutter.Container, forHeight: number): [number, number];
    vfunc_get_preferred_height(container: Clutter.Container, forWidth: number): [number, number];
    vfunc_allocate(container: Clutter.Container, box: Clutter.ActorBox): void;
}

export class Message extends St.Button {
    constructor(title: string, body: string);
    /** @hidden */
    public _init(params?: St.Button.ConstructorProperties): void;
    public _init(title: string, body: string): void;

    public close(): void;
    public setIcon(actor: St.Widget): void;
    public setSecondaryActor(actor: St.Widget): void;
    public setTitle(text: string): void;
    public setBody(text: string): void;
    public setUseBodyMarkup(enable: boolean): void;
    public setActionArea(actor: St.Widget): void;
    public addMediaControl(iconName: string, callback: () => void): void;
    public setExpandedBody(actor: St.Widget): void;
    public setExpandedLines(nLines: number): void;
    public expand(animate?: boolean): void;
    public unexpand(animate?: boolean): void;
    public canClose(): boolean;
    public vfunc_key_press_event(keyEvent: Clutter.KeyEvent): boolean;

    protected _sync(): void;
    protected _onDestroy(): void;
}

export class MessageListSection extends St.BoxLayout {

    protected _list: St.BoxLayout;
    protected _empty: boolean;
    protected _canClear: boolean;
    protected readonly _messages: St.Widget[];

    public readonly empty: boolean;
    public readonly canClear: boolean;
    public readonly allowed: boolean;

    constructor();
    /** @hidden */
    public _init(params?: St.BoxLayout.ConstructorProperties): void;
    public _init(): void;

    public addMessage(message: Message, animate?: boolean): void;
    public addMessageAtIndex(message: Message, index: number, animate?: boolean): void;
    public moveMessage(message: Message, newIndex: number, animate?: boolean): void;
    public removeMessage(message: Message, animate?: boolean): void;
    public clear(): void;

    protected _onKeyFocusIn(messageActor: St.Widget): void;
    protected _shouldShow(): boolean;
    protected _sync(): void;
}