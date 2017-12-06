# ts-for-gjs

Typescript binding generator for [GJS](https://wiki.gnome.org/Projects/Gjs).
Inspired by [gir2dts](https://github.com/darkoverlordofdata/gir2dts) but
re-written and re-designed to be a more thorough Typescript description of the
[GObject introspection](https://wiki.gnome.org/Projects/GObjectIntrospection)
interfaces.

# How to use

Install:

```
git clone https://github.com/sammydre/ts-for-gjs
cd ts-for-gjs
npm install
```

Now open some code with an editor that understands Typescript, for example
[Visual Studio Code](https://code.visualstudio.com/).

```
code examples/browser
```

# What it's like

![screencast](screencast-01.gif)

# Development

Install GObject Introspection Repository files:

```bash
# Ubuntu 17.10
sudo apt update && sudo apt install \
    libgirepository1.0-dev \
    libgtk-3-dev \
    libsoup2.4-dev \
    libgtksourceview-3.0-dev \
    libwebkit2gtk-4.0-dev \
    libappindicator3-dev \
    libnotify-dev
```

Generate definitions:

```bash
npm run regress
```