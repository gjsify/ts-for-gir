/**
 * DBus-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';

export namespace DBus {

enum BusType {
    SESSION,
    SYSTEM,
    STARTER,
}
class Connection {
    static name: string
}
class Error {
    static name: string
}
class Message {
    static name: string
}
class MessageIter {
    static name: string
}
class PendingCall {
    static name: string
}
}
export default DBus