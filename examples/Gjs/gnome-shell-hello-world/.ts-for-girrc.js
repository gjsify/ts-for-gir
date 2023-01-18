export default {
    environments: ["gjs"],
    modules: ["St-1.0"],
    girDirectories: [
        // General gir files
        '/usr/share/gir-1.0',

        // GNOME Shell gir file (package: gnome-shell-common / gnome-shell)
        '/usr/share/gnome-shell',
        '/usr/share/gnome-shell/gir-1.0',

        // GNOME Shell gir file dependencies on Fedora Workstation 36 (package: mutter)
        '/usr/lib64/mutter-10',

        // GNOME Shell gir file dependencies on Fedora Workstation 37 (package: mutter)
        '/usr/lib64/mutter-11',

        //  GNOME Shell gir file dependencies on Ubuntu 22.04 (package: libmutter-10-dev)
        '/usr/lib/x86_64-linux-gnu/mutter-10',

        //  GNOME Shell gir file dependencies on Ubuntu 22.10 (package: libmutter-11-dev)
        '/usr/lib/x86_64-linux-gnu/mutter-11',
    ],
    pretty: true,
    buildType: "types",
    useNamespace: true,
    gnomeShellTypes: true,
}