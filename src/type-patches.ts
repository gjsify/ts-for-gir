import { TypePatches } from './types/index.js'

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
            'Mx.Label.x-align': [
                '/* Patched: constructor parameter type clashes with Clutter.Actor.x_align */',
                'x_align?: Align & Clutter.ActorAlign',
            ],
            'Mx.Label.y-align': [
                '/* Patched: constructor parameter type clashes with Clutter.Actor.y_align */',
                'y_align?: Align & Clutter.ActorAlign',
            ],
            'Mx.Bin.x-align': ['/* Patched */', 'x_align?: Align & Clutter.ActorAlign'],
            'Mx.Bin.y-align': ['/* Patched */', 'y_align?: Align & Clutter.ActorAlign'],
        },
    },
    'Mx-2.0': {
        constructorProperties: {
            'Mx.Label.x-align': [
                '/* Patched: constructor parameter type clashes with Clutter.Actor.x_align */',
                'x_align?: Align & Clutter.ActorAlign',
            ],
            'Mx.Label.y-align': [
                '/* Patched: constructor parameter type clashes with Clutter.Actor.y_align */',
                'y_align?: Align & Clutter.ActorAlign',
            ],
            'Mx.Bin.x-align': ['/* Patched */', 'x_align?: Align & Clutter.ActorAlign'],
            'Mx.Bin.y-align': ['/* Patched */', 'y_align?: Align & Clutter.ActorAlign'],
        },
    },
    'Dazzle-1.0': {
        constructorProperties: {
            'Dazzle.Tab.style': ['/* Patched */', 'style?: TabStyle & Gtk.Style'],
            'Dazzle.TabStrip.style': ['/* Patched */', 'style?: TabStyle & Gtk.Style'],
            'Dazzle.DockStack.style': ['/* Patched */', 'style?: TabStyle & Gtk.Style'],
        },
    },
    'Gdaui-5.0': {
        constructorProperties: {
            'Gdaui.RawGrid.model': ['/* Patched */', 'model?: Gda.DataModel & Gtk.TreeModel'],
            'Gdaui.Combo.model': ['/* Patched */', 'model?: Gda.DataModel & Gtk.TreeModel'],
        },
    },
    'Gdaui-6.0': {
        constructorProperties: {
            'Gdaui.RawGrid.model': ['/* Patched */', 'model?: Gda.DataModel & Gtk.TreeModel'],
            'Gdaui.Combo.model': ['/* Patched */', 'model?: Gda.DataModel & Gtk.TreeModel'],
        },
    },
    'Gitg-1.0': {
        constructorProperties: {
            'Gitg.Sidebar.model': ['/* Patched */', 'model?: SidebarStore & Gtk.TreeModel'],
        },
    },
    'Champlain-0.12': {
        constructorProperties: {
            'Champlain.Point.size': ['/* Patched */', 'size?: number & Clutter.Size'],
            'Champlain.Tile.size': ['/* Patched */', 'size?: number & Clutter.Size'],
            'Champlain.Tile.content': ['/* Patched */', 'content?: Clutter.Actor & Clutter.Content'],
        },
    },
    'Clutter-1.0': {
        constructorProperties: {
            'Clutter.Text.position': ['/* Patched */', 'position?: number & Point'],
        },
    },
}
