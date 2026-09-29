project(
	'__PROJECT_NAME__',
	version: '0.1.0',
	meson_version: '>= 1.4.0',
	default_options: ['warning_level=2'],
)

# The Flatpak manifest owns the app id and passes it in with `-Dapp_id=`, so the
# id has exactly one home; `meson_options.txt` only carries the fallback for a
# local `meson setup`. Everything below — the launcher, the desktop entry, the
# metainfo — reads it from here rather than repeating it.
app_id = get_option('app_id')

prefix = get_option('prefix')
bindir = prefix / get_option('bindir')
datadir = prefix / get_option('datadir')
pkgdatadir = datadir / app_id

# Install the dependencies.
#
# Inside a Flatpak build this runs offline: the build sandbox has no network, and
# `flatpak-builder` already filled npm's cache from the `sources` array the
# manifest references. `npm ci` — never `npm install` — so a tree that does not
# match `package-lock.json` fails here, loudly, instead of quietly resolving
# something the Flatpak does not contain.
#
# `run_command` has no `cwd` before Meson 1.28, so the source tree is named
# explicitly with `--prefix` rather than by changing directory.
npm = find_program('npm', required: true)
run_command(
	npm,
	'ci',
	'--offline',
	'--no-audit',
	'--no-fund',
	'--prefix', meson.project_source_root(),
	check: true,
)

# Bundle the TypeScript. A `custom_target` rather than a `run_command`, so the
# output lands in the build directory (a build artifact does not belong in the
# source tree) and Meson can install it and re-run it only when `main.ts` or the
# bundler changes.
node = find_program('node', required: true)

# `install: true` on the target itself, not a separate `install_data` in
# `data/meson.build`: `install_data` accepts a path or a `File`, and a
# `custom_target` is neither, so the install has to be declared where the target
# is built.
custom_target(
	'bundle',
	input: files('main.ts'),
	output: 'main.js',
	command: [node, files('esbuild.ts'), '--entry', '@INPUT@', '--outfile', '@OUTPUT@'],
	build_by_default: true,
	install: true,
	install_dir: pkgdatadir,
)

subdir('data')
