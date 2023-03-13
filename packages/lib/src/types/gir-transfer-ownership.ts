import { GirTransferOwnershipType } from './gir-transfer-ownership-type'

export interface GirTransferOwnership {
    /** attributes used by many elements for the transfer of ownership, with for example, a returned value.
     * - "none" if the recipient does not own the value,
     * - "container" if the recipient owns the container but not the value (for arrays or lists for example),
     * - "full" the recipient owns the entire value.
     * For details, see https://wiki.gnome.org/Projects/GObjectIntrospection/Annotations#Memory_and_lifecycle_management */
    'transfer-ownership': GirTransferOwnershipType
}
