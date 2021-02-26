import { TypePatches } from './types'

export const typePatches: TypePatches = {
    'Atk-1.0': {
        methods: {
            'Atk.Object.get_description': [
                '/* return type clashes with Atk.Action.get_description */',
                'get_description(): string | null',
            ],
            'Atk.Object.get_name': ['/* return type clashes with Atk.Action.get_name */', 'get_name(): string | null'],
            'Atk.Object.set_description': [
                '/* return type clashes with Atk.Action.set_description */',
                'set_description(description: string): boolean | null',
            ],
        },
    },
    'Gtk-3.0': {
        methods: {
            'Gtk.Container.child_notify': ['/* child_notify clashes with Gtk.Widget.child_notify */'],
            'Gtk.MenuItem.activate': ['/* activate clashes with Gtk.Widget.activate */'],
            'Gtk.TextView.get_window': ['/* get_window clashes with Gtk.Widget.get_window */'],
        },
    },
    'WebKit-3.0': {
        methods: {
            'WebKit.WebView.get_settings': ['/* get_settings clashes with Gtk.Widget.get_settings */'],
        },
    },
    'Mx-1.0': {
        constructorProperties: {
            'Mx.Label_ConstructProps.x_align': [
                '/* constructor paramter type clashes with Clutter.Actor_ConstructProps.x_align */',
                'x_align?: Align & Clutter.ActorAlign',
            ],
            'Mx.Label_ConstructProps.y_align': [
                '/* constructor paramter type clashes with Clutter.Actor_ConstructProps.y_align */',
                'y_align?: Align & Clutter.ActorAlign',
            ],
        },
    },
}
