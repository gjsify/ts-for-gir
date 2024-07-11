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

        // Also search in flatpak apps
        '/var/lib/flatpak/app/*/current/active/files/share/gir-1.0',
        '~/.local/share/flatpak/app/*/current/active/files/share/gir-1.0',

        // And runtimes
        `/var/lib/flatpak/runtime/*/*/*/active/files/share/gir-1.0/`,
        `~/.local/share/flatpak/runtime/*/*/*/active/files/share/gir-1.0/`,

        './vala-girs/gir-1.0',
        './girs',
    ],
}
