import { DescProperty, DescMethod, DescVar, DescParameter } from '.'

export interface TypePatches {
    [packageName: string]: {
        methods?: {
            [methodPath: string]: Partial<DescMethod>
        }
        constructorProperties?: {
            [constructorPropPath: string]: Partial<DescProperty>
        }
        variables?: {
            [variablePath: string]: Partial<DescVar>
        }
        parameter?: {
            [parameterPath: string]: Partial<DescParameter>
        }
    }
}
