// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/mpris.js

<%_ const Gio = dep.find('Gio', '..') _%>
<%_ const St = dep.find('St', '..') _%>
<%- Gio ? Gio.importDef : '' %>
<%- St ? St.importDef : '' %>

import type { EventEmitter } from '../misc/signals.js';
import type { Message, MessageListSection } from './messageList.js';

declare class MediaMessage extends Message {

    protected _player: MprisPlayer;
    protected _icon: St.Icon;
    protected _secondaryBin: St.Bin;
    protected _closeButton: St.Button;
    protected _prevButton: St.Button;
    protected _playPauseButton: St.Button;
    protected _nextButton: St.Button;

    constructor(player: MprisPlayer);

    /** @hidden */
    public override _init(params?: St.Button.ConstructorProperties): void;
    /** @hidden */
    public override _init(title: string, body: string): void;
    public _init(player: MprisPlayer): void;

    public vfunc_clicked(): void;

    protected _updateNavButton(button: St.Button, sensitive?: boolean): void;
    protected _update(): void
}

declare class MprisPlayer extends EventEmitter {

    readonly status: string;
    readonly trackArtists: string;
    readonly trackTitle: string;
    readonly trackCoverUrl: string;
    readonly canGoNext: boolean;
    readonly canGoPrevious: boolean;

    constructor(busName: string);

    playPause(): void;
    next(): void;
    previous(): void;
    raise(): void;

    _close(): void;
    _onMprisProxyReady(): void;
    _onPlayerProxyReady(): void;
    _updateState(): void;
}

export class MediaSection extends MessageListSection {

    _players: Map<string, MprisPlayer>;
    _proxy: Gio.DBusProxy;

    public readonly allowed: boolean;

    /** @hidden */
    public _init(params?: St.BoxLayout.ConstructorProperties): void;
    public _init(): void;


    _addPlayer(busName: string): void;
    _onProxyReady(): Promise<void>;
    _onNameOwnerChanged(proxy: Gio.DBusProxy, sender: string, names: string[]): void;
}