import { TypeClass, TypeFunction, TypeMethod, TypeVariable, TypeAlias, TypeEnumeration, TypeInterface } from '.'

/** Any gir element type */
export type TypeGirElement =
    | TypeClass
    | TypeFunction
    | TypeMethod
    | TypeVariable
    | TypeAlias
    | TypeEnumeration
    | TypeInterface
