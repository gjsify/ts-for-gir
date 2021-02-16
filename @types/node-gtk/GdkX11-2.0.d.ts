/**
 * GdkX11-2.0
 */

/// <reference types="node" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Gdk-2.0.d.ts" />

declare namespace GdkX11 {

export function netWmSupports(property: Gdk.Atom): boolean
export function x11AtomToXatom(atom: Gdk.Atom): xlib.Atom
export function x11AtomToXatomForDisplay(display: Gdk.Display, atom: Gdk.Atom): xlib.Atom
export function x11ColormapGetXcolormap(colormap: Gdk.Colormap): xlib.Colormap
export function x11CursorGetXcursor(cursor: Gdk.Cursor): xlib.Cursor
export function x11DisplayGetStartupNotificationId(display: Gdk.Display): string
export function x11DisplayGetUserTime(display: Gdk.Display): number
export function x11DisplayGrab(display: Gdk.Display): void
export function x11DisplaySetCursorTheme(display: Gdk.Display, theme: string, size: number): void
export function x11DisplayStringToCompoundText(display: Gdk.Display, str: string, encoding: Gdk.Atom, format: number, ctext: number, length: number): number
export function x11DisplayTextPropertyToTextList(display: Gdk.Display, encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number
export function x11DisplayUngrab(display: Gdk.Display): void
export function x11DisplayUtf8ToCompoundText(display: Gdk.Display, str: string, encoding: Gdk.Atom, format: number, ctext: number, length: number): boolean
export function x11DrawableGetXid(drawable: Gdk.Drawable): xlib.XID
export function x11FontGetName(font: Gdk.Font): string
export function x11FontGetXfont(font: Gdk.Font): object | null
export function x11FreeCompoundText(ctext: number): void
export function x11FreeTextList(list: string): void
export function x11GetDefaultRootXwindow(): xlib.Window
export function x11GetDefaultScreen(): number
export function x11GetServerTime(window: Gdk.Window): number
export function x11GetXatomByName(atomName: string): xlib.Atom
export function x11GetXatomByNameForDisplay(display: Gdk.Display, atomName: string): xlib.Atom
export function x11GetXatomName(xatom: xlib.Atom): string
export function x11GetXatomNameForDisplay(display: Gdk.Display, xatom: xlib.Atom): string
export function x11GrabServer(): void
export function x11RegisterStandardEventType(display: Gdk.Display, eventBase: number, nEvents: number): void
export function x11ScreenGetMonitorOutput(screen: Gdk.Screen, monitorNum: number): xlib.XID
export function x11ScreenGetScreenNumber(screen: Gdk.Screen): number
export function x11ScreenGetWindowManagerName(screen: Gdk.Screen): string
export function x11ScreenGetXscreen(screen: Gdk.Screen): xlib.Screen
export function x11ScreenLookupVisual(screen: Gdk.Screen, xvisualid: xlib.VisualID): Gdk.Visual
export function x11ScreenSupportsNetWmHint(screen: Gdk.Screen, property: Gdk.Atom): boolean
export function x11SetSmClientId(smClientId: string): void
export function x11UngrabServer(): void
export function x11WindowMoveToCurrentDesktop(window: Gdk.Window): void
export function x11WindowSetUserTime(window: Gdk.Window, timestamp: number): void
export function xidTableLookup(xid: xlib.XID): object | null
export function xidTableLookupForDisplay(display: Gdk.Display, xid: xlib.XID): object | null
}