import { TypeArraySuffix } from './type-array-suffix'
import { TypeNullableSuffix } from './type-nullable-suffix'

export type TypeSuffix = TypeArraySuffix | TypeNullableSuffix | '[] | null'
