import { Transformations, Environment, ConstructName, TypeSuffix, CTypeMap, GType } from './types'
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

export const C_TYPE_MAP = (targetFullName: string | null, suffix: TypeSuffix): CTypeMap => {
    return {
        'char*': 'string',
        'gchar*': 'string',
        'gchar**': 'any', // FIXME
        GType: ((targetFullName === 'GObject-2.0' ? 'Type' : 'GObject.Type') + suffix) as GType,
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
    delete: 1,
    return: 1,
}

export const RESERVED_CLASS_NAMES = {
    break: 1,
    boolean: 1,
    case: 1,
    catch: 1,
    class: 1,
    const: 1,
    continue: 1,
    debugger: 1,
    default: 1,
    delete: 1,
    do: 1,
    else: 1,
    enum: 1,
    export: 1,
    extends: 1,
    false: 1,
    finally: 1,
    for: 1,
    function: 1,
    if: 1,
    implements: 1,
    import: 1,
    in: 1,
    instanceof: 1,
    interface: 1,
    let: 1,
    new: 1,
    number: 1,
    package: 1,
    private: 1,
    protected: 1,
    public: 1,
    return: 1,
    static: 1,
    super: 1,
    switch: 1,
    string: 1,
    this: 1,
    throw: 1,
    true: 1,
    try: 1,
    typeof: 1,
    var: 1,
    void: 1,
    while: 1,
    with: 1,
    yield: 1,
}

export const RESERVED_FUNCTION_NAMES = {
    false: 1,
    true: 1,
    break: 1,
}

export const RESERVED_NAMESPACE_NAMES = {}

export class Transformation {
    /**
     * Rules for the name conventions
     * For node-gtk naming conventions see https://github.com/romgrk/node-gtk#naming-conventions
     * For gjs see https://gjs-docs.gnome.org/ and https://wiki.gnome.org/Attic/Gjs
     */
    private transformations: Transformations = {
        functionName: {
            node: {
                transformation: 'lowerCamelCase',
            },
            gjs: {
                transformation: 'original',
            },
        },
        enumName: {
            node: {
                transformation: 'original',
            },
            gjs: {
                transformation: 'original',
            },
        },
        enumValue: {
            node: {
                transformation: 'upperCase',
            },
            gjs: {
                transformation: 'upperCase',
            },
        },
        signalName: {
            node: {
                transformation: 'original',
            },
            gjs: {
                transformation: 'original',
            },
        },
        // GJS always re-writes - to _ (I think?)
        propertyName: {
            node: {
                transformation: 'lowerCamelCase',
            },
            gjs: {
                transformation: 'underscores',
            },
        },
        parameterName: {
            node: {
                transformation: 'lowerCamelCase',
            },
            gjs: {
                transformation: 'underscores',
            },
        },
        fieldName: {
            node: {
                transformation: 'lowerCamelCase',
            },
            gjs: {
                transformation: 'underscores',
            },
        },
        constantName: {
            node: {
                transformation: 'original',
            },
            gjs: {
                transformation: 'original',
            },
        },
        namespaceName: {
            node: {
                transformation: 'upperCamelCase',
            },
            gjs: {
                transformation: 'upperCamelCase',
            },
        },
    }

    private log = Logger.getInstance()

    constructor(private readonly environment: Environment) {
        //
    }

    public transformModuleNamespaceName(name: string): string {
        const originalName = `${name}`
        name = this.transformNumericName(name)

        name = this.transform('namespaceName', name)

        if (RESERVED_NAMESPACE_NAMES[name]) {
            name = `${name}_`
        }
        if (originalName !== name) {
            // this.log.warn(`[${this.environment}] Namespace name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformClassName(name: string): string {
        const originalName = `${name}`
        name = this.transformNumericName(name)

        if (RESERVED_CLASS_NAMES[name]) {
            name = `${name}_`
        }
        if (originalName !== name) {
            this.log.warn(`[${this.environment}] Class name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformEnumName(name: string): string {
        const originalName = `${name}`

        // For an example enum starting with a number see https://gjs-docs.gnome.org/nm10~1.20.8/nm.80211mode
        name = this.transform('enumName', name)

        name = this.transformNumericName(name)

        if (RESERVED_CLASS_NAMES[name]) {
            name = `${name}_`
        }
        if (originalName !== name) {
            this.log.warn(`[${this.environment}] Enum name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformFunctionName(name: string): string {
        const originalName = `${name}`
        name = this.transform('functionName', name)

        name = this.transformNumericName(name)

        if (RESERVED_FUNCTION_NAMES[name]) {
            name = `${name}_TODO`
        }

        if (originalName !== name) {
            this.log.warn(`[${this.environment}] Function name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    /**
     * E.g. GstVideo-1.0 has a class `VideoScaler` with a method called `2d`
     * or NetworkManager-1.0 has methods starting with `80211`
     */
    public transformPropertyName(name: string, allowQuotes: boolean): string {
        const originalName = `${name}`
        name = this.transform('propertyName', name)

        if (RESERVED_VARIABLE_NAMES[name]) {
            if (allowQuotes) name = `"${name}"`
            else name = `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)

        if (originalName !== name) {
            // this.log.warn(`Property name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformConstantName(name: string, allowQuotes: boolean): string {
        const originalName = `${name}`
        name = this.transform('constantName', name)

        if (RESERVED_VARIABLE_NAMES[name]) {
            if (allowQuotes) name = `"${name}"`
            else name = `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)
        if (originalName !== name) {
            this.log.warn(`[${this.environment}] Constant name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformFieldName(name: string, allowQuotes: boolean): string {
        const originalName = `${name}`
        name = this.transform('fieldName', name)

        if (RESERVED_VARIABLE_NAMES[name]) {
            if (allowQuotes) name = `"${name}"`
            else name = `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)
        if (originalName !== name) {
            this.log.warn(`[${this.environment}] Field name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transformParameterName(name: string, allowQuotes: boolean): string {
        const originalName = `${name}`
        // Such a variable name exists in `GConf-2.0.d.ts` class `Engine` method `change_set_from_current`
        if (name === '...') {
            return '...args'
        }
        name = this.transform('parameterName', name)
        if (RESERVED_VARIABLE_NAMES[name]) {
            if (allowQuotes) name = `"${name}"`
            else name = `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)
        if (originalName !== name) {
            this.log.warn(`[${this.environment}] Parameter name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    /**
     * Fixes type names, e.g. Return types or enum definitions can not start with numbers
     * @param typeName
     */
    public transformTypeName(name: string): string {
        const originalName = `${name}`
        name = this.transformNumericName(name)

        if (originalName !== name) {
            this.log.warn(`[${this.environment}] Type name renamed from '${originalName}' to '${name}'`)
        }
        return name
    }

    public transform(construct: ConstructName, transformMe: string): string {
        const transformations = this.transformations[construct][this.environment].transformation
        if (transformations === 'original') {
            return transformMe
        }
        if (transformations === 'lowerCamelCase') {
            return Utils.lowerCamelCase(transformMe)
        }
        if (transformations === 'upperCamelCase') {
            return Utils.upperCamelCase(transformMe)
        }
        if (transformations === 'upperCase') {
            return transformMe.toUpperCase()
        }
        if (transformations === 'lowerCase') {
            return transformMe.toLowerCase()
        }
        if (transformations === 'underscores') {
            return transformMe.replace(/-|_/g, '_')
        }
        return transformMe
    }

    /**
     * In JavaScript there can be no variables, methods, class names or enum names that start with a number.
     * This method converts such names.
     * TODO ala prepends an `@` to numeric starting names how does gjs and node-gtk do that?
     * @param name
     * @param allowQuotes
     */
    private transformNumericName(name: string, allowQuotes = false): string {
        if (Utils.isFirstCharNumeric(name)) {
            if (allowQuotes) name = `"${name}"`
            else name = `TODO_${name}`
        }
        return name
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
