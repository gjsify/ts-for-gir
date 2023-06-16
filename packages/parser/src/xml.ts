// Written based on https://gitlab.gnome.org/GNOME/gobject-introspection/-/blob/0c414e34113fca089a67eb1beadfcdce722a89db/docs/gir-1.2.rnc

// Most grammar has been modified to *prefer* potentially being undefined
// as we're parsing from XML files which may or may not contain all parts
// of this grammar

// Many keys are prefixed with `glib:` in XML, this grammar preserves that syntax.

export enum Direction {
    In = "in",
    Inout = "inout",
    Out = "out",
}

export interface GirXML {
    repository: Repository[];
}

/** A type alias for fields which *should* be treated as numerical */
type UnparsedNumber = string;

/** A type alias for 'binary' (boolean) fields */
type BinaryOption = "0" | "1";

/** Root node of a GIR repository. It contains  namespaces, which can in turn be implemented in several libraries */
export interface Repository {
    $: {
        /** version number of the repository */
        version?: string;
        /** prefixes to filter out from C identifiers for data structures and types. For example, GtkWindow will be Window. If c:symbol-prefixes is not used, then this element is used for both */
        "c:identifier-prefixes"?: string;
        /** prefixes to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        "c:symbol-prefixes"?: string;
    };

    /* Other elements a repository can contain */
    include: Include[];
    "c:include": CInclude[];
    package: Package[];
    namespace: Namespace[];
}

/** Namespace which maps metadata entries to C functionality. This a similar concept to namespace in C++, but for GObject-based C libraries */
export interface Namespace {
    $: InfoAttrs & {
        /** name of the namespace. For example, 'Gtk' (technically optional) */
        name: string;
        /** version number of the namespace (technically optional) */
        version: string;
        /** prefixes to filter out from C identifiers for data structures and types. For example, GtkWindow will be Window. If c:symbol-prefixes is not used, then this element is used for both */
        "c:identifier-prefixes"?: string;
        /** prefixes to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        "c:symbol-prefixes"?: string;
        /** Deprecated: the same as c:identifier-prefixes. Only used for backward compatibility  */
        "c:prefix"?: string;
        /** Path to the shared library implementing the namespace. It can be a comma-separated list, with relative path only */
        "shared-library"?: string;
    };

    /* Other elements a namespace can contain */
    alias?: AliasElement[];
    class?: ClassElement[];
    interface?: InterfaceElement[];
    record?: RecordElement[];
    enumeration?: EnumElement[];
    function?: FunctionElement[];
    union?: UnionElement[];
    bitfield?: BitfieldElement[];
    callback?: CallbackElement[];
    constant?: ConstantElement[];
    annotation?: Annotation[];
    ["glib:boxed"]?: BoxedElement[];
}

export interface Annotation {
    /** element defining an annotation from the source code, usually a user-defined annotation associated to a parameter or a return value */
    $: {
        /** name of the attribute */
        name: string;
        /** value of the attribute */
        value: string[];
    };
}

export interface CInclude {
    /** Dependant C header file which should be included in C programs */
    $: {
        /** File name of the C header file. The path can be relative. */
        name: string;
    };
}

export interface Include {
    /** Dependant namespace to include with the current namespace. For example, Gtk will need the namespace GLib */
    $: {
        /** name of the dependant namespace to include */
        name: string;
        /** version of the dependant namespace to use */
        version?: string;
    };
}

export interface Package {
    /** Deprecated: package name containing the library */
    $: {
        /** name of the package */
        name: string;
    };
}

export interface AliasElement extends InfoElements {
    /** Type's name substitution, representing a typedef in C */
    $: InfoAttrs & {
        //Attributes of an Alias (see definition below)

        /** the new name or typedef'd name */
        name: string;
        /** the corresponding C type's name */
        "c:type": string;
    };

    /** Other elements an alias can contain */
    type: Type[];
}

export interface InterfaceElement extends InfoElements {
    /** Abstract interface to other classes */
    $: {
        //Attributes of an Interface (see definition below)

        /** name of the interface */
        name: string;
        /** Type name compatible with the GObject type system */
        "glib:type-name": string;
        /** Function to get the GObject compatible type of the interface  */
        "glib:get-type": string;
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        "c:symbol-prefix"?: string;
        /** Corresponding C type */
        "c:type"?: string;
        /** GObject compatible C structure defining the Interface */
        "glib:type-struct"?: string;
    };

