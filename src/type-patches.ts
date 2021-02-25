export default {
    'Atk.Object.get_description': [
        '/* return type clashes with Atk.Action.get_description */',
        'get_description(): string | null',
    ],
    'Atk.Object.get_name': ['/* return type clashes with Atk.Action.get_name */', 'get_name(): string | null'],
    'Atk.Object.set_description': [
        '/* return type clashes with Atk.Action.set_description */',
        'set_description(description: string): boolean | null',
    ],
    'Gtk.Container.child_notify': ['/* child_notify clashes with Gtk.Widget.child_notify */'],
    'Gtk.MenuItem.activate': ['/* activate clashes with Gtk.Widget.activate */'],
    'Gtk.TextView.get_window': ['/* get_window clashes with Gtk.Widget.get_window */'],
    'WebKit.WebView.get_settings': ['/* get_settings clashes with Gtk.Widget.get_settings */'],
}
