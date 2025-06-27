// GIR Types - Complete definitions for GObject Introspection repository types
// Written based on https://gitlab.gnome.org/GNOME/gobject-introspection/-/blob/0c414e34113fca089a67eb1beadfcdce722a89db/docs/gir-1.2.rnc

// Most grammar has been modified to *prefer* potentially being undefined
// as we're parsing from XML files which may or may not contain all parts
// of this grammar

// Many keys are prefixed with `glib:` in XML, this grammar preserves that syntax.

// ========================================
// ENUMS AND BASIC TYPES
// ========================================

export enum GirDirection {
	In = "in",
	Inout = "inout",
	Out = "out",
	/** @deprecated */
	InOut = "in-out",
}

export enum GirTransferOwnershipType {
	Container = "container",
	Full = "full",
	None = "none",
}

/** A type alias for fields which *should* be treated as numerical */
export type GirUnparsedNumber = string;

/** A type alias for 'binary' (boolean) fields */
export type GirBoolean = "0" | "1";

// ========================================
// BASE INTERFACES AND MIXINS
// ========================================

export interface GirXML {
	repository: GirRepository[];
}

export interface GirInfoAttrs {
	/** Binary attribute which is GirBoolean(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
	introspectable?: GirBoolean;
	/** Binary attribute which isBinaryOption (true) if the element has been deprecated */
	deprecated?: string;
	/** Version number from which this element is deprecated */
	"deprecated-version"?: string;
	/** version number of an element */
	version?: string;
	/** give the statibility status of the element. Can take the values "Stable", "Unstable" or "Private" */
	stability?: string[];
}

export interface GirDocElement {
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
		},
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
		},
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
		},
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
		},
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
		},
	];
}

export interface GirInfoElements extends GirDocElement {
	annotation: GirAnnotation[];
}

export interface GirTransferOwnership {
	/** attributes used by many elements for the transfer of ownership, with for example, a returned value.
	 * - "none" if the recipient does not own the value,
	 * - "container" if the recipient owns the container but not the value (for arrays or lists for example),
	 * - "full" the recipient owns the entire value.
	 * For details, see https://wiki.gnome.org/Projects/GObjectIntrospection/Annotations#Memory_and_lifecycle_management */
	"transfer-ownership": GirTransferOwnershipType;
}

export interface GirCallableAttrs {
	/** name of the Callable */
	name: string;
	/** C identifier in the source code of the Callable */
	"c:identifier"?: string;
	/** Callable it is shadowed by. For example, in C++, only one version of an overloaded callable will appear */
	"shadowed-by"?: string;
	/** Callable it shadows. For example, in C++, only one version of an overloaded callable will appear */
	shadows?: string;
	/** Binary attribute, true if the callable can throw an error */
	throws?: GirBoolean;
	/** if for backward compatibility reason the callable has a name in the source code but should be known by another one, this attribute contains the new name */
	"moved-to"?: string[];
}

export interface GirAnyType {
	type?: GirType[];
	array?: GirArrayType[];
}

// ========================================
// RUNTIME CONTEXT MIXINS
// ========================================

export interface GirModule {
	// Forward declaration - matches the lib GirModule class structure
	namespace: string;
	version: string;
	packageName: string;
	importNamespace: string;
	importName: string;
	importPath: string;
}

/**
 * Runtime context for elements that belong to a module.
 * Added during processing to track module relationships.
 */
export interface PartOfModule {
	/** Reference to the module containing this element */
	_module?: GirModule;
	/** Full symbol name including namespace, e.g. 'GObject.Object' */
	_fullSymName?: string;
}

/**
 * Runtime context for elements that belong to a class.
 * Extends PartOfModule with class-specific context.
 */
export interface PartOfClass extends PartOfModule {
	/** The class/union/interface/record this element is defined in */
	_class?: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement;
}

// ========================================
// BASIC STRUCTURAL ELEMENTS
// ========================================

