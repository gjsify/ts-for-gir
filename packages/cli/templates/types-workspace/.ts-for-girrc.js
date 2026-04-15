export default {
	modules: ["Adw-1", "Gtk-4.0"],
	outdir: "./@girs",
	package: true,
	workspace: true,
	// npm rejects workspace:^ refs to modules that weren't included in the
	// generation set. `caret` emits ^<version> which npm, yarn and pnpm all
	// resolve to the local workspace when the ref matches, falling back to the
	// registry otherwise — the most portable default for a generated monorepo.
	depVersionFormat: "caret",
	ignoreVersionConflicts: true,
};
