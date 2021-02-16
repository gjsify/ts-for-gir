/**
 * EDataServerUI-1.2
 */

/// <reference types="node" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="EDataServer-1.2.d.ts" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="GData-0.0.d.ts" />
/// <reference path="Json-1.0.d.ts" />
/// <reference path="Goa-1.0.d.ts" />
/// <reference path="Camel-1.2.d.ts" />
/// <reference path="ECal-2.0.d.ts" />
/// <reference path="ICalGLib-3.0.d.ts" />

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
    getIsExpanded(): boolean
    getIsExpander(): boolean
    getPadding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    getPreferredHeight(widget: Gtk.Widget): [ /* minimumSize */ number | null, /* naturalSize */ number | null ]
    getPreferredHeightForWidth(widget: Gtk.Widget, width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(widget: Gtk.Widget): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(widget: Gtk.Widget): [ /* minimumSize */ number | null, /* naturalSize */ number | null ]
    getPreferredWidthForHeight(widget: Gtk.Widget, height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRequestMode(): Gtk.SizeRequestMode
    getSensitive(): boolean
    getState(widget: Gtk.Widget | null, cellState: Gtk.CellRendererState): Gtk.StateFlags
    getVisible(): boolean
    isActivatable(): boolean
    setAlignment(xalign: number, yalign: number): void
    setFixedSize(width: number, height: number): void
    setIsExpanded(isExpanded: boolean): void
    setIsExpander(isExpander: boolean): void
    setPadding(xpad: number, ypad: number): void
    setSensitive(sensitive: boolean): void
    setVisible(visible: boolean): void
    snapshot(snapshot: Gtk.Snapshot, widget: Gtk.Widget, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): void
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
    vfuncSnapshot(snapshot: Gtk.Snapshot, widget: Gtk.Widget, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): void
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
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
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
    attach(child: Gtk.Widget, column: number, row: number, width: number, height: number): void
    attachNextTo(child: Gtk.Widget, sibling: Gtk.Widget | null, side: Gtk.PositionType, width: number, height: number): void
    getBaselineRow(): number
    getChildAt(column: number, row: number): Gtk.Widget | null
    getColumnHomogeneous(): boolean
    getColumnSpacing(): number
    getRowBaselinePosition(row: number): Gtk.BaselinePosition
    getRowHomogeneous(): boolean
    getRowSpacing(): number
    insertColumn(position: number): void
    insertNextTo(sibling: Gtk.Widget, side: Gtk.PositionType): void
    insertRow(position: number): void
    queryChild(child: Gtk.Widget): [ /* column */ number | null, /* row */ number | null, /* width */ number | null, /* height */ number | null ]
    remove(child: Gtk.Widget): void
    removeColumn(position: number): void
    removeRow(position: number): void
    setBaselineRow(row: number): void
    setColumnHomogeneous(homogeneous: boolean): void
    setColumnSpacing(spacing: number): void
    setRowBaselinePosition(row: number, pos: Gtk.BaselinePosition): void
    setRowHomogeneous(homogeneous: boolean): void
    setRowSpacing(spacing: number): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
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
    getBuildableId(): string
    /* Methods of Gtk.Orientable */
    getOrientation(): Gtk.Orientation
    setOrientation(orientation: Gtk.Orientation): void
    /* Virtual methods of EDataServerUI.RemindersWidget */
    vfuncActivated(rd: ECal.ReminderData): boolean
    vfuncChanged(): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains(x: number, y: number): boolean
    vfuncCssChanged(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabFocus(): boolean
    vfuncHide(): void
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncMap(): void
    vfuncMeasure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncRoot(): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    vfuncShow(): void
    vfuncSizeAllocate(width: number, height: number, baseline: number): void
    vfuncSnapshot(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged(settings: Gtk.SystemSetting): void
    vfuncUnmap(): void
    vfuncUnrealize(): void
    vfuncUnroot(): void
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
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: RemindersWidget, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: RemindersWidget, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: RemindersWidget, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: RemindersWidget, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: RemindersWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "show", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: RemindersWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: RemindersWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: RemindersWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: RemindersWidget) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::layout-manager", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::root", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: RemindersWidget, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk.Orientable */
    orientation: Gtk.Orientation
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
    attach(child: Gtk.Widget, column: number, row: number, width: number, height: number): void
    attachNextTo(child: Gtk.Widget, sibling: Gtk.Widget | null, side: Gtk.PositionType, width: number, height: number): void
    getBaselineRow(): number
    getChildAt(column: number, row: number): Gtk.Widget | null
    getColumnHomogeneous(): boolean
    getColumnSpacing(): number
    getRowBaselinePosition(row: number): Gtk.BaselinePosition
    getRowHomogeneous(): boolean
    getRowSpacing(): number
    insertColumn(position: number): void
    insertNextTo(sibling: Gtk.Widget, side: Gtk.PositionType): void
    insertRow(position: number): void
    queryChild(child: Gtk.Widget): [ /* column */ number | null, /* row */ number | null, /* width */ number | null, /* height */ number | null ]
    remove(child: Gtk.Widget): void
    removeColumn(position: number): void
    removeRow(position: number): void
    setBaselineRow(row: number): void
    setColumnHomogeneous(homogeneous: boolean): void
    setColumnSpacing(spacing: number): void
    setRowBaselinePosition(row: number, pos: Gtk.BaselinePosition): void
    setRowHomogeneous(homogeneous: boolean): void
    setRowSpacing(spacing: number): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
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
    getBuildableId(): string
    /* Methods of Gtk.Orientable */
    getOrientation(): Gtk.Orientation
    setOrientation(orientation: Gtk.Orientation): void
    /* Virtual methods of EDataServerUI.WebDAVDiscoverContent */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains(x: number, y: number): boolean
    vfuncCssChanged(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabFocus(): boolean
    vfuncHide(): void
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncMap(): void
    vfuncMeasure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncRoot(): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    vfuncShow(): void
    vfuncSizeAllocate(width: number, height: number, baseline: number): void
    vfuncSnapshot(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged(settings: Gtk.SystemSetting): void
    vfuncUnmap(): void
    vfuncUnrealize(): void
    vfuncUnroot(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverContent, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverContent, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverContent, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverContent, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebDAVDiscoverContent, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "show", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverContent, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverContent, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebDAVDiscoverContent) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::layout-manager", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::root", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WebDAVDiscoverContent, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    application: Gtk.Application
    child: Gtk.Widget
    decorated: boolean
    defaultHeight: number
    defaultWidget: Gtk.Widget
    defaultWidth: number
    deletable: boolean
    destroyWithParent: boolean
    display: Gdk.Display
    focusVisible: boolean
    focusWidget: Gtk.Widget
    fullscreened: boolean
    hideOnClose: boolean
    iconName: string
    readonly isActive: boolean
    maximized: boolean
    mnemonicsVisible: boolean
    modal: boolean
    resizable: boolean
    startupId: string
    title: string
    transientFor: Gtk.Window
    /* Properties of Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Fields of Gtk.Dialog */
    parentInstance: Gtk.Window
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServerUI.WebDAVDiscoverDialog */
    getContent(): WebDAVDiscoverContent
    refresh(): void
    /* Methods of Gtk.Dialog */
    addActionWidget(child: Gtk.Widget, responseId: number): void
    addButton(buttonText: string, responseId: number): Gtk.Widget
    getContentArea(): Gtk.Box
    getHeaderBar(): Gtk.HeaderBar
    getResponseForWidget(widget: Gtk.Widget): number
    getWidgetForResponse(responseId: number): Gtk.Widget | null
    response(responseId: number): void
    setDefaultResponse(responseId: number): void
    setResponseSensitive(responseId: number, setting: boolean): void
    /* Methods of Gtk.Window */
    close(): void
    destroy(): void
    fullscreen(): void
    fullscreenOnMonitor(monitor: Gdk.Monitor): void
    getApplication(): Gtk.Application | null
    getChild(): Gtk.Widget | null
    getDecorated(): boolean
    getDefaultSize(): [ /* width */ number | null, /* height */ number | null ]
    getDefaultWidget(): Gtk.Widget | null
    getDeletable(): boolean
    getDestroyWithParent(): boolean
    getFocus(): Gtk.Widget | null
    getFocusVisible(): boolean
    getGroup(): Gtk.WindowGroup
    getHideOnClose(): boolean
    getIconName(): string | null
    getMnemonicsVisible(): boolean
    getModal(): boolean
    getResizable(): boolean
    getTitle(): string | null
    getTitlebar(): Gtk.Widget | null
    getTransientFor(): Gtk.Window | null
    hasGroup(): boolean
    isFullscreen(): boolean
    isMaximized(): boolean
    maximize(): void
    minimize(): void
    present(): void
    presentWithTime(timestamp: number): void
    setApplication(application?: Gtk.Application | null): void
    setChild(child?: Gtk.Widget | null): void
    setDecorated(setting: boolean): void
    setDefaultSize(width: number, height: number): void
    setDefaultWidget(defaultWidget?: Gtk.Widget | null): void
    setDeletable(setting: boolean): void
    setDestroyWithParent(setting: boolean): void
    setDisplay(display: Gdk.Display): void
    setFocus(focus?: Gtk.Widget | null): void
    setFocusVisible(setting: boolean): void
    setHideOnClose(setting: boolean): void
    setIconName(name?: string | null): void
    setMnemonicsVisible(setting: boolean): void
    setModal(modal: boolean): void
    setResizable(resizable: boolean): void
    setStartupId(startupId: string): void
    setTitle(title?: string | null): void
    setTitlebar(titlebar?: Gtk.Widget | null): void
    setTransientFor(parent?: Gtk.Window | null): void
    unfullscreen(): void
    unmaximize(): void
    unminimize(): void
    /* Methods of Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
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
    getBuildableId(): string
    /* Virtual methods of EDataServerUI.WebDAVDiscoverDialog */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfuncGetId(): string
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetId(id: string): void
    /* Virtual methods of Gtk.Dialog */
    vfuncClose(): void
    vfuncResponse(responseId: number): void
    /* Virtual methods of Gtk.Window */
    vfuncActivateDefault(): void
    vfuncActivateFocus(): void
    vfuncCloseRequest(): boolean
    vfuncEnableDebugging(toggle: boolean): boolean
    vfuncKeysChanged(): void
    /* Virtual methods of Gtk.Widget */
    vfuncComputeExpand(hexpandP: boolean, vexpandP: boolean): void
    vfuncContains(x: number, y: number): boolean
    vfuncCssChanged(change: Gtk.CssStyleChange): void
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncGetRequestMode(): Gtk.SizeRequestMode
    vfuncGrabFocus(): boolean
    vfuncHide(): void
    vfuncKeynavFailed(direction: Gtk.DirectionType): boolean
    vfuncMap(): void
    vfuncMeasure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMoveFocus(direction: Gtk.DirectionType): void
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncRoot(): void
    vfuncSetFocusChild(child?: Gtk.Widget | null): void
    vfuncShow(): void
    vfuncSizeAllocate(width: number, height: number, baseline: number): void
    vfuncSnapshot(snapshot: Gtk.Snapshot): void
    vfuncStateFlagsChanged(previousStateFlags: Gtk.StateFlags): void
    vfuncSystemSettingChanged(settings: Gtk.SystemSetting): void
    vfuncUnmap(): void
    vfuncUnrealize(): void
    vfuncUnroot(): void
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
    connect(sigName: "close-request", callback: (($obj: WebDAVDiscoverDialog) => boolean)): number
    connect_after(sigName: "close-request", callback: (($obj: WebDAVDiscoverDialog) => boolean)): number
    emit(sigName: "close-request"): void
    on(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "close-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Signals of Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverDialog, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebDAVDiscoverDialog, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverDialog, groupCycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebDAVDiscoverDialog, groupCycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebDAVDiscoverDialog, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "show", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverDialog, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebDAVDiscoverDialog, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    on(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebDAVDiscoverDialog) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::default-widget", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::display", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-widget", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreened", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hide-on-close", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hide-on-close", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::layout-manager", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::root", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WebDAVDiscoverDialog, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
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