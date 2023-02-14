export interface GirCInclude {
    /** Dependant C header file which should be included in C programs */
    $: {
        /** File name of the C header file. The path can be relative. */
        name: string
    }
}
