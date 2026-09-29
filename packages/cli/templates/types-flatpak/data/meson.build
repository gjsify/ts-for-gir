# The bundle is a module, not an executable, so `bindir` gets a two-line launcher
# that execs it with `gjs -m` and everything the app owns goes to `pkgdatadir`.
launcher_conf = configuration_data()
launcher_conf.set('APP_ID', app_id)
launcher_conf.set('PKGDATADIR', pkgdatadir)

configure_file(
	input: 'launcher.sh.in',
	output: app_id,
	configuration: launcher_conf,
	install: true,
	install_dir: bindir,
	install_mode: 'rwxr-xr-x',
)

# The icon is installed under the app id, because that is what the desktop
# entry's `Icon=` asks the icon theme for. `install_data` cannot rename a file,
# so `configure_file` does it — with `copy: true`, since the source is not a
# template and needs no substitution.
icon = configure_file(
	input: 'app.svg',
	output: app_id + '.svg',
	copy: true,
	install: true,
	install_dir: datadir / 'icons/hicolor/scalable/apps',
)

# `.in` files so the translatable strings reach `xgettext` — a literal string built
# in Meson or TypeScript has no `translatable` attribute and never gets extracted.
i18n = import('i18n')

desktop_in = configure_file(
	input: 'app.desktop.in',
	output: app_id + '.desktop.in',
	configuration: launcher_conf,
)

i18n.merge_file(
	input: desktop_in,
	output: app_id + '.desktop',
	type: 'desktop',
	po_dir: '../po',
	install: true,
	install_dir: datadir / 'applications',
)

metainfo_in = configure_file(
	input: 'app.metainfo.xml.in',
	output: app_id + '.metainfo.xml.in',
	configuration: launcher_conf,
)

i18n.merge_file(
	input: metainfo_in,
	output: app_id + '.metainfo.xml',
	type: 'xml',
	po_dir: '../po',
	install: true,
	install_dir: datadir / 'metainfo',
)
