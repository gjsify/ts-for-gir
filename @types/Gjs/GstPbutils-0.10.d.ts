/**
 * GstPbutils-0.10
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Gst from './Gst-0.10';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

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
export function gst_install_plugins_async(details: string[], ctx: GstInstallPluginsContext, func: GstInstallPluginsResultFunc): GstInstallPluginsReturn
export function gst_install_plugins_installation_in_progress(): any
export function gst_install_plugins_return_get_name(ret: GstInstallPluginsReturn): string
export function gst_install_plugins_supported(): any
export function gst_install_plugins_sync(details: string[], ctx: GstInstallPluginsContext): GstInstallPluginsReturn
export function gst_is_missing_plugin_message(msg: Gst.Message): any
export function gst_missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string
export function gst_missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message
export function gst_missing_element_installer_detail_new(factory_name: string): string
export function gst_missing_element_message_new(element: Gst.Element, factory_name: string): Gst.Message
export function gst_missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string
export function gst_missing_encoder_message_new(element: Gst.Element, encode_caps: Gst.Caps): Gst.Message
export function gst_missing_plugin_message_get_description(msg: Gst.Message): string
export function gst_missing_plugin_message_get_installer_detail(msg: Gst.Message): string
export function gst_missing_uri_sink_installer_detail_new(protocol: string): string
export function gst_missing_uri_sink_message_new(element: Gst.Element, protocol: string): Gst.Message
export function gst_missing_uri_source_installer_detail_new(protocol: string): string
export function gst_missing_uri_source_message_new(element: Gst.Element, protocol: string): Gst.Message
export function gst_pb_utils_add_codec_description_to_tag_list(taglist: Gst.TagList, codec_tag: string, caps: Gst.Caps): any
export function gst_pb_utils_get_codec_description(caps: Gst.Caps): string
export function gst_pb_utils_get_decoder_description(caps: Gst.Caps): string
export function gst_pb_utils_get_element_description(factory_name: string): string
export function gst_pb_utils_get_encoder_description(caps: Gst.Caps): string
export function gst_pb_utils_get_sink_description(protocol: string): string
export function gst_pb_utils_get_source_description(protocol: string): string
export function gst_pb_utils_init(): void
export interface GstInstallPluginsResultFunc {
    (result: GstInstallPluginsReturn): void
}
export class GstInstallPluginsContext {
    /* Methods of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext */
    free(): void
    set_xid(xid: any): void
    static name: string
    static new(): GstInstallPluginsContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GstInstallPluginsContext
}