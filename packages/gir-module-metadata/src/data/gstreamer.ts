import type { GirModuleMetadata } from "../types.ts";

const GST_COMMON = {
	authors: "GStreamer Team",
	websiteUrl: "https://gstreamer.freedesktop.org",
	browseUrl: "https://gitlab.freedesktop.org/gstreamer/gstreamer/",
	repositoryUrl: "https://gitlab.freedesktop.org/gstreamer/gstreamer.git",
	license: "LGPL-2.1-or-later",
	category: "Multimedia",
};

export const gst: GirModuleMetadata = {
	...GST_COMMON,
	girId: "Gst-1.0",
	displayName: "GStreamer",
	description: "Powerful framework for creating multimedia applications.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/gstreamer/gi-index.html",
};

export const gstBase: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstBase-1.0",
	displayName: "GStreamer Base",
	description: "GStreamer base plugin libraries.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/base/index.html",
};

export const gstAudio: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstAudio-1.0",
	displayName: "GStreamer Audio",
	description: "GStreamer Audio Library.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/audio/index.html",
};

export const gstVideo: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstVideo-1.0",
	displayName: "GStreamer Video",
	description: "Support library for video operations.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/video/index.html",
};

export const gstPbutils: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstPbutils-1.0",
	displayName: "GStreamer PbUtils",
	description: "General application and plugin utility library.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/pbutils/index.html",
};

export const gstTag: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstTag-1.0",
	displayName: "GStreamer Tag",
	description: "GStreamer tag support library.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/tag/index.html",
};

export const gstApp: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstApp-1.0",
	displayName: "GStreamer App",
	description: "GStreamer app library.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/applib/index.html",
};

export const gstController: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstController-1.0",
	displayName: "GStreamer Controller",
	description: "GStreamer dynamic parameter control.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/controller/index.html",
};

export const gstPlayer: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstPlayer-1.0",
	displayName: "GStreamer Player",
	description: "High-level media playback API.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/player/index.html",
};

export const gstGL: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstGL-1.0",
	displayName: "GStreamer GL",
	description: "GStreamer OpenGL integration library.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/gl/index.html",
};

export const gstWebRTC: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GstWebRTC-1.0",
	displayName: "GStreamer WebRTC",
	description: "WebRTC support for GStreamer.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/webrtc/index.html",
};

export const ges: GirModuleMetadata = {
	...GST_COMMON,
	girId: "GES-1.0",
	displayName: "GES",
	description: "GStreamer Editing Services for non-linear video editing.",
	cDocsUrl: "https://gstreamer.freedesktop.org/documentation/gst-editing-services/index.html",
};
