export interface ClassDetails {
    name: string
    qualifiedName: string
    parentName?: string
    qualifiedParentName?: string
    localParentName?: string // qualified if its module != qualifiedName's module
}
