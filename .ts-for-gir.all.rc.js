export default {
    environments: ['gjs', 'node'],
    modules: ['*'],
    girDirectories: ['./vala-girs/gir-1.0', './girs'],
    ignoreVersionConflicts: true,
    pretty: false,
    noCheck: false,
    ignore: [
        'Colorhug-1.0', // Duplicate of ColorHug-1.0
        'GUPnP-DLNA-1.0', // Same namespace as GUPnP-1.0.gir, is this a bug or should we merge the type definitions?
    ]
}
