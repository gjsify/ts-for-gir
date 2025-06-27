// GIR Types - Consolidated definitions for GObject Introspection repository types
// Written based on https://gitlab.gnome.org/GNOME/gobject-introspection/-/blob/0c414e34113fca089a67eb1beadfcdce722a89db/docs/gir-1.2.rnc

// Import base XML types
import type {
	GirAliasElement as BaseGirAliasElement,
	GirAnnotation as BaseGirAnnotation,
	GirBitfieldElement as BaseGirBitfieldElement,
	GirCallableParamElement as BaseGirCallableParamElement,
	GirCallableParams as BaseGirCallableParams,
	GirCallableReturn as BaseGirCallableReturn,
	GirCallbackElement as BaseGirCallbackElement,
	GirClassElement as BaseGirClassElement,
	GirConstantElement as BaseGirConstantElement,
	GirConstructorElement as BaseGirConstructorElement,
	GirEnumElement as BaseGirEnumElement,
	GirFieldElement as BaseGirFieldElement,
	GirFunctionElement as BaseGirFunctionElement,
	GirInterfaceElement as BaseGirInterfaceElement,
	GirMemberElement as BaseGirMemberElement,
	GirMethodElement as BaseGirMethodElement,
	GirNamespace as BaseGirNamespace,
	GirPropertyElement as BaseGirPropertyElement,
	GirRecordElement as BaseGirRecordElement,
	GirRepository as BaseGirRepository,
	GirSignalElement as BaseGirSignalElement,
	GirUnionElement as BaseGirUnionElement,
	GirVirtualMethodElement as BaseGirVirtualMethodElement,
	GirBoxedElement,
	GirImplements,
	GirInstanceParameter,
	GirPrerequisite,
	GirType,
} from "./xml.ts";

// Re-export all base XML types
export * from "./xml.ts";

// Runtime context mixins for processed GIR elements
// These are not part of the XML specification but added during processing

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

// Extended GIR types that include runtime context
// These extend the base XML types with additional processing information

/**
 * GIR alias element with runtime context.
 * Represents a type substitution (typedef in C).
 */
export interface GirAliasElement extends PartOfClass, BaseGirAliasElement {}

/**
 * GIR annotation with runtime context.
 * Represents user-defined annotations from source code.
 */
export interface GirAnnotation extends BaseGirAnnotation {
	// Annotations typically don't need runtime context
}

/**
 * GIR bitfield element with runtime context.
 * Represents a bit field definition.
 */
export interface GirBitfieldElement extends PartOfModule, BaseGirBitfieldElement {
	member: GirMemberElement[];
	function: GirFunctionElement[];
}

/**
 * GIR callback element with runtime context.
 * Represents a callback closure/function pointer.
 */
export interface GirCallbackElement extends PartOfModule, BaseGirCallbackElement {
	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

/**
 * GIR callable parameter element with runtime context.
 */
export interface GirCallableParamElement extends PartOfClass, BaseGirCallableParamElement {}

/**
 * GIR callable parameters with runtime context.
 */
export interface GirCallableParams extends BaseGirCallableParams {
	parameter: GirCallableParamElement[];
	"instance-parameter"?: GirInstanceParameter[];
}

/**
 * GIR callable return value with runtime context.
 */
export interface GirCallableReturn extends PartOfClass, BaseGirCallableReturn {
	type?: GirType[];
}

/**
 * GIR class element with runtime context.
 * Represents a GObject class definition.
 */
export interface GirClassElement extends PartOfModule, BaseGirClassElement {
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

/**
 * GIR constant element with runtime context.
 * Represents a constant value definition.
 */
export interface GirConstantElement extends PartOfModule, BaseGirConstantElement {}

/**
 * GIR constructor element with runtime context.
 * Represents a class constructor.
 */
export interface GirConstructorElement extends PartOfClass, BaseGirConstructorElement {
	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

/**
 * GIR enumeration element with runtime context.
 * Represents an enumeration type.
 */
export interface GirEnumElement extends PartOfModule, BaseGirEnumElement {
	member?: GirMemberElement[];
	function?: GirFunctionElement[];
}

/**
 * GIR field element with runtime context.
 * Represents a struct/union field.
 */
export interface GirFieldElement extends PartOfClass, BaseGirFieldElement {
	callback?: GirCallbackElement[];
}

/**
 * GIR function element with runtime context.
 * Represents a standalone function.
 */
export interface GirFunctionElement extends PartOfClass, BaseGirFunctionElement {
	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

/**
 * GIR interface element with runtime context.
 * Represents an abstract interface.
 */
export interface GirInterfaceElement extends PartOfModule, BaseGirInterfaceElement {
	prerequisite?: GirPrerequisite[];
	implements?: GirImplements[];
	function?: GirFunctionElement[];
	constructor?: GirConstructorElement[];
	method?: GirMethodElement[];
	"virtual-method"?: GirVirtualMethodElement[];
	field?: GirFieldElement[];
	property?: GirPropertyElement[];
	signal?: GirSignalElement[];
	"glib:signal"?: GirSignalElement[];
	callback?: GirCallbackElement[];
	constant?: GirConstantElement[];
}

/**
 * GIR member element with runtime context.
 * Represents an enumeration or bitfield member.
 */
export interface GirMemberElement extends BaseGirMemberElement {
	// Members typically don't need additional runtime context
}

/**
 * GIR method element with runtime context.
 * Represents a class/interface method.
 */
export interface GirMethodElement extends PartOfClass, BaseGirMethodElement {
	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

/**
 * GIR namespace with runtime context.
 * Represents a GIR namespace containing all definitions.
 */
export interface GirNamespace extends BaseGirNamespace {
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

/**
 * GIR property element with runtime context.
 * Represents a class/interface property.
 */
export interface GirPropertyElement extends PartOfClass, BaseGirPropertyElement {}

/**
 * GIR record element with runtime context.
 * Represents a C struct definition.
 */
export interface GirRecordElement extends PartOfModule, BaseGirRecordElement {
	field?: GirFieldElement[];
	function?: GirFunctionElement[];
	union?: GirUnionElement[];
	method?: GirMethodElement[];
	constructor?: GirConstructorElement[];
	property?: GirPropertyElement[];
}

/**
 * GIR repository with runtime context.
 * Root element of a GIR file.
 */
export interface GirRepository extends BaseGirRepository {
	namespace?: GirNamespace[];
}

/**
 * GIR signal element with runtime context.
 * Represents a GObject signal.
 */
export interface GirSignalElement extends PartOfModule, BaseGirSignalElement {
	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

/**
 * GIR union element with runtime context.
 * Represents a C union definition.
 */
export interface GirUnionElement extends PartOfModule, BaseGirUnionElement {
	field?: GirFieldElement[];
	constructor?: GirConstructorElement[];
	method?: GirMethodElement[];
	function?: GirFunctionElement[];
	record?: GirRecordElement[];
}

/**
 * GIR virtual method element with runtime context.
 * Represents a virtual method in a class/interface.
 */
export interface GirVirtualMethodElement extends PartOfClass, BaseGirVirtualMethodElement {
	parameters?: [GirCallableParams];
	"return-value"?: GirCallableReturn[];
}

// Module grouping types for processing
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
