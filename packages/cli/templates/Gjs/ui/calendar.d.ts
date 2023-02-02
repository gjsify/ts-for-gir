// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/calendar.js

<% const GObject = dep.find('GObject') %>
<% const Gio = dep.find('Gio') %>
<% const St = dep.find('St') %>
<% const Clutter = dep.find('Clutter') %>

<%_ if(noNamespace){ _%>
    import type * as GObject from '../<%= GObject.packageName %>.js';
    import type * as Gio from '../<%= Gio.packageName %>.js';
    import type * as St from '../<%= St.packageName %>.js';
    import type * as Clutter from '../<%= Clutter.packageName %>.js';
<%_ } else { _%>
    import type GObject from '../<%= GObject.packageName %>.js';
    import type Gio from '../<%= Gio.packageName %>.js';
    import type St from '../<%= St.packageName %>.js';
    import type Clutter from '../<%= Clutter.packageName %>.js';
<%_ } _%>

import type { Message, MessageListSection } from './messageList.js';
import type { Notification, MessageTray, Source } from './messageTray.js';
import type { Switch } from './popupMenu.js';
import type { MediaSection } from './mpris.js';

declare function sameYear(dateA: Date, dateB: Date): boolean;

declare function sameMonth(dateA: Date, dateB: Date): boolean;

declare function sameDay(dateA: Date, dateB: Date): boolean;

declare function _isWorkDay(date: Date): boolean;

declare function _getBeginningOfDay(date: Date): Date;

declare function _getEndOfDay(date: Date): Date;

declare function _getCalendarDayAbbreviation(dayNumber: number): string;

/**
 * Abstraction for an appointment/event in a calendar
 */
declare class CalendarEvent {
    public id: string;
    public date: Date;
    public end: Date;
    public summary: string;

    constructor(id: string, date: Date, end: Date, summary: string);
}

/**
 * Interface for appointments/events - e.g. the contents of a calendar
 */
declare abstract class EventSourceBase extends GObject.Object {

    public abstract readonly isLoading: boolean;
    public abstract readonly hasCalendars: boolean;

    public destroy(): void;
    public abstract requestRange(begin: Date, end: Date): void;
    public abstract getEvents(begin: Date, end: Date): CalendarEvent[];
    public abstract hasEvents(day: Date): boolean;
}

declare class EmptyEventSource extends EventSourceBase {
    public readonly isLoading: boolean;
    public readonly hasCalendars: boolean;

    public requestRange(begin: Date, end: Date): void;
    public getEvents(begin: Date, end: Date): CalendarEvent[];
    public hasEvents(day: Date): boolean;
}

declare const CalendarServerIface: GObject.Interface;

declare const CalendarServerInfo: Gio.DBusNodeInfo;

declare function CalendarServer(): Gio.DBusProxy;

declare function _datesEqual(dateA: Date, dateB: Date): boolean;

/**
 * Checks whether an event overlaps a given interval
 *
 * @param e0 Beginning of the event
 * @param e1 End of the event
 * @param i0 Beginning of the interval
 * @param i1 End of the interval
 * @returns Whether there was an overlap
 */
declare function _eventOverlapsInterval(e0: Date, e1: Date, i0: Date, i1: Date): boolean;

declare class DBusEventSource extends EventSourceBase {

    protected _events: Map<string, CalendarEvent>
    protected _isLoading: boolean;
    protected _initialized: boolean;
    protected _dbusProxy: Gio.DBusProxy;

    public readonly isLoading: boolean;
    public readonly hasCalendars: boolean;

    constructor();
    public _init(): void;

    public requestRange(begin: Date, end: Date): void;
    public getEvents(begin: Date, end: Date): CalendarEvent[];
    public hasEvents(day: Date): boolean;
    public destroy(): void;
    public requestRange(begin: Date, end: Date): void;
    public getEvents(begin: Date, end: Date): CalendarEvent[];
    public hasEvents(day: Date): boolean;

