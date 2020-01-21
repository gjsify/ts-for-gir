import '../../../@types/Gjs/index';
import * as Gtk from '../../../@types/Gjs/Gtk';
import * as Pango from '../../../@types/Gjs/Pango';
import * as WebKit from '../../../@types/Gjs/WebKit2';

function makeButton(label: string, callback) {
    const but = new Gtk.Button({ label: label });
    but.get_child()?.modify_font(Pango.FontDescription.from_string('sans bold 16'));
    but.connect('clicked', obj => {
        callback();
    });
    return but;
}

Gtk.init(null);

const wnd = new Gtk.Window({ title: 'Browser Test', default_width: 800, default_height: 600 });
const webview = new WebKit.WebView({});
const scrolledWindow = new Gtk.ScrolledWindow({});
const box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 0);
const entry = new Gtk.Entry({ text: 'about:none', halign: Gtk.Align.FILL });
const spinner = new Gtk.Spinner({});

const hbox = Gtk.Box.new(Gtk.Orientation.HORIZONTAL, 0);
hbox.pack_start(
    makeButton('⇦', () => {
        webview.go_back();
    }),
    false,
    false,
    5,
);
hbox.pack_start(
    makeButton('⇨', () => {
        webview.go_forward();
    }),
    false,
    false,
    5,
);
hbox.pack_start(
    makeButton('↻', () => {
        webview.reload();
    }),
    false,
    false,
    5,
);
hbox.pack_start(entry, true, true, 5);
hbox.pack_start(spinner, false, false, 5);

wnd.connect('delete-event', (obj, event) => {
    Gtk.main_quit();
    return true;
});
entry.connect('activate', self => {
    let uri = self.text;
    if (!(uri.startsWith('http://') || uri.startsWith('https://') || uri.startsWith('ftp://'))) uri = 'http://' + uri;
    webview.load_uri(uri);
});
webview.connect('notify::uri', (obj, pspec) => {
    entry.text = webview.uri;
});
webview.connect('notify::is-loading', (obj, pspec) => {
    spinner.active = webview.is_loading;
});

scrolledWindow.add(webview);
box.pack_start(hbox, false, true, 0);
box.pack_start(scrolledWindow, true, true, 0);
wnd.add(box);
wnd.show_all();

webview.load_uri('http://www.google.com');

Gtk.main();
