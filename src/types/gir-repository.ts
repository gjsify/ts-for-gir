import { GirNamespace } from './gir-namespace'
import { GirInclude } from './gir-include'

export interface GirRepository {
    include?: GirInclude[]
    namespace?: GirNamespace[]
}
