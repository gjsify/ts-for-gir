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
	_class?: GirClassElementExtended | GirUnionElementExtended | GirInterfaceElementExtended | GirRecordElementExtended;
}

// Extended GIR types that include runtime context
// These extend the base XML types with additional processing information

/**
 * Extended GIR alias element with runtime context.
 * Represents a type substitution (typedef in C).
 */
export interface GirAliasElementExtended extends PartOfClass, BaseGirAliasElement {}

/**
 * Extended GIR annotation with runtime context.
 * Represents user-defined annotations from source code.
 */
export interface GirAnnotationExtended extends BaseGirAnnotation {
	// Annotations typically don't need runtime context
}

/**
 * Extended GIR bitfield element with runtime context.
 * Represents a bit field definition.
 */
export interface GirBitfieldElementExtended extends PartOfModule, BaseGirBitfieldElement {
	member: GirMemberElementExtended[];
	function: GirFunctionElementExtended[];
}

/**
 * Extended GIR callback element with runtime context.
 * Represents a callback closure/function pointer.
 */
export interface GirCallbackElementExtended extends PartOfModule, BaseGirCallbackElement {
	parameters?: [GirCallableParamsExtended];
	"return-value"?: GirCallableReturnExtended[];
}

/**
 * Extended GIR callable parameter element with runtime context.
 */
export interface GirCallableParamElementExtended extends PartOfClass, BaseGirCallableParamElement {}

/**
 * Extended GIR callable parameters with runtime context.
 */
export interface GirCallableParamsExtended extends BaseGirCallableParams {
	parameter: GirCallableParamElementExtended[];
	"instance-parameter"?: GirInstanceParameter[];
}

/**
 * Extended GIR callable return value with runtime context.
 */
export interface GirCallableReturnExtended extends PartOfClass, BaseGirCallableReturn {
	type?: GirType[];
}

/**
 * Extended GIR class element with runtime context.
 * Represents a GObject class definition.
 */
export interface GirClassElementExtended extends PartOfModule, BaseGirClassElement {
	implements?: GirImplements[];
	constructor?: GirConstructorElementExtended[];
	method?: GirMethodElementExtended[];
	function?: GirFunctionElementExtended[];
	"virtual-method"?: GirVirtualMethodElementExtended[];
	field?: GirFieldElementExtended[];
	property?: GirPropertyElementExtended[];
	signal?: GirSignalElementExtended[];
	"glib:signal"?: GirSignalElementExtended[];
	union?: GirUnionElementExtended[];
	constant?: GirConstantElementExtended[];
	record?: GirRecordElementExtended[];
	callback?: GirCallbackElementExtended[];
}

/**
 * Extended GIR constant element with runtime context.
 * Represents a constant value definition.
 */
export interface GirConstantElementExtended extends PartOfModule, BaseGirConstantElement {}

/**
 * Extended GIR constructor element with runtime context.
 * Represents a class constructor.
 */
export interface GirConstructorElementExtended extends PartOfClass, BaseGirConstructorElement {
	parameters?: [GirCallableParamsExtended];
	"return-value"?: GirCallableReturnExtended[];
}

/**
 * Extended GIR enumeration element with runtime context.
 * Represents an enumeration type.
 */
export interface GirEnumElementExtended extends PartOfModule, BaseGirEnumElement {
	member?: GirMemberElementExtended[];
	function?: GirFunctionElementExtended[];
}

/**
 * Extended GIR field element with runtime context.
 * Represents a struct/union field.
 */
export interface GirFieldElementExtended extends PartOfClass, BaseGirFieldElement {
	callback?: GirCallbackElementExtended[];
}

/**
 * Extended GIR function element with runtime context.
 * Represents a standalone function.
 */
export interface GirFunctionElementExtended extends PartOfClass, BaseGirFunctionElement {
	parameters?: [GirCallableParamsExtended];
	"return-value"?: GirCallableReturnExtended[];
}

/**
 * Extended GIR interface element with runtime context.
 * Represents an abstract interface.
 */
export interface GirInterfaceElementExtended extends PartOfModule, BaseGirInterfaceElement {
	prerequisite?: GirPrerequisite[];
	implements?: GirImplements[];
	function?: GirFunctionElementExtended[];
	constructor?: GirConstructorElementExtended[];
	method?: GirMethodElementExtended[];
	"virtual-method"?: GirVirtualMethodElementExtended[];
	field?: GirFieldElementExtended[];
	property?: GirPropertyElementExtended[];
	signal?: GirSignalElementExtended[];
	"glib:signal"?: GirSignalElementExtended[];
	callback?: GirCallbackElementExtended[];
	constant?: GirConstantElementExtended[];
}

