export default {
  // Also the npmScope: every cross-namespace import inside the output is written as
  // `@girs-test/bundle-fixture/<namespace>`, a self-reference that resolves in-package.
  bundle: "@girs-test/bundle-fixture",
  girDirectories: ["../external-deps/fixtures", "../../girs"],
  modules: ["Greeter-1.0"],
  outdir: "./generated",
  bundleMeta: {
    sdk: { id: "org.example.Sdk", branch: "1" },
  },
  ignoreVersionConflicts: true,
  reporter: false,
};
