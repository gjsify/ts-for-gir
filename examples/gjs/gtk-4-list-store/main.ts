/**
 * GJS example showing how to build Gtk javascript applications
 * using Gtk TreeView and ListStore
 * @source https://github.com/optimisme/gjs-examples/blob/master/egList.js
 */

import imports from './@types/gjs.js'
import GObject from 'gi://GObject?version=2.0';
import GLib from 'gi://GLib?version=2.0';
import Gtk from 'gi://Gtk?version=4.0';
const { system } = imports;

class App {
    title = 'Example List';
    application?: Gtk.Application;
    window?: Gtk.ApplicationWindow;
    headerBar?: Gtk.HeaderBar;

    constructor() {
        GLib.set_prgname(this.title);
    }

    run(ARGV: string[]) {
        this.application = new Gtk.Application();
        this.application.connect('activate', this.onActivate.bind(this));
        this.application.connect('startup', this.onStartup.bind(this));
        this.application.run([]);
    };

    onActivate() {
        this.window?.show();
    };

    onStartup() {
        this.buildUI();
    };

    buildUI() {
        this.window = new Gtk.ApplicationWindow({
            application: this.application,
            default_height: 300,
            default_width: 720,
        });
        this.window.set_titlebar(this.getHeader());
        this.window.set_child(this.getBody());
    };

    getHeader() {
        this.headerBar = new Gtk.HeaderBar();
        return this.headerBar;
    };

    getBody() {
        let col: Gtk.TreeViewColumn;
        let tree: Gtk.TreeView;
        const scroll = new Gtk.ScrolledWindow({ vexpand: true });
        const store = new Gtk.ListStore();

        store.set_column_types([GObject.TYPE_INT, GObject.TYPE_STRING, GObject.TYPE_STRING, GObject.TYPE_BOOLEAN]);
        store.set(store.append(), [0, 1, 2, 3], [0, '0A', 'Name 0', false]);
        store.set(store.append(), [0, 1, 2, 3], [1, '1B', 'Name 1', false]);
        store.set(store.append(), [0, 1, 2, 3], [2, '2C', 'Name 2', false]);
        store.set(store.append(), [0, 1, 2, 3], [3, '3D', 'Name 3', false]);

        tree = new Gtk.TreeView({ headers_visible: false, vexpand: true, hexpand: true });
        tree.set_model(store);
        scroll.set_child(tree);

        col = new Gtk.TreeViewColumn();
        tree.append_column(col);

        let text1 = new Gtk.CellRendererText();
        col.pack_start(text1, true);
        col.set_cell_data_func(text1, this.cellFuncText1.bind(this));

        let text2 = new Gtk.CellRendererText();
        col.pack_start(text2, true);
        col.set_cell_data_func(text2, this.cellFuncText2.bind(this));

        return scroll;
    };

    cellFuncText1(col: Gtk.TreeViewColumn, cell: Gtk.CellRenderer, model: Gtk.TreeModel, iter: Gtk.TreeIter) {
        // TODO also allow this on types
        // cell.text = model.get_value(iter, 1);
        cell.set_property('text', model.get_value(iter, 1))
    };

    cellFuncText2(col: Gtk.TreeViewColumn, cell: Gtk.CellRenderer, model: Gtk.TreeModel, iter: Gtk.TreeIter) {
        cell.set_property('text', model.get_value(iter, 2))
    };
}

// Run the application
let app = new App();
app.run([system.programInvocationName, ...ARGV]);