# main.js is an ES module and cannot run by itself. The launcher in `bindir`
# starts it with `gjs -m`.
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

# The desktop entry says `Icon=<app id>`, so the icon has to be installed under
# that name. `install_data` cannot rename files, `configure_file` with
# `copy: true` can.
icon = configure_file(
	input: 'app.svg',
	output: app_id + '.svg',
	copy: true,
	install: true,
	install_dir: datadir / 'icons/hicolor/scalable/apps',
)

# The desktop entry and metainfo stay separate `.in` files so that gettext can
# find their strings and translate them.
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
