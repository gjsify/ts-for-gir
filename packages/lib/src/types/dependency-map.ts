import type { Dependency } from './dependency.ts'
export interface DependencyMap {
    [packageName: string]: Dependency[]
}
