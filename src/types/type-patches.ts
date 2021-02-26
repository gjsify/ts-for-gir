export interface TypePatches {
    [packageName: string]: {
        methods?: {
            [methodPath: string]: string[]
        }
        constructorProperties?: {
            [constructorPropPath: string]: string[]
        }
    }
}
