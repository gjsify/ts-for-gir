project(
	'__PROJECT_NAME__',
	version: '0.1.0',
	meson_version: '>= 1.4.0',
	default_options: ['warning_level=2'],
)

# The Flatpak manifest passes the app id with `-Dapp_id=`. Everything below uses
# this variable instead of writing the id out again.
app_id = get_option('app_id')

prefix = get_option('prefix')
bindir = prefix / get_option('bindir')
datadir = prefix / get_option('datadir')
pkgdatadir = datadir / app_id

# Install the npm packages. In a Flatpak build there is no network, and npm
# installs from the cache that flatpak-builder filled from node-sources.json.
# `npm ci` stops with an error if package-lock.json and package.json disagree,
# while `npm install` would rewrite the lockfile.
#
# Meson does not say which directory `run_command` runs in and has no `cwd`
# argument, so npm gets the project directory with `--prefix`.
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

# Bundle main.ts into main.js in the build directory. Meson reruns this when
# main.ts changes. The target installs itself because `install_data` does not
# accept a `custom_target`.
node = find_program('node', required: true)

custom_target(
	'bundle',
	input: files('main.ts'),
	output: 'main.js',
	command: [node, files('esbuild.ts'), '--entry', '@INPUT@', '--outfile', '@OUTPUT@', '--app-id', app_id],
	build_by_default: true,
	install: true,
	install_dir: pkgdatadir,
)

subdir('data')
