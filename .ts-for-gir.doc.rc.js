/**
 * Configuration for documentation generation.
 *
 * Only includes the most relevant modules (latest versions only)
 * to keep memory usage manageable and docs focused.
 *
 * Based on modules documented by other language bindings (e.g. https://valadoc.org/)
 */
export default {
    modules: [
        // === Core ===
        'GLib-2.0',
        'GObject-2.0',
        'Gio-2.0',
        'GModule-2.0',

        // === UI (GTK 4 stack) ===
        'Gtk-4.0',
        'Gdk-4.0',
        'Gsk-4.0',
        'GdkWayland-4.0',
        'GdkX11-4.0',
        'Adw-1',
        'GtkSource-5',
        'Shumate-1.0',
        'Vte-3.91',
        'Panel-1',
        'Peas-2',
        'Spelling-1',

        // === Under the Hood ===
        'cairo-1.0',
        'GdkPixbuf-2.0',
        'Pango-1.0',
        'PangoCairo-1.0',
        'Graphene-1.0',
        'Rsvg-2.0',
        'HarfBuzz-0.0',
        'Atspi-2.0',
        'freetype2-2.0',

        // === Multimedia (GStreamer 1.0) ===
        'Gst-1.0',
        'GstBase-1.0',
        'GstAudio-1.0',
        'GstVideo-1.0',
        'GstApp-1.0',
        'GstPbutils-1.0',
        'GstPlayer-1.0',
        'GstTag-1.0',
        'GstGL-1.0',
        'GstWebRTC-1.0',
        'GES-1.0',
        'Grl-0.3',
        'GrlNet-0.3',

        // === Data & Markup ===
        'Json-1.0',
        'libxml2-2.0',
        'Secret-1',
        'Tsparql-3.0',
        'Template-1.0',

        // === Web & HTTP ===
        'Soup-3.0',
        'WebKit-6.0',
        'JavaScriptCore-6.0',
        'WebKitWebProcessExtension-6.0',
        'Goa-1.0',
        'GWeather-4.0',
        'Rest-1.0',

        // === System & GNOME ===
        'GUdev-1.0',
        'Notify-0.7',
        'AppStream-1.0',
        'Gcr-4',
        'Gck-2',
        'Polkit-1.0',
        'PolkitAgent-1.0',
        'NM-1.0',
        'Flatpak-1.0',
        'GeocodGlib-2.0',
        'Poppler-0.18',
        'Wnck-3.0',
        'Libosinfo-1.0',
        'Jsonrpc-1.0',
        'Dex-1',
        'Xdp-1.0',
        'XdpGtk4-1.0',
        'GUPnP-1.6',
        'GSSDP-1.6',
    ],
    girDirectories: [
        './girs',
    ],
    ignore: [],
    ignoreVersionConflicts: true,
    promisify: true,
    onlyVersionPrefix: false,
    package: true,
    sourceLinkTemplate: 'https://github.com/gjsify/types/blob/main/{path}#L{line}'
}
