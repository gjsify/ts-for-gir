# NOTICE — third-party content in `@ts-for-gir/gir-files`

This package redistributes **GObject Introspection (GIR) XML files that this project did
not author**. They are verbatim copies of files shipped by upstream projects and by the
Fedora packages built from them.

## Licensing

The packaging around them — `src/`, `scripts/`, `provenance.json` — is **Apache-2.0**,
like the rest of ts-for-gir.

The `payload/` files are **not**. Each carries the licence of the project it was generated
from, and those are predominantly copyleft. The table below records, for every file in this
package, the licence expression declared by the upstream source it came from. That is why
`package.json` says `"license": "SEE LICENSE IN NOTICE.md"` rather than naming one licence:
no single identifier is true of this package's contents.

**This table is evidence, not a legal determination.** A distribution's `License:` tag is an
expression covering everything in that package, not a per-file finding, and nothing here is
legal advice. If you redistribute these files onward, satisfy the terms below yourself.

Files that no source could attribute are **not included** in this package. See
`provenance.json` → `unattributed` for what was left out and why.

## Licence expressions present (93 distinct, over 510 files)

- `LGPL-2.1-or-later` — 114 file(s)
- `GPL-2.0-or-later` — 103 file(s)
- `LGPL-2.0-or-later` — 46 file(s)
- `LicenseRef-Callaway-LGPLv2+` — 30 file(s)
- `LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note` — 19 file(s)
- `GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause` — 14 file(s)
- `LGPL-3.0-or-later` — 13 file(s)
- `GPL-3.0-or-later` — 10 file(s)
- `MIT` — 7 file(s)
- `GPL-2.0-or-later AND LGPL-2.1-or-later` — 6 file(s)
- `LGPL-2.1-only AND BSD-2-Clause AND BSD-3-Clause AND ISC AND bzip2-1.0.6 AND NCSA AND MIT AND GPL-2.0-only AND MPL-1.1 AND SunPro AND Apache-2.0 AND GPL-3.0-or-later WITH Bison-exception-2.2 AND MPL-2.0 AND OFL-1.1 AND (AFL-2.0 OR GPL-2.0-or-later) AND BSD-Source-Code AND BSD-2-Clause-Views AND LGPL-2.1-or-later AND (NCSA OR MIT) AND Apache-2.0 WITH LLVM-exception AND BSL-1.0` — 6 file(s)
- `GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+` — 5 file(s)
- `LGPL-2.0-or-later AND LGPL-2.1-or-later AND Apache-2.0 AND CC0-1.0 AND MIT AND MIT-open-group AND HPND-sell-variant AND GPL-2.0-or-later AND GPL-3.0-or-later AND OFL-1.1` — 5 file(s)
- `Apache-2.0` — 4 file(s)
- `LGPL-2.1-only AND GPL-2.0-only AND GPL-2.0-or-later` — 4 file(s)
- `GPL-3.0-or-later AND LGPL-3.0-or-later` — 4 file(s)
- `LGPL-2.1-or-later AND CC-BY-SA-3.0` — 4 file(s)
- `LicenseRef-Callaway-LGPLv2` — 3 file(s)
- `GPL-3.0-or-later AND AGPL-3.0-or-later AND LicenseRef-Callaway-GFDL` — 3 file(s)
- `GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND LGPL-3.0-or-later` — 3 file(s)
- `(LGPL-3.0-only OR LGPL-2.1-only) AND GPL-3.0-only` — 3 file(s)
- `LGPL-2.1-or-later AND Apache-2.0` — 3 file(s)
- `LGPL-2.1-or-later AND LicenseRef-Fedora-Public-Domain AND FSFULLRWD AND (LGPL-3.0-or-later OR CC-BY-SA-3.0) AND (MPL-1.1 OR GPL-2.0-or-later OR LGPL-2.1-or-later) AND GCR-docs` — 3 file(s)
- `LGPL-2.1-only` — 3 file(s)
- `GPL-3.0-only` — 3 file(s)
- `LGPL-3.0-only AND LGPL-2.1-or-later` — 3 file(s)
- `GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+ AND LicenseRef-Callaway-MIT` — 2 file(s)
- `GPL-3.0-only AND LGPL-3.0-only AND (LGPL-3.0-only OR LGPL-2.1-only)` — 2 file(s)
- `GPL-3.0-or-later AND LGPL-2.0-or-later AND GPL-2.0-only AND CC-BY-SA-2.0 AND GPL-2.0-or-later WITH GStreamer-exception-2008` — 2 file(s)
- `GPL-2.0-or-later AND GPL-2.0-only AND LGPL-2.1-or-later AND CC0-1.0 AND CC-BY-SA-4.0` — 2 file(s)
- `GPL-3.0-or-later AND LGPL-2.1-or-later` — 2 file(s)
- `LGPL-3.0-only` — 2 file(s)
- `GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND X11 AND MIT AND Afmparse` — 2 file(s)
- `LicenseRef-Callaway-LGPLv2+ AND GPL-2.0-or-later` — 2 file(s)
- `GPL-3.0-or-later AND CC-BY-SA-3.0 AND CC0-1.0` — 2 file(s)
- `LGPL-2.0-or-later AND GPL-2.0-or-later` — 2 file(s)
- `BSD-2-Clause` — 2 file(s)
- `LGPL-2.1-or-later AND CC0-1.0` — 2 file(s)
- `LicenseRef-Callaway-LGPLv2+ AND LicenseRef-Callaway-GFDL` — 2 file(s)
- `LGPL-2.1-or-later AND FSFULLRWD AND (LGPL-3.0-or-later OR CC-BY-SA-3.0) AND (MPL-1.1 OR GPL-2.0-or-later OR LGPL-2.1-or-later) AND GCR-docs` — 2 file(s)
- `GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND MIT` — 2 file(s)
- `(MPL-2.0 OR LGPL-2.1-or-later) AND Apache-2.0 WITH LLVM-exception AND BSD-3-Clause AND CC0-1.0 AND GPL-3.0-or-later AND IJG AND ISC AND MIT AND Unicode-3.0 AND Unicode-DFS-2016 AND (0BSD OR MIT OR Apache-2.0) AND (Apache-2.0 OR MIT) AND (Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT) AND (BSD-2-Clause OR Apache-2.0 OR MIT) AND (BSD-3-Clause OR Apache-2.0) AND (MIT OR Apache-2.0 OR Zlib) AND (Unlicense OR MIT)` — 2 file(s)
- `LGPL-2.1-only OR MPL-2.0` — 2 file(s)
- `GPL-2.0-or-later AND CC0-1.0 AND MIT` — 2 file(s)
- `LGPL-2.1-only AND CC-BY-3.0` — 2 file(s)
- `GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND MIT AND libtiff AND Apache-2.0 AND BSD-2-Clause AND BSD-3-Clause AND ISC AND LicenseRef-BSD-2-Clause-WITH-AdditionRef-AOMPL-1.0 AND Unicode-3.0 AND Unicode-DFS-2016 AND Zlib AND (0BSD OR MIT OR Apache-2.0) AND (Apache-2.0 OR MIT) AND (Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT) AND (BSD-2-Clause OR Apache-2.0 OR MIT) AND (BSD-2-Clause AND ISC) AND (BSD-3-Clause OR Apache-2.0) AND (MIT OR Apache-2.0 OR Zlib) AND (Unlicense OR MIT)` — 2 file(s)
- `LGPL-2.0-only` — 2 file(s)
- `LGPL-2.1-or-later AND MIT AND MIT-open-group and BSD-3-Clause` — 2 file(s)
- `LGPL-2.1-or-later AND MIT` — 1 file(s)
- `LicenseRef-Callaway-LGPLv2 AND LGPL-3.0-only` — 1 file(s)
- `LGPL-2.0-or-later AND GPL-3.0-only AND (LGPL-3.0-only OR LGPL-2.1-only)` — 1 file(s)
- `LGPL-3.0-or-later AND GPL-3.0-or-later` — 1 file(s)
- `GPL-2.0-only OR GPL-3.0-only` — 1 file(s)
- `LGPL-2.1-only AND LGPL-2.1-or-later` — 1 file(s)
- `GPL-2.0-or-later AND CC-BY-SA-3.0 AND CC0-1.0` — 1 file(s)
- `LGPL-2.1-or-later AND NIST-PD` — 1 file(s)
- `LicenseRef-Callaway-BSD AND GPL-3.0-or-later` — 1 file(s)
- `GPL-2.0-or-later and LGPL-2.0-or-later` — 1 file(s)
- `GPL-2.0-or-later AND BSD-3-Clause` — 1 file(s)
- `zlib` — 1 file(s)
- `BSD-3-Clause AND GPL-2.0-or-later` — 1 file(s)
- `GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND GFDL-1.1-or-later` — 1 file(s)
- `LGPL-2.0-or-later AND BSD-3-Clause` — 1 file(s)
- `LGPL-2.1-or-later AND GPL-3.0-or-later` — 1 file(s)
- `LGPL-2.0-or-later AND LGPL-2.1-or-later AND GPL-2.0-or-later` — 1 file(s)
- `GPL-3.0-or-later AND GFDL-1.3-or-later AND CC0-1.0` — 1 file(s)
- `GPL-2.0-or-later AND CC0-1.0` — 1 file(s)
- `LGPL-2.0-or-later AND CC-BY-SA-4.0` — 1 file(s)
- `LGPL-2.1-or-later AND GFDL-1.1-or-later` — 1 file(s)
- `LGPL-2.0-or-later AND LGPL-2.1-only` — 1 file(s)
- `LGPL-3.0-or-later and MIT` — 1 file(s)
- `GPL-3.0-or-later AND MIT` — 1 file(s)
- `GPL-3.0-or-later AND GFDL-1.3-or-later AND Unicode-DFS-2016` — 1 file(s)
- `MIT-Modern-Variant` — 1 file(s)
- `GPL-2.0-or-later AND GFDL-1.1-no-invariants-or-later AND CC-BY-SA-4.0` — 1 file(s)
- `GPL-3.0-or-later AND GPL-2.0-or-later AND LGPL-3.0-or-later AND LGPL-2.1-or-later AND LGPL-2.0-or-later AND MIT AND CC0-1.0 AND CC-BY-3.0` — 1 file(s)
- `(LGPL-2.1-or-later OR MIT) AND (Apache-2.0 OR MIT) AND (BSD-2-Clause OR Apache-2.0 OR MIT) AND MIT AND (MIT OR Apache-2.0) AND (Unlicense OR MIT)` — 1 file(s)
- `LGPL-3.0-or-later OR MPL-2.0` — 1 file(s)
- `GPL-2.0-or-later AND LGPL-2.0-or-later` — 1 file(s)
- `(LGPL-2.0-only OR LGPL-3.0-only) AND GPL-3.0-or-later` — 1 file(s)
- `ISC` — 1 file(s)
- `LGPL-2.1-or-later OR MPL-1.1` — 1 file(s)
- `GPL-2.0-or-later AND LGPL-2.1-or-later AND FSFAP` — 1 file(s)
- `(GPL-2.0-only OR GPL-3.0-only) AND GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND MIT` — 1 file(s)
- `LGPL-2.1-or-later AND Apache-2.0 AND BSD-3-Clause AND MIT AND MPL-2.0 AND Unicode-3.0 AND Unicode-DFS-2016 AND (0BSD OR MIT OR Apache-2.0) AND (Apache-2.0 OR MIT) AND (BSD-3-Clause OR Apache-2.0) AND (MIT OR Apache-2.0 OR Zlib) AND (Unlicense OR MIT)` — 1 file(s)
- `LGPL-2.1-or-later AND Apache-2.0 AND (GPL-2.0-or-later OR TGPPL-1.0) AND LicenseRef-Fedora-Public-Domain AND GCR-docs` — 1 file(s)
- `LGPL-2.1-or-later AND LGPL-2.0-or-later` — 1 file(s)
- `LGPL-2.0-only OR LGPL-3.0-only` — 1 file(s)
- `LGPL-2.0-or-later AND LGPL-2.1-or-later` — 1 file(s)
- `GPL-2.0-or-later WITH GStreamer-exception-2008 AND CC0-1.0 AND (LGPL-2.0-or-later AND LGPL-2.1-or-later WITH GStreamer-exception-2005)` — 1 file(s)
- `GPL-2.0-or-later AND (GPL-2.0-or-later WITH GStreamer-exception-2008) AND LGPL-2.0-or-later AND CC0-1.0` — 1 file(s)
- `LGPL-2.0-or-later AND (LGPL-2.1-or-later WITH GStreamer-exception-2005)` — 1 file(s)
- `GPL-2.0-only` — 1 file(s)

