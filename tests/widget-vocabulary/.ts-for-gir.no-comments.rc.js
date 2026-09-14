// The ARIA value types live in GIR documentation, and `noComments` discards it. Emitting
// the rest of the vocabulary with an empty ARIA table would be the silent-partial failure
// this whole table is built to refuse, so the combination is refused instead — loudly,
// naming the flag. Same input as the positive run, one option different.
export default {
  girDirectories: ["./fixtures", "../../girs"],
  modules: ["Mini-1.0"],
  outdir: "./generated-no-comments",
  npmScope: "@girs",
  package: true,
  widgetVocabulary: true,
  noComments: true,
  reporter: false,
};
