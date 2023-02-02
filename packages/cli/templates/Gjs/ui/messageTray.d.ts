// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/messageTray.js

<% const GObject = dep.find('GObject') %>
<% const GLib = dep.find('GLib') %>
<% const Gio = dep.find('Gio') %>
<% const St = dep.find('St') %>
<% const Clutter = dep.find('Clutter') %>
<% const GnomeDesktop = dep.find('GnomeDesktop') %>

<%_ if(noNamespace){ _%>
    import type * as GObject from '../<%= GObject.packageName %>.js';
    import type * as GLib from '../<%= GLib.packageName %>.js';
    import type * as Gio from '../<%= Gio.packageName %>.js';
    import type * as St from '../<%= St.packageName %>.js';
    import type * as Clutter from '../<%= Clutter.packageName %>.js';
    import type * as GnomeDesktop from '../<%= GnomeDesktop.packageName %>.js';
<%_ } else { _%>
    import type GObject from '../<%= GObject.packageName %>.js';
    import type GLib from '../<%= GLib.packageName %>.js';
    import type Gio from '../<%= Gio.packageName %>.js';
    import type St from '../<%= St.packageName %>.js';
    import type Clutter from '../<%= Clutter.packageName %>.js';
    import type GnomeDesktop from '../<%= GnomeDesktop.packageName %>.js';
<%_ } _%>

import type { NotificationMessage } from './calendar.js';
import type { Presence, PresenceStatus } from '../misc/gnomeSession.js';

/**
 * We delay hiding of the tray if the mouse is within `MOUSE_LEFT_ACTOR_THRESHOLD`
 * range from the point where it left the tray.
 */
declare const MOUSE_LEFT_ACTOR_THRESHOLD: number;

export enum State {
    HIDDEN =  0,
    SHOWING = 1,
    SHOWN =   2,
    HIDING =  3,
}

/**
 * These reasons are useful when we destroy the notifications received through
 * the notification daemon. We use EXPIRED for notifications that we dismiss
 * and the user did not interact with, DISMISSED for all other notifications
 * that were destroyed as a result of a user action, SOURCE_CLOSED for the
 * notifications that were requested to be destroyed by the associated source,
 * and REPLACED for notifications that were destroyed as a consequence of a
 * newer version having replaced them.
 */
export enum NotificationDestroyedReason {
    EXPIRED = 1,
    DISMISSED = 2,
    SOURCE_CLOSED = 3,
    REPLACED = 4,
}

/**
 * Message tray has its custom Urgency enumeration. LOW, NORMAL and CRITICAL
 * urgency values map to the corresponding values for the notifications received
 * through the notification daemon. HIGH urgency value is used for chats received
 * through the Telepathy client.
 */
export enum Urgency {
    LOW = 0,
    NORMAL = 1,
    HIGH = 2,
    CRITICAL = 3,
}

/**
 * The privacy of the details of a notification. USER is for notifications which
 * contain private information to the originating user account (for example,
 * details of an e-mail they’ve received). SYSTEM is for notifications which
 * contain information private to the physical system (for example, battery
 * status) and hence the same for every user. This affects whether the content
 * of a notification is shown on the lock screen.
 */
export enum PrivacyScope {
    USER = 0,
    SYSTEM = 1,
}

declare class FocusGrabber {

    protected _actor: Clutter.Actor;
    protected _prevKeyFocusActor: Clutter.Actor | null;
    protected _focused: boolean;

    constructor(actor: Clutter.Actor);

    public grabFocus(): void;
    public ungrabFocus(): void;

    protected _focusUngrabbed(): boolean;
    protected _focusActorChanged(): void;
}

/**
 * An object that holds all bits of configurable policy related to a notification
 * source, such as whether to play sound or honour the critical bit.
 * 
 * A notification without a policy object will inherit the default one.
 */
export abstract class NotificationPolicy extends GObject.Object {

    public readonly enable: boolean;
    public readonly enableSound: boolean;
    public readonly showBanners: boolean;
    public readonly forceExpanded: boolean;
    public readonly showInLockScreen: boolean;
    public readonly detailsInLockScreen: boolean;

    /**
     * Do nothing for the default policy. These methods are only useful for the
     * GSettings policy.
     */
    protected store(): void;
    protected destroy(): void;
}

export class NotificationGenericPolicy extends NotificationPolicy {

    public id: string;

    public readonly showBanners: boolean;
    public readonly showInLockScreen: boolean;

