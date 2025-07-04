export default {
    modules: ['Glib-2.0', 'GObject-2.0'],
    girDirectories: [
        '../../girs',
    ],
    ignoreVersionConflicts: true,
    onlyVersionPrefix: true,
    noAdvancedVariants: true,
    package: false,
    reporter: true,
}
