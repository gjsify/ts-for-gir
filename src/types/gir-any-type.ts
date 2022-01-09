import { GirArrayType } from './gir-array-type'
import { GirType } from './gir-type'

//A generic grammar element to represent either a simple Type or an Array of the same Type
export interface GirAnyType {
    type?: GirType[]
    array?: GirArrayType[]
}
