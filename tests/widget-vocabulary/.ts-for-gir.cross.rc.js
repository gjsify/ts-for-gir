// Two widget namespaces: the second imports the first's props interfaces instead of copying
// them, and redeclares one inherited property with an incompatible type.
export default {
  girDirectories: ["./fixtures-cross", "../../girs"],
  modules: ["Derived-1.0"],
  outdir: "./generated-cross",
  npmScope: "@girs",
  package: true,
  widgetVocabulary: true,
  reporter: false,
};
