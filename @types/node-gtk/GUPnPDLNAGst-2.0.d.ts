/**
 * GUPnPDLNAGst-2.0
 */

import "node"
import type { GstPbutils } from './GstPbutils-1.0';
import type { GstVideo } from './GstVideo-1.0';
import type { GstBase } from './GstBase-1.0';
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GstAudio } from './GstAudio-1.0';
import type { GUPnPDLNA } from './GUPnPDLNA-2.0';

export declare namespace GUPnPDLNAGst {

export function utilsInformationFromDiscovererInfo(info: GstPbutils.DiscovererInfo): GUPnPDLNA.Information
}