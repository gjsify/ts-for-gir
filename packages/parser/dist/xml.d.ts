export declare enum GirDirection {
    In = "in",
    Inout = "inout",
    Out = "out",
    InOut = "in-out"
}
export interface GirXML {
    repository: GirRepository[];
}
export type GirUnparsedNumber = string;
export type GirBoolean = "0" | "1";
export interface GirRepository {
    $: {
        version?: string;
        "c:identifier-prefixes"?: string;
        "c:symbol-prefixes"?: string;
    };
    include?: GirInclude[];
    "c:include": GirCInclude[];
    package: GirPackage[];
    namespace?: GirNamespace[];
}
export interface GirNamespace {
    $: GirInfoAttrs & {
        name: string;
        version: string;
        "c:identifier-prefixes"?: string;
        "c:symbol-prefixes"?: string;
        "c:prefix"?: string;
        "shared-library"?: string;
    };
    alias?: GirAliasElement[];
    class?: GirClassElement[];
    interface?: GirInterfaceElement[];
    record?: GirRecordElement[];
    enumeration?: GirEnumElement[];
    function?: GirFunctionElement[];
    union?: GirUnionElement[];
    bitfield?: GirBitfieldElement[];
    callback?: GirCallbackElement[];
    constant?: GirConstantElement[];
    annotation?: GirAnnotation[];
    ["glib:boxed"]?: GirBoxedElement[];
}
export interface GirAnnotation {
    $: {
        name: string;
        value: string[];
    };
}
export interface GirCInclude {
    $: {
        name: string;
    };
}
export interface GirInclude {
    $: {
        name: string;
        version?: string;
    };
}
export interface GirPackage {
    $: {
        name: string;
    };
}
export interface GirAliasElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        "c:type"?: string;
    };
    type?: GirType[];
}
export interface GirInterfaceElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        "glib:type-name": string;
        "glib:get-type": string;
        "c:symbol-prefix"?: string;
        "c:type"?: string;
        "glib:type-struct"?: string;
    };
    prerequisite?: GirPrerequisite[];
    implements?: GirImplements[];
    function?: GirFunctionElement[];
    constructors?: GirConstructorElement[];
    method?: GirMethodElement[];
    "virtual-method"?: GirVirtualMethodElement[];
    field?: GirFieldElement[];
    property?: GirPropertyElement[];
    signal?: GirSignalElement[];
    "glib:signal"?: GirSignalElement[];
    callback?: GirCallbackElement[];
    constant?: GirConstantElement[];
}
export interface GirClassElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        "glib:type-name": string;
        "glib:get-type": string;
        parent?: string;
        "glib:type-struct"?: string;
        "glib:ref-func"?: string;
        "glib:unref-func"?: string;
        "glib:set-value-func"?: string;
        "glib:get-value-func"?: string;
        "c:type"?: string;
        "c:symbol-prefix"?: string;
        abstract?: GirBoolean;
        "glib:fundamental"?: GirBoolean;
        final: GirBoolean;
    };
    implements?: GirImplements[];
    constructor?: GirConstructorElement[];
    method?: GirMethodElement[];
    function?: GirFunctionElement[];
    "virtual-method"?: GirVirtualMethodElement[];
    field?: GirFieldElement[];
    property?: GirPropertyElement[];
    signal?: GirSignalElement[];
    "glib:signal"?: GirSignalElement[];
    union?: GirUnionElement[];
    constant?: GirConstantElement[];
    record?: GirRecordElement[];
    callback?: GirCallbackElement[];
}
export interface GirBoxedElement {
    $: GirInfoAttrs & {
        "glib:name": string;
        "c:symbol-prefix"?: string;
        "glib:type-name"?: string;
        "glib:get-type"?: string;
    };
    function?: GirFunctionElement[];
}
export interface GirRecordElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        "c:type"?: string;
        disguised?: GirBoolean;
        opaque?: GirBoolean;
        pointer?: GirBoolean;
        "glib:type-name"?: string;
        "glib:get-type"?: string;
        "c:symbol-prefix"?: string;
        foreign?: GirBoolean;
        "glib:is-gtype-struct-for"?: string;
    };
    field?: GirFieldElement[];
    function?: GirFunctionElement[];
    union?: GirUnionElement[];
    method?: GirMethodElement[];
    constructor?: GirConstructorElement[];
    property?: GirPropertyElement[];
}
export interface GirInfoAttrs {
    introspectable?: GirBoolean;
    deprecated?: string;
    "deprecated-version"?: string;
    version?: string;
    stability?: string[];
}
export interface GirDocElement {
    "doc-version"?: [
        {
            $: {
                "xml:space"?: "preserve";
                "xml:whitespace"?: "preserve";
            };
            _: string;
        }
    ];
    "doc-stability"?: [
        {
            $: {
                "xml:space"?: "preserve";
                "xml:whitespace"?: "preserve";
            };
            _: string;
        }
    ];
    doc: [
        {
            $: {
                "xml:space"?: "preserve";
                "xml:whitespace"?: "preserve";
                filename: string;
                line: string;
                column: string;
            };
            _: string;
        }
    ];
    "doc-deprecated": [
        {
            $: {
                "xml:space"?: "preserve";
                "xml:whitespace"?: "preserve";
            };
            _: string;
        }
    ];
    "source-position": [
        {
            filename: string;
            line: string;
            column: string[];
        }
    ];
}
export interface GirInfoElements extends GirDocElement {
    annotation: GirAnnotation[];
}
export interface GirConstantElement extends GirInfoElements, GirAnyType {
    $: GirInfoAttrs & {
        name: string;
        value: string;
        "c:type"?: string;
        "c:identifier"?: string;
    };
}
export interface GirPropertyElement extends GirInfoElements, GirAnyType {
    $: GirInfoAttrs & {
        name: string;
        writable?: GirBoolean;
        readable?: GirBoolean;
        construct?: GirBoolean;
        "construct-only"?: GirBoolean;
        setter?: string;
        getter?: string;
        "default-value"?: string;
    } & Partial<GirTransferOwnership>;
}
export interface GirSignalElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        detailed?: GirBoolean;
        when?: "first" | "last" | "cleanup";
        action?: GirBoolean;
        "no-hooks"?: GirBoolean;
        "no-recurse"?: GirBoolean;
    };
    parameters?: [GirCallableParams];
    "return-value"?: GirCallableReturn[];
}
export interface GirFieldElement extends GirInfoElements, GirAnyType {
    $: GirInfoAttrs & {
        name: string;
        writable?: GirBoolean;
        readable?: GirBoolean;
        private?: GirBoolean;
        bits?: GirUnparsedNumber;
    };
    callback?: GirCallbackElement[];
}
export interface GirCallbackElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        "c:type"?: string;
        throws?: GirBoolean;
        "glib:type-name"?: string;
    };
    parameters?: [GirCallableParams];
    "return-value"?: GirCallableReturn[];
}
export interface GirImplements {
    $: GirInfoAttrs & {
        name: string;
    };
}
export interface GirPrerequisite {
    $: {
        name?: string;
    };
}
export interface GirAnyType {
    type?: GirType[];
    array?: GirArrayType[];
}
export interface GirType extends GirDocElement {
    $: GirInfoAttrs & {
        name?: string;
        "c:type"?: string;
        introspectable?: GirBoolean;
    };
    array?: GirArrayType[];
    type: GirType[];
}
export interface GirArrayType {
    $: GirInfoAttrs & {
        name?: string;
        "zero-terminated"?: GirBoolean;
        "fixed-size"?: GirUnparsedNumber;
        introspectable?: GirBoolean;
        length?: GirUnparsedNumber;
        "c:type"?: string;
    };
    array?: GirArrayType[];
    type?: GirType[];
}
export declare enum GirTransferOwnershipType {
    Container = "container",
    Full = "full",
    None = "none"
}
export interface GirTransferOwnership {
    "transfer-ownership": GirTransferOwnershipType;
}
export interface GirConstructorElement {
    $: GirInfoAttrs & GirCallableAttrs;
    parameters?: [GirCallableParams];
    "return-value"?: GirCallableReturn[];
}
export interface GirCallableAttrs {
    name: string;
    "c:identifier"?: string;
    "shadowed-by"?: string;
    shadows?: string;
    throws?: GirBoolean;
    "moved-to"?: string[];
}
export interface GirVarArgs {
    $: GirInfoAttrs;
}
export interface GirCallableParamElement extends GirDocElement, GirAnyType {
    $: GirInfoAttrs & Partial<GirTransferOwnership> & {
        name?: string;
        nullable?: GirBoolean;
        "null-ok"?: GirBoolean;
        "allow-none"?: GirBoolean;
        introspectable?: GirBoolean;
        closure?: GirUnparsedNumber;
        destroy?: GirUnparsedNumber;
        scope?: "notified" | "async" | "call";
        direction?: GirDirection;
        "caller-allocates"?: GirBoolean;
        optional?: GirBoolean;
        skip?: GirBoolean;
    };
    varargs?: GirVarArgs[];
}
export interface GirCallableParams {
    parameter: GirCallableParamElement[];
    "instance-parameter"?: GirInstanceParameter[];
}
export interface GirInstanceParameter extends GirAnyType {
    $: Partial<{
        name: string;
        nullable?: GirBoolean;
        "allow-none"?: GirBoolean;
        "null-ok"?: GirBoolean;
        direction?: GirDirection;
        "caller-allocates"?: GirBoolean;
    }> & Partial<GirTransferOwnership>;
    type?: GirType[];
}
export interface GirCallableReturn extends GirAnyType, GirDocElement {
    $: {
        name?: string;
        introspectable?: GirBoolean;
        nullable?: GirBoolean;
        closure?: GirUnparsedNumber;
        scope?: "notified" | "async" | "call";
        destroy?: GirUnparsedNumber;
        skip?: GirBoolean;
        "allow-none"?: GirBoolean;
    } & Partial<GirTransferOwnership>;
}
export interface GirFunctionElement extends GirDocElement {
    $: GirInfoAttrs & GirCallableAttrs;
    parameters?: [GirCallableParams];
    "return-value"?: GirCallableReturn[];
}
export interface GirMethodElement extends GirDocElement {
    $: GirInfoAttrs & GirCallableAttrs & {
        "glib:set-property": string;
        "glib:get-property": string;
    };
    parameters?: [GirCallableParams];
    "return-value"?: GirCallableReturn[];
}
export interface GirVirtualMethodElement extends GirDocElement {
    $: GirInfoAttrs & GirCallableAttrs & {
        invoker?: string;
    };
    parameters?: [GirCallableParams];
    "return-value"?: GirCallableReturn[];
}
export interface GirUnionElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name?: string;
        "c:type"?: string;
        "c:symbol-prefix"?: string;
        "glib:type-name"?: string;
        "glib:get-type"?: string;
    };
    field?: GirFieldElement[];
    constructor?: GirConstructorElement[];
    method?: GirMethodElement[];
    function?: GirFunctionElement[];
    record?: GirRecordElement[];
}
export interface GirBitfieldElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        "c:type": string;
        "glib:type-name"?: string;
        "glib:get-type"?: string;
    };
    member: GirMemberElement[];
    function: GirFunctionElement[];
}
export interface GirEnumElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        "c:type": string;
        "glib:type-name"?: string;
        "glib:get-type"?: string;
        "glib:error-domain"?: string;
    };
    member?: GirMemberElement[];
    function?: GirFunctionElement[];
}
export interface GirFieldElement extends GirInfoElements, GirAnyType {
    $: GirInfoAttrs & {
        name: string;
        writable?: GirBoolean;
        readable?: GirBoolean;
        private?: GirBoolean;
        bits?: GirUnparsedNumber;
    };
    callback?: GirCallbackElement[];
}
export interface GirMemberElement extends GirInfoElements {
    $: GirInfoAttrs & {
        name: string;
        value: string;
        "c:identifier": string;
        "glib:nick"?: string;
        "glib:name"?: string;
    };
}