/**
 * Extended GIR member element with runtime context.
 * Represents an enumeration or bitfield member.
 */
export interface GirMemberElementExtended extends BaseGirMemberElement {
	// Members typically don't need additional runtime context
}

/**
 * Extended GIR method element with runtime context.
 * Represents a class/interface method.
 */
export interface GirMethodElementExtended extends PartOfClass, BaseGirMethodElement {
	parameters?: [GirCallableParamsExtended];
	"return-value"?: GirCallableReturnExtended[];
}

/**
 * Extended GIR namespace with runtime context.
 * Represents a GIR namespace containing all definitions.
 */
export interface GirNamespaceExtended extends BaseGirNamespace {
	alias?: GirAliasElementExtended[];
	class?: GirClassElementExtended[];
	interface?: GirInterfaceElementExtended[];
	record?: GirRecordElementExtended[];
	enumeration?: GirEnumElementExtended[];
	function?: GirFunctionElementExtended[];
	union?: GirUnionElementExtended[];
	bitfield?: GirBitfieldElementExtended[];
	callback?: GirCallbackElementExtended[];
	constant?: GirConstantElementExtended[];
	annotation?: GirAnnotationExtended[];
	"glib:boxed"?: GirBoxedElement[];
}

/**
 * Extended GIR property element with runtime context.
 * Represents a class/interface property.
 */
export interface GirPropertyElementExtended extends PartOfClass, BaseGirPropertyElement {}

/**
 * Extended GIR record element with runtime context.
 * Represents a C struct definition.
 */
export interface GirRecordElementExtended extends PartOfModule, BaseGirRecordElement {
	field?: GirFieldElementExtended[];
	function?: GirFunctionElementExtended[];
	union?: GirUnionElementExtended[];
	method?: GirMethodElementExtended[];
	constructor?: GirConstructorElementExtended[];
	property?: GirPropertyElementExtended[];
}

/**
 * Extended GIR repository with runtime context.
 * Root element of a GIR file.
 */
export interface GirRepositoryExtended extends BaseGirRepository {
	namespace?: GirNamespaceExtended[];
}

/**
 * Extended GIR signal element with runtime context.
 * Represents a GObject signal.
 */
export interface GirSignalElementExtended extends PartOfModule, BaseGirSignalElement {
	parameters?: [GirCallableParamsExtended];
	"return-value"?: GirCallableReturnExtended[];
}

/**
 * Extended GIR union element with runtime context.
 * Represents a C union definition.
 */
export interface GirUnionElementExtended extends PartOfModule, BaseGirUnionElement {
	field?: GirFieldElementExtended[];
	constructor?: GirConstructorElementExtended[];
	method?: GirMethodElementExtended[];
	function?: GirFunctionElementExtended[];
	record?: GirRecordElementExtended[];
}

/**
 * Extended GIR virtual method element with runtime context.
 * Represents a virtual method in a class/interface.
 */
export interface GirVirtualMethodElementExtended extends PartOfClass, BaseGirVirtualMethodElement {
	parameters?: [GirCallableParamsExtended];
	"return-value"?: GirCallableReturnExtended[];
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

// Convenience type aliases for backward compatibility
export type GirAliasElement = GirAliasElementExtended;
export type GirAnnotation = GirAnnotationExtended;
export type GirBitfieldElement = GirBitfieldElementExtended;
export type GirCallbackElement = GirCallbackElementExtended;
export type GirCallableParamElement = GirCallableParamElementExtended;
export type GirCallableParams = GirCallableParamsExtended;
export type GirCallableReturn = GirCallableReturnExtended;
export type GirClassElement = GirClassElementExtended;
export type GirConstantElement = GirConstantElementExtended;
export type GirConstructorElement = GirConstructorElementExtended;
export type GirEnumElement = GirEnumElementExtended;
export type GirFieldElement = GirFieldElementExtended;
export type GirFunctionElement = GirFunctionElementExtended;
export type GirInterfaceElement = GirInterfaceElementExtended;
export type GirMemberElement = GirMemberElementExtended;
export type GirMethodElement = GirMethodElementExtended;
export type GirNamespace = GirNamespaceExtended;
export type GirPropertyElement = GirPropertyElementExtended;
export type GirRecordElement = GirRecordElementExtended;
export type GirRepository = GirRepositoryExtended;
export type GirSignalElement = GirSignalElementExtended;
export type GirUnionElement = GirUnionElementExtended;
export type GirVirtualMethodElement = GirVirtualMethodElementExtended;
