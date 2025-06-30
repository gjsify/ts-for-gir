export default {
    modules: ['Gtk-2.0', 'Gtk-3.0', 'Gtk-4.0',],
    girDirectories: [
        '../../girs',
    ],
    ignoreVersionConflicts: true,
    onlyVersionPrefix: true,
    noAdvancedVariants: false,
    package: false,
    reporter: true,
}