export interface GirCInclude {
	/** Dependant C header file which should be included in C programs */
	$: {
		/** File name of the C header file. The path can be relative. */
		name: string;
	};
}

export interface GirInclude {
	/** Dependant namespace to include with the current namespace. For example, Gtk will need the namespace GLib */
	$: {
		/** name of the dependant namespace to include */
		name: string;
		/** version of the dependant namespace to use */
		version?: string;
	};
}

export interface GirPackage {
	/** @deprecated package name containing the library */
	$: {
		/** name of the package */
		name: string;
	};
}

export interface GirAnnotation {
	/** element defining an annotation from the source code, usually a user-defined annotation associated to a parameter or a return value */
	$: {
		/** name of the attribute */
		name: string;
		/** value of the attribute */
		value: string[];
	};
}

export interface GirImplements {
	/** Give the name of the interface it implements. This element is generally used within a class element */
	$: GirInfoAttrs & {
		/** name of the interface implemented by a class */
		name: string;
	};
}

export interface GirPrerequisite {
	$: {
		name?: string;
	};
}

export interface GirVarArgs {
	/** an element, usually found in a parameter element for variadic parameter in a function or callable */
	$: GirInfoAttrs;
}

// ========================================
// TYPE SYSTEM
// ========================================

export interface GirType extends GirDocElement {
	/** A simple type of data (as opposed to an array) */
	$: GirInfoAttrs & {
		/** name of the type */
		name?: string;
		/** the C representation of the type */
		"c:type"?: string;
		/** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
		introspectable?: GirBoolean;
	};

	array?: GirArrayType[];
	type: GirType[];
}

export interface GirArrayType {
	/** An array type of data where each element is of the same type */
	$: GirInfoAttrs & {
		/** name of the array type */
		name?: string;
		/** Binary attribute, true if the last element of the array is zero. For example, in an array of pointers, the last pointer would be NULL */
		"zero-terminated"?: GirBoolean;
		/** size of an array of predetermined fixed size. For example a C array declared as char arr[5]. */
		"fixed-size"?: GirUnparsedNumber /** integer */;
		/** Binary attribute which is GirBoolean (false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
		introspectable?: GirBoolean;
		/** 0-based index of parameter element that specifies the length of the array */
		length?: GirUnparsedNumber /** integer */;
		/** the C representation of the array type */
		"c:type"?: string;
	};
	array?: GirArrayType[];
	type?: GirType[];
}

// ========================================
// CALLABLE ELEMENTS
// ========================================

export interface GirCallableParamElement extends PartOfClass, GirDocElement, GirAnyType {
	/** parameter element of a list of parameters */
	$: GirInfoAttrs &
		Partial<GirTransferOwnership> & {
			/** name of the parameter */
			name?: string;
			/** Binary attribute, `true` if the parameter can have a null value */
			nullable?: GirBoolean;
			/** @deprecated Replaced by {@link allow-none} */
			"null-ok"?: GirBoolean;
			/** @deprecated Replaced by {@link nullable} and {@link optional} */
			"allow-none"?: GirBoolean;
			/** Binary attribute which is GirBoolean(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
			introspectable?: GirBoolean;
			/** the parameter is a user_data for callbacks. The value points to a different parameter that is the actual callback */
			closure?: GirUnparsedNumber /** integer */;
			/** the parameter is a destroy_data for callbacks. The value points to a different parameter that is the actual callback */
			destroy?: GirUnparsedNumber /** integer */;
			/** the parameter is a callback, the value indicates the lifetime of the call. For language bindings which want to know when the resources required to do the call can be freed. "notified" valid until a GDestroyNotify argument is called, "async" only valid for the duration of the first callback invocation (can only be called once), "call" only valid for the duration of the call, can be called multiple times during the call.  */
			scope?: "notified" | "async" | "call";
			/** direction of the parameter. "in" goes into the callable, "out" for output parameters from the callable (reference in C++, var in Pascal, etc...), "inout" for both (like a pre-allocated structure which will be filled-in by the callable) */
			direction?: GirDirection;
			/** Binary attribute, `true` if the caller should allocate the parameter before calling the callable */
			"caller-allocates"?: GirBoolean;
			/** Binary attribute, `true` if the parameter is optional */
			optional?: GirBoolean;
			/** Binary attribute, `true` if the parameter can be omitted from the introspected output */
			skip?: GirBoolean;
		};

