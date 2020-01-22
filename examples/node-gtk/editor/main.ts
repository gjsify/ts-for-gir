import * as gi from 'node-gtk';

const Gtk = gi.require('Gtk', '3.0');
const GtkSource = gi.require('GtkSource');

Gtk.init(null);

const wnd = new Gtk.Window({ title: 'Editor Test', default_width: 600, default_height: 400 });
const box = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL} as any); // TODO
const notebook = new Gtk.Notebook({});
const srcView = new GtkSource.View({});

srcView.auto_indent = true;
srcView.show_line_numbers = true;
srcView.monospace = true;

// TODO
// Unfortunately the "buffer" property is not GtkSource.Buffer so we need to downcast
// it. giCast gives us a type-check at runtime.
// const buf: GtkSource.Buffer = giCast<GtkSource.Buffer>(srcView.buffer, GtkSource.Buffer);
// const buf: GtkSource.Buffer = srcView.buffer as any;
// const lang = GtkSource.LanguageManager.getDefault().getLanguage('js');
// buf.setLanguage(lang);

notebook.add(srcView);

box.packStart(notebook, true, true, 0);
wnd.add(box);
wnd.showAll();

wnd.connect('delete-event', (obj, event) => {
    Gtk.mainQuit();
    return true;
});

console.log('hello world');
// import { gettext } from '../../../@types/Gjs/Gjs';
// let locale = gettext.setlocale(gettext.LocaleCategory.ALL, null);
// print('locale', locale);

Gtk.main();