    protected _initProxy(): Promise<void>;
    protected _resetCache(): void;
    protected _removeMatching(uidPrefix: string): boolean;
    protected _onNameAppeared(): void;
    protected _onNameVanished(): void;
    protected _onEventsAddedOrUpdated(dbusProxy: Gio.DBusProxy, nameOwner: string, argArray: any[][]): void;
    protected _onEventsRemoved(dbusProxy: Gio.DBusProxy, nameOwner: string, argArray: any[][]): void;
    protected _onClientDisappeared(dbusProxy: Gio.DBusProxy, nameOwner: string, argArray: string[]): void;
    protected _loadEvents(forceReload: boolean): void;
    protected _getFilteredEvents(begin: Date, end: Date): Generator<CalendarEvent, void, unknown>;
}

export class Calendar extends St.Widget {

    protected _weekStart: number;
    protected _settings: Gio.Settings;
    protected _useWeekdate: boolean;

    /**
     * Translators: The header displaying just the month name
     * standalone, when this is a month of the current year.
     * "%OB" is the new format specifier introduced in glibc 2.27,
     * in most cases you should not change it.
     */
    protected _headerFormatWithoutYear: string;

    /**
     * Translators: The header displaying the month name and the year
     * number, when this is a month of a different year.  You can
     * reorder the format specifiers or add other modifications
     * according to the requirements of your language.
     * "%OB" is the new format specifier introduced in glibc 2.27,
     * in most cases you should not use the old "%B" here unless you
     * absolutely know what you are doing.
     */
    protected _headerFormat: string;

    protected _selectedDate: Date;

    protected _shouldDateGrabFocus: boolean;

    constructor();
    /** @hidden */
    public _init(params?: St.Widget.ConstructorProperties): void;
    public _init(): void;

    public setEventSource(eventSource: EventSourceBase): void;

    /**
     * Sets the calendar to show a specific date
     * @param date The date to show
     */
    public setDate(date: Date): void;

    public updateTimeZone(): void;

    public vfunc_scroll_event(event: Clutter.ScrollEvent): boolean;


    protected _buildHeader(): void;
    protected _onPrevMonthButtonClicked(): void;
    protected _onNextMonthButtonClicked(): void;
    protected _onSettingsChange(): void;
    protected _rebuildCalendar(): void;
    protected _update(): void;
}

export class NotificationMessage extends Message {
    /** @hidden */
    override _init(params?: St.Button.ConstructorProperties): void;
    /** @hidden */
    override _init(title: string, body: string): void;
    public _init(notification: Notification): void;

    public vfunc_clicked(): void;
    public canClose(): boolean;

    protected _getIcon(): St.Icon;
    protected _onUpdated(n: Notification, _clear?: boolean): void;
}

declare class TimeLabel extends St.Label {

    _datetime: Date;

    /** @hidden */
    public _init(params?: St.Label.ConstructorProperties): void;
    public _init(datetime: Date): void;

    public vfunc_map(): void;
}

declare class NotificationSection extends MessageListSection {

    public readonly allowed: boolean;

    /** @hidden */
    public _init(params?: St.BoxLayout.ConstructorProperties): void;
    public _init(): void;

    public vfunc_map(): void;

    protected _sourceAdded(tray: MessageTray, source: Source): void;
    protected _onNotificationAdded(source: Source, notification: Notification): void;
}

declare class Placeholder extends St.BoxLayout {
    protected _date: Date;
    protected _icon: St.Icon;
    protected _label: St.Label;

    /** @hidden */
    override _init(params?: St.BoxLayout.ConstructorProperties): void;
    public _init(): void;
}

declare class DoNotDisturbSwitch extends Switch {

    protected _settings: Gio.Settings;

    constructor();
    /** @hidden */
    override _init(config?: St.Bin.ConstructorProperties): void
    /** @hidden */
    override _init(state: boolean): void;
    public _init(): void;
}

export class CalendarMessageList extends St.Widget {

    _placeholder: Placeholder;
    _scrollView: St.ScrollView;
    _dndSwitch: DoNotDisturbSwitch;
    _dndButton: St.Button;
    _clearButton: St.Button;
    _sectionList: St.BoxLayout;
    _mediaSection: MediaSection;
    _notificationSection: NotificationSection;

    visible: boolean;

    /** @hidden */
    override _init(config?: St.Widget.ConstructorProperties): void
    public _init(): void;

    protected _addSection(section: MessageListSection): void;
    protected _sync(): void;
}