## Per-file attribution

| Namespace | Declared licence | Origin | Upstream |
|---|---|---|---|
| `Abi-3.0` | GPL-2.0-or-later | libabiword-devel (fedora) | [link](https://gitlab.gnome.org/World/AbiWord) |
| `Accounts-1.0` | LicenseRef-Callaway-LGPLv2 | libaccounts-glib-devel (fedora) | [link](https://gitlab.com/accounts-sso/libaccounts-glib) |
| `AccountsService-1.0` | GPL-3.0-or-later | accountsservice-devel (fedora) | [link](https://www.freedesktop.org/wiki/Software/AccountsService/) |
| `Adw-1` | LGPL-2.1-or-later AND MIT | libadwaita-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libadwaita) |
| `Ags-8.0` | GPL-3.0-or-later AND AGPL-3.0-or-later AND LicenseRef-Callaway-GFDL | gsequencer-devel (fedora) | [link](http://nongnu.org/gsequencer) |
| `AgsAudio-8.0` | GPL-3.0-or-later AND AGPL-3.0-or-later AND LicenseRef-Callaway-GFDL | gsequencer-devel (fedora) | [link](http://nongnu.org/gsequencer) |
| `AgsGui-8.0` | GPL-3.0-or-later AND AGPL-3.0-or-later AND LicenseRef-Callaway-GFDL | gsequencer-devel (fedora) | [link](http://nongnu.org/gsequencer) |
| `Amtk-5` | LGPL-3.0-or-later | libgedit-amtk-devel (fedora) | [link](https://gedit-text-editor.org/) |
| `Anjuta-3.0` | GPL-2.0-or-later | anjuta-devel (fedora) | [link](http://www.anjuta.org/) |
| `Anthy-9000` | GPL-2.0-or-later | ibus-anthy-devel (fedora) | [link](https://github.com/ibus/ibus/wiki) |
| `AppIndicator3-0.1` | LicenseRef-Callaway-LGPLv2 AND LGPL-3.0-only | libappindicator-gtk3-devel (fedora) | [link](https://launchpad.net/libappindicator) |
| `AppStream-1.0` | GPL-2.0-or-later AND LGPL-2.1-or-later | appstream-devel (fedora) | [link](https://github.com/ximion/appstream) |
| `AppStreamCompose-1.0` | GPL-2.0-or-later AND LGPL-2.1-or-later | appstream-compose-devel (fedora) | [link](https://github.com/ximion/appstream) |
| `AppStreamGlib-1.0` | LGPL-2.1-or-later | libappstream-glib-devel (fedora) | [link](http://people.freedesktop.org/~hughsient/appstream-glib/) |
| `Arrow-23.0` | Apache-2.0 | libarrow-glib-devel (fedora) | [link](https://arrow.apache.org/) |
| `ArrowDataset-23.0` | Apache-2.0 | libarrow-dataset-glib-devel (fedora) | [link](https://arrow.apache.org/) |
| `ArrowFlight-23.0` | Apache-2.0 | libarrow-flight-devel (fedora) | [link](https://arrow.apache.org/) |
| `Atk-1.0` | LGPL-2.1-or-later | atk-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/at-spi2-core/) |
| `AtrilDocument-1.5.0` | GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+ AND LicenseRef-Callaway-MIT | atril-devel (fedora) | [link](http://mate-desktop.org) |
| `AtrilView-1.5.0` | GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+ AND LicenseRef-Callaway-MIT | atril-devel (fedora) | [link](http://mate-desktop.org) |
| `Atspi-2.0` | LGPL-2.1-or-later | at-spi2-core-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/at-spi2-core/) |
| `AyatanaAppIndicator-0.1` | GPL-3.0-only AND LGPL-3.0-only AND (LGPL-3.0-only OR LGPL-2.1-only) | libayatana-appindicator-gtk2-devel (fedora) | [link](https://github.com/AyatanaIndicators/libayatana-appindicator) |
| `AyatanaAppIndicator3-0.1` | GPL-3.0-only AND LGPL-3.0-only AND (LGPL-3.0-only OR LGPL-2.1-only) | libayatana-appindicator-gtk3-devel (fedora) | [link](https://github.com/AyatanaIndicators/libayatana-appindicator) |
| `AyatanaIdo3-0.4` | LGPL-2.0-or-later AND GPL-3.0-only AND (LGPL-3.0-only OR LGPL-2.1-only) | libayatana-ido-gtk3-devel (fedora) | [link](https://github.com/AyatanaIndicators/ayatana-ido) |
| `Babl-0.1` | LGPL-3.0-or-later AND GPL-3.0-or-later | babl-devel (fedora) | [link](https://www.gegl.org/babl/) |
| `Bamf-3` | GPL-2.0-only OR GPL-3.0-only | bamf-devel (fedora) | [link](https://launchpad.net/bamf) |
| `BlockDev-3.0` | LGPL-2.1-or-later | libblockdev-devel (fedora) | [link](https://github.com/storaged-project/libblockdev) |
| `BraseroBurn-3.1` | GPL-3.0-or-later AND LGPL-2.0-or-later AND GPL-2.0-only AND CC-BY-SA-2.0 AND GPL-2.0-or-later WITH GStreamer-exception-2008 | brasero-devel (fedora) | [link](https://wiki.gnome.org/Apps/Brasero) |
| `BraseroMedia-3.1` | GPL-3.0-or-later AND LGPL-2.0-or-later AND GPL-2.0-only AND CC-BY-SA-2.0 AND GPL-2.0-or-later WITH GStreamer-exception-2008 | brasero-devel (fedora) | [link](https://wiki.gnome.org/Apps/Brasero) |
| `Budgie-3.0` | GPL-2.0-or-later AND GPL-2.0-only AND LGPL-2.1-or-later AND CC0-1.0 AND CC-BY-SA-4.0 | budgie-desktop-devel (fedora) | [link](https://github.com/BuddiesOfBudgie/budgie-desktop) |
| `BudgieRaven-3.0` | GPL-2.0-or-later AND GPL-2.0-only AND LGPL-2.1-or-later AND CC0-1.0 AND CC-BY-SA-4.0 | budgie-desktop-devel (fedora) | [link](https://github.com/BuddiesOfBudgie/budgie-desktop) |
| `CDesktopEnums-3.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND LGPL-3.0-or-later | cinnamon-desktop-devel (fedora) | [link](https://github.com/linuxmint/cinnamon-desktop) |
| `CMenu-3.0` | LGPL-2.0-or-later | cinnamon-menus-devel (fedora) | [link](https://github.com/linuxmint/cinnamon-menus) |
| `Caja-2.0` | GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+ | caja-devel (fedora) | [link](http://mate-desktop.org) |
| `Cally-1.0` | LicenseRef-Callaway-LGPLv2+ | clutter-devel (fedora) | [link](http://www.clutter-project.org/) |
| `CambalachePrivate-3.0` | LGPL-2.1-only AND GPL-2.0-only AND GPL-2.0-or-later | cambalache (fedora) | [link](https://gitlab.gnome.org/jpu/cambalache) |
| `CambalachePrivate-4.0` | LGPL-2.1-only AND GPL-2.0-only AND GPL-2.0-or-later | cambalache (fedora) | [link](https://gitlab.gnome.org/jpu/cambalache) |
| `Camel-1.2` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `Caribou-1.0` | LicenseRef-Callaway-LGPLv2+ | caribou-devel (fedora) | [link](https://wiki.gnome.org/Projects/Caribou) |
| `Casilda-1.0` | LGPL-2.1-only AND LGPL-2.1-or-later | casilda-devel (fedora) | [link](https://gitlab.gnome.org/jpu/casilda) |
| `Champlain-0.12` | LicenseRef-Callaway-LGPLv2+ | libchamplain-devel (fedora) | [link](https://wiki.gnome.org/Projects/libchamplain) |
| `CinnamonDesktop-3.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND LGPL-3.0-or-later | cinnamon-desktop-devel (fedora) | [link](https://github.com/linuxmint/cinnamon-desktop) |
| `Clapper-0.0` | GPL-3.0-or-later AND LGPL-2.1-or-later | clapper-devel (fedora) | [link](https://github.com/Rafostar/clapper) |
| `ClapperGtk-0.0` | GPL-3.0-or-later AND LGPL-2.1-or-later | clapper-devel (fedora) | [link](https://github.com/Rafostar/clapper) |
| `CloudProviders-0.3` | LGPL-3.0-or-later | libcloudproviders-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libcloudproviders) |
| `Clutter-1.0` | LicenseRef-Callaway-LGPLv2+ | clutter-devel (fedora) | [link](http://www.clutter-project.org/) |
| `Clutter-10` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-11` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-12` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-13` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-14` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-15` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-16` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-17` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-18` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-3` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-4` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-5` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-51` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-6` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-7` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-8` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Clutter-9` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `ClutterGdk-1.0` | LicenseRef-Callaway-LGPLv2+ | clutter-devel (fedora) | [link](http://www.clutter-project.org/) |
| `ClutterGst-3.0` | LicenseRef-Callaway-LGPLv2+ | clutter-gst3-devel (fedora) | [link](https://developer.gnome.org/clutter-gst/stable/) |
| `ClutterX11-1.0` | LicenseRef-Callaway-LGPLv2+ | clutter-devel (fedora) | [link](http://www.clutter-project.org/) |
| `CmbCatalogUtils-3.0` | LGPL-2.1-only AND GPL-2.0-only AND GPL-2.0-or-later | cambalache (fedora) | [link](https://gitlab.gnome.org/jpu/cambalache) |
| `CmbCatalogUtils-4.0` | LGPL-2.1-only AND GPL-2.0-only AND GPL-2.0-or-later | cambalache (fedora) | [link](https://gitlab.gnome.org/jpu/cambalache) |
| `Cogl-1.0` | LicenseRef-Callaway-LGPLv2+ | cogl-devel (fedora) | [link](http://www.clutter-project.org/) |
| `Cogl-10` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-11` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-12` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-13` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-14` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-15` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-16` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-17` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-18` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-2.0` | LicenseRef-Callaway-LGPLv2+ | cogl-devel (fedora) | [link](http://www.clutter-project.org/) |
| `Cogl-3` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-4` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-5` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-51` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-6` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-7` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-8` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Cogl-9` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `CoglPango-1.0` | LicenseRef-Callaway-LGPLv2+ | cogl-devel (fedora) | [link](http://www.clutter-project.org/) |
| `CoglPango-2.0` | LicenseRef-Callaway-LGPLv2+ | cogl-devel (fedora) | [link](http://www.clutter-project.org/) |
| `Colord-1.0` | GPL-2.0-or-later AND LGPL-2.1-or-later | colord-devel (fedora) | [link](https://www.freedesktop.org/software/colord/) |
| `ColordGtk-1.0` | LGPL-2.1-or-later | colord-gtk-devel (fedora) | [link](http://www.freedesktop.org/software/colord/) |
| `Colorhug-1.0` | GPL-2.0-or-later AND LGPL-2.1-or-later | colord-devel (fedora) | [link](https://www.freedesktop.org/software/colord/) |
| `CryptUI-0.0` | LicenseRef-Callaway-LGPLv2+ | libcryptui-devel (fedora) | [link](http://projects.gnome.org/seahorse/) |
| `CudaGst-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `Cvc-1.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND LGPL-3.0-or-later | cinnamon-desktop-devel (fedora) | [link](https://github.com/linuxmint/cinnamon-desktop) |
| `DBus-1.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `DBusGLib-1.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `Dazzle-1.0` | GPL-3.0-or-later | libdazzle-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libdazzle) |
| `Dbusmenu-0.4` | (LGPL-3.0-only OR LGPL-2.1-only) AND GPL-3.0-only | libdbusmenu-devel (fedora) | [link](https://launchpad.net/libdbusmenu) |
| `DbusmenuGtk-0.4` | (LGPL-3.0-only OR LGPL-2.1-only) AND GPL-3.0-only | libdbusmenu-gtk2-devel (fedora) | [link](https://launchpad.net/libdbusmenu) |
| `DbusmenuGtk3-0.4` | (LGPL-3.0-only OR LGPL-2.1-only) AND GPL-3.0-only | libdbusmenu-gtk3-devel (fedora) | [link](https://launchpad.net/libdbusmenu) |
| `Dee-1.0` | LGPL-3.0-only | dee-devel (fedora) | [link](https://launchpad.net/dee) |
| `Devhelp-3.0` | GPL-3.0-or-later | devhelp-devel (fedora) | [link](https://wiki.gnome.org/Apps/Devhelp) |
| `Dex-1` | LGPL-2.1-or-later | libdex-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libdex) |
| `Dmap-4.0` | LGPL-2.1-or-later | libdmapsharing4-devel (fedora) | [link](https://www.flyn.org/projects/libdmapsharing/) |
| `EBackend-1.2` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `EBook-1.2` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `EBookContacts-1.2` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `ECal-2.0` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `EDataBook-1.2` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `EDataCal-2.0` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `EDataServer-1.2` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `EDataServerUI-1.2` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `EDataServerUI4-1.0` | LGPL-2.0-or-later | evolution-data-server-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/evolution/-/wikis/home) |
| `Easyfc-0.14` | LGPL-3.0-or-later | libeasyfc-gobject-devel (fedora) | [link](https://gitlab.com/tagoh/libeasyfc/) |
| `Entangle-0.1` | GPL-3.0-or-later | entangle (fedora) | [link](https://entangle-photo.org/) |
| `Eog-3.0` | GPL-2.0-or-later AND CC-BY-SA-3.0 AND CC0-1.0 | eog (fedora) | [link](https://wiki.gnome.org/Apps/EyeOfGnome) |
| `Eom-1.0` | GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+ | eom-devel (fedora) | [link](http://mate-desktop.org) |
| `EvinceDocument-3.0` | GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND X11 AND MIT AND Afmparse | evince-devel (fedora) | [link](https://wiki.gnome.org/Apps/Evince) |
| `EvinceView-3.0` | GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND X11 AND MIT AND Afmparse | evince-devel (fedora) | [link](https://wiki.gnome.org/Apps/Evince) |
| `FPrint-2.0` | LGPL-2.1-or-later AND NIST-PD | libfprint-devel (fedora) | [link](http://www.freedesktop.org/wiki/Software/fprint/libfprint) |
| `Farstream-0.2` | LicenseRef-Callaway-LGPLv2+ AND GPL-2.0-or-later | farstream02-devel (fedora) | [link](https://www.freedesktop.org/wiki/Software/Farstream/) |
| `Fcitx-1.0` | GPL-2.0-or-later | fcitx-devel (fedora) | [link](https://fcitx-im.org/wiki/Fcitx) |
| `FcitxG-1.0` | LicenseRef-Callaway-LGPLv2+ | fcitx5-gtk-devel (fedora) | [link](https://github.com/fcitx/fcitx5-gtk) |
| `Fep-1.0` | LicenseRef-Callaway-BSD AND GPL-3.0-or-later | libfep-devel (fedora) | [link](http://github.com/ueno/libfep) |
| `Flatpak-1.0` | LGPL-2.1-or-later | flatpak-devel (fedora) | [link](https://flatpak.org/) |
| `Folks-0.7` | LGPL-2.1-or-later | folks-devel (fedora) | [link](https://wiki.gnome.org/Projects/Folks) |
| `FolksDummy-0.7` | LGPL-2.1-or-later | folks-devel (fedora) | [link](https://wiki.gnome.org/Projects/Folks) |
| `FolksEds-0.7` | LGPL-2.1-or-later | folks-devel (fedora) | [link](https://wiki.gnome.org/Projects/Folks) |
| `FolksTelepathy-0.7` | LGPL-2.1-or-later | folks-devel (fedora) | [link](https://wiki.gnome.org/Projects/Folks) |
| `Foundry-1` | LGPL-2.1-or-later AND Apache-2.0 | libfoundry-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/foundry) |
| `FoundryAdw-1` | LGPL-2.1-or-later AND Apache-2.0 | libfoundry-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/foundry) |
| `FoundryGtk-1` | LGPL-2.1-or-later AND Apache-2.0 | libfoundry-gtk-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/foundry) |
| `Fwupd-2.0` | LGPL-2.1-or-later | fwupd-devel (fedora) | [link](https://github.com/fwupd/fwupd) |
| `GCab-1.0` | LGPL-2.1-or-later | libgcab1-devel (fedora) | [link](http://ftp.gnome.org/pub/GNOME/sources/gcab) |
| `GCalc-2` | GPL-3.0-or-later AND CC-BY-SA-3.0 AND CC0-1.0 | gnome-calculator-devel (fedora) | [link](https://wiki.gnome.org/Apps/Calculator) |
| `GCi-1` | GPL-3.0-or-later AND CC-BY-SA-3.0 AND CC0-1.0 | gnome-calculator-devel (fedora) | [link](https://wiki.gnome.org/Apps/Calculator) |
| `GConf-2.0` | LGPL-2.0-or-later AND GPL-2.0-or-later | GConf2-devel (fedora) | [link](https://gitlab.gnome.org/Archive/gconf/) |
| `GDesktopEnums-3.0` | LGPL-2.1-or-later | gsettings-desktop-schemas-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gsettings-desktop-schemas) |
| `GES-1.0` | GPL-2.0-or-later and LGPL-2.0-or-later | gst-editing-services-devel (fedora) | [link](http://cgit.freedesktop.org/gstreamer/gst-editing-services/) |
| `GExiv2-0.10` | GPL-2.0-or-later | libgexiv2_0.14-devel (fedora) | [link](https://wiki.gnome.org/Projects/gexiv2) |
| `GExiv2-0.16` | GPL-2.0-or-later | libgexiv2-devel (fedora) | [link](https://wiki.gnome.org/Projects/gexiv2) |
| `GIRepository-2.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `GIRepository-3.0` | LGPL-2.1-or-later | glib2-devel (fedora) | [link](https://www.gtk.org) |
| `GL-1.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `GLib-2.0` | LGPL-2.1-or-later | glib2-devel (fedora) | [link](https://www.gtk.org) |
| `GLibUnix-2.0` | LGPL-2.1-or-later | glib2-devel (fedora) | [link](https://www.gtk.org) |
| `GLibWin32-2.0` | LGPL-2.1-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/glib.git) |
| `GMenu-3.0` | LGPL-2.0-or-later | gnome-menus-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gnome-menus) |
| `GMime-2.6` | LicenseRef-Callaway-LGPLv2+ AND GPL-2.0-or-later | gmime-devel (fedora) | [link](http://spruce.sourceforge.net/gmime/) |
| `GMime-3.0` | LGPL-2.1-or-later | gmime30-devel (fedora) | [link](https://github.com/jstedfast/gmime) |
| `GModule-2.0` | LGPL-2.1-or-later | glib2-devel (fedora) | [link](https://www.gtk.org) |
| `GObject-2.0` | LGPL-2.1-or-later | glib2-devel (fedora) | [link](https://www.gtk.org) |
| `GPaste-2` | BSD-2-Clause | gpaste-devel (fedora) | [link](https://github.com/Keruspe/GPaste/) |
| `GPasteGtk-4` | BSD-2-Clause | gpaste-devel (fedora) | [link](https://github.com/Keruspe/GPaste/) |
| `GPlugin-1.0` | LGPL-2.0-or-later | gplugin-devel (fedora) | [link](https://keep.imfreedom.org/gplugin/gplugin) |
| `GPluginGtk4-1.0` | LGPL-2.0-or-later | gplugin-gtk4-devel (fedora) | [link](https://keep.imfreedom.org/gplugin/gplugin) |
| `GSSDP-1.6` | LGPL-2.1-or-later AND CC0-1.0 | gssdp-devel (fedora) | [link](http://www.gupnp.org/) |
| `GSound-1.0` | LGPL-2.1-or-later | gsound-devel (fedora) | [link](https://wiki.gnome.org/Projects/GSound) |
| `GTop-2.0` | GPL-2.0-or-later | libgtop2-devel (fedora) | [link](https://download.gnome.org/sources/libgtop) |
| `GUPnP-1.6` | LGPL-2.1-or-later | gupnp-devel (fedora) | [link](https://www.gupnp.org/) |
| `GUPnPAV-1.0` | LGPL-2.1-or-later AND CC0-1.0 | gupnp-av-devel (fedora) | [link](http://www.gupnp.org/) |
| `GUPnPDLNA-2.0` | LGPL-2.0-or-later | gupnp-dlna-devel (fedora) | [link](http://www.gupnp.org/) |
| `GUPnPDLNAGst-2.0` | LGPL-2.0-or-later | gupnp-dlna-devel (fedora) | [link](http://www.gupnp.org/) |
| `GUPnPIgd-1.6` | LGPL-2.1-or-later | gupnp-igd-devel (fedora) | [link](https://wiki.gnome.org/Projects/GUPnP) |
| `GUdev-1.0` | LGPL-2.1-or-later | libgudev-devel (fedora) | [link](https://wiki.gnome.org/Projects/libgudev) |
| `GUsb-1.0` | LGPL-2.1-or-later | libgusb-devel (fedora) | [link](https://github.com/hughsie/libgusb) |
| `GVnc-1.0` | LGPL-2.1-or-later | gvnc-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gtk-vnc) |
| `GVncPulse-1.0` | LGPL-2.1-or-later | gvncpulse-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gtk-vnc) |
| `GWeather-4.0` | GPL-2.0-or-later AND BSD-3-Clause | libgweather-devel (fedora) | [link](https://wiki.gnome.org/Projects/LibGWeather) |
| `GXPS-0.1` | LGPL-2.1-or-later | libgxps-devel (fedora) | [link](https://wiki.gnome.org/Projects/libgxps) |
| `Gamerzilla-0.1` | zlib | gamerzillagobj-devel (fedora) | [link](https://github.com/dulsi/gamerzillagobj) |
| `Garcon-1.0` | LicenseRef-Callaway-LGPLv2+ AND LicenseRef-Callaway-GFDL | garcon (fedora) | [link](http://xfce.org/) |
| `GarconGtk-1.0` | LicenseRef-Callaway-LGPLv2+ AND LicenseRef-Callaway-GFDL | garcon (fedora) | [link](http://xfce.org/) |
| `Gc-1.0` | BSD-3-Clause AND GPL-2.0-or-later | gnome-characters (fedora) | [link](https://wiki.gnome.org/Design/Apps/CharacterMap) |
| `Gck-1` | LGPL-2.1-or-later AND LicenseRef-Fedora-Public-Domain AND FSFULLRWD AND (LGPL-3.0-or-later OR CC-BY-SA-3.0) AND (MPL-1.1 OR GPL-2.0-or-later OR LGPL-2.1-or-later) AND GCR-docs | gcr3-devel (fedora) | [link](https://wiki.gnome.org/Projects/CryptoGlue) |
| `Gck-2` | LGPL-2.1-or-later AND FSFULLRWD AND (LGPL-3.0-or-later OR CC-BY-SA-3.0) AND (MPL-1.1 OR GPL-2.0-or-later OR LGPL-2.1-or-later) AND GCR-docs | gcr-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gcr) |
| `Gcr-3` | LGPL-2.1-or-later AND LicenseRef-Fedora-Public-Domain AND FSFULLRWD AND (LGPL-3.0-or-later OR CC-BY-SA-3.0) AND (MPL-1.1 OR GPL-2.0-or-later OR LGPL-2.1-or-later) AND GCR-docs | gcr3-devel (fedora) | [link](https://wiki.gnome.org/Projects/CryptoGlue) |
| `Gcr-4` | LGPL-2.1-or-later AND FSFULLRWD AND (LGPL-3.0-or-later OR CC-BY-SA-3.0) AND (MPL-1.1 OR GPL-2.0-or-later OR LGPL-2.1-or-later) AND GCR-docs | gcr-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gcr) |
| `GcrUi-3` | LGPL-2.1-or-later AND LicenseRef-Fedora-Public-Domain AND FSFULLRWD AND (LGPL-3.0-or-later OR CC-BY-SA-3.0) AND (MPL-1.1 OR GPL-2.0-or-later OR LGPL-2.1-or-later) AND GCR-docs | gcr3-devel (fedora) | [link](https://wiki.gnome.org/Projects/CryptoGlue) |
| `Gda-5.0` | LGPL-2.1-or-later | libgda5-devel (fedora) | [link](http://www.gnome-db.org/) |
| `Gda-6.0` | LGPL-2.0-or-later | libgda-devel (fedora) | [link](http://www.gnome-db.org/) |
| `Gdaui-5.0` | LGPL-2.1-or-later | libgda5-ui-devel (fedora) | [link](http://www.gnome-db.org/) |
| `Gdaui-6.0` | LGPL-2.0-or-later | libgda-ui-devel (fedora) | [link](http://www.gnome-db.org/) |
| `Gdk-2.0` | LicenseRef-Callaway-LGPLv2+ | gtk2-devel (fedora) | [link](http://www.gtk.org) |
| `Gdk-3.0` | LGPL-2.0-or-later | gtk3-devel (fedora) | [link](https://gtk.org) |
| `Gdk-4.0` | LGPL-2.0-or-later AND LGPL-2.1-or-later AND Apache-2.0 AND CC0-1.0 AND MIT AND MIT-open-group AND HPND-sell-variant AND GPL-2.0-or-later AND GPL-3.0-or-later AND OFL-1.1 | gtk4-devel (fedora) | [link](https://www.gtk.org) |
| `GdkMacos-4.0` | LGPL-2.1-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gtk.git) |
| `GdkPixbuf-2.0` | LGPL-2.1-or-later | gdk-pixbuf2-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gdk-pixbuf) |
| `GdkPixdata-2.0` | LGPL-2.1-or-later | gdk-pixbuf2-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gdk-pixbuf) |
| `GdkWayland-4.0` | LGPL-2.0-or-later AND LGPL-2.1-or-later AND Apache-2.0 AND CC0-1.0 AND MIT AND MIT-open-group AND HPND-sell-variant AND GPL-2.0-or-later AND GPL-3.0-or-later AND OFL-1.1 | gtk4-devel (fedora) | [link](https://www.gtk.org) |
| `GdkWin32-4.0` | LGPL-2.1-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gtk.git) |
| `GdkX11-2.0` | LicenseRef-Callaway-LGPLv2+ | gtk2-devel (fedora) | [link](http://www.gtk.org) |
| `GdkX11-3.0` | LGPL-2.0-or-later | gtk3-devel (fedora) | [link](https://gtk.org) |
| `GdkX11-4.0` | LGPL-2.0-or-later AND LGPL-2.1-or-later AND Apache-2.0 AND CC0-1.0 AND MIT AND MIT-open-group AND HPND-sell-variant AND GPL-2.0-or-later AND GPL-3.0-or-later AND OFL-1.1 | gtk4-devel (fedora) | [link](https://www.gtk.org) |
| `Gdl-3` | LGPL-2.1-or-later | libgdl-devel (fedora) | [link](https://gitlab.gnome.org/Archive/gdl) |
| `Gdm-1.0` | GPL-2.0-or-later | gdm-devel (fedora) | [link](https://wiki.gnome.org/Projects/GDM) |
| `Gedit-3.0` | GPL-3.0-or-later AND LGPL-3.0-or-later | gedit (fedora) | [link](https://gedit-text-editor.org/) |
| `Gee-0.8` | LGPL-2.1-or-later | libgee-devel (fedora) | [link](https://wiki.gnome.org/Projects/Libgee) |
| `Gegl-0.4` | GPL-3.0-or-later AND LGPL-3.0-or-later | gegl04-devel (fedora) | [link](https://www.gegl.org/) |
| `Geoclue-2.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND GFDL-1.1-or-later | geoclue2-devel (fedora) | [link](http://www.freedesktop.org/wiki/Software/GeoClue/) |
| `GeocodeGlib-2.0` | LGPL-2.0-or-later AND BSD-3-Clause | geocode-glib-devel (fedora) | [link](http://www.gnome.org/) |
| `Gepub-0.7` | LGPL-2.1-or-later | libgepub-devel (fedora) | [link](https://git.gnome.org/browse/libgepub) |
| `Gfls-1` | LGPL-3.0-or-later | libgedit-gfls-devel (fedora) | [link](https://gedit-text-editor.org/) |
| `Ggit-1.0` | LGPL-2.1-or-later | libgit2-glib-devel (fedora) | [link](https://wiki.gnome.org/Projects/Libgit2-glib) |
| `Gimp-3.0` | LGPL-3.0-or-later | gimp-devel (fedora) | [link](https://www.gimp.org) |
| `GimpUi-3.0` | LGPL-3.0-or-later | gimp-devel (fedora) | [link](https://www.gimp.org) |
| `Gio-2.0` | LGPL-2.1-or-later | glib2-devel (fedora) | [link](https://www.gtk.org) |
| `GioUnix-2.0` | LGPL-2.1-or-later | glib2-devel (fedora) | [link](https://www.gtk.org) |
| `GioWin32-2.0` | LGPL-2.1-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/glib.git) |
| `Gitg-1.0` | GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND MIT | gitg-devel (fedora) | [link](https://wiki.gnome.org/Apps/Gitg) |
| `GitgExt-1.0` | GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND MIT | gitg-devel (fedora) | [link](https://wiki.gnome.org/Apps/Gitg) |
| `Gkbd-3.0` | LGPL-2.0-or-later | libgnomekbd-devel (fedora) | [link](http://gswitchit.sourceforge.net) |
| `Gladeui-2.0` | GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+ | glade-devel (fedora) | [link](https://glade.gnome.org/) |
| `Gly-2` | (MPL-2.0 OR LGPL-2.1-or-later) AND Apache-2.0 WITH LLVM-exception AND BSD-3-Clause AND CC0-1.0 AND GPL-3.0-or-later AND IJG AND ISC AND MIT AND Unicode-3.0 AND Unicode-DFS-2016 AND (0BSD OR MIT OR Apache-2.0) AND (Apache-2.0 OR MIT) AND (Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT) AND (BSD-2-Clause OR Apache-2.0 OR MIT) AND (BSD-3-Clause OR Apache-2.0) AND (MIT OR Apache-2.0 OR Zlib) AND (Unlicense OR MIT) | glycin-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/glycin) |
| `GlyGtk4-2` | (MPL-2.0 OR LGPL-2.1-or-later) AND Apache-2.0 WITH LLVM-exception AND BSD-3-Clause AND CC0-1.0 AND GPL-3.0-or-later AND IJG AND ISC AND MIT AND Unicode-3.0 AND Unicode-DFS-2016 AND (0BSD OR MIT OR Apache-2.0) AND (Apache-2.0 OR MIT) AND (Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT) AND (BSD-2-Clause OR Apache-2.0 OR MIT) AND (BSD-3-Clause OR Apache-2.0) AND (MIT OR Apache-2.0 OR Zlib) AND (Unlicense OR MIT) | glycin-gtk4-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/glycin) |
| `Gm-0` | LGPL-2.1-or-later AND GPL-3.0-or-later | gmobile-devel (fedora) | [link](https://gitlab.gnome.org/World/Phosh/gmobile) |
| `GnomeAutoar-0.1` | LGPL-2.1-or-later | gnome-autoar-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gnome-autoar) |
| `GnomeAutoarGtk-0.1` | LGPL-2.1-or-later | gnome-autoar-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gnome-autoar) |
| `GnomeBG-4.0` | LGPL-2.0-or-later | gnome-desktop4-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gnome-desktop) |
| `GnomeBluetooth-1.0` | LGPL-2.0-or-later AND LGPL-2.1-or-later AND GPL-2.0-or-later | gnome-bluetooth3.34-libs-devel (fedora) | [link](https://wiki.gnome.org/Projects/GnomeBluetooth) |
| `GnomeBluetooth-3.0` | LGPL-2.1-or-later | gnome-bluetooth-libs-devel (fedora) | [link](https://wiki.gnome.org/Projects/GnomeBluetooth) |
| `GnomeCmd-1.0` | GPL-3.0-or-later AND GFDL-1.3-or-later AND CC0-1.0 | gnome-commander (fedora) | [link](https://gnome.pages.gitlab.gnome.org/gnome-commander/) |
| `GnomeDesktop-3.0` | LGPL-2.0-or-later | gnome-desktop3-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gnome-desktop) |
| `GnomeDesktop-4.0` | LGPL-2.0-or-later | gnome-desktop4-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gnome-desktop) |
| `GnomeKeyring-1.0` | LicenseRef-Callaway-LGPLv2+ | libgnome-keyring-devel (fedora) | [link](http://live.gnome.org/GnomeKeyring) |
| `GnomeMaps-1.0` | GPL-2.0-or-later AND CC0-1.0 | gnome-maps (fedora) | [link](https://wiki.gnome.org/Apps/Maps) |
| `GnomeQR-4.0` | LGPL-2.0-or-later | gnome-desktop4-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gnome-desktop) |
| `GnomeQRGtk-4.0` | LGPL-2.0-or-later | gnome-desktop4-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gnome-desktop) |
| `GoVirt-1.0` | LGPL-2.1-or-later | libgovirt-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libgovirt) |
| `Goa-1.0` | LGPL-2.0-or-later AND CC-BY-SA-4.0 | gnome-online-accounts-devel (fedora) | [link](https://wiki.gnome.org/Projects/GnomeOnlineAccounts) |
| `Gom-1.0` | LGPL-2.1-or-later AND GFDL-1.1-or-later | gom-devel (fedora) | [link](https://wiki.gnome.org/Projects/Gom) |
| `GooCanvas-2.0` | LGPL-2.0-or-later | goocanvas2-devel (fedora) | [link](https://wiki.gnome.org/Projects(2f)GooCanvas.html) |
| `Gpiodglib-1.0` | LGPL-2.1-or-later | libgpiod-devel (fedora) | [link](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/) |
| `Granite-1.0` | LGPL-3.0-or-later | granite-devel (fedora) | [link](https://github.com/elementary/granite) |
| `Graphene-1.0` | MIT | graphene-devel (fedora) | [link](https://github.com/ebassi/graphene) |
| `Grl-0.3` | LGPL-2.1-or-later | grilo-devel (fedora) | [link](https://wiki.gnome.org/Projects/Grilo) |
| `GrlNet-0.3` | LGPL-2.1-or-later | grilo-devel (fedora) | [link](https://wiki.gnome.org/Projects/Grilo) |
| `GrlPls-0.3` | LGPL-2.1-or-later | grilo-devel (fedora) | [link](https://wiki.gnome.org/Projects/Grilo) |
| `Grss-0.7` | LGPL-3.0-or-later | libgrss-devel (fedora) | [link](https://wiki.gnome.org/Projects/Libgrss) |
| `Gsf-1` | LGPL-2.1-only | libgsf-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libgsf/) |
| `Gsk-4.0` | LGPL-2.0-or-later AND LGPL-2.1-or-later AND Apache-2.0 AND CC0-1.0 AND MIT AND MIT-open-group AND HPND-sell-variant AND GPL-2.0-or-later AND GPL-3.0-or-later AND OFL-1.1 | gtk4-devel (fedora) | [link](https://www.gtk.org) |
| `Gspell-1` | LGPL-2.1-or-later | gspell-devel (fedora) | [link](https://wiki.gnome.org/Projects/gspell) |
| `Gst-1.0` | LGPL-2.1-or-later | gstreamer1-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstAllocators-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstAnalytics-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstApp-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstAudio-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstBadAudio-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstBase-1.0` | LGPL-2.1-or-later | gstreamer1-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstCheck-1.0` | LGPL-2.1-or-later | gstreamer1-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstCodecParsers-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstCodecs-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstController-1.0` | LGPL-2.1-or-later | gstreamer1-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstCuda-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstDxva-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstGL-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstGLEGL-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstGLWayland-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstGLX11-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstHip-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstHipGL-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstInsertBin-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstMpegts-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstMse-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstNet-1.0` | LGPL-2.1-or-later | gstreamer1-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstPbutils-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstPlay-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstPlayer-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstRtp-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstRtsp-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstRtspServer-1.0` | LGPL-2.0-or-later AND LGPL-2.1-only | gstreamer1-rtsp-server-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstSdp-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstTag-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstTranscoder-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstVa-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstValidate-1.0` | LGPL-2.0-or-later | gst-devtools-devel (fedora) | [link](https://gstreamer.freedesktop.org/src/gst-devtools) |
| `GstVideo-1.0` | LGPL-2.1-or-later | gstreamer1-plugins-base-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstVulkan-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstVulkanWayland-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `GstWebRTC-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later AND (MIT OR LGPL-2.1-or-later) AND MPL-1.1 AND BSD-2-Clause AND BSD-3-Clause AND BSD-2-Clause-Views AND (BSD-2-Clause AND DOC) AND MIT-Festival AND (LGPL-2.0-or-later AND LicenseRef-Fedora-Public-Domain) AND (MPL-1.1 OR LGPL-2.0-or-later OR MIT) AND BSD-3-Clause WITH AdditionRef-Dart AND MIT AND GPL-2.0-only WITH Linux-syscall-note | gstreamer1-plugins-bad-free-devel (fedora) | [link](http://gstreamer.freedesktop.org/) |
| `Gtd-1.0` | GPL-3.0-or-later | gnome-todo-devel (fedora) | [link](https://gitlab.gnome.org/World/Endeavour/) |
| `Gtk-2.0` | LicenseRef-Callaway-LGPLv2+ | gtk2-devel (fedora) | [link](http://www.gtk.org) |
| `Gtk-3.0` | LGPL-2.0-or-later | gtk3-devel (fedora) | [link](https://gtk.org) |
| `Gtk-4.0` | LGPL-2.0-or-later AND LGPL-2.1-or-later AND Apache-2.0 AND CC0-1.0 AND MIT AND MIT-open-group AND HPND-sell-variant AND GPL-2.0-or-later AND GPL-3.0-or-later AND OFL-1.1 | gtk4-devel (fedora) | [link](https://www.gtk.org) |
| `Gtk4LayerShell-1.0` | MIT | gtk4-layer-shell-devel (fedora) | [link](https://github.com/wmww/gtk4-layer-shell) |
| `Gtk4SessionLock-1.0` | MIT | gtk4-layer-shell-devel (fedora) | [link](https://github.com/wmww/gtk4-layer-shell) |
| `GtkChamplain-0.12` | LicenseRef-Callaway-LGPLv2+ | libchamplain-devel (fedora) | [link](https://wiki.gnome.org/Projects/libchamplain) |
| `GtkClutter-1.0` | LicenseRef-Callaway-LGPLv2+ | clutter-gtk-devel (fedora) | [link](http://www.clutter-project.org) |
| `GtkLayerShell-0.1` | LGPL-3.0-or-later and MIT | gtk-layer-shell-devel (fedora) | [link](https://github.com/wmww/gtk-layer-shell) |
| `GtkSessionLock-0.1` | GPL-3.0-or-later AND MIT | gtk-session-lock-devel (fedora) | [link](https://github.com/Cu3PO42/gtk-session-lock) |
| `GtkSource-2.0` | LGPL-2.0-or-later AND GPL-2.0-or-later | gtksourceview2-devel (fedora) | [link](http://gtksourceview.sourceforge.net/) |
| `GtkSource-3.0` | LicenseRef-Callaway-LGPLv2+ | gtksourceview3-devel (fedora) | [link](https://wiki.gnome.org/Projects/GtkSourceView) |
| `GtkSource-300` | LGPL-2.1-or-later | libgedit-gtksourceview-devel (fedora) | [link](https://gedit-text-editor.org/) |
| `GtkSource-4` | LicenseRef-Callaway-LGPLv2+ | gtksourceview4-devel (fedora) | [link](https://wiki.gnome.org/Projects/GtkSourceView) |
| `GtkSource-5` | LGPL-2.1-or-later | gtksourceview5-devel (fedora) | [link](https://wiki.gnome.org/Projects/GtkSourceView) |
| `GtkSpell-3.0` | GPL-2.0-or-later | gtkspell3-devel (fedora) | [link](https://gtkspell.sourceforge.net/) |
| `GtkVnc-2.0` | LGPL-2.1-or-later | gtk-vnc2-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/gtk-vnc) |
| `Gucharmap-2.90` | GPL-3.0-or-later AND GFDL-1.3-or-later AND Unicode-DFS-2016 | gucharmap-devel (fedora) | [link](https://wiki.gnome.org/Apps/Gucharmap) |
| `Gvc-1.0` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Handy-1` | LGPL-2.1-or-later | libhandy-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libhandy) |
| `HarfBuzz-0.0` | MIT-Modern-Variant | harfbuzz-devel (fedora) | [link](https://github.com/harfbuzz/harfbuzz/) |
| `Hex-4` | GPL-2.0-or-later AND GFDL-1.1-no-invariants-or-later AND CC-BY-SA-4.0 | ghex-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/ghex) |
| `IAnjuta-3.0` | GPL-2.0-or-later | anjuta-devel (fedora) | [link](http://www.anjuta.org/) |
| `IBus-1.0` | LGPL-2.1-or-later | ibus-devel (fedora) | [link](https://github.com/ibus/ibus/wiki) |
| `ICal-3.0` | LGPL-2.1-only OR MPL-2.0 | libical-devel (fedora) | [link](https://libical.github.io/libical/) |
| `ICalGLib-3.0` | LGPL-2.1-only OR MPL-2.0 | libical-glib-devel (fedora) | [link](https://libical.github.io/libical/) |
| `IMSettings-1.8` | LGPL-2.0-or-later | imsettings-devel (fedora) | [link](https://gitlab.com/tagoh/imsettings/) |
| `Ide-50` | GPL-3.0-or-later AND GPL-2.0-or-later AND LGPL-3.0-or-later AND LGPL-2.1-or-later AND LGPL-2.0-or-later AND MIT AND CC0-1.0 AND CC-BY-3.0 | gnome-builder-devel (fedora) | [link](https://wiki.gnome.org/Apps/Builder) |
| `InputPad-1.1` | LGPL-2.1-or-later | input-pad-devel (fedora) | [link](https://github.com/fujiwarat/input-pad/wiki) |
| `Ipuz-1.0` | (LGPL-2.1-or-later OR MIT) AND (Apache-2.0 OR MIT) AND (BSD-2-Clause OR Apache-2.0 OR MIT) AND MIT AND (MIT OR Apache-2.0) AND (Unlicense OR MIT) | libipuz-devel (fedora) | [link](https://gitlab.gnome.org/jrb/libipuz) |
| `JavaScriptCore-4.1` | LGPL-2.1-only AND BSD-2-Clause AND BSD-3-Clause AND ISC AND bzip2-1.0.6 AND NCSA AND MIT AND GPL-2.0-only AND MPL-1.1 AND SunPro AND Apache-2.0 AND GPL-3.0-or-later WITH Bison-exception-2.2 AND MPL-2.0 AND OFL-1.1 AND (AFL-2.0 OR GPL-2.0-or-later) AND BSD-Source-Code AND BSD-2-Clause-Views AND LGPL-2.1-or-later AND (NCSA OR MIT) AND Apache-2.0 WITH LLVM-exception AND BSL-1.0 | javascriptcoregtk4.1-devel (fedora) | [link](https://www.webkitgtk.org/) |
| `JavaScriptCore-6.0` | LGPL-2.1-only AND BSD-2-Clause AND BSD-3-Clause AND ISC AND bzip2-1.0.6 AND NCSA AND MIT AND GPL-2.0-only AND MPL-1.1 AND SunPro AND Apache-2.0 AND GPL-3.0-or-later WITH Bison-exception-2.2 AND MPL-2.0 AND OFL-1.1 AND (AFL-2.0 OR GPL-2.0-or-later) AND BSD-Source-Code AND BSD-2-Clause-Views AND LGPL-2.1-or-later AND (NCSA OR MIT) AND Apache-2.0 WITH LLVM-exception AND BSL-1.0 | javascriptcoregtk6.0-devel (fedora) | [link](https://www.webkitgtk.org/) |
| `Jcat-1.0` | LGPL-2.1-or-later | libjcat-devel (fedora) | [link](https://github.com/hughsie/libjcat) |
| `Json-1.0` | LGPL-2.1-or-later | json-glib-devel (fedora) | [link](https://wiki.gnome.org/Projects/JsonGlib) |
| `Jsonrpc-1.0` | LGPL-2.1-or-later | jsonrpc-glib-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/jsonrpc-glib) |
| `Keybinder-0.0` | MIT | keybinder (fedora) | [link](https://github.com/engla/keybinder) |
| `Keybinder-3.0` | MIT | keybinder3-devel (fedora) | [link](https://github.com/kupferlauncher/keybinder) |
| `Kkc-1.0` | GPL-3.0-or-later | libkkc-devel (fedora) | [link](https://github.com/ueno/libkkc) |
| `LangTag-0.6` | LGPL-3.0-or-later OR MPL-2.0 | liblangtag-devel (fedora) | [link](https://bitbucket.org/tagoh/liblangtag/) |
| `Lasem-0.6` | LGPL-2.1-or-later | lasem-devel (fedora) | [link](https://lasemproject.github.io/lasem/) |
| `Lfb-0.0` | GPL-3.0-or-later | feedbackd-devel (fedora) | [link](https://gitlab.freedesktop.org/feedbackd/feedbackd) |
| `Libinsane-1.0` | LGPL-3.0-or-later | libinsane-gobject-devel (fedora) | [link](https://doc.openpaper.work/libinsane/latest/) |
| `Libmsi-1.0` | LGPL-2.1-or-later | libmsi1-devel (fedora) | [link](http://ftp.gnome.org/pub/GNOME/sources/msitools) |
| `Libosinfo-1.0` | LGPL-2.1-or-later | libosinfo-devel (fedora) | [link](https://libosinfo.org/) |
| `Libproxy-1.0` | LGPL-2.1-or-later | libproxy-devel (fedora) | [link](https://libproxy.github.io/libproxy/) |
| `LibvirtGConfig-1.0` | LGPL-2.1-or-later | libvirt-gconfig-devel (fedora) | [link](https://libvirt.org/) |
| `LibvirtGLib-1.0` | LGPL-2.1-or-later | libvirt-glib-devel (fedora) | [link](https://libvirt.org/) |
| `LibvirtGObject-1.0` | LGPL-2.1-or-later | libvirt-gobject-devel (fedora) | [link](https://libvirt.org/) |
| `LibvirtSandbox-1.0` | LicenseRef-Callaway-LGPLv2+ | libvirt-sandbox-devel (fedora) | [link](http://libvirt.org/) |
| `Libxfce4panel-2.0` | GPL-2.0-or-later AND LGPL-2.0-or-later | xfce4-panel-devel (fedora) | [link](http://www.xfce.org/) |
| `Libxfce4ui-2.0` | LicenseRef-Callaway-LGPLv2+ | libxfce4ui (fedora) | [link](http://xfce.org/) |
| `Libxfce4util-1.0` | LicenseRef-Callaway-LGPLv2+ | libxfce4util (fedora) | [link](http://www.xfce.org/) |
| `Libxfce4windowing-0.0` | LGPL-2.1-or-later | libxfce4windowing-devel (fedora) | [link](https://docs.xfce.org/xfce/libxfce4windowing/start) |
| `Libxfce4windowingui-0.0` | LGPL-2.1-or-later | libxfce4windowing-devel (fedora) | [link](https://docs.xfce.org/xfce/libxfce4windowing/start) |
| `Liferea-3.0` | GPL-2.0-or-later | liferea (fedora) | [link](https://lzone.de/liferea/) |
| `LightDM-1` | (LGPL-2.0-only OR LGPL-3.0-only) AND GPL-3.0-or-later | lightdm-gobject-devel (fedora) | [link](https://www.freedesktop.org/wiki/Software/LightDM/) |
| `MPID-3.0` | GPL-2.0-or-later AND CC0-1.0 AND MIT | rhythmbox-devel (fedora) | [link](https://wiki.gnome.org/Apps/Rhythmbox) |
| `Malcontent-0` | LGPL-2.1-only AND CC-BY-3.0 | malcontent-devel (fedora) | [link](https://gitlab.freedesktop.org/pwithnall/malcontent/) |
| `MalcontentUi-1` | LGPL-2.1-only AND CC-BY-3.0 | malcontent-ui-devel (fedora) | [link](https://gitlab.freedesktop.org/pwithnall/malcontent/) |
| `Manette-0.2` | LGPL-2.1-or-later | libmanette-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libmanette) |
| `Mash-0.2` | LicenseRef-Callaway-LGPLv2+ | libmash-devel (fedora) | [link](http://clutter-project.github.com/mash/) |
| `MateDesktop-2.0` | LicenseRef-Callaway-LGPLv2+ | mate-desktop-devel (fedora) | [link](http://mate-desktop.org) |
| `MateMenu-2.0` | GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+ | mate-menus-devel (fedora) | [link](http://mate-desktop.org) |
| `MatePanelApplet-4.0` | GPL-2.0-or-later | mate-panel-devel (fedora) | [link](http://mate-desktop.org) |
| `Matekbd-1.0` | LicenseRef-Callaway-LGPLv2+ | libmatekbd (fedora) | [link](http://mate-desktop.org) |
| `Mbim-1.0` | LGPL-2.1-or-later | libmbim-devel (fedora) | [link](https://gitlab.freedesktop.org/mobile-broadband/libmbim/) |
| `MediaArt-2.0` | LGPL-2.1-or-later | libmediaart-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libmediaart) |
| `Meta-10` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-11` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-12` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-13` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-14` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-15` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-16` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-17` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-18` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-3` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-4` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-5` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-51` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-6` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-7` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-8` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Meta-9` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Mks-1` | LGPL-2.1-or-later | libmks-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libmks) |
| `ModemManager-1.0` | LGPL-2.1-or-later | ModemManager-glib-devel (fedora) | [link](https://gitlab.freedesktop.org/mobile-broadband/ModemManager) |
| `Modulemd-2.0` | MIT | libmodulemd-devel (fedora) | [link](https://github.com/fedora-modularity/libmodulemd) |
| `Msg-1` | LGPL-3.0-or-later | msgraph-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/msgraph) |
| `Mtk-13` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Mtk-14` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Mtk-15` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Mtk-16` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Mtk-17` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Mtk-18` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `Mtk-51` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/mutter.git) |
| `MyPaint-1.6` | ISC | libmypaint-devel (fedora) | [link](https://github.com/mypaint/libmypaint) |
| `NM-1.0` | LGPL-2.1-or-later | NetworkManager-libnm-devel (fedora) | [link](https://networkmanager.dev/) |
| `NMA-1.0` | GPL-2.0-or-later AND LGPL-2.1-or-later | libnma-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libnma/) |
| `NMA4-1.0` | GPL-2.0-or-later AND LGPL-2.1-or-later | libnma-gtk4-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libnma/) |
| `Nautilus-4.1` | LGPL-2.1-or-later | nautilus-devel (fedora) | [link](https://apps.gnome.org/Nautilus/) |
| `Nemo-3.0` | LGPL-2.0-or-later | nemo-devel (fedora) | [link](https://github.com/linuxmint/nemo) |
| `NemoPreview-1.0` | GPL-2.0-or-later | nemo-preview (fedora) | [link](https://github.com/linuxmint/nemo-extensions) |
| `Nice-0.1` | LGPL-2.1-or-later OR MPL-1.1 | libnice-devel (fedora) | [link](https://nice.freedesktop.org/) |
| `Notify-0.7` | LGPL-2.1-or-later | libnotify-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libnotify) |
| `OSTree-1.0` | LGPL-2.0-or-later | ostree-devel (fedora) | [link](https://ostreedev.github.io/ostree/) |
| `OsmGpsMap-1.0` | GPL-2.0-or-later | osm-gps-map-devel (fedora) | [link](https://github.com/nzjrs/osm-gps-map/) |
| `PackageKitGlib-1.0` | GPL-2.0-or-later AND LGPL-2.1-or-later AND FSFAP | PackageKit-glib-devel (fedora) | [link](http://www.freedesktop.org/software/PackageKit/) |
| `Panel-1` | LGPL-3.0-or-later | libpanel-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libpanel) |
| `Pango-1.0` | LGPL-2.0-or-later | pango-devel (fedora) | [link](https://pango.gnome.org/) |
| `PangoCairo-1.0` | LGPL-2.0-or-later | pango-devel (fedora) | [link](https://pango.gnome.org/) |
| `PangoFT2-1.0` | LGPL-2.0-or-later | pango-devel (fedora) | [link](https://pango.gnome.org/) |
| `PangoFc-1.0` | LGPL-2.0-or-later | pango-devel (fedora) | [link](https://pango.gnome.org/) |
| `PangoOT-1.0` | LGPL-2.0-or-later | pango-devel (fedora) | [link](https://pango.gnome.org/) |
| `PangoXft-1.0` | LGPL-2.0-or-later | pango-devel (fedora) | [link](https://pango.gnome.org/) |
| `PapersDocument-4.0` | GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND MIT AND libtiff AND Apache-2.0 AND BSD-2-Clause AND BSD-3-Clause AND ISC AND LicenseRef-BSD-2-Clause-WITH-AdditionRef-AOMPL-1.0 AND Unicode-3.0 AND Unicode-DFS-2016 AND Zlib AND (0BSD OR MIT OR Apache-2.0) AND (Apache-2.0 OR MIT) AND (Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT) AND (BSD-2-Clause OR Apache-2.0 OR MIT) AND (BSD-2-Clause AND ISC) AND (BSD-3-Clause OR Apache-2.0) AND (MIT OR Apache-2.0 OR Zlib) AND (Unlicense OR MIT) | papers-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/papers) |
| `PapersView-4.0` | GPL-2.0-or-later AND GPL-3.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND MIT AND libtiff AND Apache-2.0 AND BSD-2-Clause AND BSD-3-Clause AND ISC AND LicenseRef-BSD-2-Clause-WITH-AdditionRef-AOMPL-1.0 AND Unicode-3.0 AND Unicode-DFS-2016 AND Zlib AND (0BSD OR MIT OR Apache-2.0) AND (Apache-2.0 OR MIT) AND (Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT) AND (BSD-2-Clause OR Apache-2.0 OR MIT) AND (BSD-2-Clause AND ISC) AND (BSD-3-Clause OR Apache-2.0) AND (MIT OR Apache-2.0 OR Zlib) AND (Unlicense OR MIT) | papers-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/papers) |
| `Parquet-23.0` | Apache-2.0 | parquet-glib-devel (fedora) | [link](https://arrow.apache.org/) |
| `Passim-1.0` | LGPL-2.1-or-later | passim-devel (fedora) | [link](https://github.com/hughsie/passim) |
| `Peas-1.0` | LGPL-2.1-or-later | libpeas1-devel (fedora) | [link](https://wiki.gnome.org/Projects/Libpeas) |
| `Peas-2` | LGPL-2.1-or-later | libpeas-devel (fedora) | [link](https://wiki.gnome.org/Projects/Libpeas) |
| `PeasGtk-1.0` | LGPL-2.1-or-later | libpeas1-devel (fedora) | [link](https://wiki.gnome.org/Projects/Libpeas) |
| `Phosh-0` | GPL-3.0-or-later | phosh-devel (fedora) | [link](https://gitlab.gnome.org/World/Phosh/phosh) |
| `Playerctl-2.0` | LGPL-3.0-or-later | playerctl-devel (fedora) | [link](https://github.com/acrisci/playerctl) |
| `Pluma-1.0` | GPL-2.0-or-later AND LicenseRef-Callaway-LGPLv2+ | pluma-devel (fedora) | [link](http://mate-desktop.org) |
| `Pms-1.0` | LGPL-2.1-or-later | libphosh-mobile-settings-devel (fedora) | [link](https://gitlab.gnome.org/World/Phosh/phosh-mobile-settings) |
| `Polkit-1.0` | LGPL-2.0-or-later | polkit-devel (fedora) | [link](https://github.com/polkit-org/polkit) |
| `PolkitAgent-1.0` | LGPL-2.0-or-later | polkit-devel (fedora) | [link](https://github.com/polkit-org/polkit) |
| `Poppler-0.18` | (GPL-2.0-only OR GPL-3.0-only) AND GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND MIT | poppler-glib-devel (fedora) | [link](https://poppler.freedesktop.org/) |
| `Qmi-1.0` | LGPL-2.1-or-later | libqmi-devel (fedora) | [link](https://gitlab.freedesktop.org/mobile-broadband/libqmi/) |
| `Qrtr-1.0` | LGPL-2.1-or-later | libqrtr-glib-devel (fedora) | [link](https://gitlab.freedesktop.org/mobile-broadband/libqrtr-glib) |
| `RB-3.0` | GPL-2.0-or-later AND CC0-1.0 AND MIT | rhythmbox-devel (fedora) | [link](https://wiki.gnome.org/Apps/Rhythmbox) |
| `Rest-0.7` | LicenseRef-Callaway-LGPLv2 | rest0.7-devel (fedora) | [link](http://www.gnome.org) |
| `Rest-1.0` | LGPL-2.1-only | rest-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/librest) |
| `RestExtras-0.7` | LicenseRef-Callaway-LGPLv2 | rest0.7-devel (fedora) | [link](http://www.gnome.org) |
| `RestExtras-1.0` | LGPL-2.1-only | rest-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/librest) |
| `RpmOstree-1.0` | LGPL-2.0-or-later | rpm-ostree-devel (fedora) | [link](https://github.com/coreos/rpm-ostree) |
| `Rsvg-2.0` | LGPL-2.1-or-later AND Apache-2.0 AND BSD-3-Clause AND MIT AND MPL-2.0 AND Unicode-3.0 AND Unicode-DFS-2016 AND (0BSD OR MIT OR Apache-2.0) AND (Apache-2.0 OR MIT) AND (BSD-3-Clause OR Apache-2.0) AND (MIT OR Apache-2.0 OR Zlib) AND (Unlicense OR MIT) | librsvg2-devel (fedora) | [link](https://wiki.gnome.org/Projects/LibRsvg) |
| `RygelCore-2.8` | LGPL-2.1-or-later AND CC-BY-SA-3.0 | rygel-devel (fedora) | [link](https://wiki.gnome.org/Projects/Rygel) |
| `RygelRenderer-2.8` | LGPL-2.1-or-later AND CC-BY-SA-3.0 | rygel-devel (fedora) | [link](https://wiki.gnome.org/Projects/Rygel) |
| `RygelRendererGst-2.8` | LGPL-2.1-or-later AND CC-BY-SA-3.0 | rygel-devel (fedora) | [link](https://wiki.gnome.org/Projects/Rygel) |
| `RygelServer-2.8` | LGPL-2.1-or-later AND CC-BY-SA-3.0 | rygel-devel (fedora) | [link](https://wiki.gnome.org/Projects/Rygel) |
| `Secret-1` | LGPL-2.1-or-later AND Apache-2.0 AND (GPL-2.0-or-later OR TGPPL-1.0) AND LicenseRef-Fedora-Public-Domain AND GCR-docs | libsecret-devel (fedora) | [link](https://wiki.gnome.org/Projects/Libsecret) |
| `Shell-0.1` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-10` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-11` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-12` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-13` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-14` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-15` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-16` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-17` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-18` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-51` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shell-9` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shew-0` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `Shumate-1.0` | LGPL-2.1-or-later AND LGPL-2.0-or-later | libshumate-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libshumate) |
| `Skk-1.0` | GPL-3.0-or-later | libskk-devel (fedora) | [link](https://github.com/ueno/libskk) |
| `Snapd-2` | LGPL-2.0-only OR LGPL-3.0-only | snapd-glib-devel (fedora) | [link](https://github.com/canonical/snapd-glib) |
| `Soup-2.4` | LGPL-2.0-only | libsoup-devel (fedora) | [link](https://wiki.gnome.org/Projects/libsoup) |
| `Soup-3.0` | LGPL-2.0-or-later AND LGPL-2.1-or-later | libsoup3-devel (fedora) | [link](https://wiki.gnome.org/Projects/libsoup) |
| `SoupGNOME-2.4` | LGPL-2.0-only | libsoup-devel (fedora) | [link](https://wiki.gnome.org/Projects/libsoup) |
| `Spelling-1` | LGPL-2.1-or-later | libspelling-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/libspelling) |
| `SpiceClientGLib-2.0` | LGPL-2.1-or-later AND MIT AND MIT-open-group and BSD-3-Clause | spice-glib-devel (fedora) | [link](https://www.spice-space.org/spice-gtk.html) |
| `SpiceClientGtk-3.0` | LGPL-2.1-or-later AND MIT AND MIT-open-group and BSD-3-Clause | spice-gtk3-devel (fedora) | [link](https://www.spice-space.org/spice-gtk.html) |
| `St-1.0` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-10` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-11` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-12` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-13` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-14` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-15` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-16` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-17` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-18` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-51` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `St-9` | GPL-2.0-or-later | gir-module-metadata | [link](https://gitlab.gnome.org/GNOME/gnome-shell.git) |
| `SugarExt-1.0` | LicenseRef-Callaway-LGPLv2+ | sugar-toolkit-gtk3-devel (fedora) | [link](http://wiki.laptop.org/go/Sugar) |
| `SugarGestures-1.0` | LicenseRef-Callaway-LGPLv2+ | sugar-toolkit-gtk3-devel (fedora) | [link](http://wiki.laptop.org/go/Sugar) |
| `Sushi-1.0` | GPL-2.0-or-later WITH GStreamer-exception-2008 AND CC0-1.0 AND (LGPL-2.0-or-later AND LGPL-2.1-or-later WITH GStreamer-exception-2005) | sushi (fedora) | [link](https://gitlab.gnome.org/GNOME/sushi) |
| `TelepathyGLib-0.12` | LGPL-2.1-or-later | telepathy-glib-devel (fedora) | [link](http://telepathy.freedesktop.org/wiki/FrontPage) |
| `Template-1.0` | LGPL-2.1-or-later | template-glib-devel (fedora) | [link](https://gitlab.gnome.org/GNOME/template-glib/) |
| `Tepl-6` | LGPL-3.0-or-later | libgedit-tepl-devel (fedora) | [link](https://gedit-text-editor.org/) |
| `Thunarx-3.0` | GPL-2.0-or-later | Thunar-devel (fedora) | [link](http://thunar.xfce.org/) |
| `TimezoneMap-1.0` | GPL-3.0-only | libtimezonemap-devel (fedora) | [link](https://launchpad.net/timezonemap) |
| `Totem-1.0` | GPL-2.0-or-later AND (GPL-2.0-or-later WITH GStreamer-exception-2008) AND LGPL-2.0-or-later AND CC0-1.0 | totem-devel (fedora) | [link](https://wiki.gnome.org/Apps/Videos) |
| `TotemPlParser-1.0` | LGPL-2.0-or-later AND (LGPL-2.1-or-later WITH GStreamer-exception-2005) | totem-pl-parser-devel (fedora) | [link](https://wiki.gnome.org/Apps/Videos) |
| `Tracker-3.0` | LGPL-2.1-or-later | tinysparql-devel (fedora) | [link](https://gnome.pages.gitlab.gnome.org/tinysparql/) |
| `Translit-1.0` | GPL-3.0-or-later | libtranslit-devel (fedora) | [link](http://github.com/ueno/libtranslit) |
| `Tsparql-3.0` | LGPL-2.1-or-later | tinysparql-devel (fedora) | [link](https://gnome.pages.gitlab.gnome.org/tinysparql/) |
| `UDisks-2.0` | LGPL-2.0-or-later | libudisks2-devel (fedora) | [link](https://github.com/storaged-project/udisks) |
| `UMockdev-1.0` | LGPL-2.1-or-later | umockdev-devel (fedora) | [link](https://github.com/martinpitt/umockdev) |
| `UPowerGlib-1.0` | GPL-2.0-or-later | upower-devel (fedora) | [link](https://upower.freedesktop.org/) |
| `Uhm-1.0` | LGPL-2.1-or-later | uhttpmock-devel (fedora) | [link](https://gitlab.freedesktop.org/pwithnall/uhttpmock) |
| `Unity-7.0` | GPL-3.0-only | libunity-devel (fedora) | [link](https://launchpad.net/libunity) |
| `UnityExtras-7.0` | GPL-3.0-only | libunity-devel (fedora) | [link](https://launchpad.net/libunity) |
| `Vips-8.0` | LGPL-2.1-or-later | vips-devel (fedora) | [link](https://www.libvips.org/) |
| `Vte-0.0` | LGPL-2.0-or-later | vte-devel (fedora) | [link](http://developer.gnome.org/vte/) |
| `Vte-2.91` | GPL-3.0-or-later AND LGPL-3.0-or-later | vte291-devel (fedora) | [link](https://wiki.gnome.org/Apps/Terminal/VTE) |
| `Vte-3.91` | GPL-3.0-or-later AND LGPL-3.0-or-later | vte291-gtk4-devel (fedora) | [link](https://wiki.gnome.org/Apps/Terminal/VTE) |
| `Vulkan-1.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `WebKit-6.0` | LGPL-2.1-only AND BSD-2-Clause AND BSD-3-Clause AND ISC AND bzip2-1.0.6 AND NCSA AND MIT AND GPL-2.0-only AND MPL-1.1 AND SunPro AND Apache-2.0 AND GPL-3.0-or-later WITH Bison-exception-2.2 AND MPL-2.0 AND OFL-1.1 AND (AFL-2.0 OR GPL-2.0-or-later) AND BSD-Source-Code AND BSD-2-Clause-Views AND LGPL-2.1-or-later AND (NCSA OR MIT) AND Apache-2.0 WITH LLVM-exception AND BSL-1.0 | webkitgtk6.0-devel (fedora) | [link](https://www.webkitgtk.org/) |
| `WebKit2-4.1` | LGPL-2.1-only AND BSD-2-Clause AND BSD-3-Clause AND ISC AND bzip2-1.0.6 AND NCSA AND MIT AND GPL-2.0-only AND MPL-1.1 AND SunPro AND Apache-2.0 AND GPL-3.0-or-later WITH Bison-exception-2.2 AND MPL-2.0 AND OFL-1.1 AND (AFL-2.0 OR GPL-2.0-or-later) AND BSD-Source-Code AND BSD-2-Clause-Views AND LGPL-2.1-or-later AND (NCSA OR MIT) AND Apache-2.0 WITH LLVM-exception AND BSL-1.0 | webkit2gtk4.1-devel (fedora) | [link](https://www.webkitgtk.org/) |
| `WebKit2WebExtension-4.1` | LGPL-2.1-only AND BSD-2-Clause AND BSD-3-Clause AND ISC AND bzip2-1.0.6 AND NCSA AND MIT AND GPL-2.0-only AND MPL-1.1 AND SunPro AND Apache-2.0 AND GPL-3.0-or-later WITH Bison-exception-2.2 AND MPL-2.0 AND OFL-1.1 AND (AFL-2.0 OR GPL-2.0-or-later) AND BSD-Source-Code AND BSD-2-Clause-Views AND LGPL-2.1-or-later AND (NCSA OR MIT) AND Apache-2.0 WITH LLVM-exception AND BSL-1.0 | webkit2gtk4.1-devel (fedora) | [link](https://www.webkitgtk.org/) |
| `WebKitWebExtension-6.0` | LGPL-2.1-or-later | gir-module-metadata | [link](https://webkitgtk.org) |
| `WebKitWebProcessExtension-6.0` | LGPL-2.1-only AND BSD-2-Clause AND BSD-3-Clause AND ISC AND bzip2-1.0.6 AND NCSA AND MIT AND GPL-2.0-only AND MPL-1.1 AND SunPro AND Apache-2.0 AND GPL-3.0-or-later WITH Bison-exception-2.2 AND MPL-2.0 AND OFL-1.1 AND (AFL-2.0 OR GPL-2.0-or-later) AND BSD-Source-Code AND BSD-2-Clause-Views AND LGPL-2.1-or-later AND (NCSA OR MIT) AND Apache-2.0 WITH LLVM-exception AND BSL-1.0 | webkitgtk6.0-devel (fedora) | [link](https://www.webkitgtk.org/) |
| `Wnck-1.0` | LicenseRef-Callaway-LGPLv2+ | libwnck-devel (fedora) | [link](http://download.gnome.org/sources/libwnck/) |
| `Wnck-3.0` | LGPL-2.0-or-later | libwnck3-devel (fedora) | [link](http://download.gnome.org/sources/libwnck/) |
| `Wp-0.5` | MIT | wireplumber-devel (fedora) | [link](https://pipewire.pages.freedesktop.org/wireplumber/) |
| `XApp-1.0` | LGPL-3.0-only | xapps-devel (fedora) | [link](https://github.com/linuxmint/xapps) |
| `Xdp-1.0` | LGPL-3.0-only AND LGPL-2.1-or-later | libportal-devel (fedora) | [link](https://github.com/flatpak/libportal) |
| `XdpGtk3-1.0` | LGPL-3.0-only AND LGPL-2.1-or-later | libportal-gtk3-devel (fedora) | [link](https://github.com/flatpak/libportal) |
| `XdpGtk4-1.0` | LGPL-3.0-only AND LGPL-2.1-or-later | libportal-gtk4-devel (fedora) | [link](https://github.com/flatpak/libportal) |
| `Xed-1.0` | GPL-2.0-or-later | xed-devel (fedora) | [link](https://github.com/linuxmint/xed) |
| `Xfconf-0` | GPL-2.0-only | xfconf (fedora) | [link](http://www.xfce.org/) |
| `Xkl-1.0` | LGPL-2.0-or-later | libxklavier-devel (fedora) | [link](http://www.freedesktop.org/wiki/Software/LibXklavier) |
| `Xmlb-2.0` | LGPL-2.1-or-later | libxmlb-devel (fedora) | [link](https://github.com/hughsie/libxmlb) |
| `XreaderDocument-1.5` | GPL-2.0-or-later | xreader-devel (fedora) | [link](https://github.com/linuxmint/xreader) |
| `XreaderView-1.5` | GPL-2.0-or-later | xreader-devel (fedora) | [link](https://github.com/linuxmint/xreader) |
| `ZBar-1.0` | LGPL-2.1-or-later | zbar-devel (fedora) | [link](http://zbar.sourceforge.net/) |
| `Zeitgeist-2.0` | LGPL-2.0-or-later | zeitgeist-devel (fedora) | [link](https://launchpad.net/zeitgeist) |
| `cairo-1.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `fontconfig-2.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `freetype2-2.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `libxml2-2.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `win32-1.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `xfixes-4.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `xft-2.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `xlib-2.0` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |
| `xrandr-1.3` | GPL-2.0-or-later AND LGPL-2.0-or-later AND LGPL-2.1-or-later AND BSD-2-Clause | gobject-introspection-devel (fedora) | [link](https://wiki.gnome.org/Projects/GObjectIntrospection) |

---

Regenerate this file with `node packages/gir-files/scripts/build-payload.mjs`.
Provenance is re-queried with `scripts/build-gir-provenance.sh`.
