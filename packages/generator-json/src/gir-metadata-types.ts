/**
 * Type definitions for GIR-specific metadata added to TypeDoc JSON output.
 *
 * These types describe the `girMetadata` field added to each TypeDoc reflection
 * and the `girNamespaceMetadata` field added to the project root.
 */

export type GirElementKind =
	| "class"
	| "interface"
	| "record"
	| "enum"
	| "bitfield"
	| "function"
	| "method"
	| "virtual-method"
	| "static-method"
	| "constructor"
	| "property"
	| "field"
	| "signal"
	| "constant"
	| "alias"
	| "callback";

export interface GirReflectionMetadata {
	/** The kind of GIR element this reflection corresponds to */
	girKind: GirElementKind;
	/** Registered type names (c:type, glib:type-name) */
	resolveNames?: string[];
	/** Version when this element was introduced */
	introducedVersion?: string;
	/** Whether this element is deprecated */
	deprecated?: boolean;
	/** Version when this element was deprecated */
	deprecatedVersion?: string;
	/** Deprecation message */
	deprecatedDoc?: string;
	/** Class/Interface-specific metadata */
	classMetadata?: GirClassMetadata;
	/** Function/Method-specific metadata */
	functionMetadata?: GirFunctionMetadata;
	/** Property-specific metadata */
	propertyMetadata?: GirPropertyMetadata;
	/** Signal-specific metadata */
	signalMetadata?: GirSignalMetadata;
	/** Record-specific metadata */
	recordMetadata?: GirRecordMetadata;
	/** Enum-specific metadata */
	enumMetadata?: GirEnumMetadata;
}

export interface GirClassMetadata {
	isAbstract?: boolean;
	interfaces?: string[];
	signalNames?: string[];
}

export interface GirFunctionMetadata {
	isVirtual?: boolean;
	isStatic?: boolean;
	/** Parameter directions keyed by parameter name */
	parameterDirections?: Record<string, string>;
	/** Names of parameters that are nullable */
	nullableParams?: string[];
	/** Names of parameters that are optional */
	optionalParams?: string[];
}

export interface GirPropertyMetadata {
	readable: boolean;
	writable: boolean;
	constructOnly: boolean;
}

export interface GirSignalMetadata {
	/** Original signal name (kebab-case) */
	signalName: string;
	/** Whether this is a detailed signal */
	detailed: boolean;
	/** Whether this signal can be emitted directly from user code */
	action?: boolean;
	/** Whether this signal prevents recursive emission */
	noRecurse?: boolean;
	/** Whether this signal disables emission hooks */
	noHooks?: boolean;
	/** Default handler timing relative to signal emission */
	when?: "first" | "last" | "cleanup";
}

export interface GirRecordMetadata {
	isForeign: boolean;
	isSimple: boolean;
	/** Class this record is a GType struct for */
	structFor?: string;
}

export interface GirEnumMetadata {
	/** Whether this enum represents flags (bitfield) */
	isFlags: boolean;
}

export interface GirNamespaceMetadata {
	namespace: string;
	version: string;
	packageName: string;
	cPrefixes: string[];
	libraryVersion: string;
	dependencies: Array<{ namespace: string; version: string }>;
	/** NPM package version (e.g. "4.20.3-4.0.0-beta.44") */
	packageVersion?: string;
	/** Human-readable display name, e.g. "GTK" */
	displayName?: string;
	/** Short description of the library */
	description?: string;
	/** Logo/icon URL */
	logoUrl?: string;
	/** Project website URL */
	websiteUrl?: string;
	/** URL to upstream C API documentation */
	cDocsUrl?: string;
	/** SPDX license identifier */
	license?: string;
	/** Category for grouping on documentation homepage */
	category?: string;
}

/** A DeclarationReflection extended with optional GIR-specific metadata. */
export interface GirEnrichedReflection {
	girMetadata?: GirReflectionMetadata;
	girNamespaceMetadata?: GirNamespaceMetadata;
}
