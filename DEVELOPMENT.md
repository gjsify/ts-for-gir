# Development

Install GObject Introspection Repository files:

```bash
# Ubuntu
sudo apt-get update && sudo apt-get install \
    libappindicator3-dev \
    libgda-5.0-dev \
    libgirepository1.0-dev \
    libgtk-3-dev \
    libgtk-4-dev \
    libgtksourceview-3.0-dev \
    libnotify-dev \
    libsoup2.4-dev \
    libsoup-3.0-dev \
    libwebkit2gtk-4.0-dev \
    libadwaita-1-dev

# Fedora
sudo dnf update && sudo dnf install \
    libappindicator-gtk3-devel \
    libgda-devel \
    gobject-introspection-devel \
    gtk3-devel \
    gtk4-devel \
    libsoup3-devel \
    gtksourceview3-devel \
    libnotify-devel \
    libsoup-devel \
    webkit2gtk3-devel \
    libadwaita-devel
```

## GNOME Shell types

```bash

# Ubuntu
sudo apt-get install gnome-shell-common libmutter-10-dev libgcr-3-dev libgnome-desktop-3-dev

# Fedora
sudo dnf install gnome-shell gcr-devel gnome-desktop3-devel
```

## Other GNOME types

```bash
# Fedora
sudo dnf install gnome-bluetooth-libs-devel
```

Checkout this repository:

```bash
git clone --recurse-submodules git@github.com:gjsify/ts-for-gir.git
cd ts-for-gir
```

Alternatively, you can fetch the submodules after cloning the repository:

```bash
cd ts-for-gir
git submodule update --init
```

Install the dependencies and build:

```bash
yarn install
yarn build
```

Generate example type definitions:

```bash
yarn build:types:packages:gtk4
```

## Gir XML Format

See [gobject-introspection/docs/gir-1.2.rnc](https://gitlab.gnome.org/GNOME/gobject-introspection/-/blob/master/docs/gir-1.2.rnc) for type definitions.

## Yarn

We are using [Yarn](https://yarnpkg.com/) and its [workspace feature](https://yarnpkg.com/features/workspaces).
Yarn serves as a replacement for NPM, just like with NPM, you can run the scripts in the `package.json`.
We have created some of them for development.

```bash
npm install -g yarn
```

## Validate

To validate all your generated type definition files in this project run 

```bash
yarn validate:types:packages
```

## Test

### Test gir files

We have a test which tries to generate the type definition files for all gir files from the [vala-girs](https://github.com/nemequ/vala-girs) repository.

Before you can run this test you need to checkout the vala-girs submodule, to do that run this in the root of ts-for-gir:

```bash
git submodule update --init
```

Now you can run the test with

```bash
yarn test:girs:packages
```

## Update gir files

To update the gir files we have introduced a new cli command `copy`, you can run it with our default settings as follows:

```bash
yarn copy:girs
```

This copies the latest gir file found on your machine into this repository, so that we can ensure that all developers can use the same gir files and that we always use the latest versions if possible.

# FAQ

Problem: I get the following error:

```
FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory
```

Solution:

```bash
sudo sysctl -w vm.max_map_count=262144
NODE_OPTIONS=--max-old-space-size=25600 yarn ...
```

# Related Projects

* [gnome-gtk](https://github.com/codejamninja/gnome-gtk) - Typescript bindings for gnome gtk
* [ts-gir](https://github.com/codejamninja/ts-gir) - Typescript bindings for GJS
* [node-gir-typedef](https://github.com/SolarLiner/node-gir-typedef) - TypeScript bindings for node-gir
* [gir2dts](https://github.com/darkoverlordofdata/gir2dts) - The project this is inspired by
* [gir-dts-generator](https://github.com/Place1/gir-dts-generator) - The project that inspired this project
* [gjs-ts](https://github.com/niagr/gjs-ts) - Typescript bindings for GJS
* [Typescript Doclet](https://github.com/gjsify/doclet) - Experimental TypeScript binding generator written in Vala as a Valadoc extension
* [gi.ts](https://gitlab.gnome.org/ewlsh/gi.ts) - Highly accurate TypeScript bindings for GJS
* [gi-ts](https://github.com/gi-ts) TypeScript Type definitions for the GNOME base stack (e.g. GLib, GObject) 