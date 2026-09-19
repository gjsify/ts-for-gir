// A namespace with no widget in it whatsoever. It must still emit a vocabulary: the gate is
// "can this namespace instantiate anything", not "does it render anything".
export default {
  girDirectories: ["./fixtures-gate", "../../girs"],
  modules: ["Plain-1.0", "Bare-1.0"],
  outdir: "./generated-gate",
  npmScope: "@girs",
  package: true,
  widgetVocabulary: true,
  reporter: false,
};
