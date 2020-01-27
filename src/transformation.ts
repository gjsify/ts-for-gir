import * as changeCase from 'change-case'
import { Transformations, Environment, Construct, TypeSuffix, CTypeMap, GType } from './types'
import Path from 'path'
import { Utils } from './utils'
import { Logger } from './logger'

export const POD_TYPE_MAP_ARRAY = (environment: Environment): { guint8: string; gint8: string; gunichar: string } => {
    return {
        guint8: environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
        gint8: environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
        gunichar: 'string',
    }
}

export const POD_TYPE_MAP = {
    utf8: 'string',
    none: 'void',
    double: 'number',
    guint32: 'number',
    guint16: 'number',
    gint16: 'number',
    gunichar: 'number',
    gint8: 'number',
    gint32: 'number',
    gushort: 'number',
    gfloat: 'number',
    gboolean: 'boolean',
    gpointer: 'object',
    gchar: 'number',
    guint: 'number',
    glong: 'number',
    gulong: 'number',
    gint: 'number',
    guint8: 'number',
    guint64: 'number',
    gint64: 'number',
    gdouble: 'number',
    gssize: 'number',
    gsize: 'number',
    long: 'number',
    object: 'any',
    gshort: 'number',
    filename: 'string',
    // eslint-disable-next-line @typescript-eslint/camelcase
    va_list: 'any',
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

export const RESERVED_VARIABLE_NAMES = {
    in: 1,
    function: 1,
    true: 1,
    false: 1,
    break: 1,
    arguments: 1,
    eval: 1,
    default: 1,
    new: 1,
    extends: 1,
    with: 1,
    var: 1,
    class: 1,
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

    private log = Logger.getInstance()

    constructor(private readonly environment: Environment) {
        //
    }

    public transformVariableName(name: string, allowQuotes: boolean): string {
        // GJS always re-writes - to _ (I think?)
        name = name.replace(/-/g, '_')

        if (RESERVED_VARIABLE_NAMES[name]) {
            if (allowQuotes) return `"${name}"`
            else return `${name}_`
        }

        // TODO how does gjs and node-gtk do that?
        if (Utils.isFirstCharNumeric(name)) {
            if (allowQuotes) return `"${name}"`
            else return `_${name}`
        }

        return name
    }

    public transformParameterName(name: string, allowQuotes: boolean): string {
        // Such a variable name exists in `GConf-2.0.d.ts` class `Engine` method `change_set_from_current`
        if (name === '...') {
            return '...args'
        }
        return this.transformVariableName(name, allowQuotes)
    }

    /**
     * Fixes type names, e.g. Return types or enum definitions can not start with numbers
     * @param typeName
     */
    public transformTypeName(typeName: string): string {
        let nameChanges = false
        // TODO how does gjs and node-gtk do that?
        if (Utils.isFirstCharNumeric(typeName)) {
            typeName = '_' + typeName
            nameChanges = true
        }
        if (nameChanges) {
            this.log.warn(`Name changed to ${typeName}`)
        }
        return typeName
    }

    public transform(construct: Construct, transformMe: string): string {
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