    //Other elements an interface can contain

    prerequisite?: Prerequisite[];
    implements?: Implements[];
    function?: FunctionElement[];
    constructors?: ConstructorElement[]; // Typed as optional
    method?: MethodElement[];
    "virtual-method"?: VirtualMethodElement[];
    field?: FieldElement[];
    property?: PropertyElement[];
    signal?: SignalElement[];
    callback?: CallbackElement[];
    constant?: ConstantElement[];
}

export interface ClassElement extends InfoElements {
    /** GObject inherited class definition */
    $: InfoAttrs & {
        /** Name of the class */
        name: string;
        /** GObject compatible type name of the class */
        "glib:type-name": string;
        /** Function to get the GObject compatible type of the class */
        "glib:get-type": string;
        /** Name of the parent class if any */
        parent?: string;
        /** GObject compatible C structure defining the class */
        "glib:type-struct"?: string;
        /** GObject compatible function to reference or increase the reference count of the class */
        "glib:ref-func"?: string;
        /** GObject compatible function to unreference or decrease the reference count of the class */
        "glib:unref-func"?: string;
        /** GObject compatible function to set a value of a property of the class */
        "glib:set-value-func"?: string;
        /** GObject compatible function to get a value of a property of the class */
        "glib:get-value-func"?: string;
        /** C type of the class */
        "c:type"?: string;
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        "c:symbol-prefix"?: string;
        /** Binary attribute to declare the class abstract or not */
        abstract?: BinaryOption | BinaryOption;
        /** Binary attribute to declare the class fundamental or not (top-level class which do not derives from any other type) */
        "glib:fundamental"?: BinaryOption | BinaryOption;
    };

    /* Other elements a class can contain */

    implements?: Implements[];
    "constructor"?: ConstructorElement[];
    method?: MethodElement[];
    function?: FunctionElement[];
    "virtual-method"?: VirtualMethodElement[];
    field?: FieldElement[];
    property?: PropertyElement[];
    signal?: SignalElement[];
    union?: UnionElement[];
    constant?: ConstantElement[];
    record?: RecordElement[];
    callback?: CallbackElement[];
}

export interface BoxedElement {
    /** Boxed type (wrapper to opaque C structures registered by the type system) */
    $: InfoAttrs & {
        /** GObject compatible type name of the boxed type */
        "glib:name": string;
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        "c:symbol-prefix"?: string;
        /** GObject compatible type name of the boxed type */
        "glib:type-name"?: string;
        /** Function to get the GObject compatible type of the boxed type */
        "glib:get-type"?: string;
    };

    /* Other elements a Boxed type can contain */

    function?: FunctionElement[];
}

export interface RecordElement extends InfoElements {
    /** Record definition, equivalent to a C struct, that is a simple structure, not a class */
    $: InfoAttrs & {
        /** name of the record */
        name: string;
        /** Corresponding C type of the record */
        "c:type"?: string;
        /** Binary attribute to tell if the record is disguised, i.e. whether the c:type is a typedef that doesn't look like a pointer, but is one internally */
        /** Its second meaning is "private" and is set when any typedef struct is parsed which doesn't also include a full struct with fields (https://gitlab.gnome.org/GNOME/gobject-introspection/issues/101) */
        disguised?: BinaryOption | BinaryOption;
        /** GObject compatible C type of the record */
        "glib:type-name"?: string;
        /** Function to get the GObject compatible type of the record */
        "glib:get-type"?: string;
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        "c:symbol-prefix"?: string;
        /** Binary attribute to tell if the record is foreign, that is it is not available in a g-i supported library */
        foreign?: BinaryOption | BinaryOption;
        /** Name of the GObject compatible gtype this record represents. If }, this record will be hidden from generated public APIs. */
        "glib:is-gtype-struct-for"?: string;
    };

    /* Other elements a record can contain */

