export default {
    outdir: './types',
    modules: ['*'],
    girDirectories: [
        // General gir files in this repository
        './girs',
    ],
    ignore: [
        '*/Colorhug-1.0', // Duplicate of ColorHug-1.0
        '*/GUPnP-DLNA-1.0', // Same namespace as GUPnP-1.0.gir, is this a bug or should we merge the type definitions?
        '*/GstBase-0.10', // Unable to resolve type: BaseSink from GstBase in ClutterGst 1.0
        '*/ClutterGst-1.0', // Depends on GstBase-0.10
        '*/GstAudio-0.10', // Depends on GstBase-0.10
    ],
    ignoreVersionConflicts: true,
    promisify: true,
    workspace: true,
    onlyVersionPrefix: false,
    package: true,
}
