// The flag-OFF control: identical input, `widgetSurface` absent. Nothing may be emitted,
// and no `./surface` may appear in the package.json — otherwise "the flag works" is a
// claim about a run that would have produced the same files either way.
export default {
  girDirectories: ["./fixtures", "../../girs"],
  modules: ["Mini-1.0"],
  outdir: "./generated-off",
  npmScope: "@girs",
  package: true,
  reporter: false,
};
