export default {
  modules: ["*"],
  girDirectories: [
    // General gir files in this repository
    "./girs",
  ],
  ignore: [
    "Colorhug-1.0", // Duplicate of ColorHug-1.0
    "GUPnP-DLNA-1.0", // Same namespace as GUPnP-1.0.gir
    "ClutterGst-1.0", // Depends on GstBase-0.10
    "GstAudio-0.10", // Depends on GstBase-0.10
    // Project-specific GIRs from gjsify Vala packages — generated locally inside the
    // gjsify repo via `ts-for-gir generate --external-deps`, not published from here.
    // The npm packages @girs/gwebgl-0.1 and @girs/gjsifywebrtc-0.1 stay at their last
    // published versions on npm; this monorepo no longer ships new releases for them.
    "Gwebgl-0.1",
    "GjsifyWebrtc-0.1",
  ],
  ignoreVersionConflicts: true,
  promisify: true,
  // The GIR-derived widget vocabulary on `@girs/<ns>/surface`. Namespaces that declare no
  // GtkWidget descendant emit nothing regardless, so this turns it on for the handful that
  // do (Gtk-4.0, Gtk-3.0, Adw-1, GtkSource, WebKit, …) and leaves the rest untouched.
  widgetSurface: true,
  onlyVersionPrefix: false,
  package: true,
  reporter: true,
  sourceLinkTemplate: "https://github.com/gjsify/types/blob/main/{path}#L{line}",
};
