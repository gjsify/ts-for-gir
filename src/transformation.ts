import * as changeCase from 'change-case'
import { Transformations, Environment, Construct, TypeSuffix, CTypeMap, GType } from './types'
import Path from 'path'

export const POD_TYPE_MAP_ARRAY = (environment: Environment): { guint8: string; gint8: string; gunichar: string } => {
    return {
        guint8: environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
        gint8: environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
        gunichar: 'string',
    }
}

export const C_TYPE_MAP = (targetModName: string | null, suffix: TypeSuffix): CTypeMap => {
    return {
        'char*': 'string',
        'gchar*': 'string',
        'gchar**': 'any', // FIXME
        GType: ((targetModName == 'GObject' ? 'Type' : 'GObject.Type') + suffix) as GType,
    }
}

export const FULL_TYPE_MAP = (
    environment: Environment,
): { 'GObject.Value': string; 'GObject.Closure': string; 'GLib.ByteArray': string; 'GLib.Bytes': string } => {
    return {
        'GObject.Value': 'any',
        'GObject.Closure': 'Function',
        'GLib.ByteArray': environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
        'GLib.Bytes': environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
    }
}

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
