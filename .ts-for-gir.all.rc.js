module.exports = {
    modules: ['*'],
    pretty: true,
    environments: ['gjs', 'node'],
    outdir: './@types',
    girDirectories: ['./vala-girs/gir-1.0'],
    ignoreConflicts: true,
}
