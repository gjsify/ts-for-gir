// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/misc/signals.js

import type { Signals } from '../Gjs.js';

export interface EventEmitter extends Signals.Methods {}

export class EventEmitter {
    connectObject(...args: any[]): number // TODO: return type is return type of imports.misc.signalTracker.connectObject

    disconnectObject(...args: any[]): number // TODO: return type is return type of imports.misc.signalTracker.disconnectObject

    connect_object(...args: any[]): ReturnType<typeof this.connectObject>

    disconnect_object(...args: any[]): ReturnType<typeof this.disconnectObject>
}