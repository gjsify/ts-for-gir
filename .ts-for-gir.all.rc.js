module.exports = {
    modules: ['*'],
    girDirectories: ['./vala-girs/gir-1.0'],
    ignoreConflicts: true,
    ignore: [
        "Colorhug-1.0", // Duplicate of ColorHug-1.0
    ]
}