    protected _masterSettings: Gio.Settings;

    constructor();
    public _init(): void;

    public destroy(): void;

    protected _changed(settings: Gio.Settings, key: string): void;
}

export class NotificationApplicationPolicy extends NotificationPolicy {
    public id: string;
    public readonly enable: boolean;
    public readonly enableSound: boolean;
    public readonly showBanners: boolean;
    public readonly forceExpanded: boolean;
    public readonly showInLockScreen: boolean;
    public readonly detailsInLockScreen: boolean;

    protected _masterSettings: Gio.Settings;
    protected _canonicalId: string;
    protected _settings: Gio.Settings;

    constructor(id: string);
    public _init(id: string): void;

    public store(): void;
    public destroy(): void;

    protected _changed(settings: Gio.Settings, key: string): void;
    protected _canonicalizeId(id: string): string;
}

export namespace Notification {
    export interface Params {
        gicon?: Gio.Icon | null;
        secondaryGIcon?: Gio.Icon | null;
        bannerMarkup?: boolean;
        clear?: boolean;
        datetime?: GLib.DateTime | null;
        soundName?: string | null;
        soundFile?: Gio.File | null;
    }
}

export class Notification extends GObject.Object {

    public source: Source;
    public title: string;
    public urgency: Urgency;
    public isTransient: boolean;
    public privacyScope: PrivacyScope;
    public forFeedback: boolean;
    public bannerBodyText: string | null;
    public bannerBodyMarkup: boolean;
    public actions: string[];

    protected _soundName: string | null;
    protected _soundFile: Gio.File | null;
    protected _soundPlayed: boolean;

    constructor(source: Source, title: string, banner: string, params: Notification.Params);
    /** @hidden */
    override _init(config?: GObject.Object.ConstructorProperties): void;
    public _init(source: Source, title: string, banner: string, params: Notification.Params): void;

    /**
     * Updates the notification by regenerating its icon and updating
     * the title/banner. If @params.clear is %true, it will also
     * remove any additional actors/action buttons previously added.
     * 
     * @param title the new title
     * @param banner the new banner
     * @param params as in the Notification constructor
     */
    public update(title: string, banner: string, params: Notification.Params): void;

    /**
     * @param label the label for the action's button
     * @param callback the callback for the action
     */
    public addAction(label: string, callback: () => void): void;

    public setUrgency(urgency: Urgency): void;

    public setResident(resident: boolean): void;

    public setTransient(isTransient: boolean): void;

    public setForFeedback(forFeedback: boolean): void;

    public setPrivacyScope(privacyScope: PrivacyScope): void;

    public playSound(): void;

    /**
     * Allow customizing the banner UI:
     * the default implementation defers the creation to
     * the source (which will create a {@link NotificationBanner}),
     * so customization can be done by subclassing either
     * Notification or Source
     */
    public createBanner(): NotificationBanner;

    public activate(): void;

    public destroy(reason?: NotificationDestroyedReason): void;
}

declare class NotificationBanner extends NotificationMessage {
    protected _buttonBox: St.BoxLayout | null;

    public can_focus: boolean;
    
    constructor(notification: Notification);

    /** @hidden */
    override _init(params?: St.Button.ConstructorProperties): void;
    /** @hidden */
    override _init(title: string, body: string): void;
    public _init(notification: Notification): void;

    public addButton(button: St.Button, callback: () => void): void;
    public addAction(label: string, callback: () => void): void;

    protected _onUpdated(n: Notification, clear?: boolean): void;
    protected _addActions(): void;
    protected _addSecondaryIcon(): void;
}

export class SourceActor extends St.Widget {

    protected _source: Source;
    protected _size: number;
    protected _iconBin: St.Bin;

    constructor(source: Source, size: number);
    /** @hidden */
    public _init(params?: St.Widget.ConstructorProperties): void;
    public _init(source: Source, size: number): void;

    public setIcon(icon: Gio.Icon): void;

    protected _updateIcon(): void;
}

export class Source extends GObject.Object {

    _policy: NotificationPolicy;

    SOURCE_ICON_SIZE: number;
    iconName: string;
    isChat: boolean;
    notifications: Notification[];
    policy: NotificationPolicy;
    title: string;
    readonly count: number;
    readonly unseenCount: number;
    readonly countVisible: boolean;
    readonly narrowestPrivacyScope: PrivacyScope;


