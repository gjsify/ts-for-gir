export interface ClassParent {
    parentName: string
    qualifiedParentName: string
    /** qualified if its module != qualifiedName's module */
    localParentName: string
    type: 'parent' | 'prerequisite' | 'implements'
}
