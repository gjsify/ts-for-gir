import { TypePatches } from './types/index.js'

export const typePatches: TypePatches = {
    'Mx-1.0': {
        constructorProperties: {
            'Mx.Label.x-align': {
                type: 'Align & Clutter.ActorAlign /* Patched */',
            },
            'Mx.Label.y-align': {
                type: 'Align & Clutter.ActorAlign /* Patched */',
            },
            'Mx.Bin.x-align': {
                type: 'Align & Clutter.ActorAlign /* Patched */',
            },
            'Mx.Bin.y-align': {
                type: 'Align & Clutter.ActorAlign /* Patched */',
            },
        },
    },
    'Mx-2.0': {
        constructorProperties: {
            'Mx.Label.x-align': {
                type: 'Align & Clutter.ActorAlign /* Patched */',
            },
            'Mx.Label.y-align': {
                type: 'Align & Clutter.ActorAlign /* Patched */',
            },
            'Mx.Bin.x-align': {
                type: 'Align & Clutter.ActorAlign /* Patched */',
            },
            'Mx.Bin.y-align': {
                type: 'Align & Clutter.ActorAlign /* Patched */',
            },
        },
    },
    'Dazzle-1.0': {
        constructorProperties: {
            'Dazzle.Tab.style': {
                type: 'TabStyle & Gtk.Style /* Patched */',
            },
            'Dazzle.TabStrip.style': {
                type: 'TabStyle & Gtk.Style /* Patched */',
            },
            'Dazzle.DockStack.style': {
                type: 'TabStyle & Gtk.Style /* Patched */',
            },
        },
    },
    'Gdaui-5.0': {
        constructorProperties: {
            'Gdaui.RawGrid.model': {
                type: 'Gda.DataModel & Gtk.TreeModel /* Patched */',
            },
            'Gdaui.Combo.model': {
                type: 'Gda.DataModel & Gtk.TreeModel /* Patched */',
            },
        },
    },
    'Gdaui-6.0': {
        constructorProperties: {
            'Gdaui.RawGrid.model': {
                type: 'Gda.DataModel & Gtk.TreeModel /* Patched */',
            },
            'Gdaui.Combo.model': {
                type: 'Gda.DataModel & Gtk.TreeModel /* Patched */',
            },
        },
    },
    'Gitg-1.0': {
        constructorProperties: {
            'Gitg.Sidebar.model': {
                type: 'SidebarStore & Gtk.TreeModel /* Patched */',
            },
        },
    },
    'Champlain-0.12': {
        constructorProperties: {
            'Champlain.Point.size': {
                type: 'number & Clutter.Size /* Patched */',
            },
            'Champlain.Tile.size': {
                type: 'number & Clutter.Size /* Patched */',
            },
            'Champlain.Tile.content': {
                type: 'Clutter.Actor & Clutter.Content /* Patched */',
            },
        },
    },
    'Clutter-1.0': {
        constructorProperties: {
            'Clutter.Text.position': {
                type: 'number & Point',
            },
        },
    },
}
