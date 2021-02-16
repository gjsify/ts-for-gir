/**
 * DBus-1.0
 */

/// <reference types="node" />
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace DBus {

export enum BusType {
    SESSION,
    SYSTEM,
    STARTER,
}
export class Connection {
    static name: string
}
export class Error {
    static name: string
}
export class Message {
    static name: string
}
export class MessageIter {
    static name: string
}
export class PendingCall {
    static name: string
}
}