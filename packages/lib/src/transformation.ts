/**
 * This is where transformations take place for gjs and node-gtk.
 * For example a function names should be transformed to lowerCamelCase for node-gtk but should keep their original name for gjs
 */

import {
    Transformations,
    Environment,
    ConstructName,
    GenerateConfig,
    GirCallableParamElement,
    GirEnumElement,
    GirBitfieldElement,
} from './types/index.js'
import { lowerCamelCase, upperCamelCase, isFirstCharNumeric, underscores, slugCase, snakeCase } from './utils.js'
import { Logger } from './logger.js'
import { NEW_LINE_REG_EXP } from './constants.js'
import {
    WARN_RENAMED_PROPERTY,
    WARN_RENAMED_CLASS,
    WARN_RENAMED_CONSTANT,
    WARN_RENAMED_FIELD,
    WARN_RENAMED_FUNCTION,
    WARN_RENAMED_ENUM,
    WARN_RENAMED_PARAMETER,
} from './messages.js'

export const ARRAY_TYPE_MAP = {
    guint8: 'Uint8Array',
    // Int8Array would probably be more appropriate for gint8, but Uint8Array is better supported
    gint8: 'Uint8Array',
    gunichar: 'string',
}

/**
 * Used to parse `name` and
 * @see https://developer.gnome.org/glib/stable/glib-Basic-Types.html
 * @see https://gi.readthedocs.io/en/latest/annotations/giannotations.html
 */
export const PRIMITIVE_TYPE_MAP = {
    // Special

    none: 'void',
    va_list: 'any',

    guintptr: 'never', // You can't use pointers in Gjs

    // Strings
    utf8: 'string',
    filename: 'string',
    gunichar: 'string',
    'gunichar*': 'string',
    'char*': 'string',
    'gchar*': 'string', // TODO CHECKME
    'gchar**': 'string', // TODO CHECKME
    'gchar***': 'string', // TODO CHECKME
    'const gchar*': 'string', // TODO CHECKME
    'const char*': 'string', // TODO CHECKME

    // Booleans
    gboolean: 'boolean',
    'gboolean*': 'boolean',

    gpointer: 'any', // This is typically used in callbacks to pass data, so we allow any here.
    'gpointer*': 'any',
    gconstpointer: 'any',

    // Numbers
    gchar: 'number',
    guchar: 'number',
    glong: 'number',
    gulong: 'number',
    gdouble: 'number',
    gssize: 'number',
    gsize: 'number',
    gshort: 'number',
    guint32: 'number',
    'guint32*': 'number',
    guint: 'number',
    'guint*': 'number',
    guint8: 'number',
    'guint8*': 'number',
    'guint8**': 'number',
    guint16: 'number',
    'guint16*': 'number',
    gint16: 'number',
    'gint16*': 'number',
    guint64: 'number',
    'guint64*': 'number',
    gfloat: 'number',
    'gfloat*': 'number',
    gint: 'number',
    'gint*': 'number',
    gint8: 'number',
    'gint8*': 'number',
    gint32: 'number',
    'gint32*': 'number',
    gint64: 'number',
    'gint64*': 'number',
    gushort: 'number',
    'gushort*': 'number',

    // Bad numerical types
    long: 'number',
    double: 'number',
    'double*': 'number',
    uint32: 'number',
    int32: 'number',
    uint8: 'number',
    int8: 'number',
    uint16: 'number',
    'int*': 'number',
    int: 'number',

    // TypeScript types
    this: 'this',
    never: 'never',
    unknown: 'unknown',
    any: 'any',
    number: 'number',
    string: 'string',
    boolean: 'boolean',
    object: 'object',
    void: 'void',
}

// Gjs is permissive for byte-array in parameters but strict for out/return
// See <https://discourse.gnome.org/t/gjs-bytearray-vs-glib-bytes/4900>
export const FULL_TYPE_MAP = (environment: Environment, value: string, out = true): string | undefined => {
    let ba: string
    let gb: string | undefined
    if (environment === 'gjs') {
        ba = 'Uint8Array'
        if (out === false) {
            ba += ' | imports.byteArray.ByteArray'
            gb = 'GLib.Bytes | Uint8Array | imports.byteArray.ByteArray'
        } else {
            gb = undefined // No transformation
        }
    } else {
        // TODO
        ba = 'any'
        gb = 'any'
    }

    const fullTypeMap = {
        'GObject.Value': 'any',
        'GObject.Closure': 'GObject.TClosure',
        'GLib.ByteArray': ba,
        'GLib.Bytes': gb,
        GType: 'GObject.GType',
        'GObject.Type': 'GObject.GType',
        Type: 'GObject.GType',
        'GObject.GType': 'GObject.GType',
    }

    const result = fullTypeMap[value as keyof typeof fullTypeMap]
    return result
}