	varargs?: GirVarArgs[];
}

export interface GirCallableParams {
	/** parameters element of a callable, that is in general parameters of a function or similar */
	parameter: GirCallableParamElement[];
	/** instance-parameter is a parameter of a C function which is an instance of an existing object. So the callable is surely a method of a class, and this parameter points to the instance of the object. In C++, this would be equivalent to the pointer this which is not passed to the method, in Python it's equivalent to self. */
	"instance-parameter"?: GirInstanceParameter[];
}

/**
 * instance-parameter is a parameter of a C function which is an instance of an existing object.
 * So the callable is surely a method of a class, and this parameter points to the instance of the object.
 * In C++, this would be equivalent to the pointer this which is not passed to the method, in Python it's equivalent to self.
 **/
export interface GirInstanceParameter extends GirAnyType {
	$: Partial<{
		/** name of the instance-parameter */ name: string;
		/** Binary attribute, true if the parameter can have a null value */
		nullable?: GirBoolean;
		/** @deprecated Replaced by nullable and optional */
		"allow-none"?: GirBoolean;
		/** @deprecated Replaced by {@link allow-none} */
		"null-ok"?: GirBoolean;
		/** direction of the parameter. "in" goes into the callable, "out" for output parameters from the callable (reference in C++, var in Pascal, etc...), "inout" for both (like a pre-allocated structure which will be filled-in by the callable) */
		direction?: GirDirection;
		/** Binary attribute, true if the caller should allocate the parameter before calling the callable */
		"caller-allocates"?: GirBoolean;
	}> &
		Partial<GirTransferOwnership>;
	type?: GirType[];
}

export interface GirCallableReturn extends PartOfClass, GirAnyType, GirDocElement {
	/** return value of a callable */
	$: {
		name?: string;
		/** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
		introspectable?: GirBoolean;
		/** Binary attribute, true if the parameter can have a null value */
		nullable?: GirBoolean;
		/** the parameter is a user_data for callbacks. The value points to a different parameter that is the actual callback */
		closure?: GirUnparsedNumber /** integer */;
		/** the parameter is a callback, the value indicates the lifetime of the call. For language bindings which want to know when the resources required to do the call can be freed. "notified" valid until a GDestroyNotify argument is called, "async" only valid for the duration of the first callback invocationi (can only be called once), "call" only valid for the duration of the call, can be called multiple times during the call.  */
		scope?: "notified" | "async" | "call";
		/** the parameter is a destroy_data for callbacks. The value points to a different parameter that is the actual callback */
		destroy?: GirUnparsedNumber /** integer */;
		/**  Binary attribute, true if the parameter can be omitted from the introspected output */
		skip?: GirBoolean;
		/** @deprecated Replaced by nullable and optional */
		"allow-none"?: GirBoolean;
	} & Partial<GirTransferOwnership>;

	type?: GirType[];
}

// ========================================
// REPOSITORY AND NAMESPACE
// ========================================

/** Root node of a GIR repository. It contains namespaces, which can in turn be implemented in several libraries */
export interface GirRepository {
	$: {
		/** version number of the repository */
		version?: string;
		/** prefixes to filter out from C identifiers for data structures and types. For example, GtkWindow will be Window. If c:symbol-prefixes is not used, then this element is used for both */
		"c:identifier-prefixes"?: string;
		/** prefixes to filter out from C functions. For example, gtk_window_new will lose gtk_ */
		"c:symbol-prefixes"?: string;
	};