    field?: FieldElement[];
    function?: FunctionElement[];
    union?: UnionElement[];
    method?: MethodElement[];
    "constructor"?: ConstructorElement[];
    property?: PropertyElement[];
}

//Some base information for most elements like version, deprecation, stability, if they are introspectable or not, etc...
export interface InfoAttrs {
    /** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
    introspectable?: BinaryOption | BinaryOption;
    /** Binary attribute which isBinaryOption (true) if the element has been deprecated */
    deprecated?: string;
    /** Version number from which this element is deprecated */
    "deprecated-version"?: string;
    /** version number of an element */
    version?: string;
    /** give the statibility status of the element. Can take the values "Stable", "Unstable" or "Private" */
    stability?: string[];
}

//Documentation of elements
export interface DocElement {
    /** Version of the documentation */
    "doc-version"?: [
        {
            $: {
                /** Preserve the original formatting of the documentation from the source code */
                "xml:space"?: "preserve";
                /** Preserve the original formatting of the documentation from the source code. Recommended to use this instead of xml:space */
                "xml:whitespace"?: "preserve";
            };
            /** the text of the version of the documentation */
            _: string;
        }
    ];
    /** give the stability of the documentation */
    "doc-stability"?: [
        {
            $: {
                /** Preserve the original formatting of the documentation from the source code */
                "xml:space"?: "preserve";
                /** Preserve the original formatting of the documentation from the source code. Recommended to use this instead of xml:space */
                "xml:whitespace"?: "preserve";
                /** a text value about the stability of the documentation. Usually a simple description like stable or unstable */
            };
            _: string;
        }
    ];
    /** documentation of an element */
    doc: [
        {
            $: {
                /** Preserve the original formatting of the documentation from the source code */
                "xml:space"?: "preserve";
                /** Keep the whitespace as they were in the source code */
                "xml:whitespace"?: "preserve";
                /** The file containing this documentation */
                filename: string;
                /** The first line of the documentation in the source code */
                line: string;
                /** The first column of the documentation in the source code */
                column: string;
                /** the text of the documentation */
            };
            _: string;
        }
    ];
    /** Deprecated documentation of an element. Kept for historical reasons in general */
    "doc-deprecated": [
        {
            $: {
                /** Preserve the original formatting of the documentation from the source code */
                "xml:space"?: "preserve";
                /** Keep the whitespace as they were in the source code */
                "xml:whitespace"?: "preserve";
                /** the text of the deprecated documentation */
            };
            _: string;
        }
    ];
    /** Position of the documentation in the original source code */
    "source-position": [
        {
            /** File name of the source of the documentation */
            filename: string;
            /** The first line of the documentation in the source code */
            line: string;
            /** The first column of the documentation in the source code */
            column: string[];
        }
    ];
}

//Information about elements can be a documentation of annotations
export interface InfoElements extends DocElement {
    annotation: Annotation[];
}

export interface ConstantElement extends InfoElements, AnyType {
    /** A constant entity, similar to const variable in C */
    $: InfoAttrs & {
        /** name of the constant */
        name: string;
        /** value of the constant */
        value: string;
        /** corresponding C type of the constant in C */
        "c:type"?: string;
        /** corresponding C identifier in the source code */
        "c:identifier"?: string;
    };
}

export interface PropertyElement extends InfoElements, AnyType {
    /** Property, that is a variable or members with getter and setter functions */
    $: InfoAttrs & {
        /** name of the property */
        name: string;
        /** Binary attribute, true if the property is writeable, that is it has a setter function */
        writable?: BinaryOption | BinaryOption;
        /** Binary attribute, true if the property is readable, that is it has a getter function */
        readable?: BinaryOption | BinaryOption;
        /** Binary attribute, true if the property will be set upon construction */
        construct?: BinaryOption | BinaryOption;
        /** Binary attribute, true if the property can only be set upon construction */
        "construct-only"?: BinaryOption | BinaryOption;
        //Define the transfer of ownership of the property element
        TransferOwnership?;
    };
}

export interface SignalElement extends InfoElements {
    /** A signal as defined in the GObject system (https://developer.gnome.org/gobject/stable/signal.html) */
    $: InfoAttrs & {
        /** name of the signal */
        name: string;
        /** Binary attribute, true if the signal has a detailed parameter (https://developer.gnome.org/gobject/stable/signal.html#signal-detail//and https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags) */
        detailed?: BinaryOption | BinaryOption;
        /** When to run the signal during the 5 steps of signal emission (https://developer.gnome.org/gobject/stable/signal.html#signal-emission and https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags) */
        when?: "first" | "last" | "cleanup";
        /** Binary attribute, true if the signal can be freely emitted on alive objects from user code (https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags) */
        action?: BinaryOption | BinaryOption;
        /** Binary attribute, true if no emission hooks are supported for this signal (https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags)  */
        "no-hooks"?: BinaryOption | BinaryOption;
        /** Binary attribute, true if signals emitted for an object while currently being in emission for this very object will not be emitted recursively, but instead cause the first emission to be restarted (https://developer.gnome.org/gobject/unstable/gobject-Signals.html#GSignalFlags) */
        "no-recurse"?: BinaryOption | BinaryOption;
    };