/** The reserved variable names listed here cannot be resolved simply by quotation marks */
export const RESERVED_QUOTE_VARIABLE_NAMES = ['constructor']

export const RESERVED_VARIABLE_NAMES = [
    'in',
    'function',
    'true',
    'false',
    'break',
    'arguments',
    'eval',
    'default',
    'new',
    'extends',
    'with',
    'var',
    'class',
    'delete',
    'return',
    'constructor',
    'this', // TODO check if this is used as we would use this in javascript, if so, this is only allowed as the first parameter
]

export const RESERVED_CLASS_NAMES = [
    'break',
    'boolean',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'interface',
    'let',
    'new',
    'number',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'static',
    'super',
    'switch',
    'string',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
]

export const RESERVED_FUNCTION_NAMES = ['false', 'true', 'break']

/**
 * Some classes already have their own `.connect`, `.disconnect` or `.emit` methods,
 * so these cannot be overwritten with the Gjs signal methods which have the same name.
 */
export const GOBJECT_SIGNAL_METHOD_NAMES = ['connect', 'connect_after', 'emit', 'disconnect']

export const IGNORE_GIR_TYPE_TS_DOC_TYPES = [
    'method',
    'enum',
    'enum-member',
    'bitfield-member',
    'property',
    'function',
    'static-function',
    'constant',
]

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
        enumMember: {
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
        importNamespaceName: {
            node: {
                transformation: 'upperCamelCase',
            },
            gjs: {
                transformation: 'upperCamelCase',
            },
        },
        signalInterfaceName: {
            node: {
                transformation: 'upperCamelCase',
            },
            gjs: {
                transformation: 'upperCamelCase',
            },
        },
        importName: {
            node: {
                transformation: 'lowerCase',
            },
            gjs: {
                transformation: 'lowerCase',
            },
        },
    }

    private log: Logger

    constructor(private readonly config: GenerateConfig, logName = 'Transformation') {
        this.log = new Logger(config.environment, config.verbose, logName)
    }

    public transformSignalInterfaceName(name: string): string {
        name = this.transform('signalInterfaceName', name)
        return name
    }

    public transformModuleNamespaceName(name: string): string {
        name = this.transformNumericName(name)
        name = this.transform('importNamespaceName', name)

        if (RESERVED_NAMESPACE_NAMES[name]) {
            name = `${name}_`
        }
        return name
    }

    public transformClassName(name: string): string {
        const originalName = `${name}`
        name = this.transformNumericName(name)

        if (RESERVED_CLASS_NAMES.includes(name)) {
            name = `${name}_`
        }
        if (originalName !== name) {
            this.log.warn(WARN_RENAMED_CLASS(originalName, name))
        }
        return name
    }

    /**
     * // E.g. the NetworkManager-1.0 has enum names starting with 80211
     * @param girEnum The enum
     * @returns The transformed name
     */
    public transformEnumName(girEnum: GirEnumElement | GirBitfieldElement): string {
        let name = girEnum.$.name
        name = this.transform('enumName', name)
        const originalName = `${name}`

        // For an example enum starting with a number see https://gjs-docs.gnome.org/nm10~1.20.8/nm.80211mode
        name = this.transformNumericName(name)

        if (RESERVED_CLASS_NAMES.includes(name)) {
            name = `${name}_`
        }
        if (originalName !== name) {
            this.log.warn(WARN_RENAMED_ENUM(originalName, name))
        }
        return name
    }

    public transformEnumMember(memberName: string): string {
        memberName = this.transform('enumMember', memberName)
        memberName = this.transformNumericName(memberName)

        return memberName
    }

    public transformFunctionName(name: string, isVirtual: boolean): string {
        name = this.transform('functionName', name)

        // node-gtk has no `vfunc_` prefix for virtual methods
        if (isVirtual && this.config.environment === 'gjs') {
            name = 'vfunc_' + name
        }

        const originalName = `${name}`

        name = this.transformNumericName(name)

        if (RESERVED_FUNCTION_NAMES.includes(name)) {
            name = `${name}_TODO`
        }

        if (originalName !== name) {
            this.log.warn(WARN_RENAMED_FUNCTION(originalName, name))
        }
        return name
    }

    public transformReservedVariableNames(name: string, allowQuotes: boolean) {
        if (RESERVED_VARIABLE_NAMES.includes(name)) {
            if (allowQuotes && !RESERVED_QUOTE_VARIABLE_NAMES.includes(name)) {
                name = `"${name}"`
            } else {
                name = `${name}_`
            }
        }
        return name
    }

    /**
     * E.g. GstVideo-1.0 has a class `VideoScaler` with a method called `2d`
     * or NetworkManager-1.0 has methods starting with `80211`
     */
    public transformPropertyName(name: string, allowQuotes: boolean): string {
        name = this.transform('propertyName', name)
        const originalName = `${name}`

        name = this.transformReservedVariableNames(name, allowQuotes)
        name = this.transformNumericName(name, allowQuotes)

        if (originalName !== name) {
            this.log.warn(WARN_RENAMED_PROPERTY(originalName, name))
        }
        return name
    }

    public transformConstantName(name: string, allowQuotes: boolean): string {
        name = this.transform('constantName', name)
        const originalName = `${name}`

        name = this.transformReservedVariableNames(name, allowQuotes)
        name = this.transformNumericName(name, allowQuotes)

        if (originalName !== name) {
            this.log.warn(WARN_RENAMED_CONSTANT(originalName, name))
        }
        return name
    }

    public transformFieldName(name: string, allowQuotes: boolean): string {
        name = this.transform('fieldName', name)
        const originalName = `${name}`

        name = this.transformReservedVariableNames(name, allowQuotes)
        name = this.transformNumericName(name, allowQuotes)
        if (originalName !== name) {
            this.log.warn(WARN_RENAMED_FIELD(originalName, name))
        }
        return name
    }

    public transformParameterName(param: GirCallableParamElement, allowQuotes: boolean): string {
        let name = param.$.name || '-'
        // Such a variable name exists in `GConf-2.0.d.ts` class `Engine` method `change_set_from_current`
        if (name === '...') {
            return '...args'
        }
        name = this.transform('parameterName', name)
        const originalName = `${name}`

        name = this.transformReservedVariableNames(name, allowQuotes)
        name = this.transformNumericName(name, allowQuotes)
        if (originalName !== name) {
            this.log.warn(WARN_RENAMED_PARAMETER(originalName, name))
        }
        return name
    }

    /**
     * Fixes type names, e.g. Return types or enum definitions can not start with numbers
     * @param typeName
     */
    public transformTypeName(name: string): string {
        name = this.transformNumericName(name)
        return name
    }

    public transform(construct: ConstructName, transformMe: string): string {
        const transformations = this.transformations[construct][this.config.environment].transformation

        switch (transformations) {
            case 'lowerCamelCase':
                return lowerCamelCase(transformMe)
            case 'upperCamelCase':
                return upperCamelCase(transformMe)
            case 'slugCase':
                return slugCase(transformMe)
            case 'snakeCase':
                return snakeCase(transformMe)
            case 'upperCase':
                return transformMe.toUpperCase()
            case 'lowerCase':
                return transformMe.toLowerCase()
            case 'underscores':
                return underscores(transformMe)
            case 'original':
            default:
                return transformMe
        }
    }

    /**
     * In JavaScript there can be no variables, methods, class names or enum names that start with a number.
     * This method converts such names.
     * TODO: Prepends an `@` to numeric starting names, how does gjs and node-gtk do that?
     * @param name
     * @param allowQuotes
     */
    private transformNumericName(name: string, allowQuotes = false): string {
        if (isFirstCharNumeric(name)) {
            if (allowQuotes) name = `"${name}"`
            else name = `TODO_${name}`
        }
        return name
    }

    /**
     * Replaces "@any_property" with "`any_property`"
     * @param description E.g. "Creates a binding between @source_property on @source and @target_property on @target."
     * @returns E.g. "Creates a binding between `source_property` on `source` and `target_property` on `target`."
     */
    private transformGirDocHighlights(description: string) {
        const highlights = description.match(/@[A-Za-z_-]*[^\s.]/gm)
        if (highlights) {
            for (const highlight of highlights) {
                description = description.replace(highlight, `\`${highlight.slice(1)}\``)
            }
        }
        return description
    }

    /**
     * Replaces:
     * |[<!-- language="C" -->
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ]|
     *
     * with
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     *
     * @param description
     */
    private transformGirDocCodeBlocks(description: string) {
        description = description
            .replaceAll(/\|\[<!-- language="C" -->/gm, '\n```c') // C-Code
            .replaceAll(/\|\[/gm, '\n```') // Other code
            .replaceAll(/\]\|/gm, '```\n') // End of code
        return description
    }

    /**
     * Transforms the documentation text to markdown
     * TODO: Transform references to link tags: https://tsdoc.org/pages/tags/link/
     * @param text
     * @returns
     */
    public transformGirDocText(text: string) {
        text = this.transformGirDocHighlights(text)
        text = this.transformGirDocCodeBlocks(text)
        return text
    }

    /**
     * Transforms the tsDoc tag <text> like `@param name <text>`
     * @param text
     * @returns
     */
    public transformGirDocTagText(text: string) {
        // return this.transformGirDocHighlights(text.replace(NEW_LINE_REG_EXP, ' '))
        return text.replace(NEW_LINE_REG_EXP, ' ')
    }

    public transformImportName(packageName: string): string {
        let importName = this.transform('importName', packageName)
        if (this.config.environment === 'node' && !importName.startsWith('node-')) {
            importName = 'node-' + importName
        }
        return importName
    }
}
