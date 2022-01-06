/**
 * GstPbutils-0.10
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { Gst } from './Gst-0.10';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GstPbutils {

enum GstInstallPluginsReturn {
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
function gstInstallPluginsAsync(details: string[], ctx: GstInstallPluginsContext, func: GstInstallPluginsResultFunc): GstInstallPluginsReturn
function gstInstallPluginsInstallationInProgress(): boolean
function gstInstallPluginsReturnGetName(ret: GstInstallPluginsReturn): string
function gstInstallPluginsSupported(): boolean
function gstInstallPluginsSync(details: string[], ctx: GstInstallPluginsContext): GstInstallPluginsReturn
function gstIsMissingPluginMessage(msg: Gst.Message): boolean
function gstMissingDecoderInstallerDetailNew(decodeCaps: Gst.Caps): string
function gstMissingDecoderMessageNew(element: Gst.Element, decodeCaps: Gst.Caps): Gst.Message
function gstMissingElementInstallerDetailNew(factoryName: string): string
function gstMissingElementMessageNew(element: Gst.Element, factoryName: string): Gst.Message
function gstMissingEncoderInstallerDetailNew(encodeCaps: Gst.Caps): string
function gstMissingEncoderMessageNew(element: Gst.Element, encodeCaps: Gst.Caps): Gst.Message
function gstMissingPluginMessageGetDescription(msg: Gst.Message): string
function gstMissingPluginMessageGetInstallerDetail(msg: Gst.Message): string
function gstMissingUriSinkInstallerDetailNew(protocol: string): string
function gstMissingUriSinkMessageNew(element: Gst.Element, protocol: string): Gst.Message
function gstMissingUriSourceInstallerDetailNew(protocol: string): string
function gstMissingUriSourceMessageNew(element: Gst.Element, protocol: string): Gst.Message
function gstPbUtilsAddCodecDescriptionToTagList(taglist: Gst.TagList, codecTag: string, caps: Gst.Caps): boolean
function gstPbUtilsGetCodecDescription(caps: Gst.Caps): string
function gstPbUtilsGetDecoderDescription(caps: Gst.Caps): string
function gstPbUtilsGetElementDescription(factoryName: string): string
function gstPbUtilsGetEncoderDescription(caps: Gst.Caps): string
function gstPbUtilsGetSinkDescription(protocol: string): string
function gstPbUtilsGetSourceDescription(protocol: string): string
function gstPbUtilsInit(): void
interface GstInstallPluginsResultFunc {
    (result: GstInstallPluginsReturn): void
}
class GstInstallPluginsContext {
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
export default GstPbutils