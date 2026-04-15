export default {
	modules: ["Adw-1", "Gtk-4.0"],
	outdir: "./@girs",
	package: true,
	// npm does not support the workspace: protocol. `caret` emits ^<version>
	// which npm, yarn and pnpm all resolve to the local workspace when the ref
	// matches, falling back to the registry otherwise — the most portable
	// default for a generated monorepo. Falls back to "exact" on CLI versions
	// that predate this option, which is also npm-compatible.
	depVersionFormat: "caret",
	ignoreVersionConflicts: true,
};
