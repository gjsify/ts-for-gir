// The exception list checked in the direction that stops it growing forever: `busy` here
// DOES state its value type, so the declared exception for it is obsolete and generation
// must refuse rather than keep a hand-written answer beside an authoritative one.
export default {
  girDirectories: ["./fixtures-aria", "../../girs"],
  modules: ["AriaStale-1.0"],
  outdir: "./generated-aria-stale",
  npmScope: "@girs",
  package: true,
  widgetVocabulary: true,
  reporter: false,
};
