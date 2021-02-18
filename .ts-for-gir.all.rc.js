module.exports = {
    modules: ['*'],
    pretty: true,
    environments: ['gjs', 'node'],
    outdir: './@types',
    girDirectories: ['./vala-girs/gir-1.0'],
    ignoreConflicts: true,
    ignore: [
        "Colorhug-1.0", // Duplicate of ColorHug-1.0

        // "RygelCore-2.4", // Too many errors
        // "RygelServer-2.4", // Dependency of RygelCore-2.4
        // "RygelRenderer-2.4", // Dependency of RygelCore-2.4

        // "RygelCore-2.6", // Too many errors
        // "RygelServer-2.6", // Dependency of RygelCore-2.6
        // "RygelRenderer-2.6", // Dependency of RygelCore-2.6
        // "RygelRendererGst-2.6", // Dependency of RygelCore-2.6

        // "Tracker-0.16", // Too many errors
        // "TrackerMiner-1.0", // Dependency of Tracker-0.16

        // "Tracker-1.0", // Too many errors
        // "TrackerExtract-0.16", // Dependency of Tracker-1.0
        // "TrackerMiner-0.16", // Dependency of Tracker-1.0

        // "Farstream-0.1", // Missing dependencies


    ]
}