    /* Other elements a property can contain */

    parameters?: [CallableParams];
    "return-value"?: CallableReturn[];
}

export interface FieldElement extends InfoElements, AnyType {
    /** A field of struct of union structure, that is a C bit field, that is a fixed length in bits variable */
    $: InfoAttrs & {
        /** name of the field */
        name: string;
        /** Binary attribute, true if the field is writeable */
        writable?: BinaryOption | BinaryOption;
        /** Binary attribute, true if the field is readable */
        readable?: BinaryOption | BinaryOption;
        /** Binary attribute, true if the field is private to the structure or has public ("0") visibility */
        private?: BinaryOption | BinaryOption;
        /** number of bits of the field */
        bits?: UnparsedNumber /** integer */;
    };

    /* Other elements a property can contain */
    callback?: CallbackElement[];
}

export interface CallbackElement extends InfoElements {
    /** A callback closure, that is a function called when a signal is emitted (as an answer to that signal) */
    $: InfoAttrs & {
        /** name of the callback */
        name: string;
        /** the C type returned by the callback closure (i.e. function) */
        "c:type"?: string;
        /** Binary attribute, true if the callback can throw an error */
        throws?: BinaryOption | BinaryOption;
    };

    /* Other elements a property can contain */

    parameters?: [CallableParams];
    "return-value"?: CallableReturn[];
}

export interface Implements {
    /** Give the name of the interface it implements. This element is generally used within a class element */
    $: InfoAttrs & {
        /** name of the interface implemented by a class */
        name: string;
    };
}

export interface Prerequisite {
    /** Interface which is pre-required to implement another interface. This node is generally using within an interface element */
    $: InfoAttrs & {
        /** name of the required interface */
        name: string;
    };
}

//A generic grammar element to represent either a simple Type or an Array of the same Type
export interface AnyType {
    type?: Type[];
    array?: ArrayType[];
}

export interface Type extends DocElement {
    /** A simple type of data (as opposed to an array) */
    $: InfoAttrs & {
        /** name of the type */
        name?: string;
        /** the C representation of the type */
        "c:type"?: string;
        /** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
        introspectable?: BinaryOption | BinaryOption;
    };

    array?: ArrayType[];
    type: Type[];
}

export interface ArrayType {
    /** An array type of data where each element is of the same type */
    $: InfoAttrs & {
        /** name of the array type */
        name?: string;
        /** Binary attribute, true if the last element of the array is zero. For example, in an array of pointers, the last pointer would be NULL */
        "zero-terminated"?: BinaryOption | BinaryOption;
        /** size of an array of predetermined fixed size. For example a C array declared as char arr[5]. */
        "fixed-size"?: UnparsedNumber /** integer */;
        /** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
        introspectable?: BinaryOption | BinaryOption;
        /** 0-based index of parameter element that specifies the length of the array */
        length?: UnparsedNumber /** integer */;
        /** the C representation of the array type */
        "c:type"?: string;
    };

    array?: ArrayType[];
    type?: Type[];
}

export enum TransferOwnershipType {
    Container = "container",
    Full = "full",
    None = "none",
}

export interface TransferOwnership {
    /** attributes used by many elements for the transfer of ownership, with for example, a returned value. "none" if the recipient does not own the value, "container" if the recipient owns the container but not the value (for arrays or lists for example) , "full" the recipient owns the entire value. For details, see https://wiki.gnome.org/Projects/GObjectIntrospection/Annotations#Memory_and_lifecycle_management */
    "transfer-ownership": TransferOwnershipType;
}

export interface ConstructorElement {
    /** A constructor of a class */
    $: InfoAttrs & CallableAttrs;

