import imports from "@girs/gjs";
import Gtk from "@girs/gtk-3.0";
import GtkSource from "@girs/gtksource-3.0";

const { gettext } = imports;

Gtk.init(null);

const wnd = new Gtk.Window({ title: "Editor Test", defaultWidth: 600, defaultHeight: 400 });
const box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 0);
const notebook = new Gtk.Notebook({});
const srcView = new GtkSource.View();

srcView.autoIndent = true;
srcView.showLineNumbers = true;
srcView.monospace = true;

const buf = srcView.buffer as GtkSource.Buffer;
const lang = GtkSource.LanguageManager.get_default()?.get_language("js");
print("lang", lang);
if (lang) buf.set_language(lang);

notebook.add(srcView);

box.pack_start(notebook, true, true, 0);
wnd.add(box);
wnd.show_all();

wnd.connect("delete-event", () => {
	Gtk.main_quit();
	return true;
});

print("hello world");

const locale = gettext.setlocale(gettext.LocaleCategory.ALL, null);
print("locale", locale);

Gtk.main();
