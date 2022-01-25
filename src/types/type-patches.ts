import { TsProperty, TsMethod, TsVar, TsParameter } from '.'

export interface TypePatches {
    [packageName: string]: {
        methods?: {
            [methodPath: string]: Partial<TsMethod>
        }
        constructorProperties?: {
            [constructorPropPath: string]: Partial<TsProperty>
        }
        variables?: {
            [variablePath: string]: Partial<TsVar>
        }
        parameter?: {
            [parameterPath: string]: Partial<TsParameter>
        }
    }
}