    parameters?: [CallableParams];
    "return-value"?: CallableReturn[];
}

/** Attributes of a Callable (functions, callbacks, closures, etc...) */
export interface CallableAttrs {
    /** name of the Callable */
    name: string;
    //C identifier in the source code of the Callable
    "c:identifier"?: string;
    /** Callable it is shadowed by. For example, in C++, only one version of an overloaded callable will appear */
    "shadowed-by"?: string;
    /** Callable it shadows. For example, in C++, only one version of an overloaded callable will appear */
    shadows?: string;
    /** Binary attribute, true if the callable can throw an error */
    throws?: BinaryOption | BinaryOption;
    /** if for backward compatibility reason the callable has a name in the source code but should be known by another one, this attribute contains the new name     */
    "moved-to"?: string[];
}

export interface VarArgs {
    /** an element, usually found in a parameter element for variadic parameter in a function or callable */
    $: InfoAttrs;
}

export interface CallableParamElement extends DocElement, AnyType {
    /** parameter element of a list of parameters */
    $: InfoAttrs &
    Partial<TransferOwnership> & {
        /** name of the parameter */
        name?: string;
        /** Binary attribute, true if the parameter can have a null value */
        nullable?: BinaryOption | BinaryOption;
        /** Deprecated. Replaced by nullable and optional */
        "allow-none"?: BinaryOption | BinaryOption;
        /** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
        introspectable?: BinaryOption | BinaryOption;
        /** the parameter is a user_data for callbacks. The value points to a different parameter that is the actual callback */
        closure?: UnparsedNumber /** integer */;
        /** the parameter is a destroy_data for callbacks. The value points to a different parameter that is the actual callback */
        destroy?: UnparsedNumber /** integer */;
        /** the parameter is a callback, the value indicates the lifetime of the call. For language bindings which want to know when the resources required to do the call can be freed. "notified" valid until a GDestroyNotify argument is called, "async" only valid for the duration of the first callback invocationi (can only be called once), "call" only valid for the duration of the call, can be called multiple times during the call.  */
        scope?: "notified" | "async" | "call";
        /** direction of the parameter. "in" goes into the callable, "out" for output parameters from the callable (reference in C++, var in Pascal, etc...), "inout" for both (like a pre-allocated structure which will be filled-in by the callable) */
        direction?: Direction;
        /** Binary attribute, true if the caller should allocate the parameter before calling the callable */
        "caller-allocates"?: BinaryOption | BinaryOption;
        /** Binary attribute, true if the parameter is optional */
        optional?: BinaryOption | BinaryOption;
        /**  Binary attribute, true if the parameter can be omitted from the introspected output */
        skip?: BinaryOption | BinaryOption;
    };

