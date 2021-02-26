/**
 * GUPnPDLNA-2.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GUPnPDLNA {

export enum ValueState {
    SET,
    UNSET,
    UNSUPPORTED,
}
export interface AudioInformation_ConstructProps extends GObject.Object_ConstructProps {
}
export class AudioInformation {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation */
    parent: GObject.Object
    priv: AudioInformationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioInformation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AudioInformation_ConstructProps)
    _init (config?: AudioInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ContainerInformation_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContainerInformation {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation */
    parent: GObject.Object
    priv: ContainerInformationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContainerInformation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContainerInformation_ConstructProps)
    _init (config?: ContainerInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ImageInformation_ConstructProps extends GObject.Object_ConstructProps {
}
export class ImageInformation {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation */
    parent: GObject.Object
    priv: ImageInformationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImageInformation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ImageInformation_ConstructProps)
    _init (config?: ImageInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Information_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
}
export class Information {
    /* Properties of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    readonly audioInformation: AudioInformation
    readonly containerInformation: ContainerInformation
    readonly imageInformation: ImageInformation
    readonly videoInformation: VideoInformation
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    parent: GObject.Object
    priv: InformationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    getAudioInformation(): AudioInformation
    getContainerInformation(): ContainerInformation
    getImageInformation(): ImageInformation
    getProfileName(): string
    getUri(): string
    getVideoInformation(): VideoInformation
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::audio-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Information_ConstructProps)
    _init (config?: Information_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Profile_ConstructProps extends GObject.Object_ConstructProps {
    audioRestrictions?: object
    containerRestrictions?: object
    extended?: boolean
    imageRestrictions?: object
    mime?: string
    name?: string
    videoRestrictions?: object
}
export class Profile {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.Profile */
    parent: GObject.Object
    priv: ProfilePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Profile */
    getAudioRestrictions(): Restriction[]
    getContainerRestrictions(): Restriction[]
    getExtended(): boolean
    getImageRestrictions(): Restriction[]
    getMime(): string
    getName(): string
    getVideoRestrictions(): Restriction[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Profile_ConstructProps)
    _init (config?: Profile_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProfileGuesser_ConstructProps extends GObject.Object_ConstructProps {
    extendedMode?: boolean
    relaxedMode?: boolean
}
export class ProfileGuesser {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    parent: GObject.Object
    priv: ProfileGuesserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    getExtendedMode(): boolean
    getProfile(name: string): Profile
    getRelaxedMode(): boolean
    guessProfileAsync(uri: string, timeoutInMs: number): boolean
    guessProfileFromInfo(info: Information): Profile
    guessProfileSync(uri: string, timeoutInMs: number): { returnType: Profile, dlnaInfo: Information | null }
    listProfiles(): Profile[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    connect(sigName: "done", callback: (($obj: ProfileGuesser, info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void)): number
    on(sigName: "done", callback: (info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: (info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: (info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void): NodeJS.EventEmitter
    emit(sigName: "done", info: Information, dlna?: Profile | null, error?: GLib.Error | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProfileGuesser_ConstructProps)
    _init (config?: ProfileGuesser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relaxedMode: boolean, extendedMode: boolean): ProfileGuesser
    static cleanup(): void
    static $gtype: GObject.Type
}
export interface VideoInformation_ConstructProps extends GObject.Object_ConstructProps {
}
export class VideoInformation {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation */
    parent: GObject.Object
    priv: VideoInformationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoInformation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoInformation_ConstructProps)
    _init (config?: VideoInformation_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AudioInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformationClass */
    parentClass: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class AudioInformationPrivate {
    static name: string
}
export class BoolValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.BoolValue */
    value: boolean
    state: ValueState
    static name: string
}
export abstract class ContainerInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformationClass */
    parentClass: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class ContainerInformationPrivate {
    static name: string
}
export class Fraction {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Fraction */
    copy(): Fraction
    free(): void
    getDenominator(): number
    getNumerator(): number
    static name: string
}
export class FractionRange {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.FractionRange */
    copy(): FractionRange
    free(): void
    getMax(): Fraction
    getMin(): Fraction
    static name: string
}
export class FractionValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.FractionValue */
    numerator: number
    denominator: number
    state: ValueState
    static name: string
}
export abstract class ImageInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformationClass */
    parentClass: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class ImageInformationPrivate {
    static name: string
}
export abstract class InformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.InformationClass */
    parentClass: GObject.ObjectClass
    getAudioInformation: (info: Information) => AudioInformation
    getContainerInformation: (info: Information) => ContainerInformation
    getImageInformation: (info: Information) => ImageInformation
    getVideoInformation: (info: Information) => VideoInformation
    getProfileName: (info: Information) => string
    reserved: object[]
    static name: string
}
export class InformationPrivate {
    static name: string
}
export class IntRange {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.IntRange */
    copy(): IntRange
    free(): void
    getMax(): number
    getMin(): number
    static name: string
}
export class IntValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.IntValue */
    value: number
    state: ValueState
    static name: string
}
export abstract class ProfileClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ProfileGuesserClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ProfileGuesserPrivate {
    static name: string
}
export class ProfilePrivate {
    static name: string
}
export class Restriction {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Restriction */
    copy(): Restriction
    free(): void
    getEntries(): GLib.HashTable
    getMime(): string
    isEmpty(): boolean
    toString(): string
    static name: string
}
export class StringValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.StringValue */
    value: string
    state: ValueState
    static name: string
}
export class ValueList {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.ValueList */
    copy(): ValueList
    free(): void
    getGValues(): any[]
    isEmpty(): boolean
    toString(): string
    static name: string
}
export abstract class VideoInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformationClass */
    parentClass: GObject.ObjectClass
    reserved: object[]
    static name: string
}
export class VideoInformationPrivate {
    static name: string
}
}