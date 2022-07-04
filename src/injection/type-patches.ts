import { TypePatches } from '../types/index.js'
import { GirFactory } from '../gir-factory.js'

// const girFactory = new GirFactory()

export const typePatches: TypePatches = {
    all: {},
    // See point 6 https://github.com/sammydre/ts-for-gjs/issues/21
    node: {
        // 'Gtk-3.0': {
        //     methods: {
        //         'Gtk.Widget.get_size_request': {
        //             overrideReturnType: '{ width: number, height: number }',
        //         },
        //     },
        // },
        // 'Gtk-4.0': {
        //     methods: {
        //         'Gtk.FileChooserDialog.get_file': {
        //             returnTypes: [girFactory.newTsType({ type: 'Gio.File' })],
        //         },
        //         'Gtk.FileChooserWidget.get_file': {
        //             returnTypes: [girFactory.newTsType({ type: 'Gio.File' })],
        //         },
        //     },
        // },
        // 'Pango-1.0': {
        //     methods: {
        //         'Pango.Layout.set_markup': {
        //             returnTypes: [girFactory.newTsType({ type: 'string' })],
        //         },
        //         'Pango.Layout.set_text': {
        //             returnTypes: [girFactory.newTsType({ type: 'string' })],
        //         },
        //     },
        // },
    },
    gjs: {},
}
