// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/misc/signals.js

<%_ const Gjs = dep.getGjs('..') _%>
import type { SignalMethods } from '<%- Gjs.importPath %>';

export interface EventEmitter extends SignalMethods {}

export class EventEmitter {
    connectObject(...args: any[]): number // TODO: return type is return type of imports.misc.signalTracker.connectObject

    disconnectObject(...args: any[]): number // TODO: return type is return type of imports.misc.signalTracker.disconnectObject

    connect_object(...args: any[]): ReturnType<typeof this.connectObject>

    disconnect_object(...args: any[]): ReturnType<typeof this.disconnectObject>
}