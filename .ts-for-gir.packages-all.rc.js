export default {
    modules: ['*'],
    girDirectories: [
        // General gir files in this repository
        './girs',
    ],
    ignore: [
        'Colorhug-1.0', // Duplicate of ColorHug-1.0
        'GUPnP-DLNA-1.0', // Same namespace as GUPnP-1.0.gir
        'ClutterGst-1.0', // Depends on GstBase-0.10
        'GstAudio-0.10', // Depends on GstBase-0.10
    ],
    ignoreVersionConflicts: true,
    promisify: true,
    onlyVersionPrefix: false,
    package: true,
    reporter: true,
    sourceLinkTemplate: 'https://github.com/gjsify/types/blob/main/{path}#L{line}'
}
