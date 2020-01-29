import { GirClass, GirEnumeration, GirFunction, GirAlias, GirVariable } from './index'

// export type GirConstruct = Partial<GirEnumeration> &
//     Partial<GirFunction> &
//     Partial<GirClass> &
//     Partial<GirAlias> &
//     Partial<GirVariable>

export type GirConstruct = GirEnumeration | GirFunction | GirClass | GirAlias | GirVariable
