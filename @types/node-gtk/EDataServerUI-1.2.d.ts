/**
 * EDataServerUI-1.2
 */

/// <reference types="node" />
import type { Soup } from './Soup-2.4';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';
import type { EDataServer } from './EDataServer-1.2';
import type { libxml2 } from './libxml2-2.0';
import type { GData } from './GData-0.0';
import type { Json } from './Json-1.0';
import type { Goa } from './Goa-1.0';
import type { Camel } from './Camel-1.2';
import type { ECal } from './ECal-2.0';
import type { ICalGLib } from './ICalGLib-3.0';

declare namespace EDataServerUI {

export enum CredentialsPrompterPromptFlags {
    NONE,
    ALLOW_SOURCE_SAVE,
    ALLOW_STORED_CREDENTIALS,
}
export function bufferTaggerConnect(textview: Gtk.TextView): void
export function bufferTaggerDisconnect(textview: Gtk.TextView): void
export function bufferTaggerUpdateTags(textview: Gtk.TextView): void
export function trustPromptDescribeCertificateErrors(flags: Gio.TlsCertificateFlags): string
export function trustPromptRunForSource(parent: Gtk.Window, source: EDataServer.Source, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, errorText: string | null, allowSourceSave: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function trustPromptRunForSourceFinish(source: EDataServer.Source, result: Gio.AsyncResult, response: EDataServer.TrustPromptResponse): boolean
export function trustPromptRunModal(parent: Gtk.Window, sourceExtension: string | null, sourceDisplayName: string | null, host: string, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, errorText?: string | null): EDataServer.TrustPromptResponse
export interface CredentialsPrompterLoopPromptFunc {
    (prompter: CredentialsPrompter, source: EDataServer.Source, credentials: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): boolean
}
export interface CellRendererColor_ConstructProps extends Gtk.CellRenderer_ConstructProps {
    rgba?: Gdk.RGBA
}
export class CellRendererColor {
    /* Properties of EDataServerUI.CellRendererColor */
    rgba: Gdk.RGBA
    /* Properties of Gtk.CellRenderer */
    cellBackground: string
    cellBackgroundGdk: Gdk.Color
    cellBackgroundRgba: Gdk.RGBA
    cellBackgroundSet: boolean
    readonly editing: boolean
    height: number
    isExpanded: boolean
    isExpander: boolean
    mode: Gtk.CellRendererMode
    sensitive: boolean
    visible: boolean
    width: number
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Fields of EDataServerUI.CellRendererColor */
    parent: Gtk.CellRenderer
    priv: CellRendererColorPrivate
    /* Fields of Gtk.CellRenderer */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk.CellRenderer */
    activate(event: Gdk.Event, widget: Gtk.Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): boolean
    getAlignedArea(widget: Gtk.Widget, flags: Gtk.CellRendererState, cellArea: Gdk.Rectangle): /* alignedArea */ Gdk.Rectangle
    getAlignment(): [ /* xalign */ number | null, /* yalign */ number | null ]
    getFixedSize(): [ /* width */ number | null, /* height */ number | null ]
    getPadding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    getPreferredHeight(widget: Gtk.Widget): [ /* minimumSize */ number | null, /* naturalSize */ number | null ]
    getPreferredHeightForWidth(widget: Gtk.Widget, width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(widget: Gtk.Widget): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(widget: Gtk.Widget): [ /* minimumSize */ number | null, /* naturalSize */ number | null ]
    getPreferredWidthForHeight(widget: Gtk.Widget, height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRequestMode(): Gtk.SizeRequestMode
    getSensitive(): boolean
    getSize(widget: Gtk.Widget, cellArea?: Gdk.Rectangle | null): [ /* xOffset */ number | null, /* yOffset */ number | null, /* width */ number | null, /* height */ number | null ]
    getState(widget: Gtk.Widget | null, cellState: Gtk.CellRendererState): Gtk.StateFlags
    getVisible(): boolean
    isActivatable(): boolean
    render(cr: cairo.Context, widget: Gtk.Widget, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): void
    setAlignment(xalign: number, yalign: number): void
    setFixedSize(width: number, height: number): void
    setPadding(xpad: number, ypad: number): void
    setSensitive(sensitive: boolean): void
    setVisible(visible: boolean): void
    startEditing(event: Gdk.Event | null, widget: Gtk.Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): Gtk.CellEditable | null
    stopEditing(canceled: boolean): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Gtk.CellRenderer */
    vfuncActivate(event: Gdk.Event, widget: Gtk.Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): boolean
    vfuncEditingCanceled(): void
    vfuncEditingStarted(editable: Gtk.CellEditable, path: string): void
    vfuncGetAlignedArea(widget: Gtk.Widget, flags: Gtk.CellRendererState, cellArea: Gdk.Rectangle): /* alignedArea */ Gdk.Rectangle
    vfuncGetPreferredHeight(widget: Gtk.Widget): [ /* minimumSize */ number | null, /* naturalSize */ number | null ]
    vfuncGetPreferredHeightForWidth(widget: Gtk.Widget, width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredWidth(widget: Gtk.Widget): [ /* minimumSize */ number | null, /* naturalSize */ number | null ]
    vfuncGetPreferredWidthForHeight(widget: Gtk.Widget, height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGetSize(widget: Gtk.Widget, cellArea?: Gdk.Rectangle | null): [ /* xOffset */ number | null, /* yOffset */ number | null, /* width */ number | null, /* height */ number | null ]
    vfuncRender(cr: cairo.Context, widget: Gtk.Widget, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): void
    vfuncStartEditing(event: Gdk.Event | null, widget: Gtk.Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): Gtk.CellEditable | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.CellRenderer */
    connect(sigName: "editing-canceled", callback: (($obj: CellRendererColor) => void)): number
    connect_after(sigName: "editing-canceled", callback: (($obj: CellRendererColor) => void)): number
    emit(sigName: "editing-canceled"): void
    on(sigName: "editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "editing-canceled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "editing-started", callback: (($obj: CellRendererColor, editable: Gtk.CellEditable, path: string) => void)): number
    connect_after(sigName: "editing-started", callback: (($obj: CellRendererColor, editable: Gtk.CellEditable, path: string) => void)): number
    emit(sigName: "editing-started", editable: Gtk.CellEditable, path: string): void
    on(sigName: "editing-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "editing-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "editing-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cell-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cell-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cell-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cell-background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cell-background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cell-background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cell-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cell-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cell-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editing", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-expanded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-expanded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-expanded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-expander", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-expander", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-expander", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererColor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CellRendererColor_ConstructProps)
    _init (config?: CellRendererColor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CellRendererColor
    static $gtype: GObject.Type
}
export interface CredentialsPrompter_ConstructProps extends GObject.Object_ConstructProps {
    autoPrompt?: boolean
    registry?: EDataServer.SourceRegistry
}
export class CredentialsPrompter {
    /* Properties of EDataServerUI.CredentialsPrompter */
    autoPrompt: boolean
    readonly provider: EDataServer.SourceCredentialsProvider
    /* Fields of EDataServerUI.CredentialsPrompter */
    parent: GObject.Object
    priv: CredentialsPrompterPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServerUI.CredentialsPrompter */
    completePromptCall(asyncResult: Gio.SimpleAsyncResult, source: EDataServer.Source, credentials?: EDataServer.NamedParameters | null, error?: GLib.Error | null): void
    getAutoPrompt(): boolean
    getAutoPromptDisabledFor(source: EDataServer.Source): boolean
    getDialogParent(): Gtk.Window
    getProvider(): EDataServer.SourceCredentialsProvider
    getRegistry(): EDataServer.SourceRegistry
    loopPromptSync(source: EDataServer.Source, flags: CredentialsPrompterPromptFlags, func: CredentialsPrompterLoopPromptFunc, cancellable?: Gio.Cancellable | null): boolean
    processAwaitingCredentials(): void
    processSource(source: EDataServer.Source): boolean
    prompt(source: EDataServer.Source, errorText: string | null, flags: CredentialsPrompterPromptFlags, callback?: Gio.AsyncReadyCallback | null): void
    promptFinish(result: Gio.AsyncResult, outSource: EDataServer.Source | null, outCredentials: EDataServer.NamedParameters): boolean
    registerImpl(authenticationMethod: string | null, prompterImpl: CredentialsPrompterImpl): boolean
    setAutoPrompt(autoPrompt: boolean): void
    setAutoPromptDisabledFor(source: EDataServer.Source, isDisabled: boolean): void
    unregisterImpl(authenticationMethod: string | null, prompterImpl: CredentialsPrompterImpl): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Virtual methods of EDataServerUI.CredentialsPrompter */
    vfuncGetDialogParent(): Gtk.Window
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.CredentialsPrompter */
    connect(sigName: "get-dialog-parent", callback: (($obj: CredentialsPrompter) => Gtk.Window)): number
    connect_after(sigName: "get-dialog-parent", callback: (($obj: CredentialsPrompter) => Gtk.Window)): number
    emit(sigName: "get-dialog-parent"): void
    on(sigName: "get-dialog-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "get-dialog-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "get-dialog-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-prompt", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-prompt", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-prompt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: CredentialsPrompter, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CredentialsPrompter_ConstructProps)
    _init (config?: CredentialsPrompter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: EDataServer.SourceRegistry): CredentialsPrompter
    static $gtype: GObject.Type
}
export interface CredentialsPrompterImpl_ConstructProps extends EDataServer.Extension_ConstructProps {
}
export class CredentialsPrompterImpl {
    /* Fields of EDataServerUI.CredentialsPrompterImpl */
    parent: EDataServer.Extension
    priv: CredentialsPrompterImplPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServerUI.CredentialsPrompterImpl */
    cancelPrompt(promptId?: object | null): void
    getCredentialsPrompter(): object | null
    prompt(promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string | null, credentials: EDataServer.NamedParameters): void
    promptFinish(promptId?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer.Extension */
    getExtensible(): EDataServer.Extensible
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of EDataServerUI.CredentialsPrompterImpl */
    vfuncCancelPrompt(promptId?: object | null): void
    vfuncProcessPrompt(promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string, credentials: EDataServer.NamedParameters): void
    vfuncPromptFinished(promptId: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImpl, promptId?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImpl, promptId?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", promptId?: object | null, credentials?: EDataServer.NamedParameters | null): void
    on(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsPrompterImpl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsPrompterImpl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CredentialsPrompterImpl_ConstructProps)
    _init (config?: CredentialsPrompterImpl_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CredentialsPrompterImplOAuth2_ConstructProps extends CredentialsPrompterImpl_ConstructProps {
}
export class CredentialsPrompterImplOAuth2 {
    /* Fields of EDataServerUI.CredentialsPrompterImplOAuth2 */
    parent: CredentialsPrompterImpl
    priv: CredentialsPrompterImplOAuth2Private
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServerUI.CredentialsPrompterImpl */
    cancelPrompt(promptId?: object | null): void
    getCredentialsPrompter(): object | null
    prompt(promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string | null, credentials: EDataServer.NamedParameters): void
    promptFinish(promptId?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer.Extension */
    getExtensible(): EDataServer.Extensible
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of EDataServerUI.CredentialsPrompterImpl */
    vfuncCancelPrompt(promptId?: object | null): void
    vfuncProcessPrompt(promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string, credentials: EDataServer.NamedParameters): void
    vfuncPromptFinished(promptId: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplOAuth2, promptId?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplOAuth2, promptId?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", promptId?: object | null, credentials?: EDataServer.NamedParameters | null): void
    on(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsPrompterImplOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsPrompterImplOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CredentialsPrompterImplOAuth2_ConstructProps)
    _init (config?: CredentialsPrompterImplOAuth2_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CredentialsPrompterImplOAuth2
    static $gtype: GObject.Type
}
export interface CredentialsPrompterImplPassword_ConstructProps extends CredentialsPrompterImpl_ConstructProps {
}
export class CredentialsPrompterImplPassword {
    /* Fields of EDataServerUI.CredentialsPrompterImplPassword */
    parent: CredentialsPrompterImpl
    priv: CredentialsPrompterImplPasswordPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServerUI.CredentialsPrompterImpl */
    cancelPrompt(promptId?: object | null): void
    getCredentialsPrompter(): object | null
    prompt(promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string | null, credentials: EDataServer.NamedParameters): void
    promptFinish(promptId?: object | null, credentials?: EDataServer.NamedParameters | null): void
    /* Methods of EDataServer.Extension */
    getExtensible(): EDataServer.Extensible
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of EDataServerUI.CredentialsPrompterImpl */
    vfuncCancelPrompt(promptId?: object | null): void
    vfuncProcessPrompt(promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string, credentials: EDataServer.NamedParameters): void
    vfuncPromptFinished(promptId: object | null, credentials: EDataServer.NamedParameters): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.CredentialsPrompterImpl */
    connect(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplPassword, promptId?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    connect_after(sigName: "prompt-finished", callback: (($obj: CredentialsPrompterImplPassword, promptId?: object | null, credentials?: EDataServer.NamedParameters | null) => void)): number
    emit(sigName: "prompt-finished", promptId?: object | null, credentials?: EDataServer.NamedParameters | null): void
    on(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "prompt-finished", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CredentialsPrompterImplPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CredentialsPrompterImplPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CredentialsPrompterImplPassword_ConstructProps)
    _init (config?: CredentialsPrompterImplPassword_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CredentialsPrompterImplPassword
    static $gtype: GObject.Type
}
export interface RemindersWidget_ConstructProps extends Gtk.Grid_ConstructProps {
    watcher?: ECal.ReminderWatcher
    orientation?: Gtk.Orientation
}
export class RemindersWidget {
    /* Properties of EDataServerUI.RemindersWidget */
    readonly empty: boolean
    /* Properties of Gtk.Grid */
    baselineRow: number
    columnHomogeneous: boolean
    columnSpacing: number
    rowHomogeneous: boolean
    rowSpacing: number
    /* Properties of Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServerUI.RemindersWidget */
    getPaned(): Gtk.Paned
    getSettings(): Gio.Settings
    getTreeView(): Gtk.TreeView
    getWatcher(): ECal.ReminderWatcher
    isEmpty(): boolean
    reportError(prefix?: string | null, error?: GLib.Error | null): void
    /* Methods of Gtk.Grid */
    attach(child: Gtk.Widget, left: number, top: number, width: number, height: number): void
    attachNextTo(child: Gtk.Widget, sibling: Gtk.Widget | null, side: Gtk.PositionType, width: number, height: number): void
    getBaselineRow(): number
    getChildAt(left: number, top: number): Gtk.Widget | null
    getColumnHomogeneous(): boolean
    getColumnSpacing(): number
    getRowBaselinePosition(row: number): Gtk.BaselinePosition
    getRowHomogeneous(): boolean
    getRowSpacing(): number
    insertColumn(position: number): void
    insertNextTo(sibling: Gtk.Widget, side: Gtk.PositionType): void
    insertRow(position: number): void
    removeColumn(position: number): void
    removeRow(position: number): void
    setBaselineRow(row: number): void
    setColumnHomogeneous(homogeneous: boolean): void
    setColumnSpacing(spacing: number): void
    setRowBaselinePosition(row: number, pos: Gtk.BaselinePosition): void
    setRowHomogeneous(homogeneous: boolean): void
    setRowSpacing(spacing: number): void
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    loadExtensions(): void
    /* Methods of Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Methods of Gtk.Orientable */
    getOrientation(): Gtk.Orientation
    setOrientation(orientation: Gtk.Orientation): void
    /* Virtual methods of EDataServerUI.RemindersWidget */
    vfuncActivated(rd: ECal.ReminderData): boolean
    vfuncChanged(): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncConstructChild(builder: Gtk.Builder, name: string): GObject.Object
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncGetName(): string
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetName(name: string): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd(widget: Gtk.Widget): void
    vfuncCheckResize(): void
    vfuncChildType(): GObject.Type
    vfuncCompositeName(child: Gtk.Widget): string
    vfuncForall(includeInternals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove(widget: Gtk.Widget): void
    vfuncSetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation(baseline: number): void
    vfuncAdjustBaselineRequest(minimumBaseline: number, naturalBaseline: number): void
    vfuncAdjustSizeAllocation(orientation: Gtk.Orientation, minimumSize: number, naturalSize: number, allocatedPos: number, allocatedSize: number): void
    vfuncAdjustSizeRequest(orientation: Gtk.Orientation, minimumSize: number, naturalSize: number): void
    vfuncButtonPressEvent(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel(signalId: number): boolean
    vfuncChildNotify(childProperty: GObject.ParamSpec): void
    vfuncCompositedChanged(): void
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncConfigureEvent(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent(event: Gdk.EventAny): boolean
    vfuncDestroy(): void
    vfuncDestroyEvent(event: Gdk.EventAny): boolean
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin(context: Gdk.DragContext): void
    vfuncDragDataDelete(context: Gdk.DragContext): void
    vfuncDragDataGet(context: Gdk.DragContext, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDataReceived(context: Gdk.DragContext, x: number, y: number, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDrop(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDragEnd(context: Gdk.DragContext): void
    vfuncDragFailed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave(context: Gdk.DragContext, time: number): void
    vfuncDragMotion(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDraw(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncEvent(event: Gdk.Event): boolean
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(event: Gdk.EventFocus): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncGetPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus(): void
    vfuncGrabNotify(wasGrabbed: boolean): void
    vfuncHide(): void
    vfuncHierarchyChanged(previousToplevel: Gtk.Widget): void
    vfuncKeyPressEvent(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(event: Gdk.EventKey): boolean
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncMap(): void
    vfuncMapEvent(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMotionNotifyEvent(event: Gdk.EventMotion): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncParentSet(previousParent: Gtk.Widget): void
    vfuncPopupMenu(): boolean
    vfuncPropertyNotifyEvent(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion(region: cairo.Region): void
    vfuncRealize(): void
    vfuncScreenChanged(previousScreen: Gdk.Screen): void
    vfuncScrollEvent(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionGet(selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncSelectionNotifyEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived(selectionData: Gtk.SelectionData, time: number): void
    vfuncSelectionRequestEvent(event: Gdk.EventSelection): boolean
    vfuncShow(): void
    vfuncShowAll(): void
    vfuncShowHelp(helpType: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate(allocation: Gtk.Allocation): void
    vfuncStateChanged(previousState: Gtk.StateType): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncStyleSet(previousStyle: Gtk.Style): void
    vfuncStyleUpdated(): void
    vfuncTouchEvent(event: Gdk.EventTouch): boolean
    vfuncUnmap(): void
    vfuncUnmapEvent(event: Gdk.EventAny): boolean
    vfuncUnrealize(): void
    vfuncVisibilityNotifyEvent(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of EDataServerUI.RemindersWidget */
    connect(sigName: "activated", callback: (($obj: RemindersWidget, object: ECal.ReminderData) => boolean)): number
    connect_after(sigName: "activated", callback: (($obj: RemindersWidget, object: ECal.ReminderData) => boolean)): number
    emit(sigName: "activated", object: ECal.ReminderData): void
    on(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "changed", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "changed"): void
    on(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-resize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus-child", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: RemindersWidget, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: RemindersWidget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: RemindersWidget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: RemindersWidget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: RemindersWidget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "can-activate-accel", callback: (($obj: RemindersWidget, signalId: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: RemindersWidget, signalId: number) => boolean)): number
    emit(sigName: "can-activate-accel", signalId: number): void
    on(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: RemindersWidget, childProperty: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: RemindersWidget, childProperty: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "composited-changed", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "configure-event", callback: (($obj: RemindersWidget, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: RemindersWidget, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "damage-event", callback: (($obj: RemindersWidget, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: RemindersWidget, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy-event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: RemindersWidget, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: RemindersWidget, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-begin", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-delete", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-get", callback: (($obj: RemindersWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: RemindersWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-received", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-drop", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-end", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: RemindersWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-failed", callback: (($obj: RemindersWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: RemindersWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-leave", callback: (($obj: RemindersWidget, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: RemindersWidget, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-motion", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: RemindersWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "draw", callback: (($obj: RemindersWidget, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: RemindersWidget, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: RemindersWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event-after", callback: (($obj: RemindersWidget, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: RemindersWidget, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: RemindersWidget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: RemindersWidget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: RemindersWidget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: RemindersWidget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: RemindersWidget, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: RemindersWidget, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-focus", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-notify", callback: (($obj: RemindersWidget, wasGrabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: RemindersWidget, wasGrabbed: boolean) => void)): number
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    on(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hierarchy-changed", callback: (($obj: RemindersWidget, previousToplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: RemindersWidget, previousToplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: RemindersWidget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: RemindersWidget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: RemindersWidget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: RemindersWidget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map-event", callback: (($obj: RemindersWidget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: RemindersWidget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: RemindersWidget, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: RemindersWidget, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: RemindersWidget, oldParent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: RemindersWidget, oldParent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "popup-menu", callback: (($obj: RemindersWidget) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: RemindersWidget) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-in-event", callback: (($obj: RemindersWidget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: RemindersWidget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-out-event", callback: (($obj: RemindersWidget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: RemindersWidget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: RemindersWidget, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: RemindersWidget, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "screen-changed", callback: (($obj: RemindersWidget, previousScreen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: RemindersWidget, previousScreen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: RemindersWidget, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: RemindersWidget, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-clear-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-get", callback: (($obj: RemindersWidget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: RemindersWidget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-received", callback: (($obj: RemindersWidget, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: RemindersWidget, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-request-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: RemindersWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-help", callback: (($obj: RemindersWidget, helpType: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: RemindersWidget, helpType: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-allocate", callback: (($obj: RemindersWidget, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: RemindersWidget, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: RemindersWidget, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: RemindersWidget, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: RemindersWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: RemindersWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-set", callback: (($obj: RemindersWidget, previousStyle?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: RemindersWidget, previousStyle?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    on(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-updated", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: RemindersWidget, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: RemindersWidget, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap-event", callback: (($obj: RemindersWidget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: RemindersWidget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visibility-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: RemindersWidget, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-state-event", callback: (($obj: RemindersWidget, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: RemindersWidget, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::empty", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::baseline-row", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::column-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::column-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::orientation", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RemindersWidget_ConstructProps)
    _init (config?: RemindersWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(watcher: ECal.ReminderWatcher): RemindersWidget
    static new(): RemindersWidget
    static $gtype: GObject.Type
}
export interface WebDAVDiscoverContent_ConstructProps extends Gtk.Grid_ConstructProps {
    orientation?: Gtk.Orientation
}
export class WebDAVDiscoverContent {
    /* Properties of Gtk.Grid */
    baselineRow: number
    columnHomogeneous: boolean
    columnSpacing: number
    rowHomogeneous: boolean
    rowSpacing: number
    /* Properties of Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServerUI.WebDAVDiscoverContent */
    getBaseUrl(): string
    getMultiselect(): boolean
    getSelected(index: number): [ /* returnType */ boolean, /* outHref */ string, /* outSupports */ number, /* outDisplayName */ string, /* outColor */ string, /* outOrder */ number ]
    getTreeSelection(): Gtk.TreeSelection
    getUserAddress(): string
    refresh(displayName?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    setBaseUrl(baseUrl: string): void
    setMultiselect(multiselect: boolean): void
    showError(error?: GLib.Error | null): void
    /* Methods of Gtk.Grid */
    attach(child: Gtk.Widget, left: number, top: number, width: number, height: number): void
    attachNextTo(child: Gtk.Widget, sibling: Gtk.Widget | null, side: Gtk.PositionType, width: number, height: number): void
    getBaselineRow(): number
    getChildAt(left: number, top: number): Gtk.Widget | null
    getColumnHomogeneous(): boolean
    getColumnSpacing(): number
    getRowBaselinePosition(row: number): Gtk.BaselinePosition
    getRowHomogeneous(): boolean
    getRowSpacing(): number
    insertColumn(position: number): void
    insertNextTo(sibling: Gtk.Widget, side: Gtk.PositionType): void
    insertRow(position: number): void
    removeColumn(position: number): void
    removeRow(position: number): void
    setBaselineRow(row: number): void
    setColumnHomogeneous(homogeneous: boolean): void
    setColumnSpacing(spacing: number): void
    setRowBaselinePosition(row: number, pos: Gtk.BaselinePosition): void
    setRowHomogeneous(homogeneous: boolean): void
    setRowSpacing(spacing: number): void
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Methods of Gtk.Orientable */
    getOrientation(): Gtk.Orientation
    setOrientation(orientation: Gtk.Orientation): void
    /* Virtual methods of EDataServerUI.WebDAVDiscoverContent */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncConstructChild(builder: Gtk.Builder, name: string): GObject.Object
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncGetName(): string
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetName(name: string): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd(widget: Gtk.Widget): void
    vfuncCheckResize(): void
    vfuncChildType(): GObject.Type
    vfuncCompositeName(child: Gtk.Widget): string
    vfuncForall(includeInternals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove(widget: Gtk.Widget): void
    vfuncSetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation(baseline: number): void
    vfuncAdjustBaselineRequest(minimumBaseline: number, naturalBaseline: number): void
    vfuncAdjustSizeAllocation(orientation: Gtk.Orientation, minimumSize: number, naturalSize: number, allocatedPos: number, allocatedSize: number): void
    vfuncAdjustSizeRequest(orientation: Gtk.Orientation, minimumSize: number, naturalSize: number): void
    vfuncButtonPressEvent(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel(signalId: number): boolean
    vfuncChildNotify(childProperty: GObject.ParamSpec): void
    vfuncCompositedChanged(): void
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncConfigureEvent(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent(event: Gdk.EventAny): boolean
    vfuncDestroy(): void
    vfuncDestroyEvent(event: Gdk.EventAny): boolean
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin(context: Gdk.DragContext): void
    vfuncDragDataDelete(context: Gdk.DragContext): void
    vfuncDragDataGet(context: Gdk.DragContext, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDataReceived(context: Gdk.DragContext, x: number, y: number, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDrop(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDragEnd(context: Gdk.DragContext): void
    vfuncDragFailed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave(context: Gdk.DragContext, time: number): void
    vfuncDragMotion(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDraw(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncEvent(event: Gdk.Event): boolean
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(event: Gdk.EventFocus): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncGetPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus(): void
    vfuncGrabNotify(wasGrabbed: boolean): void
    vfuncHide(): void
    vfuncHierarchyChanged(previousToplevel: Gtk.Widget): void
    vfuncKeyPressEvent(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(event: Gdk.EventKey): boolean
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncMap(): void
    vfuncMapEvent(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMotionNotifyEvent(event: Gdk.EventMotion): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncParentSet(previousParent: Gtk.Widget): void
    vfuncPopupMenu(): boolean
    vfuncPropertyNotifyEvent(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion(region: cairo.Region): void
    vfuncRealize(): void
    vfuncScreenChanged(previousScreen: Gdk.Screen): void
    vfuncScrollEvent(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionGet(selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncSelectionNotifyEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived(selectionData: Gtk.SelectionData, time: number): void
    vfuncSelectionRequestEvent(event: Gdk.EventSelection): boolean
    vfuncShow(): void
    vfuncShowAll(): void
    vfuncShowHelp(helpType: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate(allocation: Gtk.Allocation): void
    vfuncStateChanged(previousState: Gtk.StateType): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncStyleSet(previousStyle: Gtk.Style): void
    vfuncStyleUpdated(): void
    vfuncTouchEvent(event: Gdk.EventTouch): boolean
    vfuncUnmap(): void
    vfuncUnmapEvent(event: Gdk.EventAny): boolean
    vfuncUnrealize(): void
    vfuncVisibilityNotifyEvent(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-resize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus-child", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: WebDAVDiscoverContent, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "can-activate-accel", callback: (($obj: WebDAVDiscoverContent, signalId: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: WebDAVDiscoverContent, signalId: number) => boolean)): number
    emit(sigName: "can-activate-accel", signalId: number): void
    on(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: WebDAVDiscoverContent, childProperty: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: WebDAVDiscoverContent, childProperty: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "composited-changed", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "configure-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "damage-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverContent, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverContent, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-begin", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-delete", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-get", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-received", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-drop", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-end", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-failed", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-leave", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-motion", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: WebDAVDiscoverContent, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "draw", callback: (($obj: WebDAVDiscoverContent, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: WebDAVDiscoverContent, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event-after", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: WebDAVDiscoverContent, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-focus", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-notify", callback: (($obj: WebDAVDiscoverContent, wasGrabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: WebDAVDiscoverContent, wasGrabbed: boolean) => void)): number
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    on(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hierarchy-changed", callback: (($obj: WebDAVDiscoverContent, previousToplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: WebDAVDiscoverContent, previousToplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverContent, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverContent, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: WebDAVDiscoverContent, oldParent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: WebDAVDiscoverContent, oldParent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "popup-menu", callback: (($obj: WebDAVDiscoverContent) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: WebDAVDiscoverContent) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-in-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-out-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverContent, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverContent, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "screen-changed", callback: (($obj: WebDAVDiscoverContent, previousScreen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: WebDAVDiscoverContent, previousScreen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-clear-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-get", callback: (($obj: WebDAVDiscoverContent, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: WebDAVDiscoverContent, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-received", callback: (($obj: WebDAVDiscoverContent, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: WebDAVDiscoverContent, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-request-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-help", callback: (($obj: WebDAVDiscoverContent, helpType: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: WebDAVDiscoverContent, helpType: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-allocate", callback: (($obj: WebDAVDiscoverContent, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: WebDAVDiscoverContent, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: WebDAVDiscoverContent, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: WebDAVDiscoverContent, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverContent, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverContent, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-set", callback: (($obj: WebDAVDiscoverContent, previousStyle?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: WebDAVDiscoverContent, previousStyle?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    on(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-updated", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: WebDAVDiscoverContent, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: WebDAVDiscoverContent, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visibility-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-state-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: WebDAVDiscoverContent, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::baseline-row", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::column-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::column-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::orientation", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::orientation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebDAVDiscoverContent_ConstructProps)
    _init (config?: WebDAVDiscoverContent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(credentialsPrompter: CredentialsPrompter, source: EDataServer.Source | null, baseUrl: string | null, supportsFilter: number): WebDAVDiscoverContent
    static new(): WebDAVDiscoverContent
    static $gtype: GObject.Type
}
export interface WebDAVDiscoverDialog_ConstructProps extends Gtk.Dialog_ConstructProps {
}
export class WebDAVDiscoverDialog {
    /* Properties of Gtk.Window */
    acceptFocus: boolean
    application: Gtk.Application
    attachedTo: Gtk.Widget
    decorated: boolean
    defaultHeight: number
    defaultWidth: number
    deletable: boolean
    destroyWithParent: boolean
    focusOnMap: boolean
    focusVisible: boolean
    gravity: Gdk.Gravity
    hasResizeGrip: boolean
    readonly hasToplevelFocus: boolean
    hideTitlebarWhenMaximized: boolean
    icon: GdkPixbuf.Pixbuf
    iconName: string
    readonly isActive: boolean
    readonly isMaximized: boolean
    mnemonicsVisible: boolean
    modal: boolean
    resizable: boolean
    readonly resizeGripVisible: boolean
    role: string
    screen: Gdk.Screen
    skipPagerHint: boolean
    skipTaskbarHint: boolean
    startupId: string
    title: string
    transientFor: Gtk.Window
    typeHint: Gdk.WindowTypeHint
    urgencyHint: boolean
    windowPosition: Gtk.WindowPosition
    /* Properties of Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Fields of Gtk.Window */
    bin: Gtk.Bin
    priv: Gtk.WindowPrivate
    /* Fields of Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of Gtk.Widget */
    parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServerUI.WebDAVDiscoverDialog */
    getContent(): WebDAVDiscoverContent
    refresh(): void
    /* Methods of Gtk.Dialog */
    addActionWidget(child: Gtk.Widget, responseId: number): void
    addButton(buttonText: string, responseId: number): Gtk.Widget
    getActionArea(): Gtk.Box
    getContentArea(): Gtk.Box
    getHeaderBar(): Gtk.HeaderBar
    getResponseForWidget(widget: Gtk.Widget): number
    getWidgetForResponse(responseId: number): Gtk.Widget | null
    response(responseId: number): void
    run(): number
    setAlternativeButtonOrderFromArray(newOrder: number[]): void
    setDefaultResponse(responseId: number): void
    setResponseSensitive(responseId: number, setting: boolean): void
    /* Methods of Gtk.Window */
    activateDefault(): boolean
    activateFocus(): boolean
    activateKey(event: Gdk.EventKey): boolean
    addAccelGroup(accelGroup: Gtk.AccelGroup): void
    addMnemonic(keyval: number, target: Gtk.Widget): void
    beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void
    beginResizeDrag(edge: Gdk.WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void
    close(): void
    deiconify(): void
    fullscreen(): void
    fullscreenOnMonitor(screen: Gdk.Screen, monitor: number): void
    getAcceptFocus(): boolean
    getApplication(): Gtk.Application | null
    getAttachedTo(): Gtk.Widget | null
    getDecorated(): boolean
    getDefaultSize(): [ /* width */ number | null, /* height */ number | null ]
    getDefaultWidget(): Gtk.Widget | null
    getDeletable(): boolean
    getDestroyWithParent(): boolean
    getFocus(): Gtk.Widget | null
    getFocusOnMap(): boolean
    getFocusVisible(): boolean
    getGravity(): Gdk.Gravity
    getGroup(): Gtk.WindowGroup
    getHasResizeGrip(): boolean
    getHideTitlebarWhenMaximized(): boolean
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconList(): GdkPixbuf.Pixbuf[]
    getIconName(): string | null
    getMnemonicModifier(): Gdk.ModifierType
    getMnemonicsVisible(): boolean
    getModal(): boolean
    getOpacity(): number
    getPosition(): [ /* rootX */ number | null, /* rootY */ number | null ]
    getResizable(): boolean
    getResizeGripArea(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    getRole(): string | null
    getScreen(): Gdk.Screen
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getSkipPagerHint(): boolean
    getSkipTaskbarHint(): boolean
    getTitle(): string | null
    getTitlebar(): Gtk.Widget | null
    getTransientFor(): Gtk.Window | null
    getTypeHint(): Gdk.WindowTypeHint
    getUrgencyHint(): boolean
    getWindowType(): Gtk.WindowType
    hasGroup(): boolean
    iconify(): void
    maximize(): void
    mnemonicActivate(keyval: number, modifier: Gdk.ModifierType): boolean
    move(x: number, y: number): void
    parseGeometry(geometry: string): boolean
    present(): void
    presentWithTime(timestamp: number): void
    propagateKeyEvent(event: Gdk.EventKey): boolean
    removeAccelGroup(accelGroup: Gtk.AccelGroup): void
    removeMnemonic(keyval: number, target: Gtk.Widget): void
    reshowWithInitialSize(): void
    resize(width: number, height: number): void
    resizeGripIsVisible(): boolean
    resizeToGeometry(width: number, height: number): void
    setAcceptFocus(setting: boolean): void
    setApplication(application?: Gtk.Application | null): void
    setAttachedTo(attachWidget?: Gtk.Widget | null): void
    setDecorated(setting: boolean): void
    setDefault(defaultWidget?: Gtk.Widget | null): void
    setDefaultGeometry(width: number, height: number): void
    setDefaultSize(width: number, height: number): void
    setDeletable(setting: boolean): void
    setDestroyWithParent(setting: boolean): void
    setFocus(focus?: Gtk.Widget | null): void
    setFocusOnMap(setting: boolean): void
    setFocusVisible(setting: boolean): void
    setGeometryHints(geometryWidget: Gtk.Widget | null, geometry: Gdk.Geometry | null, geomMask: Gdk.WindowHints): void
    setGravity(gravity: Gdk.Gravity): void
    setHasResizeGrip(value: boolean): void
    setHasUserRefCount(setting: boolean): void
    setHideTitlebarWhenMaximized(setting: boolean): void
    setIcon(icon?: GdkPixbuf.Pixbuf | null): void
    setIconFromFile(filename: string): boolean
    setIconList(list: GdkPixbuf.Pixbuf[]): void
    setIconName(name?: string | null): void
    setKeepAbove(setting: boolean): void
    setKeepBelow(setting: boolean): void
    setMnemonicModifier(modifier: Gdk.ModifierType): void
    setMnemonicsVisible(setting: boolean): void
    setModal(modal: boolean): void
    setOpacity(opacity: number): void
    setPosition(position: Gtk.WindowPosition): void
    setResizable(resizable: boolean): void
    setRole(role: string): void
    setScreen(screen: Gdk.Screen): void
    setSkipPagerHint(setting: boolean): void
    setSkipTaskbarHint(setting: boolean): void
    setStartupId(startupId: string): void
    setTitle(title: string): void
    setTitlebar(titlebar?: Gtk.Widget | null): void
    setTransientFor(parent?: Gtk.Window | null): void
    setTypeHint(hint: Gdk.WindowTypeHint): void
    setUrgencyHint(setting: boolean): void
    setWmclass(wmclassName: string, wmclassClass: string): void
    stick(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    /* Methods of Gtk.Bin */
    getChild(): Gtk.Widget | null
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of EDataServerUI.WebDAVDiscoverDialog */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncConstructChild(builder: Gtk.Builder, name: string): GObject.Object
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncGetName(): string
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetName(name: string): void
    /* Virtual methods of Gtk.Dialog */
    vfuncClose(): void
    vfuncResponse(responseId: number): void
    /* Virtual methods of Gtk.Window */
    vfuncActivateDefault(): void
    vfuncActivateFocus(): void
    vfuncEnableDebugging(toggle: boolean): boolean
    vfuncKeysChanged(): void
    vfuncSetFocus(focus?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd(widget: Gtk.Widget): void
    vfuncCheckResize(): void
    vfuncChildType(): GObject.Type
    vfuncCompositeName(child: Gtk.Widget): string
    vfuncForall(includeInternals: boolean, callback: Gtk.Callback): void
    vfuncGetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncGetPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    vfuncRemove(widget: Gtk.Widget): void
    vfuncSetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfuncAdjustBaselineAllocation(baseline: number): void
    vfuncAdjustBaselineRequest(minimumBaseline: number, naturalBaseline: number): void
    vfuncAdjustSizeAllocation(orientation: Gtk.Orientation, minimumSize: number, naturalSize: number, allocatedPos: number, allocatedSize: number): void
    vfuncAdjustSizeRequest(orientation: Gtk.Orientation, minimumSize: number, naturalSize: number): void
    vfuncButtonPressEvent(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel(signalId: number): boolean
    vfuncChildNotify(childProperty: GObject.ParamSpec): void
    vfuncCompositedChanged(): void
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncConfigureEvent(event: Gdk.EventConfigure): boolean
    vfuncDamageEvent(event: Gdk.EventExpose): boolean
    vfuncDeleteEvent(event: Gdk.EventAny): boolean
    vfuncDestroy(): void
    vfuncDestroyEvent(event: Gdk.EventAny): boolean
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin(context: Gdk.DragContext): void
    vfuncDragDataDelete(context: Gdk.DragContext): void
    vfuncDragDataGet(context: Gdk.DragContext, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDataReceived(context: Gdk.DragContext, x: number, y: number, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDrop(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDragEnd(context: Gdk.DragContext): void
    vfuncDragFailed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfuncDragLeave(context: Gdk.DragContext, time: number): void
    vfuncDragMotion(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDraw(cr: cairo.Context): boolean
    vfuncEnterNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncEvent(event: Gdk.Event): boolean
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(event: Gdk.EventFocus): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGetPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncGetPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    vfuncGetPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabBrokenEvent(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus(): void
    vfuncGrabNotify(wasGrabbed: boolean): void
    vfuncHide(): void
    vfuncHierarchyChanged(previousToplevel: Gtk.Widget): void
    vfuncKeyPressEvent(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(event: Gdk.EventKey): boolean
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncLeaveNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncMap(): void
    vfuncMapEvent(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMotionNotifyEvent(event: Gdk.EventMotion): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncParentSet(previousParent: Gtk.Widget): void
    vfuncPopupMenu(): boolean
    vfuncPropertyNotifyEvent(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncQueueDrawRegion(region: cairo.Region): void
    vfuncRealize(): void
    vfuncScreenChanged(previousScreen: Gdk.Screen): void
    vfuncScrollEvent(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionGet(selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncSelectionNotifyEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived(selectionData: Gtk.SelectionData, time: number): void
    vfuncSelectionRequestEvent(event: Gdk.EventSelection): boolean
    vfuncShow(): void
    vfuncShowAll(): void
    vfuncShowHelp(helpType: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate(allocation: Gtk.Allocation): void
    vfuncStateChanged(previousState: Gtk.StateType): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncStyleSet(previousStyle: Gtk.Style): void
    vfuncStyleUpdated(): void
    vfuncTouchEvent(event: Gdk.EventTouch): boolean
    vfuncUnmap(): void
    vfuncUnmapEvent(event: Gdk.EventAny): boolean
    vfuncUnrealize(): void
    vfuncVisibilityNotifyEvent(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Dialog */
    connect(sigName: "close", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "close", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "close"): void
    on(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "response", callback: (($obj: WebDAVDiscoverDialog, responseId: number) => void)): number
    connect_after(sigName: "response", callback: (($obj: WebDAVDiscoverDialog, responseId: number) => void)): number
    emit(sigName: "response", responseId: number): void
    on(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "activate-default"): void
    on(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "activate-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "activate-focus"): void
    on(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "activate-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enable-debugging", callback: (($obj: WebDAVDiscoverDialog, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: WebDAVDiscoverDialog, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    on(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enable-debugging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keys-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "keys-changed"): void
    on(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus", callback: (($obj: WebDAVDiscoverDialog, widget?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "set-focus", callback: (($obj: WebDAVDiscoverDialog, widget?: Gtk.Widget | null) => void)): number
    emit(sigName: "set-focus", widget?: Gtk.Widget | null): void
    on(sigName: "set-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-resize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus-child", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: WebDAVDiscoverDialog, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "can-activate-accel", callback: (($obj: WebDAVDiscoverDialog, signalId: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: WebDAVDiscoverDialog, signalId: number) => boolean)): number
    emit(sigName: "can-activate-accel", signalId: number): void
    on(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: WebDAVDiscoverDialog, childProperty: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: WebDAVDiscoverDialog, childProperty: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "composited-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "configure-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "damage-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    on(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverDialog, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverDialog, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-begin", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-delete", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-get", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-received", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-drop", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-end", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    on(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-failed", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-leave", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-motion", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: WebDAVDiscoverDialog, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "draw", callback: (($obj: WebDAVDiscoverDialog, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: WebDAVDiscoverDialog, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    on(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "draw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event-after", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-notify", callback: (($obj: WebDAVDiscoverDialog, wasGrabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: WebDAVDiscoverDialog, wasGrabbed: boolean) => void)): number
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    on(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hierarchy-changed", callback: (($obj: WebDAVDiscoverDialog, previousToplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: WebDAVDiscoverDialog, previousToplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverDialog, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverDialog, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: WebDAVDiscoverDialog, oldParent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: WebDAVDiscoverDialog, oldParent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "popup-menu", callback: (($obj: WebDAVDiscoverDialog) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: WebDAVDiscoverDialog) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-in-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-out-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverDialog, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WebDAVDiscoverDialog, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "screen-changed", callback: (($obj: WebDAVDiscoverDialog, previousScreen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: WebDAVDiscoverDialog, previousScreen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-clear-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-get", callback: (($obj: WebDAVDiscoverDialog, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: WebDAVDiscoverDialog, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    on(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-received", callback: (($obj: WebDAVDiscoverDialog, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: WebDAVDiscoverDialog, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-request-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-help", callback: (($obj: WebDAVDiscoverDialog, helpType: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: WebDAVDiscoverDialog, helpType: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-allocate", callback: (($obj: WebDAVDiscoverDialog, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: WebDAVDiscoverDialog, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    on(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: WebDAVDiscoverDialog, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: WebDAVDiscoverDialog, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-set", callback: (($obj: WebDAVDiscoverDialog, previousStyle?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: WebDAVDiscoverDialog, previousStyle?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    on(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-updated", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "style-updated"): void
    on(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "touch-event", callback: (($obj: WebDAVDiscoverDialog, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: WebDAVDiscoverDialog, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    on(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visibility-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-state-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: WebDAVDiscoverDialog, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attached-to", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attached-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attached-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attached-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-height", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-map", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gravity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-resize-grip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-active", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::screen", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgency-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgency-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgency-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgency-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-position", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebDAVDiscoverDialog_ConstructProps)
    _init (config?: WebDAVDiscoverDialog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: Gtk.Window, title: string, credentialsPrompter: CredentialsPrompter, source: EDataServer.Source, baseUrl: string | null, supportsFilter: number): WebDAVDiscoverDialog
    static new(): WebDAVDiscoverDialog
    static new(type: Gtk.WindowType): WebDAVDiscoverDialog
    static $gtype: GObject.Type
}
export abstract class CellRendererColorClass {
    /* Fields of EDataServerUI.CellRendererColorClass */
    parentClass: Gtk.CellRendererClass
    static name: string
}
export class CellRendererColorPrivate {
    static name: string
}
export abstract class CredentialsPrompterClass {
    /* Fields of EDataServerUI.CredentialsPrompterClass */
    parentClass: GObject.ObjectClass
    getDialogParent: (prompter: CredentialsPrompter) => Gtk.Window
    static name: string
}
export abstract class CredentialsPrompterImplClass {
    /* Fields of EDataServerUI.CredentialsPrompterImplClass */
    parentClass: EDataServer.ExtensionClass
    authenticationMethods: string
    processPrompt: (prompterImpl: CredentialsPrompterImpl, promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string, credentials: EDataServer.NamedParameters) => void
    cancelPrompt: (prompterImpl: CredentialsPrompterImpl, promptId?: object | null) => void
    promptFinished: (prompterImpl: CredentialsPrompterImpl, promptId: object | null, credentials: EDataServer.NamedParameters) => void
    static name: string
}
export abstract class CredentialsPrompterImplOAuth2Class {
    /* Fields of EDataServerUI.CredentialsPrompterImplOAuth2Class */
    parentClass: CredentialsPrompterImplClass
    static name: string
}
export class CredentialsPrompterImplOAuth2Private {
    static name: string
}
export abstract class CredentialsPrompterImplPasswordClass {
    /* Fields of EDataServerUI.CredentialsPrompterImplPasswordClass */
    parentClass: CredentialsPrompterImplClass
    static name: string
}
export class CredentialsPrompterImplPasswordPrivate {
    static name: string
}
export class CredentialsPrompterImplPrivate {
    static name: string
}
export class CredentialsPrompterPrivate {
    static name: string
}
export abstract class RemindersWidgetClass {
    /* Fields of EDataServerUI.RemindersWidgetClass */
    changed: (reminders: RemindersWidget) => void
    activated: (reminders: RemindersWidget, rd: ECal.ReminderData) => boolean
    static name: string
}
export class RemindersWidgetPrivate {
    static name: string
}
export abstract class WebDAVDiscoverContentClass {
    /* Fields of EDataServerUI.WebDAVDiscoverContentClass */
    parentClass: Gtk.GridClass
    static name: string
}
export abstract class WebDAVDiscoverDialogClass {
    /* Fields of EDataServerUI.WebDAVDiscoverDialogClass */
    parentClass: Gtk.DialogClass
    static name: string
}
}