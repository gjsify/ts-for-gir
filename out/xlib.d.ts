/**
 * xlib-2.0
 */

export function open_display(): void
export interface Display_ConstructProps {
}
export interface Display {
}
export interface Display_Static {
    new (config: Display_ConstructProps): Display
}
export declare var Display: Display_Static
export interface Screen_ConstructProps {
}
export interface Screen {
}
export interface Screen_Static {
    new (config: Screen_ConstructProps): Screen
}
export declare var Screen: Screen_Static
export interface Visual_ConstructProps {
}
export interface Visual {
}
export interface Visual_Static {
    new (config: Visual_ConstructProps): Visual
}
export declare var Visual: Visual_Static
export interface XConfigureEvent_ConstructProps {
}
export interface XConfigureEvent {
}
export interface XConfigureEvent_Static {
    new (config: XConfigureEvent_ConstructProps): XConfigureEvent
}
export declare var XConfigureEvent: XConfigureEvent_Static
export interface XImage_ConstructProps {
}
export interface XImage {
}
export interface XImage_Static {
    new (config: XImage_ConstructProps): XImage
}
export declare var XImage: XImage_Static
export interface XFontStruct_ConstructProps {
}
export interface XFontStruct {
}
export interface XFontStruct_Static {
    new (config: XFontStruct_ConstructProps): XFontStruct
}
export declare var XFontStruct: XFontStruct_Static
export interface XTrapezoid_ConstructProps {
}
export interface XTrapezoid {
}
export interface XTrapezoid_Static {
    new (config: XTrapezoid_ConstructProps): XTrapezoid
}
export declare var XTrapezoid: XTrapezoid_Static
export interface XVisualInfo_ConstructProps {
}
export interface XVisualInfo {
}
export interface XVisualInfo_Static {
    new (config: XVisualInfo_ConstructProps): XVisualInfo
}
export declare var XVisualInfo: XVisualInfo_Static
export interface XWindowAttributes_ConstructProps {
}
export interface XWindowAttributes {
}
export interface XWindowAttributes_Static {
    new (config: XWindowAttributes_ConstructProps): XWindowAttributes
}
export declare var XWindowAttributes: XWindowAttributes_Static
export interface XEvent_ConstructProps {
}
export interface XEvent {
}
export interface XEvent_Static {
    new (config: XEvent_ConstructProps): XEvent
}
export declare var XEvent: XEvent_Static
type Atom = number
type Colormap = number
type Cursor = number
type Drawable = number
type GC = object
type KeyCode = number
type KeySym = number
type Picture = number
type Time = number
type VisualID = number
type Window = number
type XID = number
type Pixmap = number