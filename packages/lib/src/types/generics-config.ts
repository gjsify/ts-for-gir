import type { IntrospectedNamespace } from "../gir/namespace.ts";

/**
 * Function type for modifying a namespace with generic type information
 */
export type NamespaceModifier = (namespace: IntrospectedNamespace, inferGenerics: boolean) => void;

/**
 * Configuration for namespace-specific generic modifications
 */
export interface NamespaceDefinition {
	/** The namespace name (e.g., "Gtk", "Gio") */
	namespace: string;
	/** The namespace version (e.g., "4.0", "2.0") */
	version: string;
	/** The modifier function to apply generics to the namespace */
	modifier: NamespaceModifier;
}

/**
 * Configuration for Clutter template-based generic modifications
 */
export interface ClutterTemplateConfig {
	/** The namespace name - always "Clutter" */
	namespace: string;
	/** The Clutter version */
	version: string;
	/** The modifier function to apply Clutter-specific generics */
	modifier: NamespaceModifier;
}

/**
 * Configuration for Meta template-based generic modifications
 */
export interface MetaTemplateConfig {
	/** The namespace name - always "Meta" */
	namespace: string;
	/** The Meta version */
	version: string;
	/** The modifier function to apply Meta-specific generics */
	modifier: NamespaceModifier;
}

/**
 * Configuration for St (Shell Toolkit) template-based generic modifications
 */
export interface StTemplateConfig {
	/** The namespace name - always "St" */
	namespace: string;
	/** The St version */
	version: string;
	/** The modifier function to apply St-specific generics */
	modifier: NamespaceModifier;
}

/**
 * Configuration for GIO-specific generic modifications
 */
export interface GioConfig {
	/** The namespace name - always "Gio" */
	namespace: string;
	/** The GIO version - always "2.0" */
	version: string;
	/** The modifier function to apply GIO-specific generics */
	modifier: (namespace: IntrospectedNamespace) => void;
}

/**
 * Configuration for GTK-specific generic modifications
 */
export interface GtkConfig {
	/** The namespace name - always "Gtk" */
	namespace: string;
	/** The GTK version - always "4.0" */
	version: string;
	/** The modifier function to apply GTK-specific generics */
	modifier: (namespace: IntrospectedNamespace) => void;
}

/**
 * Configuration for GLib-specific generic modifications
 */
export interface GlibConfig {
	/** The namespace name - always "GLib" */
	namespace: string;
	/** The GLib version - always "2.0" */
	version: string;
	/** The modifier function to apply GLib-specific generics */
	modifier: (namespace: IntrospectedNamespace) => void;
} 