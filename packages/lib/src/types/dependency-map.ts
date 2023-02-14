import { Dependency } from './dependency'
export interface DependencyMap {
    [packageName: string]: Dependency[]
}
