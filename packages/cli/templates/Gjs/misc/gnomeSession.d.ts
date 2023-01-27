// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/misc/gnomeSession.js

<% const Gio = dep.find('Gio') %>

<%_ if(useNamespace){ _%>
    import type Gio from '../<%= Gio.packageName %>.js';
<%_ } else { _%>
    import type * as Gio from '../<%= Gio.packageName %>.js';
<%_ } _%>

/**
 * Enumeration of the possible presence statuses
 */
export enum PresenceStatus {
    AVAILABLE = 0,
    INVISIBLE = 1,
    BUSY = 2,
    IDLE = 3,
}

export enum InhibitFlags {
    LOGOUT = 1 << 0,
    SWITCH = 1 << 1,
    SUSPEND = 1 << 2,
    IDLE = 1 << 3,
    AUTOMOUNT = 1 << 4,
}

/**
 * The interface of `org.gnome.SessionManager.Presence`
 * TODO: Untested
 */
interface PresenceIface {
    // TODO: `org.gnome.SessionManager.Presence`
}

/**
 * Create a new DBus proxy for the presence interface
 * @param {Function | null} initCallback - a callback to call when the proxy is ready
 * @param {Gio.Cancellable | null} cancellable - a cancellable
 * @returns {Gio.DBusProxy & PresenceIface} - a new DBus proxy for the presence interface
 */
export function Presence(initCallback: Function | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy & PresenceIface;

/**
 * THe interface of `org.gnome.SessionManager.Inhibitor`
 * Representation of the DBus interface for the inhibitor, which is used to prevent the session from being closed
 * TODO: Untested
 */
interface InhibitorIface {
    // TODO: `org.gnome.SessionManager.Inhibitor`
}

/**
 * Create a new DBus proxy for the inhibitor interface
 * 
 * Note inhibitors are immutable objects, so they don't
 * change at runtime (changes always come in the form
 * of new inhibitors)
 * @param objectPath 
 * @param initCallback 
 * @param cancellable 
 */
export function Inhibitor(objectPath: string, initCallback: Function | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy & InhibitorIface;


/**
 * The interface of `org.gnome.SessionManager`
 */
interface SessionManagerIface {
    // TODO: `org.gnome.SessionManager`
}

export function SessionManager(initCallback: Function | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy & SessionManagerIface;