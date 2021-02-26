/**
 * GstPbutils-0.10
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gst } from './Gst-0.10';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

export declare namespace GstPbutils {

export enum GstInstallPluginsReturn {
    SUCCESS,
    NOT_FOUND,
    ERROR,
    PARTIAL_SUCCESS,
    USER_ABORT,
    CRASHED,
    INVALID,
    STARTED_OK,
    INTERNAL_FAILURE,
    HELPER_MISSING,
    INSTALL_IN_PROGRESS,
}
export function gstInstallPluginsAsync(details: string[], ctx: GstInstallPluginsContext, func: GstInstallPluginsResultFunc): GstInstallPluginsReturn
export function gstInstallPluginsInstallationInProgress(): boolean
export function gstInstallPluginsReturnGetName(ret: GstInstallPluginsReturn): string
export function gstInstallPluginsSupported(): boolean
export function gstInstallPluginsSync(details: string[], ctx: GstInstallPluginsContext): GstInstallPluginsReturn
export function gstIsMissingPluginMessage(msg: Gst.Message): boolean
export function gstMissingDecoderInstallerDetailNew(decodeCaps: Gst.Caps): string
export function gstMissingDecoderMessageNew(element: Gst.Element, decodeCaps: Gst.Caps): Gst.Message
export function gstMissingElementInstallerDetailNew(factoryName: string): string
export function gstMissingElementMessageNew(element: Gst.Element, factoryName: string): Gst.Message
export function gstMissingEncoderInstallerDetailNew(encodeCaps: Gst.Caps): string
export function gstMissingEncoderMessageNew(element: Gst.Element, encodeCaps: Gst.Caps): Gst.Message
export function gstMissingPluginMessageGetDescription(msg: Gst.Message): string
export function gstMissingPluginMessageGetInstallerDetail(msg: Gst.Message): string
export function gstMissingUriSinkInstallerDetailNew(protocol: string): string
export function gstMissingUriSinkMessageNew(element: Gst.Element, protocol: string): Gst.Message
export function gstMissingUriSourceInstallerDetailNew(protocol: string): string
export function gstMissingUriSourceMessageNew(element: Gst.Element, protocol: string): Gst.Message
export function gstPbUtilsAddCodecDescriptionToTagList(taglist: Gst.TagList, codecTag: string, caps: Gst.Caps): boolean
export function gstPbUtilsGetCodecDescription(caps: Gst.Caps): string
export function gstPbUtilsGetDecoderDescription(caps: Gst.Caps): string
export function gstPbUtilsGetElementDescription(factoryName: string): string
export function gstPbUtilsGetEncoderDescription(caps: Gst.Caps): string
export function gstPbUtilsGetSinkDescription(protocol: string): string
export function gstPbUtilsGetSourceDescription(protocol: string): string
export function gstPbUtilsInit(): void
export interface GstInstallPluginsResultFunc {
    (result: GstInstallPluginsReturn): void
}
export class GstInstallPluginsContext {
    /* Methods of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext */
    free(): void
    setXid(xid: number): void
    static name: string
    static new(): GstInstallPluginsContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GstInstallPluginsContext
}
}