import { GirConstruct } from './index'

export interface SymTable {
    [name: string]: GirConstruct | null
}
