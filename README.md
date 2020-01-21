# ts-for-gjs

[TypeScript](https://www.typescriptlang.org/) binding generator for
[GJS](https://wiki.gnome.org/Projects/Gjs).  Inspired by
[gir2dts](https://github.com/darkoverlordofdata/gir2dts) but re-written and
re-designed to be a more thorough TypeScript description of the [GObject
introspection](https://wiki.gnome.org/Projects/GObjectIntrospection)
interfaces.

The definitions can be used for both TypeScript or JavaScript projects.

## How to use

Install:

```bash
git clone https://github.com/sammydre/ts-for-gjs
cd ts-for-gjs
npm install
```

Now open some code with an editor that understands TypeScript, for example
[Visual Studio Code](https://code.visualstudio.com/).

```bash
code examples/browser
```

## What it's like

![screencast](screencast-01.gif)

## Development

Install GObject Introspection Repository files:

```bash
# Ubuntu 18.04
sudo apt update && sudo apt install \
    libappindicator3-dev \
    libgda-5.0-dev \
    libgirepository1.0-dev \
    libgtk-3-dev \
    libgtksourceview-3.0-dev \
    libnotify-dev \
    libsoup2.4-dev \
    libwebkit2gtk-4.0-dev
```

Generate definitions:

```bash
npm run regress
```

## Related Projects

# TypeScript Type Definitions

* [ts-gir](https://github.com/codejamninja/ts-gir)
* [node-gir-typedef](https://github.com/SolarLiner/node-gir-typedef)
* [gir2dts](https://github.com/darkoverlordofdata/gir2dts)
* [gir-dts-generator](https://github.com/Place1/gir-dts-generator)
* [gjs-ts](https://github.com/niagr/gjs-ts)
* [gjs-docs](https://github.com/apla/gjs-docs)

## Other

* [node-gtk](https://github.com/romgrk/node-gtk)
* [cgjs](https://github.com/cgjs/cgjs)
* [jsgtk](https://github.com/WebReflection/jsgtk)
* [vala-girs](https://github.com/nemequ/vala-girs)
