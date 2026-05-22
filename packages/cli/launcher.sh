#!/bin/sh
# Wrapper invoked by the Flatpak `command: ts-for-gir`. Executes the
# ts-for-gir CLI GJS bundle under `gjs`.
#
# Inside the sandbox:
#   /app/share/ts-for-gir/ts-for-gir.gjs.mjs  — the GJS bundle
#   /usr/share/gir-1.0/                       — system GIR XML (ro mount)
#   /usr/share/gobject-introspection-1.0/     — companion catalog (ro)
#
# `exec` so the caller sees ts-for-gir's own exit code (CI pipelines like
# `ts-for-gir generate Gtk-4.0 && echo ok` keep working).
exec gjs -m /app/share/ts-for-gir/ts-for-gir.gjs.mjs "$@"
