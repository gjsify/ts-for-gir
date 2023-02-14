import { FileInfo } from './file-info.js'

export interface Dependency extends FileInfo {
    /**
     * E.g. 'Gtk'
     */
    namespace: string
    /**
     * E.g. '3.0'
     */
    version: string
    /**
     * E.g. 'Gtk-3.0'
     */
    packageName: string
}