    varargs?: VarArgs[];
}

// Refer to https://wiki.gnome.org/Projects/GObjectIntrospection/Annotations#Support_for_GObject_closures
export interface CallableParams {
    /** parameters element of a callable, that is in general parameters of a function or similar */
    parameter: CallableParamElement[];
    /** instance-parameter is a parameter of a C function which is an instance of an existing object. So the callable is surely a method of a class, and this parameter points to the instance of the object. In C++, this would be equivalent to the pointer this which is not passed to the method, in Python it's equivalent to self. */
    "instance-parameter"?: AnyType &
    {
        $: Partial<{
          /** name of the instance-parameter */ name: string;
            /** Binary attribute, true if the parameter can have a null value */
            nullable?: BinaryOption | BinaryOption;
            /** Deprecated. Replaced by nullable and optional */
            "allow-none"?: BinaryOption | BinaryOption;
            /** direction of the parameter. "in" goes into the callable, "out" for output parameters from the callable (reference in C++, var in Pascal, etc...), "inout" for both (like a pre-allocated structure which will be filled-in by the callable) */
            direction?: Direction;
            /** Binary attribute, true if the caller should allocate the parameter before calling the callable */
            "caller-allocates"?: BinaryOption | BinaryOption;
        }> &
        Partial<TransferOwnership>;
    }[];
}

export interface CallableReturn extends AnyType, DocElement {
    /** return value of a callable */
    $: {
        /** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
        introspectable?: BinaryOption | BinaryOption;
        /** Binary attribute, true if the parameter can have a null value */
        nullable?: BinaryOption | BinaryOption;
        /** the parameter is a user_data for callbacks. The value points to a different parameter that is the actual callback */
        closure?: UnparsedNumber /** integer */;
        /** the parameter is a callback, the value indicates the lifetime of the call. For language bindings which want to know when the resources required to do the call can be freed. "notified" valid until a GDestroyNotify argument is called, "async" only valid for the duration of the first callback invocationi (can only be called once), "call" only valid for the duration of the call, can be called multiple times during the call.  */
        scope?: "notified" | "async" | "call";
        /** the parameter is a destroy_data for callbacks. The value points to a different parameter that is the actual callback */
        destroy?: UnparsedNumber /** integer */;
        /**  Binary attribute, true if the parameter can be omitted from the introspected output */
        skip?: BinaryOption | BinaryOption;
        /** Deprecated. Replaced by nullable and optional */
        "allow-none"?: BinaryOption | BinaryOption;
    } & Partial<TransferOwnership>;
}

export interface FunctionElement extends DocElement {
    /** element defining a standalone function (as usual in most programming languages) */
    $: InfoAttrs & CallableAttrs;

    parameters?: [CallableParams];
    "return-value"?: CallableReturn[];
}

export interface MethodElement extends DocElement {
    /** element defining a method from a class */
    $: InfoAttrs & CallableAttrs;

    parameters?: [CallableParams];
    "return-value"?: CallableReturn[];
}

export interface VirtualMethodElement extends DocElement {
    /** element defining a virtual method from a class, concept similar to C++ */

    $: InfoAttrs &
    CallableAttrs & {
        /** name of the callable called when invoking this virtual method */
        invoker?: string;
    };

    parameters?: [CallableParams];
    "return-value"?: CallableReturn[];
}

export interface UnionElement extends InfoElements {
    /** element defining a type of data being a union of type, similar to union in C/C++ but extended with fields and methods */
    $: InfoAttrs & {
        /** name of the union */
        name?: string;
        /** C type defining the union */
        "c:type"?: string;
        /** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
        "c:symbol-prefix"?: string;
        /** GObject compatible type name */
        "glib:type-name"?: string;
        /** function to retrieve the GObject compatible type of the element */
        "glib:get-type"?: string;
    };

    field?: FieldElement[];
    "constructor"?: ConstructorElement[];
    method?: MethodElement[];
    function?: FunctionElement[];
    record?: RecordElement[];
}

export interface BitfieldElement extends InfoElements {
    /** element defining a bit field (as in C) */
    $: InfoAttrs & {
        /** name of the bit field */
        name: string;
        /** corresponding C type of the bit field type */
        "c:type": string;
        /** GObject compatible type name */
        "glib:type-name"?: string;
        /** function to retrieve the GObject compatible type of the element */
        "glib:get-type"?: string;
    };

    member: MemberElement[];
    function: FunctionElement[];
}

export interface EnumElement extends InfoElements {
    /** element defining a enumeration type similar to enum in C/C++ */
    $: InfoAttrs & {
        /** name of the enumeration */
        name: string;
        /** corresponding C type of the enumeration type */
        "c:type": string;
        /** GObject compatible type name */
        "glib:type-name"?: string;
        /** function to retrieve the GObject compatible type of the element */
        "glib:get-type"?: string;
        /** Error domain of this enumeration in a stringified form */
        "glib:error-domain"?: string;
    };

    member?: MemberElement[];
    function?: FunctionElement[];
}

export interface MemberElement extends InfoElements {
    /** element defining a member of a bit field or an enumeration */
    $: InfoAttrs & {
        /** name of the member */
        name: string;
        /** value of the member */
        value: string;
        /** corresponding C type of the member */
        "c:identifier": string;
        /** short nickname of the member */
        "glib:nick"?: string;
    };
}