	/* Other elements a repository can contain */
	include?: GirInclude[];
	"c:include": GirCInclude[];
	package: GirPackage[];
	namespace?: GirNamespace[];
}

/** Namespace which maps metadata entries to C functionality. This a similar concept to namespace in C++, but for GObject-based C libraries */
export interface GirNamespace {
	$: GirInfoAttrs & {
		/** name of the namespace. For example, 'Gtk' (technically optional) */
		name: string;
		/** version number of the namespace (technically optional) */
		version: string;
		/** prefixes to filter out from C identifiers for data structures and types. For example, GtkWindow will be Window. If c:symbol-prefixes is not used, then this element is used for both */
		"c:identifier-prefixes"?: string;
		/** prefixes to filter out from C functions. For example, gtk_window_new will lose gtk_ */
		"c:symbol-prefixes"?: string;
		/** @deprecated the same as c:identifier-prefixes. Only used for backward compatibility  */
		"c:prefix"?: string;
		/** Path to the shared library implementing the namespace. It can be a comma-separated list, with relative path only */
		"shared-library"?: string;
	};

	/* Other elements a namespace can contain */
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
	"glib:boxed"?: GirBoxedElement[];
}

// ========================================
// CLASS AND INTERFACE ELEMENTS
// ========================================

/** GObject inherited class definition */
export interface GirClassElement extends PartOfModule, GirInfoElements {
	$: GirInfoAttrs & {
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
		abstract?: GirBoolean;
		/** Binary attribute to declare the class fundamental or not (top-level class which do not derives from any other type) */
		"glib:fundamental"?: GirBoolean;
		/** Binary attribute to declare the class final or not (non-derivable class in a derivable hierarchy) */
		final: GirBoolean;
	};

	/* Other elements a class can contain */
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

/** Abstract interface to other classes */
export interface GirInterfaceElement extends PartOfModule, GirInfoElements {
	$: GirInfoAttrs & {
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
	prerequisite?: GirPrerequisite[];
	implements?: GirImplements[];
	function?: GirFunctionElement[];
	constructor?: GirConstructorElement[]; // Typed as optional
	method?: GirMethodElement[];
	"virtual-method"?: GirVirtualMethodElement[];
	field?: GirFieldElement[];
	property?: GirPropertyElement[];
	signal?: GirSignalElement[];
	"glib:signal"?: GirSignalElement[];
	callback?: GirCallbackElement[];
	constant?: GirConstantElement[];
}

// ========================================
// STRUCTURAL ELEMENTS
// ========================================

/** Record definition, equivalent to a C struct, that is a simple structure, not a class */
export interface GirRecordElement extends PartOfModule, GirInfoElements {
	$: GirInfoAttrs & {
		/** name of the record */
		name: string;
		/** Corresponding C type of the record */
		"c:type"?: string;
		/**
		 * @deprecated
		 *
		 * Binary attribute to tell if the record is disguised, i.e. whether the c:type
		 * is a typedef that doesn't look like a pointer, but is one internally. Its second meaning
		 * is "private" and is set when any typedef struct is parsed which doesn't also include a
		 * full struct with fields (https://gitlab.gnome.org/GNOME/gobject-introspection/issues/101)
		 * Replaced by "opaque" and "pointer".
		 */
		disguised?: GirBoolean;
		/** Binary attribute for a typedef struct that does not have a corresponding public structure definition */
		opaque?: GirBoolean;
		/** Binary attribute for a typedef struct pointer, e.g. typedef struct Foo* FooPtr */
		pointer?: GirBoolean;
		/** GObject compatible C type of the record */
		"glib:type-name"?: string;
		/** Function to get the GObject compatible type of the record */
		"glib:get-type"?: string;
		/** prefix to filter out from C functions. For example, gtk_window_new will lose gtk_ */
		"c:symbol-prefix"?: string;
		/** Binary attribute to tell if the record is foreign, that is it is not available in a g-i supported library */
		foreign?: GirBoolean;
		/** Name of the GObject compatible gtype this record represents. If }, this record will be hidden from generated public APIs. */
		"glib:is-gtype-struct-for"?: string;
	};

