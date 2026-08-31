// A widget whose base lives in a namespace with no widgets AND carries settable
// properties: the base is inlined into the consuming surface rather than dropped.
export default {
  girDirectories: ["./fixtures-inline", "../../girs"],
  modules: ["Hosted-1.0"],
  outdir: "./generated-inline",
  npmScope: "@girs",
  package: true,
  widgetVocabulary: true,
  reporter: false,
};
