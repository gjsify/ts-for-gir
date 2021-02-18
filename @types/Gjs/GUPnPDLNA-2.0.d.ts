/**
 * GUPnPDLNA-2.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ValueState {
    SET,
    UNSET,
    UNSUPPORTED,
}
export interface AudioInformation_ConstructProps extends GObject.Object_ConstructProps {
}
export class AudioInformation {
    /* Fields of GUPnPDLNA.AudioInformation */
    parent: GObject.Object
    priv: AudioInformationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: AudioInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioInformation_ConstructProps)
    _init (config?: AudioInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ContainerInformation_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContainerInformation {
    /* Fields of GUPnPDLNA.ContainerInformation */
    parent: GObject.Object
    priv: ContainerInformationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ContainerInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContainerInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContainerInformation_ConstructProps)
    _init (config?: ContainerInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ImageInformation_ConstructProps extends GObject.Object_ConstructProps {
}
export class ImageInformation {
    /* Fields of GUPnPDLNA.ImageInformation */
    parent: GObject.Object
    priv: ImageInformationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: ImageInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImageInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImageInformation_ConstructProps)
    _init (config?: ImageInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Information_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
}
export class Information {
    /* Properties of GUPnPDLNA.Information */
    readonly audio_information: AudioInformation
    readonly container_information: ContainerInformation
    readonly image_information: ImageInformation
    readonly video_information: VideoInformation
    /* Fields of GUPnPDLNA.Information */
    parent: GObject.Object
    priv: InformationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA.Information */
    get_audio_information(): AudioInformation
    get_container_information(): ContainerInformation
    get_image_information(): ImageInformation
    get_profile_name(): string
    get_uri(): string
    get_video_information(): VideoInformation
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
    /* Virtual methods of GUPnPDLNA.Information */
    vfunc_get_audio_information(): AudioInformation
    vfunc_get_container_information(): ContainerInformation
    vfunc_get_image_information(): ImageInformation
    vfunc_get_profile_name(): string
    vfunc_get_video_information(): VideoInformation
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::audio-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::container-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Information_ConstructProps)
    _init (config?: Information_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Profile_ConstructProps extends GObject.Object_ConstructProps {
    audio_restrictions?: object
    container_restrictions?: object
    extended?: boolean
    image_restrictions?: object
    mime?: string
    name?: string
    video_restrictions?: object
}
export class Profile {
    /* Fields of GUPnPDLNA.Profile */
    parent: GObject.Object
    priv: ProfilePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA.Profile */
    get_audio_restrictions(): Restriction[]
    get_container_restrictions(): Restriction[]
    get_extended(): boolean
    get_image_restrictions(): Restriction[]
    get_mime(): string
    get_name(): string
    get_video_restrictions(): Restriction[]
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
    connect(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Profile_ConstructProps)
    _init (config?: Profile_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProfileGuesser_ConstructProps extends GObject.Object_ConstructProps {
    extended_mode?: boolean
    relaxed_mode?: boolean
}
export class ProfileGuesser {
    /* Fields of GUPnPDLNA.ProfileGuesser */
    parent: GObject.Object
    priv: ProfileGuesserPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA.ProfileGuesser */
    get_extended_mode(): boolean
    get_profile(name: string): Profile
    get_relaxed_mode(): boolean
    guess_profile_async(uri: string, timeout_in_ms: number): boolean
    guess_profile_from_info(info: Information): Profile
    guess_profile_sync(uri: string, timeout_in_ms: number): [ /* returnType */ Profile, /* dlna_info */ Information | null ]
    list_profiles(): Profile[]
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
    /* Signals of GUPnPDLNA.ProfileGuesser */
    connect(sigName: "done", callback: (($obj: ProfileGuesser, info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "done", callback: (($obj: ProfileGuesser, info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void)): number
    emit(sigName: "done", info: Information, dlna?: Profile | null, error?: GLib.Error | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProfileGuesser_ConstructProps)
    _init (config?: ProfileGuesser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relaxed_mode: boolean, extended_mode: boolean): ProfileGuesser
    static cleanup(): void
    static $gtype: GObject.Type
}
export interface VideoInformation_ConstructProps extends GObject.Object_ConstructProps {
}
export class VideoInformation {
    /* Fields of GUPnPDLNA.VideoInformation */
    parent: GObject.Object
    priv: VideoInformationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: VideoInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoInformation_ConstructProps)
    _init (config?: VideoInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AudioInformationClass {
    /* Fields of GUPnPDLNA.AudioInformationClass */
    parent_class: GObject.ObjectClass
    _reserved: object[]
    static name: string
}
export class AudioInformationPrivate {
    static name: string
}
export class BoolValue {
    /* Fields of GUPnPDLNA.BoolValue */
    value: boolean
    state: ValueState
    static name: string
}
export abstract class ContainerInformationClass {
    /* Fields of GUPnPDLNA.ContainerInformationClass */
    parent_class: GObject.ObjectClass
    _reserved: object[]
    static name: string
}
export class ContainerInformationPrivate {
    static name: string
}
export class Fraction {
    /* Methods of GUPnPDLNA.Fraction */
    copy(): Fraction
    free(): void
    get_denominator(): number
    get_numerator(): number
    static name: string
}
export class FractionRange {
    /* Methods of GUPnPDLNA.FractionRange */
    copy(): FractionRange
    free(): void
    get_max(): Fraction
    get_min(): Fraction
    static name: string
}
export class FractionValue {
    /* Fields of GUPnPDLNA.FractionValue */
    numerator: number
    denominator: number
    state: ValueState
    static name: string
}
export abstract class ImageInformationClass {
    /* Fields of GUPnPDLNA.ImageInformationClass */
    parent_class: GObject.ObjectClass
    _reserved: object[]
    static name: string
}
export class ImageInformationPrivate {
    static name: string
}
export abstract class InformationClass {
    /* Fields of GUPnPDLNA.InformationClass */
    parent_class: GObject.ObjectClass
    get_audio_information: (info: Information) => AudioInformation
    get_container_information: (info: Information) => ContainerInformation
    get_image_information: (info: Information) => ImageInformation
    get_video_information: (info: Information) => VideoInformation
    get_profile_name: (info: Information) => string
    _reserved: object[]
    static name: string
}
export class InformationPrivate {
    static name: string
}
export class IntRange {
    /* Methods of GUPnPDLNA.IntRange */
    copy(): IntRange
    free(): void
    get_max(): number
    get_min(): number
    static name: string
}
export class IntValue {
    /* Fields of GUPnPDLNA.IntValue */
    value: number
    state: ValueState
    static name: string
}
export abstract class ProfileClass {
    /* Fields of GUPnPDLNA.ProfileClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ProfileGuesserClass {
    /* Fields of GUPnPDLNA.ProfileGuesserClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ProfileGuesserPrivate {
    static name: string
}
export class ProfilePrivate {
    static name: string
}
export class Restriction {
    /* Methods of GUPnPDLNA.Restriction */
    copy(): Restriction
    free(): void
    get_entries(): GLib.HashTable
    get_mime(): string
    is_empty(): boolean
    to_string(): string
    static name: string
}
export class StringValue {
    /* Fields of GUPnPDLNA.StringValue */
    value: string
    state: ValueState
    static name: string
}
export class ValueList {
    /* Methods of GUPnPDLNA.ValueList */
    copy(): ValueList
    free(): void
    get_g_values(): any[]
    is_empty(): boolean
    to_string(): string
    static name: string
}
export abstract class VideoInformationClass {
    /* Fields of GUPnPDLNA.VideoInformationClass */
    parent_class: GObject.ObjectClass
    _reserved: object[]
    static name: string
}
export class VideoInformationPrivate {
    static name: string
}