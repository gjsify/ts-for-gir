export interface FileInfo {
    /**
     * The path to the gir file or null if the file does not exist
     */
    path: string | null
    /**
     * The filename of the gir file
     */
    filename: string
    /**
     * Whether the file exists or not
     */
    exists: boolean
}
