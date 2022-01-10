import { GirType, GirArrayType } from '.'

//A generic grammar element to represent either a simple Type or an Array of the same Type
export interface GirAnyType {
    type?: GirType[]
    array?: GirArrayType[]
}
