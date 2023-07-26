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
}
