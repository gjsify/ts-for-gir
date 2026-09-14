// A member of the ARIA table whose documentation states no value type, and which no
// declared exception covers. Must exit non-zero and name the member: a table missing a
// row is indistinguishable from "GTK has no such name", and the fallback a consumer
// reaches for next emits `true` where GTK means 1.
export default {
  girDirectories: ["./fixtures-aria", "../../girs"],
  modules: ["AriaBroken-1.0"],
  outdir: "./generated-aria-broken",
  npmScope: "@girs",
  package: true,
  widgetVocabulary: true,
  reporter: false,
};
