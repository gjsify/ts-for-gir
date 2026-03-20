![TS for GIR](../../.github/ts-for-gir_x4.png)

This is the TypeScript API reference for [GJS](https://gjs.guide/) — the GNOME JavaScript runtime. Browse the modules below to find detailed type information for GLib, GTK, GStreamer, and many other GNOME libraries.

All type definitions are auto-generated from [GObject Introspection](https://gi.readthedocs.io/en/latest/) data using [ts-for-gir](https://github.com/gjsify/ts-for-gir) and can be installed as NPM packages for use in your projects. You can also use ts-for-gir to generate the type definitions and this documentation yourself for any GIR module available on your system.

## Install

Each documented module is available as a pre-generated NPM package under the `@girs` scope. For example, to develop a GTK 4 application with GJS:

```bash
npm install @girs/gjs @girs/gtk-4.0 --save
```

```ts
import '@girs/gjs'
import '@girs/gjs/dom'
import '@girs/gtk-4.0'

import Gtk from 'gi://Gtk?version=4.0';

const button = new Gtk.Button();
```

All pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

## Showcase

**GNOME Applications**

* [Audio Player](https://flathub.org/apps/org.gnome.Decibels) - Play audio files
* [Counters](https://flathub.org/apps/io.gitlab.guillermop.Counters) - Keep track of anything
* [Ignition](https://flathub.org/apps/io.github.flattool.Ignition) - Manage startup apps and scripts
* [Learn 6502](https://flathub.org/apps/eu.jumplink.Learn6502) - Learn program vintage Game Consoles
* [Sound Recorder](https://flathub.org/apps/org.gnome.SoundRecorder) - A simple, modern sound recorder
* [Sticky Notes](https://flathub.org/apps/com.vixalien.sticky) - Pin notes to your desktop
* [Weather](https://flathub.org/apps/org.gnome.Weather) - Show weather conditions and forecast
* [K'uychi](https://flathub.org/en/apps/one.naiara.Kuychi) - Generate color palettes

**GNOME Shell Extensions**

* [gTile](https://github.com/gTile/gTile) - Tiling window management for GNOME Shell
* [Copyous](https://github.com/boerdereinar/copyous) - Clipboard manager for GNOME Shell
* [Rounded Window Corners](https://github.com/flexagoon/rounded-window-corners) - Add rounded corners to windows

## Example Projects

Looking for a starting point? These example projects demonstrate how to use the TypeScript definitions with various bundlers:

- [GTK 4 Template with Vite](https://github.com/gjsify/ts-for-gir/tree/main/examples/gtk-4-template-vite) - Modern UI with Vite bundling
- [GNOME TypeScript Template](https://codeberg.org/nyx_lyb3ra/gnome-ts-template) - A template using GTK, libadwaita, TypeScript, Flatpak, and Meson

More examples with screenshots and descriptions can be found in the [ts-for-gir examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Resources

- [GJS Guide](https://gjs.guide/) - Comprehensive guide for GJS development
- [GTK Documentation](https://docs.gtk.org/) - Official GTK documentation
- [JavaScript API References](https://gjs-docs.gnome.org/) - GJS JavaScript API reference
- [ts-for-gir](https://github.com/gjsify/ts-for-gir) - The generator behind these type definitions
- [GNOME Shell Extension Types](https://github.com/gjsify/gnome-shell) - Type definitions for GNOME Shell Extensions

## Modules

The following modules are documented on this site, grouped by category. Click on any module to browse its classes, interfaces, enums, functions, and constants.