    constructor(title: string, iconName: string);
    /** @hidden */
    public _init(config?: GObject.Object.ConstructorProperties): void;
    public _init(title: string, iconName: string): void;
    
    public countUpdated(): void;
    
    public setTitle(newTitle: string): void;
    
    public createBanner(notification: Notification): NotificationBanner;

    /**
     * Called to create a new icon actor.
     * Provides a sane default implementation, override if you need
     * something more fancy.
     * @param size the size of the icon
     */
    public createIcon(size: number): St.Icon;

    public getIcon(): Gio.ThemedIcon;

    public pushNotification(notification: Notification): void;

    public showNotification(notification: Notification): void;

    public destroy(reason: NotificationDestroyedReason): void;

    public iconUpdated(): void;

    /** To be overridden by subclasses */
    public open(): void;

    public destroyNonResidentNotifications(): void;

    protected _createPolicy(): NotificationPolicy;
    protected _onNotificationDestroy(notification: Notification): void;
}

export class MessageTray extends St.Widget {

    protected _presence: ReturnType<typeof Presence>;
    protected _busy: boolean;
    protected _bannerBlocked: boolean;
    protected _bannerBin: St.Widget;
    protected _notificationFocusGrabber: FocusGrabber;
    protected _notificationQueue: Notification[];
    protected _notification: Notification | null;
    protected _banner: NotificationBanner | null;
    protected _userActiveWhileNotificationShown: boolean;
    protected _useLongerNotificationLeftTimeout: boolean;

    /**
     * pointerInNotification is sort of a misnomer -- it tracks whether
     * a message tray notification should expand. The value is
     * partially driven by the hover state of the notification, but has
     * a lot of complex state related to timeouts and the current
     * state of the pointer when a notification pops up.
     */
    protected _pointerInNotification: boolean;

    /**
     * This tracks this._bannerBin.hover and is used to fizzle
     * out non-changing hover notifications in onNotificationHoverChanged.
     */
    protected _notificationHovered: boolean;

    protected _notificationState: State;
    protected _notificationTimeoutId: number;
    protected _notificationRemoved: boolean;
    protected _sources: Set<Source>;

    public idleMonitor: GnomeDesktop.IdleMonitor;
    public bannerAlignment: number;
    public readonly queueCount: number;
    public bannerBlocked: boolean;

    constructor();
    /** @hidden */
    public _init(params?: St.Widget.ConstructorProperties): void;
    public _init(): void;

    /** @hidden */
    public contains(descendant: Clutter.Actor): boolean
    public contains(source: Source): boolean;
    public add(source: Source): void;
    public getSources(): Source[];

    protected _sessionUpdated(): void;
    protected _onDragBegin(): void;
    protected _onDragEnd(): void;
    protected _onNotificationKeyRelease(actor: St.Widget, event: Clutter.Event): boolean;
    protected _expireNotification(): void;
    protected _addSource(source: Source): void;
    protected _removeSource(source: Source): void;
    protected _onSourceEnableChanged(policy: NotificationPolicy, source: Source): void;
    protected _onNotificationDestroy(notification: Notification): void;
    protected _onNotificationShow(_source: Source, notification: Notification): void;
    protected _resetNotificationLeftTimeout(): void;
    protected _onNotificationHoverChanged(): void;
    protected _onStatusChanged(status: PresenceStatus): void;
    protected _onNotificationLeftTimeout(): void;
    protected _escapeTray(): void;

    /**
     * All of the logic for what happens when occurs here; the various
     * event handlers merely update variables such as
     * 'this._pointerInNotification', 'this._traySummoned', etc, and
     * _updateState() figures out what (if anything) needs to be done
     * at the present time.
     */
    protected _updateState(): void;

    protected _onIdleMonitorBecameActive(): void;
    protected _showNotification(): void;
    protected _updateShowingNotification(): void;
    protected _showNotificationCompleted(): void;
    protected _updateNotificationTimeout(timeout: number): void;
    protected _notificationTimeout(): void;
    protected _hideNotification(animate?: boolean): void;
    protected _hideNotificationCompleted(): void;
    protected _expandActiveNotification(): void;
    protected _expandBanner(autoExpanding?: boolean): void;
    protected _ensureBannerFocused(): void;
}

export class SystemNotificationSource extends Source {
    constructor(title: string, iconName: string);
    /** @hidden */
    public _init(title: string, iconName: string): void;
    public _init(): void;

    public open(): void;
}