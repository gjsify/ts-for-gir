# `@ts-for-gir-test/types-locally`

This package, which is part of the yarn workspace, is used to test the generation of local types without `package.json` support. It also tests the import of the same library in different versions, such as Gtk3 and Gtk4, to verify the `onlyVersionPrefix` generation option.