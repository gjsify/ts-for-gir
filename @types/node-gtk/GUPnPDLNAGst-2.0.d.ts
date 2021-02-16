/**
 * GUPnPDLNAGst-2.0
 */

/// <reference types="node" />
/// <reference path="GstPbutils-1.0.d.ts" />
/// <reference path="GstVideo-1.0.d.ts" />
/// <reference path="GstBase-1.0.d.ts" />
/// <reference path="Gst-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="GstAudio-1.0.d.ts" />
/// <reference path="GUPnPDLNA-2.0.d.ts" />

declare namespace GUPnPDLNAGst {

export function utilsInformationFromDiscovererInfo(info: GstPbutils.DiscovererInfo): GUPnPDLNA.Information
}