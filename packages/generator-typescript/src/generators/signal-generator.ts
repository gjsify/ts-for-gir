import {
	BinaryType,
	BooleanType,
	FilterBehavior,
	filterConflicts,
	type GirModule,
	generateIndent,
	type IntrospectedBaseClass,
	IntrospectedClass,
	IntrospectedClassFunction,
	IntrospectedInterface,
	mergeDescs,
	NumberType,
	type OptionsGeneration,
	VoidType,
} from "@ts-for-gir/lib";
import type { ModuleGenerator } from "../module-generator.ts";

/**
 * Handles generation of GObject signal-related TypeScript definitions.
 * Extracted from ModuleGenerator for better separation of concerns.
 */
export class SignalGenerator {
	constructor(private readonly core: ModuleGenerator) {}

	private get namespace(): GirModule {
		return this.core.girNamespace;
	}

	private get config(): OptionsGeneration {
		return this.core.config;
	}

	/**
	 * Generate SignalSignatures interface and related signal interfaces for a class
	 */
	generateClassSignalInterfaces(girClass: IntrospectedClass, indentCount = 0): string[] {
		const def: string[] = [];

		// Always generate SignalSignatures interface for proper inheritance
		def.push(...this.generateSignalSignatures(girClass, indentCount));

		return def;
	}

	/**
	 * Generate SignalSignatures interface for type-safe signal handling.
	 *
	 * Creates a comprehensive mapping of signal names to their callback types,
	 * enabling TypeScript to provide proper type checking and IntelliSense for
	 * GObject signals using the centralized getAllSignals() method from the model.
	 */
	generateSignalSignatures(girClass: IntrospectedClass, indentCount = 0): string[] {
		const def: string[] = [];
		const indent = generateIndent(indentCount);

		def.push(`${indent}// Signal signatures`);
		def.push(`${indent}interface SignalSignatures`);

		const parentSignatures: string[] = [];

		// Inherit signal signatures from parent class
		const parentResolution = girClass.resolveParents().extends();
		if (parentResolution && parentResolution.node instanceof IntrospectedClass) {
			const parentClass = parentResolution.node as IntrospectedClass;
			const parentTypeIdentifier = parentResolution.identifier
				.resolveIdentifier(this.namespace, this.config)
				?.print(this.namespace, this.config);

			const hasSignalMethods = parentClass.signals?.length > 0;
			const isNotTemplateWorkaround = !(
				this.namespace.namespace === "Gimp" && ["ParamObject", "ParamItem", "ParamArray"].includes(parentClass.name)
			);

			if (parentTypeIdentifier && (hasSignalMethods || isNotTemplateWorkaround)) {
				parentSignatures.push(`${parentTypeIdentifier}.SignalSignatures`);
			}
		}

		// Inherit signal signatures from implemented interfaces
		const interfaceSignatures = girClass
			.resolveParents()
			.implements()
			.filter((iface) => iface.node instanceof IntrospectedInterface)
			.filter((iface) => {
				const node = iface.node as unknown as { signals?: unknown[] };
				return node.signals && node.signals.length > 0;
			})
			.map((iface) => {
				const interfaceTypeIdentifier = iface.identifier
					.resolveIdentifier(this.namespace, this.config)
					?.print(this.namespace, this.config);
				return interfaceTypeIdentifier ? `${interfaceTypeIdentifier}.SignalSignatures` : null;
			})
			.filter((sig): sig is string => !!sig);

		parentSignatures.push(...interfaceSignatures);

		if (parentSignatures.length > 0) {
			def.push(` extends ${parentSignatures.join(", ")} {`);
		} else {
			const isGObjectObject = girClass.name === "Object" && girClass.namespace.namespace === "GObject";

			if (isGObjectObject) {
				def.push(" {");
			} else {
				const gobjectNamespace = this.namespace.assertInstalledImport("GObject");
				const gobjectObjectClass = gobjectNamespace.assertClass("Object");
				const gobjectRef = gobjectObjectClass
					.getType()
					.resolveIdentifier(this.namespace, this.config)
					?.print(this.namespace, this.config);

				const fallbackRef = gobjectRef ? `${gobjectRef}.SignalSignatures` : "GObject.Object.SignalSignatures";
				def.push(` extends ${fallbackRef} {`);
			}
		}

		const allSignals = girClass.getAllSignals();

		allSignals.forEach((signalInfo) => {
			const signalKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(signalInfo.name) ? signalInfo.name : `"${signalInfo.name}"`;

			let cbType: string;

			if (signalInfo.isNotifySignal) {
				const gobjectRef = this.namespace.namespace === "GObject" ? "" : "GObject.";
				cbType = `(pspec: ${gobjectRef}ParamSpec) => void`;
			} else if (signalInfo.signal) {
				const paramTypes = signalInfo.signal.parameters
					.map((p, idx) => `arg${idx}: ${this.core.generateType(p.type)}`)
					.join(", ");

				let returnType = signalInfo.signal.return_type;
				if (signalInfo.signal.return_type.equals(BooleanType)) {
					returnType = new BinaryType(BooleanType, VoidType);
				}
				const returnTypeStr = this.core.generateType(returnType);

				cbType = `(${paramTypes}) => ${returnTypeStr}`;
			} else {
				const paramTypes = signalInfo.parameterTypes?.map((type, idx) => `arg${idx}: ${type}`) || [];
				const returnTypeStr = signalInfo.returnType || "void";
				cbType = `(${paramTypes.join(", ")}) => ${returnTypeStr}`;
			}

			def.push(`${indent}    ${signalKey}: ${cbType};`);
		});

		def.push(`${indent}}`);
		def.push("");

		return def;
	}