	/* Other elements a record can contain */
	field?: GirFieldElement[];
	function?: GirFunctionElement[];
	union?: GirUnionElement[];
	method?: GirMethodElement[];
	constructor?: GirConstructorElement[];
	property?: GirPropertyElement[];
}

/** element defining a type of data being a union of type, similar to union in C/C++ but extended with fields and methods */
export interface GirUnionElement extends PartOfModule, GirInfoElements {
	$: GirInfoAttrs & {
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

	field?: GirFieldElement[];
	constructor?: GirConstructorElement[];
	method?: GirMethodElement[];
	function?: GirFunctionElement[];
	record?: GirRecordElement[];
}

/** Boxed type (wrapper to opaque C structures registered by the type system) */
export interface GirBoxedElement {
	$: GirInfoAttrs & {
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
	function?: GirFunctionElement[];
}

// ========================================
// DATA ELEMENTS
// ========================================

/** Type's name substitution, representing a typedef in C */
export interface GirAliasElement extends PartOfClass, GirInfoElements {
	$: GirInfoAttrs & {
		/** the new name or typedef'd name */
		name: string;
		/** the corresponding C type's name */
		"c:type"?: string;
	};
	/** Other elements an alias can contain */
	type?: GirType[];
}

/** A constant entity, similar to const variable in C */
export interface GirConstantElement extends PartOfModule, GirInfoElements, GirAnyType {
	$: GirInfoAttrs & {
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

/** Property, that is a variable or members with getter and setter functions */
export interface GirPropertyElement extends PartOfClass, GirInfoElements, GirAnyType {
	$: GirInfoAttrs & {
		/** name of the property */
		name: string;
		/** Binary attribute, true if the property is writeable, that is it has a setter function */
		writable?: GirBoolean;
		/** Binary attribute, true if the property is readable, that is it has a getter function */
		readable?: GirBoolean;
		/** Binary attribute, true if the property will be set upon construction */
		construct?: GirBoolean;
		/** Binary attribute, true if the property can only be set upon construction */
		"construct-only"?: GirBoolean;
		/** The setter function for this property */
		setter?: string;
		/** The getter function for this property */
		getter?: string;
		/** The value of the property when it is not set */
		"default-value"?: string;
	} & Partial<GirTransferOwnership>;
}

/** A field of struct of union structure, that is a C bit field, that is a fixed length in bits variable */
export interface GirFieldElement extends PartOfClass, GirInfoElements, GirAnyType {
	$: GirInfoAttrs & {
		/** name of the field */
		name: string;
		/** Binary attribute, true if the field is writeable */
		writable?: GirBoolean;
		/** Binary attribute, true if the field is readable */
		readable?: GirBoolean;
		/** Binary attribute, true if the field is private to the structure or has public ("0") visibility */
		private?: GirBoolean;
		/** number of bits of the field */
		bits?: GirUnparsedNumber /** integer */;
	};

	/* Other elements a property can contain */
	callback?: GirCallbackElement[];
}

// ========================================
// ENUM AND BITFIELD ELEMENTS
// ========================================

/** element defining a enumeration type similar to enum in C/C++ */
export interface GirEnumElement extends PartOfModule, GirInfoElements {
	$: GirInfoAttrs & {
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
	member?: GirMemberElement[];
	function?: GirFunctionElement[];
}

/** element defining a bit field (as in C) */
export interface GirBitfieldElement extends PartOfModule, GirInfoElements {
	$: GirInfoAttrs & {
		/** name of the bit field */
		name: string;
		/** corresponding C type of the bit field type */
		"c:type": string;
		/** GObject compatible type name */
		"glib:type-name"?: string;
		/** function to retrieve the GObject compatible type of the element */
		"glib:get-type"?: string;
	};

	member: GirMemberElement[];
	function: GirFunctionElement[];
}

/** element defining a member of a bit field or an enumeration */
export interface GirMemberElement extends GirInfoElements {
	$: GirInfoAttrs & {
		/** name of the member */
		name: string;
		/** value of the member */
		value: string;
		/** corresponding C type of the member */
		"c:identifier": string;
		/** short nickname of the member (from GEnumValue/GFlagsValue) */
		"glib:nick"?: string;
		/** name of the member (from GEnumValue/GFlagsValue) */
		"glib:name"?: string;
	};
}

// ========================================
// FUNCTION AND METHOD ELEMENTS
// ========================================

/** element defining a standalone function (as usual in most programming languages) */
export interface GirFunctionElement extends PartOfClass, GirDocElement {
	$: GirInfoAttrs & GirCallableAttrs;

	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

/** element defining a method from a class */
export interface GirMethodElement extends PartOfClass, GirDocElement {
	$: GirInfoAttrs &
		GirCallableAttrs & {
			/** The GObject property that is set by this method */
			"glib:set-property": string;
			/** The GObject property that is retrieved by this method */
			"glib:get-property": string;
		};

	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

export interface GirVirtualMethodElement extends PartOfClass, GirDocElement {
	$: GirInfoAttrs &
		GirCallableAttrs & {
			/** name of the callable called when invoking this virtual method */
			invoker?: string;
		};

	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

/** A constructor of a class */
export interface GirConstructorElement extends PartOfClass {
	$: GirInfoAttrs & GirCallableAttrs;

	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

/** A callback closure, that is a function called when a signal is emitted (as an answer to that signal) */
export interface GirCallbackElement extends PartOfModule, GirInfoElements {
	$: GirInfoAttrs & {
		/** name of the callback */
		name: string;
		/** the C type returned by the callback closure (i.e. function) */
		"c:type"?: string;
		/** Binary attribute, true if the callback can throw an error */
		throws?: GirBoolean;
		// TODO: I believe callbacks have this as a valid property
		"glib:type-name"?: string;
	};

	/* Other elements a property can contain */
	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

// ========================================
// SIGNAL ELEMENTS
// ========================================

/** A signal as defined in the GObject system (https://docs.gtk.org/gobject/concepts.html#signals) */
export interface GirSignalElement extends PartOfModule, GirInfoElements {
	$: GirInfoAttrs & {
		/** name of the signal */
		name: string;
		/** Binary attribute, true if the signal has a detailed parameter (https://docs.gtk.org/gobject/concepts.html#the-detail-argument and https://docs.gtk.org/gobject/flags.SignalFlags.html) */
		detailed?: GirBoolean;
		/** When to run the signal during the 5 steps of signal emission (https://docs.gtk.org/gobject/concepts.html#signal-emission and https://docs.gtk.org/gobject/flags.SignalFlags.html) */
		when?: "first" | "last" | "cleanup";
		/** Binary attribute, true if the signal can be freely emitted on alive objects from user code (https://docs.gtk.org/gobject/flags.SignalFlags.html) */
		action?: GirBoolean;
		/** Binary attribute, true if no emission hooks are supported for this signal (https://docs.gtk.org/gobject/flags.SignalFlags.html) */
		"no-hooks"?: GirBoolean;
		/** Binary attribute, true if signals emitted for an object while currently being in emission for this very object will not be emitted recursively, but instead cause the first emission to be restarted (https://docs.gtk.org/gobject/flags.SignalFlags.html) */
		"no-recurse"?: GirBoolean;
	};
	/* Other elements a property can contain */

	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

// ========================================
// MODULE GROUPING TYPES
// ========================================

export interface GirModuleResolvedBy {
	namespace: string;
	version: string;
	modifier?: string;
}

export interface GirModulesGrouped {
	namespace: string;
	modules: GirModule[];
}

export interface GirModulesGroupedMap {
	[namespace: string]: GirModulesGrouped;
}
