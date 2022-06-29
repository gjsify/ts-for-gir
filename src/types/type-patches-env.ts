import { TsProperty, TsMethod, TsVar, TsParameter } from './index.js'

export interface TypePatchesEnv {
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
