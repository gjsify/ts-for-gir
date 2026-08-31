// The NEGATIVE half: same generator, a widget with a settable property whose GIR type
// resolves to nothing. Must exit non-zero and name the property.
export default {
  girDirectories: ["./fixtures-broken", "../../girs"],
  modules: ["Broken-1.0"],
  outdir: "./generated-broken",
  npmScope: "@girs",
  package: true,
  widgetVocabulary: true,
  reporter: false,
};
