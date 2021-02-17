/**
 * Grss-0.7
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Soup from './Soup-2.4';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export interface FeedAtomFormatter_ConstructProps extends FeedFormatter_ConstructProps {
}
export class FeedAtomFormatter {
    /* Fields of Grss.FeedAtomFormatter */
    parent: FeedFormatter
    /* Fields of Grss.FeedFormatter */
    priv: FeedFormatterPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedFormatter */
    add_item(item: FeedItem): void
    add_items(items: FeedItem[]): void
    format(): string
    get_channel(): FeedChannel
    get_items(): FeedItem[]
    reset(): void
    set_channel(channel: FeedChannel): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Grss.FeedFormatter */
    vfunc_format(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedAtomFormatter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedAtomFormatter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedAtomFormatter_ConstructProps)
    _init (config?: FeedAtomFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedAtomFormatter
    static $gtype: GObject.Type
}
export interface FeedChannel_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedChannel {
    /* Fields of Grss.FeedChannel */
    parent: GObject.Object
    priv: FeedChannelPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedChannel */
    add_contributor(contributor: Person): void
    add_cookie(cookie: Soup.Cookie): void
    fetch(): boolean
    fetch_all(): FeedItem[]
    fetch_all_async(callback?: Gio.AsyncReadyCallback | null): void
    fetch_all_finish(res: Gio.AsyncResult): FeedItem[]
    fetch_async(callback?: Gio.AsyncReadyCallback | null): void
    fetch_cancel(): boolean
    fetch_finish(res: Gio.AsyncResult): boolean
    get_category(): string
    get_contributors(): Person[]
    get_cookies(): Soup.Cookie[]
    get_copyright(): string
    get_description(): string
    get_editor(): Person
    get_format(): string
    get_generator(): string
    get_gzip_compression(): boolean
    get_homepage(): string
    get_icon(): string
    get_image(): string
    get_language(): string
    get_publish_time(): number
    get_pubsubhub(hub: string): boolean
    get_rsscloud(path: string, protocol: string): boolean
    get_source(): string
    get_title(): string
    get_update_interval(): number
    get_update_time(): number
    get_webmaster(): string
    set_category(category: string): void
    set_copyright(copyright: string): void
    set_description(description: string): void
    set_editor(editor: Person): void
    set_format(format: string): void
    set_generator(generator: string): void
    set_gzip_compression(value: boolean): void
    set_homepage(homepage: string): boolean
    set_icon(icon: string): boolean
    set_image(image: string): boolean
    set_language(language: string): void
    set_publish_time(publish: number): void
    set_pubsubhub(hub: string): boolean
    set_rsscloud(path: string, protocol: string): void
    set_source(source: string): boolean
    set_title(title: string): void
    set_update_interval(minutes: number): void
    set_update_time(update: number): void
    set_webmaster(webmaster: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedChannel_ConstructProps)
    _init (config?: FeedChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedChannel
    static new_from_file(path: string): FeedChannel
    static new_from_memory(data: string): FeedChannel
    static new_from_xml(doc: libxml2.DocPtr): FeedChannel
    static new_with_source(source: string): FeedChannel
    static $gtype: GObject.Type
}
export interface FeedEnclosure_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedEnclosure {
    /* Fields of Grss.FeedEnclosure */
    parent: GObject.Object
    priv: FeedEnclosurePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedEnclosure */
    fetch(): Gio.File
    fetch_async(callback?: Gio.AsyncReadyCallback | null): void
    fetch_finish(res: Gio.AsyncResult): Gio.File
    get_format(): string
    get_length(): number
    get_url(): string
    set_format(type: string): void
    set_length(length: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedEnclosure, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedEnclosure, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedEnclosure_ConstructProps)
    _init (config?: FeedEnclosure_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(url: string): FeedEnclosure
    static $gtype: GObject.Type
}
export interface FeedFormatter_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedFormatter {
    /* Fields of Grss.FeedFormatter */
    parent: GObject.Object
    priv: FeedFormatterPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedFormatter */
    add_item(item: FeedItem): void
    add_items(items: FeedItem[]): void
    format(): string
    get_channel(): FeedChannel
    get_items(): FeedItem[]
    reset(): void
    set_channel(channel: FeedChannel): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Grss.FeedFormatter */
    vfunc_format(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedFormatter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedFormatter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedFormatter_ConstructProps)
    _init (config?: FeedFormatter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FeedItem_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedItem {
    /* Fields of Grss.FeedItem */
    parent: GObject.Object
    priv: FeedItemPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedItem */
    add_category(category: string): void
    add_contributor(contributor: Person): void
    add_enclosure(enclosure: FeedEnclosure): void
    get_author(): Person
    get_categories(): string[]
    get_comments_url(): string
    get_contributors(): Person[]
    get_copyright(): string
    get_description(): string
    get_enclosures(): FeedEnclosure[]
    get_geo_point(latitude: number, longitude: number): boolean
    get_id(): string
    get_parent(): FeedChannel
    get_publish_time(): number
    get_real_source(realsource: string, title: string): void
    get_related(): string
    get_source(): string
    get_title(): string
    set_author(author: Person): void
    set_comments_url(url: string): boolean
    set_copyright(copyright: string): void
    set_description(description: string): void
    set_geo_point(latitude: number, longitude: number): void
    set_id(id: string): void
    set_publish_time(publish: number): void
    set_real_source(realsource: string, title: string): boolean
    set_related(related: string): void
    set_source(source: string): boolean
    set_title(title: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedItem_ConstructProps)
    _init (config?: FeedItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: FeedChannel): FeedItem
    static $gtype: GObject.Type
}
export interface FeedParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedParser {
    /* Fields of Grss.FeedParser */
    parent: GObject.Object
    priv: FeedParserPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedParser */
    parse(feed: FeedChannel, doc: libxml2.DocPtr): FeedItem[]
    parse_channel(feed: FeedChannel, doc: libxml2.DocPtr): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedParser_ConstructProps)
    _init (config?: FeedParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedParser
    static $gtype: GObject.Type
}
export interface FeedRssFormatter_ConstructProps extends FeedFormatter_ConstructProps {
}
export class FeedRssFormatter {
    /* Fields of Grss.FeedRssFormatter */
    parent: FeedFormatter
    /* Fields of Grss.FeedFormatter */
    priv: FeedFormatterPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedFormatter */
    add_item(item: FeedItem): void
    add_items(items: FeedItem[]): void
    format(): string
    get_channel(): FeedChannel
    get_items(): FeedItem[]
    reset(): void
    set_channel(channel: FeedChannel): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Grss.FeedFormatter */
    vfunc_format(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedRssFormatter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedRssFormatter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedRssFormatter_ConstructProps)
    _init (config?: FeedRssFormatter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedRssFormatter
    static $gtype: GObject.Type
}
export interface FeedsGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedsGroup {
    /* Fields of Grss.FeedsGroup */
    parent: GObject.Object
    priv: FeedsGroupPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedsGroup */
    export_file(channels: FeedChannel[], format: string, uri: string): boolean
    get_formats(): string[]
    parse_file(path: string): FeedChannel[]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedsGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedsGroup_ConstructProps)
    _init (config?: FeedsGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedsGroup
    static $gtype: GObject.Type
}
export interface FeedsPool_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedsPool {
    /* Fields of Grss.FeedsPool */
    parent: GObject.Object
    priv: FeedsPoolPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedsPool */
    get_listened(): FeedChannel[]
    get_listened_num(): number
    get_session(): Soup.Session
    listen(feeds: FeedChannel[]): void
    switch(run: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Grss.FeedsPool */
    vfunc_feed_fetching(feed: FeedChannel): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Grss.FeedsPool */
    connect(sigName: "feed-fail", callback: (($obj: FeedsPool, feed: GObject.Object) => void)): number
    connect_after(sigName: "feed-fail", callback: (($obj: FeedsPool, feed: GObject.Object) => void)): number
    emit(sigName: "feed-fail", feed: GObject.Object): void
    connect(sigName: "feed-fetching", callback: (($obj: FeedsPool, feed: GObject.Object) => void)): number
    connect_after(sigName: "feed-fetching", callback: (($obj: FeedsPool, feed: GObject.Object) => void)): number
    emit(sigName: "feed-fetching", feed: GObject.Object): void
    connect(sigName: "feed-ready", callback: (($obj: FeedsPool, feed: GObject.Object, items: FeedItem[]) => void)): number
    connect_after(sigName: "feed-ready", callback: (($obj: FeedsPool, feed: GObject.Object, items: FeedItem[]) => void)): number
    emit(sigName: "feed-ready", feed: GObject.Object, items: FeedItem[]): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedsPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedsPool_ConstructProps)
    _init (config?: FeedsPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedsPool
    static $gtype: GObject.Type
}
export interface FeedsPublisher_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedsPublisher {
    /* Fields of Grss.FeedsPublisher */
    parent: GObject.Object
    priv: FeedsPublisherPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedsPublisher */
    format_content(channel: FeedChannel, items: FeedItem[]): string
    hub_set_port(port: number): void
    hub_set_topics(topics: FeedChannel[]): void
    hub_switch(run: boolean): void
    publish_file(channel: FeedChannel, items: FeedItem[], uri: string): boolean
    publish_web(channel: FeedChannel, items: FeedItem[], id: string): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Grss.FeedsPublisher */
    vfunc_delete_subscription(topic: FeedChannel, callback: string): void
    vfunc_new_subscription(topic: FeedChannel, callback: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Grss.FeedsPublisher */
    connect(sigName: "delete-subscription", callback: (($obj: FeedsPublisher, object: FeedChannel, p0: string) => void)): number
    connect_after(sigName: "delete-subscription", callback: (($obj: FeedsPublisher, object: FeedChannel, p0: string) => void)): number
    emit(sigName: "delete-subscription", object: FeedChannel, p0: string): void
    connect(sigName: "new-subscription", callback: (($obj: FeedsPublisher, object: FeedChannel, p0: string) => void)): number
    connect_after(sigName: "new-subscription", callback: (($obj: FeedsPublisher, object: FeedChannel, p0: string) => void)): number
    emit(sigName: "new-subscription", object: FeedChannel, p0: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsPublisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedsPublisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedsPublisher_ConstructProps)
    _init (config?: FeedsPublisher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedsPublisher
    static $gtype: GObject.Type
}
export interface FeedsStore_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedsStore {
    /* Fields of Grss.FeedsStore */
    parent: GObject.Object
    priv: FeedsStorePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedsStore */
    add_item_in_channel(channel: FeedChannel, item: FeedItem): void
    get_channels(): FeedChannel[]
    get_items_by_channel(channel: FeedChannel): FeedItem[]
    has_item(channel: FeedChannel, id: string): boolean
    switch(run: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Grss.FeedsStore */
    vfunc_add_item_in_channel(channel: FeedChannel, item: FeedItem): void
    vfunc_get_channels(): FeedChannel[]
    vfunc_get_items_by_channel(channel: FeedChannel): FeedItem[]
    vfunc_has_item(channel: FeedChannel, id: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedsStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedsStore_ConstructProps)
    _init (config?: FeedsStore_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FeedsSubscriber_ConstructProps extends GObject.Object_ConstructProps {
}
export class FeedsSubscriber {
    /* Fields of Grss.FeedsSubscriber */
    parent: GObject.Object
    priv: FeedsSubscriberPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grss.FeedsSubscriber */
    get_address(): Gio.InetAddress
    get_listened(): FeedChannel[]
    get_port(): number
    get_session(): Soup.Session
    listen(feeds: FeedChannel[]): boolean
    set_port(port: number): void
    switch(run: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Grss.FeedsSubscriber */
    vfunc_notification_received(feed: FeedChannel, item: FeedItem): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Grss.FeedsSubscriber */
    connect(sigName: "notification-received", callback: (($obj: FeedsSubscriber, feed: GObject.Object, item: GObject.Object) => void)): number
    connect_after(sigName: "notification-received", callback: (($obj: FeedsSubscriber, feed: GObject.Object, item: GObject.Object) => void)): number
    emit(sigName: "notification-received", feed: GObject.Object, item: GObject.Object): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FeedsSubscriber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FeedsSubscriber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FeedsSubscriber_ConstructProps)
    _init (config?: FeedsSubscriber_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeedsSubscriber
    static $gtype: GObject.Type
}
export abstract class FeedAtomFormatterClass {
    /* Fields of Grss.FeedAtomFormatterClass */
    parent: FeedFormatterClass
    static name: string
}
export class FeedAtomFormatterPrivate {
    static name: string
}
export abstract class FeedChannelClass {
    /* Fields of Grss.FeedChannelClass */
    parent: GObject.ObjectClass
    static name: string
}
export class FeedChannelPrivate {
    static name: string
}
export abstract class FeedEnclosureClass {
    /* Fields of Grss.FeedEnclosureClass */
    parent: GObject.ObjectClass
    static name: string
}
export class FeedEnclosurePrivate {
    static name: string
}
export abstract class FeedFormatterClass {
    /* Fields of Grss.FeedFormatterClass */
    parent: GObject.ObjectClass
    format: (formatter: FeedFormatter) => string
    static name: string
}
export class FeedFormatterPrivate {
    static name: string
}
export abstract class FeedItemClass {
    /* Fields of Grss.FeedItemClass */
    parent: GObject.ObjectClass
    static name: string
}
export class FeedItemPrivate {
    static name: string
}
export abstract class FeedParserClass {
    /* Fields of Grss.FeedParserClass */
    parent: GObject.ObjectClass
    static name: string
}
export class FeedParserPrivate {
    static name: string
}
export abstract class FeedRssFormatterClass {
    /* Fields of Grss.FeedRssFormatterClass */
    parent: FeedFormatterClass
    static name: string
}
export class FeedRssFormatterPrivate {
    static name: string
}
export abstract class FeedsGroupClass {
    /* Fields of Grss.FeedsGroupClass */
    parent: GObject.ObjectClass
    static name: string
}
export class FeedsGroupPrivate {
    static name: string
}
export abstract class FeedsPoolClass {
    /* Fields of Grss.FeedsPoolClass */
    parent: GObject.ObjectClass
    feed_fetching: (pool: FeedsPool, feed: FeedChannel) => void
    static name: string
}
export class FeedsPoolPrivate {
    static name: string
}
export abstract class FeedsPublisherClass {
    /* Fields of Grss.FeedsPublisherClass */
    parent: GObject.ObjectClass
    new_subscription: (pub: FeedsPublisher, topic: FeedChannel, callback: string) => void
    delete_subscription: (pub: FeedsPublisher, topic: FeedChannel, callback: string) => void
    static name: string
}
export class FeedsPublisherPrivate {
    static name: string
}
export abstract class FeedsStoreClass {
    /* Fields of Grss.FeedsStoreClass */
    parent: GObject.ObjectClass
    get_channels: (store: FeedsStore) => FeedChannel[]
    get_items_by_channel: (store: FeedsStore, channel: FeedChannel) => FeedItem[]
    has_item: (store: FeedsStore, channel: FeedChannel, id: string) => boolean
    add_item_in_channel: (store: FeedsStore, channel: FeedChannel, item: FeedItem) => void
    static name: string
}
export class FeedsStorePrivate {
    static name: string
}
export abstract class FeedsSubscriberClass {
    /* Fields of Grss.FeedsSubscriberClass */
    parent: GObject.ObjectClass
    notification_received: (sub: FeedsSubscriber, feed: FeedChannel, item: FeedItem) => void
    static name: string
}
export class FeedsSubscriberPrivate {
    static name: string
}
export class Person {
    /* Methods of Grss.Person */
    get_email(): string
    get_name(): string
    get_uri(): string
    ref(): Person
    unref(): void
    static name: string
    static new(name: string, email?: string | null, uri?: string | null): Person
    constructor(name: string, email?: string | null, uri?: string | null)
    /* Static methods and pseudo-constructors */
    static new(name: string, email?: string | null, uri?: string | null): Person
}