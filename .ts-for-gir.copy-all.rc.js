export default {
    outdir: './girs',
    modules: ['*'],
    girDirectories: [
        '/usr/local/share/gir-1.0',
        '/usr/share/gir-1.0',
        '/usr/share/*/gir-1.0',
        '/usr/share/gnome-shell',
        '/usr/share/gnome-shell/gir-1.0',
        '/usr/lib64/mutter-*',
        '/usr/lib/mutter-*',
        '/usr/lib/x86_64-linux-gnu/mutter-*',

        './vala-girs/gir-1.0',
        './girs',
    ],
}
