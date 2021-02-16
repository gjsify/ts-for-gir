/**
 * GUPnPDLNAGst-2.0
 */

import * as Gjs from './Gjs';
import * as GstPbutils from './GstPbutils-1.0';
import * as GstVideo from './GstVideo-1.0';
import * as GstBase from './GstBase-1.0';
import * as Gst from './Gst-1.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';
import * as GstAudio from './GstAudio-1.0';
import * as GUPnPDLNA from './GUPnPDLNA-2.0';

export function utils_information_from_discoverer_info(info: GstPbutils.DiscovererInfo): GUPnPDLNA.Information