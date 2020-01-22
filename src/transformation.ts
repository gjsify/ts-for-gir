import * as changeCase from 'change-case'
import { Transformations } from './types/transformations'
import { Environment } from './types/environment'
import { Construct } from './types/construct'
import Path from 'path'

export class Transformation {
    private transformations: Transformations = {
        function: {
            node: {
                transformation: 'camelCase',
            },
            gjs: {
                transformation: 'none',
            },
        },
        enum: {
            node: {
                transformation: 'upperCase',
            },
            gjs: {
                transformation: 'upperCase',
            },
        },
        signalName: {
            node: {
                transformation: 'none',
            },
            gjs: {
                transformation: 'none',
            },
        },
    }

    constructor(private readonly environment: Environment) {
        //
    }

    transform(construct: Construct, transformMe: string): string {
        const transformations = this.transformations[construct][this.environment].transformation
        if (transformations === 'none') {
            return transformMe
        }
        if (transformations === 'upperCase') {
            return transformMe.toUpperCase()
        }
        if (transformations === 'lowerCase') {
            return transformMe.toLowerCase()
        }
        return changeCase[transformations](transformMe)
    }

    static getEnvironmentDir(environment: Environment, baseDir: string): string {
        if (environment == 'gjs') {
            return Path.join(baseDir, 'Gjs')
        }
        if (environment == 'node') {
            return Path.join(baseDir, 'node-gtk')
        }
        return baseDir
    }

    getEnvironmentDir(baseDir: string): string {
        return Transformation.getEnvironmentDir(this.environment, baseDir)
    }
}