	/**
	 * Generate type-safe connect/connect_after/emit signal methods
	 */
	generateSignals(girClass: IntrospectedClass): string[] {
		const signalFunctions = [
			new IntrospectedClassFunction({
				name: "connect",
				parent: girClass,
				parameters: [],
				return_type: NumberType,
			}),
			new IntrospectedClassFunction({
				name: "connect_after",
				parent: girClass,
				parameters: [],
				return_type: NumberType,
			}),
			new IntrospectedClassFunction({
				name: "emit",
				parent: girClass,
				parameters: [],
				return_type: VoidType,
			}),
		];

		const filteredFunctions = filterConflicts(girClass.namespace, girClass, signalFunctions, FilterBehavior.DELETE);
		const allowedNames = new Set(filteredFunctions.map((f) => f.name));

		const gobjectRef = this.namespace.namespace === "GObject" ? "" : "GObject.";

		const methods: string[] = [];

		if (allowedNames.has("connect")) {
			methods.push(
				`connect<K extends keyof ${girClass.name}.SignalSignatures>(signal: K, callback: ${gobjectRef}SignalCallback<this, ${girClass.name}.SignalSignatures[K]>): number;`,
				"connect(signal: string, callback: (...args: any[]) => any): number;",
			);
		}

		if (allowedNames.has("connect_after")) {
			methods.push(
				`connect_after<K extends keyof ${girClass.name}.SignalSignatures>(signal: K, callback: ${gobjectRef}SignalCallback<this, ${girClass.name}.SignalSignatures[K]>): number;`,
				"connect_after(signal: string, callback: (...args: any[]) => any): number;",
			);
		}

		if (allowedNames.has("emit")) {
			methods.push(
				`emit<K extends keyof ${girClass.name}.SignalSignatures>(signal: K, ...args: ${gobjectRef}GjsParameters<${girClass.name}.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;`,
				"emit(signal: string, ...args: any[]): void;",
			);
		}

		return methods;
	}

	/**
	 * Generate signal methods section with header comment
	 */
	generateClassSignals(girClass: IntrospectedClass): string[] {
		const def: string[] = [];
		const signalDescs = this.generateSignals(girClass);
		def.push(...mergeDescs(signalDescs, "Signals", 1));
		return def;
	}

	/**
	 * Generate the $signals property for type-safe signal access
	 */
	generateClassSignalsProperty(girClass: IntrospectedClass | IntrospectedRecord, indentCount = 1): string[] {
		const def: string[] = [];

		const isGObjectObject = girClass.name === "Object" && girClass.namespace.namespace === "GObject";
		const hasGObjectParent =
			isGObjectObject ||
			girClass.someParent((p: IntrospectedBaseClass) => p.namespace.namespace === "GObject" && p.name === "Object");

		if (hasGObjectParent) {
			def.push(
				"",
				`${generateIndent(indentCount)}/**`,
				`${generateIndent(indentCount)} * Compile-time signal type information.`,
				`${generateIndent(indentCount)} *`,
				`${generateIndent(indentCount)} * This instance property is generated only for TypeScript type checking.`,
				`${generateIndent(indentCount)} * It is not defined at runtime and should not be accessed in JS code.`,
				`${generateIndent(indentCount)} * @internal`,
				`${generateIndent(indentCount)} */`,
				`${generateIndent(indentCount)}$signals: ${girClass.name}.SignalSignatures;`,
				"",
			);
		}

		return def;
	}
}

// Re-export for use in type imports
import type { IntrospectedRecord } from "@ts-for-gir/lib";
