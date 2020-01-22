import { GirModule } from '../gir-module'

export type ParsedType =
    | 'Gjs.byteArray.ByteArray'
    | 'Gjs.byteArray.ByteArray | null'
    // normal
    | 'void'
    | 'string'
    | 'number'
    | 'any'
    | 'object'
    | 'Function'
    // normal nullable
    | 'void | null'
    | 'string | null'
    | 'number | null'
    | 'any | null'
    | 'object | null'
    | 'Function | null'
    // arrays
    | 'void[]'
    | 'string[]'
    | 'number[]'
    | 'any[]'
    | 'object[]'
    | 'Function[]'
    // arrays nullable
    | 'void[] | null'
    | 'string[] | null'
    | 'number[] | null'
    | 'any[] | null'
    | 'object[] | null'
    | 'Function[] | null'

export interface InheritanceTable {
    [name: string]: string[]
}

export interface TsForGjsExtended {
    _module?: GirModule
    _fullSymName?: string
}

export interface GirInclude {
    $: {
        name: string
        version: string
    }
}

export interface GirDoc {
    _: string
    $: {
        'xml:space'?: string
    }
}

export interface GirImplements {
    $: {
        name?: string
    }
}

export interface GirPrerequisite {
    $: {
        name?: string
    }
}

export interface GirType {
    $: {
        name: string
        'c:type'?: string
    }
}

export interface GirArray {
    $?: {
        length?: string
        'zero-terminated'?: string
        'c:type'?: string
    }
    type?: GirType[]
}

export interface GirVariable extends TsForGjsExtended {
    $: {
        name?: string
        'transfer-ownership'?: string
        nullable?: string
        'allow-none'?: string
        writable?: string
        readable?: string
        private?: string
        'construct-only'?: string
        direction?: string
        introspectable?: string
        closure?: string
        destroy?: string
    }
    doc?: GirDoc[]
    type?: GirType[]
    array?: GirArray[]
}

export interface GirParameter {
    parameter?: GirVariable[]
    'instance-parameter'?: GirVariable[]
}

export interface GirFunction extends TsForGjsExtended {
    $: {
        name: string
        version?: string
        'c-identifier'?: string
        introspectable?: string
        'moved-to'?: string
        'shadowed-by'?: string
    }
    doc?: GirDoc[]
    parameters?: GirParameter[]
    'return-value'?: GirVariable[]
}

export interface GirSignal extends TsForGjsExtended {
    $: {
        name: string
        when: string
    }
    doc?: GirDoc[]
    'return-value'?: GirParameter[]
}

export interface GirClass extends TsForGjsExtended {
    $: {
        name: string
        parent?: string
        version?: string
        // Not sure what this means
        disguised?: string
        // c:symbol-prefix, c:type, glib:get-type, glib:type-name
        'glib:is-gtype-struct-for'?: string
    }
    doc?: GirDoc[]
    function?: GirFunction[]
    'glib:signal'?: GirFunction[]
    method?: GirFunction[]
    property?: GirVariable[]
    field?: GirVariable[]
    'virtual-method'?: GirFunction[]
    constructor?: GirFunction[] | Function
    implements?: GirImplements[]
    prerequisite?: GirPrerequisite[]

    _module?: GirModule
}

export interface GirEnumerationMember {
    $: {
        name: string
        value: string
        // c:identifier, glib:nick
    }
    doc?: GirDoc[]
}

export interface GirEnumeration extends TsForGjsExtended {
    $: {
        name: string
        version?: string
        'c:type'?: string
        introspectable?: string
        // glib:get-type, glib:type-name
    }
    doc?: GirDoc[]
    member?: GirEnumerationMember[]
}

export interface GirAlias extends TsForGjsExtended {
    $: {
        name: string
        'c:type'?: string
        introspectable?: string
    }
    type?: GirType[]
}

export interface GirNamespace {
    $: {
        name: string
        version: string
    }
    alias?: GirAlias[]
    bitfield?: GirEnumeration[]
    callback?: GirFunction[]
    class?: GirClass[]
    constant?: GirVariable[]
    enumeration?: GirEnumeration[]
    function?: GirFunction[]
    interface?: GirClass[]
    record?: GirClass[]
    union?: GirClass[]
}

export interface GirRepository {
    include?: GirInclude[]
    namespace?: GirNamespace[]
}

export interface CTypeMap {
    'char*': 'string'
    'gchar*': 'string'
    'gchar**': 'any' // FIXME
    GType: GType
}

export type GType = 'Type' | 'Type[]' | 'Type[] | null' | 'GObject.Type' | 'GObject.Type[]' | 'GObject.Type[] | null'

export type TypeArraySuffix = '' | '[]'

export type TypeNullableSuffix = '' | ' | null'

export type TypeSuffix = TypeArraySuffix | TypeNullableSuffix | '[] | null'
