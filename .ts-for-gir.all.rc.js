module.exports = {
    modules: ['*'],
    prettify: true,
    environments: ['gjs', 'node'],
    outdir: './@types',
    girDirectories: ['./vala-girs/gir-1.0'],
    ignoreConflicts: true,
}
