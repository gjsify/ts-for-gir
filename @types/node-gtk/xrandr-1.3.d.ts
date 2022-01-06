/**
 * xrandr-1.3
 */

import "node"
import type { GObject } from './GObject-2.0';

declare namespace xrandr {

class ScreenSize {
    static name: string
}
class ScreenChangeNotifyEvent {
    static name: string
}
class NotifyEvent {
    static name: string
}
class ScreenResources {
    static name: string
}
class OutputChangeNotifyEvent {
    static name: string
}
class CrtcChangeNotifyEvent {
    static name: string
}
class OutputPropertyNotifyEvent {
    static name: string
}
}
export default xrandr