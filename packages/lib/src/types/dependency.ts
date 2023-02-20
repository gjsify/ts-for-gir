import { FileInfo } from './file-info.js'

export interface Dependency extends FileInfo {
    /**
     * E.g. 'Gtk'
     */
    namespace: string
    /**
     * E.g. '4.0'
     */
    version: string
    /**
     * E.g. 'Gtk-4.0'
     */
    packageName: string
    /**
     * The NPM package name
     * E.g. 'gtk-4.0'
     */
    importName: string
    /**
     * Import path for the package
     * E.g. './Gtk-4.0.js' or '@gir/Gtk-4.0'
     */
    importPath: string
    /**
     * Import definition for the package
     * E.g. `import type Gtk from '@gir/Gtk-3.0'`
     */
    importDef: string
}
