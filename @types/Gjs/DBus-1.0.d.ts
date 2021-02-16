/**
 * DBus-1.0
 */

import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';

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