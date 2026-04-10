import { GirDirection } from "@gi.ts/parser";
import {
	AnyType,
	addInfoComment,
	addTSDocCommentLines,
	BinaryType,
	ClassStructTypeIdentifier,
	ConflictType,
	DependencyManager,
	FilterBehavior,
	FormatGenerator,
	filterConflicts,
	filterFunctionConflict,
	type Generic,
	type GirDocContext,
	type GirEnumMember,
	type GirModule,
	generateIndent,
	generateMemberName,
	hasVfuncSignatureConflicts,
	IntrospectedAlias,
	type IntrospectedBaseClass,
	IntrospectedCallback,
	IntrospectedClass,
	IntrospectedClassCallback,
	IntrospectedClassFunction,
	IntrospectedConstant,
	IntrospectedConstructor,
	IntrospectedDirectAllocationConstructor,
	type IntrospectedEnum,
	type IntrospectedError,
	type IntrospectedField,
	type IntrospectedFunction,
	IntrospectedFunctionParameter,
	IntrospectedInterface,
	type IntrospectedNamespaceMember,
	type IntrospectedProperty,
	IntrospectedRecord,
	type IntrospectedSignal,
	IntrospectedSignalType,
	IntrospectedStaticClassFunction,
	IntrospectedVirtualClassFunction,
	isInvalid,
	NativeType,
	type NSRegistry,
	type OptionsGeneration,
	printGirDocComment,
	promisifyFunctions,
	promisifyNamespaceFunctions,
	Reporter,
	ReporterService,
	removeClassModule,
	removeNamespace,
	resolveDirectedType,
	type TsDocTag,
	TypeConflict,
	type TypeExpression,
	TypeIdentifier,
	transformGirDocTagTextWithContext,
	transformGirDocText,
} from "@ts-for-gir/lib";
import { ModuleExporter, SignalGenerator } from "./generators/index.ts";
// import { PackageDataParser } from './package-data-parser.ts'
import { override as overrideGLib } from "./overrides/glib.ts";
import { override as overrideGObject } from "./overrides/gobject.ts";
import { TemplateProcessor } from "./template-processor.ts";

/**
 * Module generator output format enum
 */
export enum ModuleGeneratorFormat {
	/** Output as string array (default) */
	StringArray = "string-array",
	/** Output as single string */
	String = "string",
	/** Output as module declaration */
	ModuleDeclaration = "module-declaration",
	/** Output as inline DTS format */
	Inline = "inline",
}

/**
 * Base URLs for gi-docgen content pages per namespace.
 * Version-specific keys (e.g. "Gtk-4.0") take priority over plain namespace keys.
 */
const DOC_BASE_URLS = new Map<string, string>([
	// GNOME core (docs.gtk.org)
	["GLib", "https://docs.gtk.org/glib/"],
	["GObject", "https://docs.gtk.org/gobject/"],
	["Gio", "https://docs.gtk.org/gio/"],
	["GdkPixbuf", "https://docs.gtk.org/gdk-pixbuf/"],
	["Pango", "https://docs.gtk.org/Pango/"],
	["PangoCairo", "https://docs.gtk.org/PangoCairo/"],
	// GTK 4
	["Gtk-4.0", "https://docs.gtk.org/gtk4/"],
	["Gdk-4.0", "https://docs.gtk.org/gdk4/"],
	["Gsk-4.0", "https://docs.gtk.org/gsk4/"],
	["GdkWayland-4.0", "https://docs.gtk.org/gdk4-wayland/"],
	["GdkX11-4.0", "https://docs.gtk.org/gdk4-x11/"],
	// GTK 3
	["Gtk-3.0", "https://docs.gtk.org/gtk3/"],
	["Gdk-3.0", "https://docs.gtk.org/gdk3/"],
	// Libadwaita
	["Adw-1", "https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/"],
	// GtkSourceView
	["GtkSource-5", "https://gnome.pages.gitlab.gnome.org/gtksourceview/gtksourceview5/"],
]);

export class ModuleGenerator extends FormatGenerator<string[]> {
	log: Reporter;
	dependencyManager: DependencyManager;
	// packageData?: PackageDataParser

	config: OptionsGeneration;
	moduleTemplateProcessor: TemplateProcessor;

	readonly signalGenerator: SignalGenerator;
	readonly moduleExporter: ModuleExporter;

	/** Public accessor for the protected namespace from FormatGenerator */
	get girNamespace() {
		return this.namespace;
	}

	/**
	 * @param _config The config to use without the override config
	 */
	constructor(namespace: GirModule, config: OptionsGeneration, registry: NSRegistry) {
		super(namespace, config);

		this.config = config;

		this.log = new Reporter(
			this.config.verbose,
			ModuleGenerator.name,
			this.config.reporter,
			this.config.reporterOutput,
		);

		// Register with reporter service if reporting is enabled
		if (this.config.reporter) {
			const reporterService = ReporterService.getInstance();
			reporterService.registerReporter(`${ModuleGenerator.name}(${namespace.packageName})`, this.log);
		}
		this.dependencyManager = DependencyManager.getInstance(this.config);
		// this.packageData = new PackageDataParser(this.config)
		const girModule = namespace;
		this.moduleTemplateProcessor = new TemplateProcessor(
			{
				name: girModule.namespace,
				namespace: girModule.namespace,
				version: girModule.version,
				importName: girModule.importName,
				girModule,
			},
			girModule.packageName,
			registry,
			girModule.transitiveDependencies,
			this.config,
		);

		this.signalGenerator = new SignalGenerator(this);
		this.moduleExporter = new ModuleExporter(this);
		this._docContext = this.buildDocContext();
	}

	private readonly _docContext: GirDocContext;

	/**
	 * Build a GirDocContext that resolves C identifiers to TypeScript paths
	 * by searching the current namespace and all its dependencies.
	 */
	private buildDocContext(): GirDocContext {
		const ns = this.namespace;

		// Collect all available namespaces (current + dependencies)
		const allNamespaces: GirModule[] = [ns];
		for (const dep of ns.allDependencies) {
			const imported = ns.getInstalledImport(dep.namespace);
			if (imported) allNamespaces.push(imported);
		}

		// Resolve base URL for gi-docgen content pages
		const docBaseUrl = DOC_BASE_URLS.get(`${ns.namespace}-${ns.version}`) ?? DOC_BASE_URLS.get(ns.namespace);

		// Pre-merge enum constants for O(1) lookup
		const constantMap = new Map<string, string>();
		for (const mod of allNamespaces) {
			for (const [cId, result] of mod.enum_constants) {
				if (!constantMap.has(cId)) {
					constantMap.set(cId, `${mod.namespace}.${result[0]}.${result[1]}`);
				}
			}
		}

		// Type resolution cache — populated lazily on first miss
		const typeCache = new Map<string, string | null>();

		return {
			docBaseUrl,
			resolveType(cTypeName: string): string | null {
				const cached = typeCache.get(cTypeName);
				if (cached !== undefined) return cached;

				let result: string | null = null;
				// Strategy 1: _resolve_names lookup
				for (const mod of allNamespaces) {
					const member = mod.getMemberWithoutOverrides(cTypeName);
					if (member && "name" in member) {
						result = `${mod.namespace}.${member.name}`;
						break;
					}
				}
				// Strategy 2: C prefix stripping
				if (!result) {
					for (const mod of allNamespaces) {
						for (const prefix of mod.c_prefixes) {
							if (cTypeName.startsWith(prefix) && cTypeName.length > prefix.length) {
								const girName = cTypeName.slice(prefix.length);
								if (mod.hasSymbol(girName)) {
									result = `${mod.namespace}.${girName}`;
									break;
								}
							}
						}
						if (result) break;
					}
				}

				typeCache.set(cTypeName, result);
				return result;
			},
			resolveConstant(cIdentifier: string): string | null {
				return constantMap.get(cIdentifier) ?? null;
			},
		};
	}

	/**
	 * Wraps content in module declarations for ModuleDeclaration format
	 */
	private wrapInModuleDeclaration(content: string, girModule: GirModule): string {
		const { namespace: name, version } = girModule.dependency;

		const header = `
/**
 * ${name} ${version}
 * 
 * Generated from ${girModule.package_version.join(".")}
 */
`;

		const moduleIdentifier = `gi://${name}`;
		const versionedNamespaceIdentifier = `${name}${girModule.dependency.version.split(".")[0].replace(/[^A-z0-9_]/g, "_")}`;
		const versionedModuleIdentifier = `${moduleIdentifier}?version=${girModule.dependency.version}`;

		const [versionedModuleHeader, versionedModuleSuffix] = [
			`declare module "${versionedModuleIdentifier}" {
          namespace ${versionedNamespaceIdentifier} {`,
			`};

        export default ${versionedNamespaceIdentifier};
      }`,
		];
		const moduleDefinition = `declare module "${moduleIdentifier}" {
        export * from "${versionedModuleIdentifier}";
      }`;

		return [header, versionedModuleHeader, content, versionedModuleSuffix, moduleDefinition].join("\n\n");
	}

	generateClassCallback(node: IntrospectedClassCallback): string[] {
		return this.generateCallback(node);
	}
	generateConstructor(node: IntrospectedConstructor): string[] {
		const Parameters = this.generateParameters(node.parameters);

		return [`constructor(${Parameters});`];
	}
	generateDirectAllocationConstructor(node: IntrospectedDirectAllocationConstructor): string[] {
		const ConstructorFields = node.parameters.map((param) => param.asField().asString(this)).join("\n");

		return [
			`
    constructor(properties?: Partial<{
      ${ConstructorFields}
    }>);`,
		];
	}
	protected generateParameters(parameters: IntrospectedFunctionParameter[]): string {
		return parameters
			.flatMap((p) => {
				return p.asString(this);
			})
			.join(", ");
	}

	generateConstructorFunction(node: IntrospectedConstructor): string[] {
		const { namespace, options } = this;

		const Parameters = this.generateParameters(node.parameters);

		const invalid = isInvalid(node.name);
		const name = invalid ? `["${node.name}"]` : node.name;
		const warning = node.getWarning();
		const genericTypes = this.generateGenericParameters(node.generics);

		return [
			`${warning ? `${warning}\n` : ""}`,
			...this.addGirDocComment(node.doc),
			`static ${name}${genericTypes}(${Parameters}): ${node
				.return()
				.resolve(namespace, options)
				.rootPrint(namespace, options)};`,
		];
	}
	generateRecord(node: IntrospectedRecord): string[] {
		const structFor = node.structFor;

		if (structFor) {
			const resolvedIdentifier = structFor.resolveIdentifier(this.namespace, this.config);

			// Only create aliases for structs which resolve...
			if (resolvedIdentifier) {
				return this.generateAlias(
					new IntrospectedAlias({
						name: node.name,
						namespace: node.namespace,
						type: new ClassStructTypeIdentifier(structFor.name, structFor.namespace),
					}),
				);
			}

			return [];
		}

		return this.generateClass(node);
	}
	generateInterface(node: IntrospectedInterface): string[] {
		const isGObject = node.someParent((p) => p.namespace.namespace === "GObject" && p.name === "Object");
		const functions = filterFunctionConflict(node.namespace, node, node.members, []);
		const hasStaticFunctions = functions.some((f) => f instanceof IntrospectedStaticClassFunction);
		const hasVirtualMethods = node.members.some((m) => m instanceof IntrospectedVirtualClassFunction);

		const hasNamespace = isGObject || hasStaticFunctions || node.callbacks.length > 0 || hasVirtualMethods;

		return [
			...this.generateClassNamespaces(node),
			...(hasNamespace ? this.generateInterfaceNamespace(node) : []),
			...this.generateImplementationInterface(node),
			...(hasNamespace ? this.generateInterfaceDeclaration(node) : []),
		];
	}
	generateInterfaceNamespace(node: IntrospectedInterface): string[] {
		const isGObject = node.someParent((p) => p.namespace.namespace === "GObject" && p.name === "Object");
		const namespace = node.namespace;
		const functions = filterFunctionConflict(node.namespace, node, node.members, []);
		const staticFunctions = functions.filter(
			(f): f is IntrospectedStaticClassFunction => f instanceof IntrospectedStaticClassFunction,
		);
		const staticFields = node.fields
			.filter((f) => f.isStatic)
			.map((f) =>
				f.copy({
					isStatic: false,
				}),
			);
		const gtypeNamespace = namespace.namespace === "GObject" ? "" : "GObject.";
		return [
			`export interface ${node.name}Namespace {
      ${isGObject ? `$gtype: ${gtypeNamespace}GType<${node.name}>;` : ""}
      prototype: ${node.name};
      ${staticFields.length > 0 ? staticFields.flatMap((sf) => sf.asString(this)).join("\n") : ""}
      ${
				staticFunctions.length > 0
					? staticFunctions
							.flatMap((sf) => {
								// TODO: We're passing "node" as the parent, even though that isn't technically accurate.
								return sf.asClassFunction(node).asString(this);
							})
							.join("\n")
					: ""
			}    
      }`,
		];
	}
	generateInterfaceDeclaration(node: IntrospectedInterface): string[] {
		return [
			`\n\nexport const ${node.name}: ${node.name}Namespace & {
        new (): ${node.name} // This allows \`obj instanceof ${node.name}\`
    }\n`,
		];
	}
	generateError(node: IntrospectedError): string[] {
		const { namespace } = this;
		const clazz = node.asClass();

		clazz.members = [];
		clazz.members.push(...Array.from(node.functions.values()));

		const GLib = namespace.assertInstalledImport("GLib");
		const GLibError = GLib.assertClass("Error");

		clazz.superType = GLibError.getType();

		// GJS GError constructor expects one object: { message: string, code: number }
		// The domain is automatically derived from the error enum type.
		// See: gjs/gi/gerror.cpp ErrorInstance::constructor_impl
		clazz.mainConstructor = new IntrospectedConstructor({
			name: "new",
			parent: clazz,
			parameters: [
				new IntrospectedFunctionParameter({
					name: "options",
					type: NativeType.of("{ message: string, code: number }"),
					direction: GirDirection.In,
				}),
			],
			return_type: clazz.getType(),
		});

		return clazz.asString(this);
	}

	generateSignal(node: IntrospectedSignal, type: IntrospectedSignalType = IntrospectedSignalType.CONNECT): string[] {
		let fn: IntrospectedClassFunction;
		switch (type) {
			case IntrospectedSignalType.CONNECT:
				fn = node.asConnect(false);
				break;
			case IntrospectedSignalType.CONNECT_AFTER:
				fn = node.asConnect(true);
				break;
			case IntrospectedSignalType.EMIT:
				fn = node.asEmit();
				break;
		}
		fn.doc = node.doc;
		fn.metadata = node.metadata;
		fn.signalOrigin = node.name;
		return fn.asString(this);
	}

	generateStaticClassFunction(node: IntrospectedStaticClassFunction): string[] {
		return this.generateClassFunction(node);
	}
	generateVirtualClassFunction(node: IntrospectedVirtualClassFunction): string[] {
		return this.generateClassFunction(node);
	}

	generateExport(type: string, name: string, definition: string, indentCount = 0) {
		const exp = !this.config.noNamespace ? "" : "export ";
		const indent = generateIndent(indentCount);
		if (!definition.startsWith(":")) {
			definition = ` ${definition}`;
		}
		return `${indent}${exp}${type} ${name}${definition}`;
	}

	generateProperty(tsProp: IntrospectedProperty, construct?: boolean, indentCount = 0) {
		const desc: string[] = [];

		const propTags = [...this.namespace.getTsDocMetadataTags(tsProp.metadata)];
		if (tsProp.constructOnly) propTags.push({ tagName: "construct-only", paramName: "", text: "" });
		else if (tsProp.readable && !tsProp.writable) propTags.push({ tagName: "read-only", paramName: "", text: "" });
		else if (tsProp.writable && !tsProp.readable) propTags.push({ tagName: "write-only", paramName: "", text: "" });
		desc.push(...this.addGirDocComment(tsProp.doc, propTags, indentCount));

		const indent = generateIndent(indentCount);
		const name = generateMemberName(tsProp);

		const { readable, writable, constructOnly } = tsProp;

		const hasGetter = readable;
		const hasSetter = writable && !constructOnly;

		let type = tsProp.type;
		let getterAnnotation = "";
		let setterAnnotation = "";
		let getterSetterAnnotation = "";
		let printAsProperty = false;

		if (type instanceof TypeConflict) {
			switch (type.conflictType) {
				case ConflictType.FUNCTION_NAME_CONFLICT:
				case ConflictType.FIELD_NAME_CONFLICT:
					getterSetterAnnotation = setterAnnotation =
						"// This accessor conflicts with a field or function name in a parent class or interface.\n";
					type = new BinaryType(type.unwrap(), AnyType);
					// A child class cannot have an accessor declared if the parent has a function
					printAsProperty = true;
					break;
				case ConflictType.ACCESSOR_PROPERTY_CONFLICT:
					getterSetterAnnotation = getterAnnotation =
						"// This accessor conflicts with a property or field in a parent class or interface.\n";
					type = new BinaryType(type.unwrap(), AnyType);
					// A child class cannot have an accessor declared if the parent has a property
					printAsProperty = true;
					break;
				case ConflictType.PROPERTY_ACCESSOR_CONFLICT:
					type = new BinaryType(type.unwrap(), AnyType);
					break;
				case ConflictType.PROPERTY_NAME_CONFLICT:
					getterSetterAnnotation =
						setterAnnotation =
						getterAnnotation =
							"// This accessor conflicts with another accessor's type in a parent class or interface.\n";
					type = new BinaryType(type.unwrap(), AnyType);
					break;
			}

			if (construct && !(type instanceof BinaryType)) {
				// For constructor properties we just convert to any.
				type = new BinaryType(type instanceof TypeConflict ? type.unwrap() : type, AnyType);
			}
		}

		const Type = type.resolve(this.namespace, this.options).rootPrint(this.namespace, this.options) || "any";
		// Properties are direction-aware: getters return values from C to JS (Out),
		// setters accept values from JS to C (In). For 64-bit integers this means
		// getters return `number`, while setters accept `bigint | number`.
		const GetterType = this.generateDirectedType(type, GirDirection.Out) || Type;
		const SetterType = this.generateDirectedType(type, GirDirection.In) || Type;

		if (construct) {
			// If the property type is GType, use GTypeInput to also accept class constructors
			// with $gtype (e.g., passing a class to Gio.ListStore's item_type property)
			const unwrapped = type.deepUnwrap();
			if (unwrapped instanceof TypeIdentifier && unwrapped.is("GObject", "GType")) {
				const gtypeNamespace = this.namespace.namespace === "GObject" ? "" : "GObject.";
				return [`${name}: ${gtypeNamespace}GTypeInput;`];
			}
			return [`${name}: ${SetterType};`];
		}

		if (printAsProperty) {
			desc.push(`${getterSetterAnnotation}${indent} ${name}: ${Type};`);

			return desc;
		}

		if (hasGetter && hasSetter) {
			desc.push(
				`${getterAnnotation}${indent}get ${name}(): ${GetterType};`,
				`${setterAnnotation}${indent}set ${name}(val: ${SetterType});`,
			);
		} else if (hasGetter) {
			desc.push(`${getterSetterAnnotation}${indent}get ${name}(): ${GetterType};`);
		} else {
			desc.push(`${getterSetterAnnotation}${indent}set ${name}(val: ${SetterType});`);
		}

		return desc;
	}

	generateField(tsProp: IntrospectedField, indentCount = 0) {
		const desc: string[] = [];
		const isStatic = tsProp.isStatic;

		desc.push(...this.addGirDocComment(tsProp.doc, this.namespace.getTsDocMetadataTags(tsProp.metadata), indentCount));

		const indent = generateIndent(indentCount);
		const name = generateMemberName(tsProp);
		const staticStr = isStatic ? "static " : "";
		const readonly = !tsProp.writable ? "readonly " : "";
		const affix = tsProp.optional ? "?" : "";

		// temporary solution, will be solved differently later
		let commentOut = "";
		let type = tsProp.type;

		if (type instanceof TypeConflict) {
			if (type.conflictType === ConflictType.PROPERTY_ACCESSOR_CONFLICT) {
				commentOut = "\n// @ts-expect-error This property conflicts with an accessor in a parent class or interface.\n";

				type = type.unwrap();
			} else if (type.conflictType === ConflictType.FUNCTION_NAME_CONFLICT) {
				commentOut = "\n// This field conflicts with a function in a parent class or interface.\n";

				type = new BinaryType(type.unwrap(), AnyType);
			} else {
				type = type.unwrap();
			}
		}

		// GJS marshals field reads as the out type (e.g. 64-bit ints come back as `number`).
		// A single TS field declaration can't express the JS → C write asymmetry, so we pick
		// the sound read type — users writing a raw bigint can convert via `Number(bigInt)`.
		const typeStr = this.generateDirectedType(type, GirDirection.Out);

		desc.push(`${indent}${commentOut}${staticStr}${readonly}${name}${affix}: ${typeStr}`);
		return desc;
	}

	generateProperties(tsProps: IntrospectedProperty[], comment: string, indentCount = 0) {
		const def: string[] = [];
		for (const tsProp of tsProps) {
			def.push(...this.generateProperty(tsProp, false, indentCount));
		}

		if (def.length > 0) {
			def.unshift(...addInfoComment(comment, indentCount));
		}

		return def;
	}

	generateFields(tsProps: IntrospectedField[], comment: string, indentCount = 0) {
		const def: string[] = [];
		for (const tsProp of tsProps) {
			def.push(...this.generateField(tsProp));
		}

		if (def.length > 0) {
			def.unshift(...addInfoComment(comment, indentCount));
		}

		return def;
	}

	/**
	 * @param tsType The type expression
	 * @param namespace Provides the namespace to import relative to, defaults to the current namespace
	 * @returns A string for the type expression
	 */
	generateType(tsType: TypeExpression) {
		return tsType.resolve(this.namespace, this.config).print(this.namespace, this.config);
	}

	generateDirectedType(tsType: TypeExpression, direction: GirDirection) {
		return (
			resolveDirectedType(tsType, direction)
				?.resolve(this.namespace, this.config)
				?.print(this.namespace, this.config) ??
			tsType.resolve(this.namespace, this.config).print(this.namespace, this.config)
		);
	}

	generateInParameters(inParams: IntrospectedFunctionParameter[]) {
		const inParamsDef: string[] = [];

		for (const inParam of inParams) {
			inParamsDef.push(...this.generateParameter(inParam));
		}

		return inParamsDef;
	}

	/**
	 * Adds documentation comments
	 * @see https://github.com/microsoft/tsdoc
	 * @param lines
	 * @param indentCount
	 */
	addTSDocCommentLines(lines: string[], indentCount = 0): string[] {
		return addTSDocCommentLines(lines, indentCount);
	}

	/**
	 * Adds the documentation as comments
	 * @see https://github.com/microsoft/tsdoc
	 * @param girDoc
	 * @param indentCount
	 * @param overwriteDoc
	 * @returns
	 */
	addGirDocComment(tsDoc: string | null | undefined, tags: TsDocTag[] = [], indentCount = 0) {
		const desc: string[] = [];
		const indent = generateIndent(indentCount);
		if (this.config.noComments) {
			return desc;
		}

		const text = tsDoc ? transformGirDocText(tsDoc, this._docContext) : null;

		if (text || tags.length) {
			desc.push(`${indent}/**`);

			if (text) {
				const lines = text.split("\n");
				if (lines.length) {
					for (const line of lines) {
						desc.push(`${indent} * ${line}`);
					}
				}
			}

			for (const tag of tags) {
				const tagText = tag.text ? transformGirDocTagTextWithContext(tag.text, this._docContext) : "";
				if (tag.paramName) {
					desc.push(`${indent} * @${tag.tagName} ${tag.paramName} ${tagText}`);
				} else if (tagText) {
					desc.push(`${indent} * @${tag.tagName} ${tagText}`);
				} else {
					desc.push(`${indent} * @${tag.tagName}`);
				}
			}
			desc.push(`${indent} */`);
		}
		return desc;
	}

	private getGirTypeTags(
		obj: IntrospectedClass | IntrospectedRecord | IntrospectedInterface | IntrospectedCallback | IntrospectedAlias,
	): TsDocTag[] {
		let girType: string;

		if (obj instanceof IntrospectedRecord) {
			if (obj.structFor) girType = "Class Struct";
			else if (obj.isForeign()) girType = "Foreign Struct";
			else girType = "Struct";
		} else if (obj instanceof IntrospectedInterface) {
			girType = "Interface";
		} else if (obj instanceof IntrospectedClass) {
			girType = "Class";
		} else if (obj instanceof IntrospectedCallback) {
			girType = "Callback";
		} else {
			// IntrospectedAlias
			girType = "Alias";
		}

		return [{ tagName: "gir-type", paramName: "", text: girType }];
	}

	/**
	 * Adds an info comment, is used for debugging the generated types
	 * @param comment
	 * @param indentCount
	 * @returns
	 */
	addInfoComment(comment?: string, indentCount = 0) {
		const def: string[] = [];
		if (this.config.noComments) {
			return def;
		}
		const indent = generateIndent(indentCount);
		if (comment) {
			def.push("");
			def.push(`${indent}// ${comment}`);
			def.push("");
		}
		return def;
	}

	mergeDescs(descs: string[], comment?: string, indentCount = 1) {
		const def: string[] = [];
		const indent = generateIndent(indentCount);

		for (const desc of descs) {
			def.push(`${indent}${desc}`);
		}

		if (def.length > 0) {
			def.unshift(...addInfoComment(comment, indentCount));
		}

		return def;
	}

	generateParameter(tsParam: IntrospectedFunctionParameter, direction: GirDirection = GirDirection.In) {
		const types = tsParam.type;
		const name = tsParam.name;
		const typeStr = this.generateDirectedType(types, direction);
		const optional = tsParam.isOptional && !tsParam.isVarArgs;
		const affix = optional ? "?" : "";
		const prefix = tsParam.isVarArgs ? "..." : "";

		return [`${prefix}${name}${affix}: ${typeStr}`];
	}

	/**
	 *
	 * @param tsGenerics
	 * @param isOut If this generic parameters are out do only generate the type parameter names
	 * @returns
	 */
	generateGenericParameters(nodes: Generic[], withDefaults = true) {
		const { namespace, options } = this;

		const list = nodes.map((generic) => {
			const Type = generic.type.rootPrint(namespace, options);

			if (generic.defaultType && withDefaults) {
				const defaultType = generic.defaultType.rootPrint(namespace, options);

				if (generic.constraint) {
					const constraint = generic.constraint.rootPrint(namespace, options);
					return `${Type} extends ${constraint} = ${defaultType}`;
				}

				return `${Type} = ${defaultType}`;
			} else if (generic.constraint && withDefaults) {
				const constraint = generic.constraint.rootPrint(namespace, options);
				return `${Type} extends ${constraint}`;
			} else {
				return `${Type}`;
			}
		});

		if (list.length > 0) {
			return `<${list.join(", ")}>`;
		}

		return "";
	}

	generateFunctionReturn(
		tsFunction: IntrospectedFunction | IntrospectedClassFunction | IntrospectedClassCallback | IntrospectedCallback,
		direction: GirDirection = GirDirection.Out,
	) {
		if (tsFunction.name === "constructor") {
			return "";
		}

		const typeStr = this.generateDirectedType(tsFunction.return(), direction);

		const outputParameters = tsFunction.output_parameters;

		if (outputParameters.length > 0) {
			const excludeActualReturnValueFromArray = typeStr === "void" || typeStr === "";
			const returns = [
				...(excludeActualReturnValueFromArray ? [] : [`${typeStr}`]),
				...outputParameters
					.map((op) => {
						return (
							resolveDirectedType(op.type, direction)?.resolve(this.namespace, this.options) ??
							op.type.resolve(this.namespace, this.options)
						);
					})
					.map((p) => p.rootPrint(this.namespace, this.options)),
			];

			if (returns.length > 1) {
				return `[${returns.join(", ")}]`;
			} else {
				return `${returns[0]}`;
			}
		}

		return typeStr;
	}

	generateClassFunction(node: IntrospectedClassFunction): string[] {
		return this.generateFunction(node);
	}

	generateFunction(
		tsFunction: IntrospectedClassFunction | IntrospectedFunction | IntrospectedCallback,
		indentCount = 0,
	) {
		const def: string[] = [];
		const indent = generateIndent(indentCount);

		let { name } = tsFunction;
		const isStatic = tsFunction instanceof IntrospectedStaticClassFunction;
		const isGlobal = !(tsFunction instanceof IntrospectedClassFunction);
		const isArrowType = tsFunction instanceof IntrospectedCallback || tsFunction instanceof IntrospectedClassCallback;
		// Virtual functions are implemented in JS and invoked from C, so their
		// "in" parameters are actually going _out_ from C to JS, and their
		// return value goes _in_ from JS to C. This mirrors the existing
		// callback handling in `generateCallback`.
		const isReversedDirection = tsFunction instanceof IntrospectedVirtualClassFunction;
		const inParamDirection = isReversedDirection ? GirDirection.Out : GirDirection.In;
		const returnDirection = isReversedDirection ? GirDirection.In : GirDirection.Out;

		const { parameters: inParams } = tsFunction;

		def.push(
			...this.addGirDocComment(
				tsFunction.doc,
				[
					...this.namespace.getTsDocInParamTags(tsFunction.parameters),
					...this.namespace.getTsDocReturnTags(tsFunction),
					...this.namespace.getTsDocMetadataTags(tsFunction.metadata),
					...(tsFunction instanceof IntrospectedVirtualClassFunction
						? [{ tagName: "virtual", paramName: "", text: "" } as const]
						: []),
					...("signalOrigin" in tsFunction && tsFunction.signalOrigin
						? [{ tagName: "signal", paramName: "", text: "" } as const]
						: []),
				],
				indentCount,
			),
		);

		const warning = tsFunction.getWarning();
		if (warning) def.push(warning);

		const staticStr = isStatic && tsFunction.name !== "constructor" ? "static " : "";

		const globalStr = isGlobal ? "function " : "";
		const genericStr = this.generateGenericParameters(tsFunction.generics);

		// temporary solution, will be solved differently later
		const commentOut = "";

		let exportStr = "";
		// `tsType === 'function'` are a global methods which can be exported
		if (isGlobal) {
			exportStr = !this.config.noNamespace ? "" : "export ";
		}

		const returnType = this.generateFunctionReturn(tsFunction, returnDirection);

		let retSep = "";
		if (returnType) {
			if (isArrowType) {
				name = "";
				retSep = " =>";
			} else {
				retSep = ":";
			}
		}

		// TODO: Check if this is necessary anywhere else...
		if (isInvalid(name) && !isGlobal) {
			name = `["${name}"]`;
		}

		const inParamsDef: string[] = [];
		for (const inParam of inParams) {
			inParamsDef.push(...this.generateParameter(inParam, inParamDirection));
		}

		def.push(
			`${indent}${commentOut}${exportStr}${staticStr}${globalStr}${name}${genericStr}(${inParamsDef.join(
				", ",
			)})${retSep} ${returnType}`,
		);

		return def;
	}

	generateFunctions(
		tsFunctions: IntrospectedFunction[] | IntrospectedClassFunction[],
		indentCount = 1,
		comment?: string,
	) {
		const def: string[] = [];

		for (const girFunction of tsFunctions) {
			def.push(...this.generateFunction(girFunction, indentCount));
		}

		if (def.length > 0) {
			def.unshift(...addInfoComment(comment, indentCount));
		}

		return def;
	}

	generateCallback(
		tsCallback: IntrospectedCallback | IntrospectedClassCallback,
		indentCount = 0,
		classModuleName?: string,
	) {
		const def: string[] = [];

		const callbackTags =
			tsCallback instanceof IntrospectedCallback && !(tsCallback instanceof IntrospectedClassCallback)
				? [...this.getGirTypeTags(tsCallback), ...this.namespace.getTsDocMetadataTags(tsCallback.metadata)]
				: this.namespace.getTsDocMetadataTags(tsCallback.metadata);
		def.push(...this.addGirDocComment(tsCallback.doc, callbackTags, indentCount));

		const indent = generateIndent(indentCount);
		const indentBody = generateIndent(indentCount + 1);
		const { parameters: inParams } = tsCallback;
		const returnTypeStr = this.generateType(tsCallback.return());

		// Get name, remove namespace and remove module class name prefix
		let { name } = tsCallback;
		const generics = tsCallback.generics;
		name = removeNamespace(name, tsCallback.namespace.namespace);
		if (classModuleName) name = removeClassModule(name, classModuleName);
		const genericParameters = this.generateGenericParameters(generics);

		const inParamsDef: string[] = [];
		for (const inParam of inParams) {
			// Direction is reversed in callbacks. The callback's in-param is
			// going _out_ from C to JS
			inParamsDef.push(...this.generateParameter(inParam, GirDirection.Out));
		}

		const interfaceHead = `${name}${genericParameters}`;

		def.push(this.generateExport("interface", `${interfaceHead}`, "{", indentCount));
		def.push(`${indentBody}(${inParamsDef.join(", ")}): ${returnTypeStr}`);
		def.push(`${indent}}`);

		return def;
	}

	generateCallbackInterfaces(
		tsCallbacks: Array<IntrospectedCallback | IntrospectedClassCallback>,
		indentCount = 0,
		classModuleName: string,
		comment?: string,
	) {
		const def: string[] = [];

		for (const tsCallback of tsCallbacks) {
			def.push(...this.generateCallback(tsCallback, indentCount, classModuleName), "");
		}

		if (def.length > 0) {
			def.unshift(...addInfoComment(comment, indentCount));
		}

		return def;
	}

	generateEnum(girEnum: IntrospectedEnum, indentCount = 0) {
		const desc: string[] = [];
		const { name, namespace } = girEnum;

		// Enums can't have numerical keys
		const isInvalidEnum = Array.from(girEnum.members.keys()).some(
			(name) => name.match(/^[0-9]+$/) || name === "NaN" || name === "Infinity",
		);

		if (isInvalidEnum) {
			desc.push(...girEnum.asClass().asString(this));

			return desc;
		}

		if (girEnum.isRegistered) {
			const nsTags = [{ tagName: "gir-type", paramName: "", text: girEnum.flags ? "Flags" : "Enum" } as const];
			desc.push(...this.addGirDocComment(null, nsTags, indentCount));
			desc.push(`export namespace ${name} {`);
			const gtypeNamespace = namespace.namespace === "GObject" ? "" : "GObject.";
			desc.push(`    export const $gtype: ${gtypeNamespace}GType<${name}>;`);
			desc.push("}");
			desc.push("");
		}

		const enumTags = [
			{ tagName: "gir-type", paramName: "", text: girEnum.flags ? "Flags" : "Enum" } as const,
			...this.namespace.getTsDocMetadataTags(girEnum.metadata),
		];
		desc.push(...this.addGirDocComment(girEnum.doc, enumTags, indentCount));
		desc.push(this.generateExport("enum", name, "{", indentCount));
		if (girEnum.members) {
			for (const girEnumMember of girEnum.members.values()) {
				if (!girEnumMember) continue;
				desc.push(...this.generateEnumMember(girEnumMember, indentCount + 1));
			}
		}
		desc.push("}");
		desc.push("");
		return desc;
	}

	generateEnumMember(tsMember: GirEnumMember, indentCount = 1) {
		const desc: string[] = [];

		desc.push(...this.addGirDocComment(tsMember.doc, [], indentCount));

		const invalid = isInvalid(tsMember.name);

		const indent = generateIndent(indentCount);
		if (invalid) {
			desc.push(`${indent}"${tsMember.name}",`);
		} else {
			desc.push(`${indent}${tsMember.name},`);
		}

		return desc;
	}

	generateConst(tsConst: IntrospectedConstant, indentCount = 0) {
		const desc: string[] = [];

		desc.push(
			...this.addGirDocComment(tsConst.doc, this.namespace.getTsDocMetadataTags(tsConst.metadata), indentCount),
		);

		const indent = generateIndent(indentCount);
		const exp = !this.config.noNamespace ? "" : "export ";

		const ComputedName = generateMemberName(tsConst);
		const typeStr = this.generateType(resolveDirectedType(tsConst.type, GirDirection.Out) ?? tsConst.type);

		desc.push(`${indent}${exp}const ${ComputedName}: ${typeStr}`);
		return desc;
	}

	generateAlias(girAlias: IntrospectedAlias, indentCount = 0) {
		const { namespace, options } = this;

		const desc: string[] = [];

		desc.push(
			...this.addGirDocComment(
				girAlias.doc,
				[...this.getGirTypeTags(girAlias), ...this.namespace.getTsDocMetadataTags(girAlias.metadata)],
				indentCount,
			),
		);

		const indent = generateIndent(indentCount);

		const genericList = girAlias.generics
			.map((g) => {
				if (g.type) {
					return `${g.name} = ${g.type.resolve(namespace, options).rootPrint(namespace, options)}`;
				}

				return `${g.name}`;
			})
			.join(", ");

		const generics = genericList ? `<${genericList}>` : "";

		const exp = !this.config.noNamespace ? "" : "export ";

		desc.push(`${indent}${exp}type ${girAlias.name}${generics} = ${girAlias.type.print(this.namespace, this.config)}`);
		return desc;
	}

	generateConstructPropsInterface(
		girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
		indentCount = 0,
	) {
		const def: string[] = [];

		const isGObjectObject = girClass.name === "Object" && girClass.namespace.namespace === "GObject";
		if (
			!isGObjectObject &&
			!girClass.someParent((p: IntrospectedBaseClass) => p.namespace.namespace === "GObject" && p.name === "Object")
		) {
			return def;
		}

		const indent = generateIndent(indentCount);
		const exp = !this.config.noNamespace ? "" : "export ";
		let ext = "";
		const resolution = girClass.resolveParents();
		const superType = girClass.superType;
		const superTypeIdentifier = superType
			?.resolveIdentifier(this.namespace, this.config)
			?.print(this.namespace, this.config);
		const genericTypes = this.generateGenericParameters(girClass.generics);

		// Remove namespace and class module name
		const constructPropInterfaceName = "ConstructorProps";

		// Only add the "extends" if the parent type will be generated (it has props)...
		if (superTypeIdentifier) {
			const interfaceExtends =
				"implements" in resolution
					? resolution
							.implements()
							.map((iface) =>
								iface.identifier.resolveIdentifier(this.namespace, this.config)?.print(this.namespace, this.config),
							)
							.filter((identifier): identifier is string => !!identifier)
							.map((identifier) => {
								const identifierParts = identifier.split("<");
								const generics = identifierParts.length > 1 ? `<${identifierParts[1]}` : "";
								return `${identifierParts[0]}.${constructPropInterfaceName}${generics}`;
							})
					: [];

			const superTypeIdentifierParts = superTypeIdentifier.split("<");
			const generics = superTypeIdentifierParts.length > 1 ? `<${superTypeIdentifierParts[1]}` : "";
			const superTypeExtends = `${superTypeIdentifierParts[0]}.${constructPropInterfaceName}${generics}`;
			ext = `extends ${[superTypeExtends, ...interfaceExtends].join(", ")}`;
		}

		def.push(...addInfoComment("Constructor properties interface", indentCount));

		// Include properties from parent interfaces...
		const { props } = girClass;

		// START BODY

		const ConstructorProps = filterConflicts(girClass.namespace, girClass, props, FilterBehavior.PRESERVE)
			.flatMap((v) => v.asString(this, true))
			.join("\n    ");

		def.push(`${indent}${exp}interface ${constructPropInterfaceName}${genericTypes} ${ext} {`);
		def.push(ConstructorProps);
		def.push(`${indent}}`, "");

		// END BODY

		return def;
	}

	generateClassStaticFields(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
		const def: string[] = [];

		def.push(
			...this.generateFields(
				filterConflicts(
					girClass.namespace,
					girClass,
					girClass.fields.filter((field) => field.isStatic),
				),
				"Static fields",
				indentCount,
			),
		);

		return def;
	}

	generateClassMemberFields(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
		const def: string[] = [];

		def.push(
			...this.generateFields(
				filterConflicts(
					girClass.namespace,
					girClass,
					girClass.fields.filter((field) => !field.isStatic),
				),
				"Fields",
				indentCount,
			),
		);

		return def;
	}

	generateClassFields(girClass: IntrospectedClass | IntrospectedRecord, indentCount = 1) {
		const def: string[] = [];

		def.push(
			...this.generateClassStaticFields(girClass, indentCount),
			...this.generateClassMemberFields(girClass, indentCount),
		);

		return def;
	}

	generateClassProperties(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
		const def: string[] = [];

		def.push(
			...this.generateProperties(
				filterConflicts(girClass.namespace, girClass, girClass.props),
				"Properties",
				indentCount,
			),
		);

		return def;
	}

	generateClassStaticMethods(
		girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
		indentCount = 1,
	) {
		const def: string[] = [];
		def.push(
			...this.generateFunctions(
				filterFunctionConflict(
					girClass.parent,
					girClass,
					[...girClass.members].filter((member) => member instanceof IntrospectedStaticClassFunction),
					[],
				),
				indentCount,
				"Static methods",
			),
		);

		return def;
	}

	generateClassMethods(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
		const def: string[] = [];

		def.push(
			...this.generateFunctions(
				promisifyIfEnabled(
					this.options,
					filterFunctionConflict(
						girClass.parent,
						girClass,
						[...girClass.members].filter(
							(member) =>
								!(member instanceof IntrospectedStaticClassFunction) &&
								!(member instanceof IntrospectedVirtualClassFunction),
						),
						[],
					),
				),
				indentCount,
				"Methods",
			),
		);

		return def;
	}

	generateClassConstructors(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 1) {
		const def: string[] = [];

		// Constructors
		if (girClass.mainConstructor instanceof IntrospectedDirectAllocationConstructor)
			def.push(...this.generateDirectAllocationConstructor(girClass.mainConstructor));
		else if (girClass.mainConstructor instanceof IntrospectedConstructor)
			def.push(...this.generateConstructor(girClass.mainConstructor));
		else if (
			(girClass.namespace.namespace === "GObject" && girClass.name === "Object") ||
			girClass.someParent((p: IntrospectedBaseClass) => p.namespace.namespace === "GObject" && p.name === "Object")
		)
			def.push(`\nconstructor(properties?: Partial<${girClass.name}.ConstructorProps>, ...args: any[]);\n`);

		// Don't inject a constructor hook if a stricter index signature is set,
		// as the types may not be compatible.
		//
		// TODO: Don't hardcode string index signatures
		if (
			girClass instanceof IntrospectedClass &&
			(!girClass.__ts__indexSignature || girClass.__ts__indexSignature.includes("[key: string]: any"))
		) {
			// _init method
			def.push("_init(...args: any[]): void;\n");
		}

		def.push(
			...filterFunctionConflict(girClass.parent, girClass, girClass.constructors, []).flatMap((constructorFunction) =>
				this.generateConstructorFunction(constructorFunction),
			),
		);

		if (def.length) {
			def.unshift(...addInfoComment("Constructors", indentCount));
		}

		return def;
	}

	/**
	 * Instance methods, vfunc_ prefix
	 * @param girClass
	 */
	generateClassVirtualMethods(
		girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface,
		indentCount = 1,
	) {
		const def: string[] = [];

		def.push(
			...this.generateFunctions(
				filterFunctionConflict(
					girClass.parent,
					girClass,
					[...girClass.members.values()].filter((fn) => fn instanceof IntrospectedVirtualClassFunction),
					[],
				),
				indentCount,
				"Virtual methods",
			),
		);

		return def;
	}

	/**
	 * Generate virtual methods with overloads for interfaces that have conflicting signatures.
	 * This is used when an interface can't inherit from Interface namespace due to signature conflicts.
	 * @param girInterface The interface to generate virtual methods for
	 * @param indentCount Indentation level
	 */
	generateVirtualMethodOverloads(girInterface: IntrospectedInterface, indentCount = 1): string[] {
		const def: string[] = [];
		const indent = generateIndent(indentCount);

		// Get all virtual methods from this interface
		const virtualMethods = girInterface.members.filter(
			(m) => m instanceof IntrospectedVirtualClassFunction,
		) as IntrospectedVirtualClassFunction[];

		if (virtualMethods.length === 0) {
			return def;
		}

		def.push("");
		def.push(`${indent}// Virtual methods - generated with overloads due to conflicts`);
		def.push("");

		// Group virtual methods by name to handle overloads
		const methodsByName = new Map<string, IntrospectedVirtualClassFunction[]>();
		for (const vmethod of virtualMethods) {
			const methods = methodsByName.get(vmethod.name) || [];
			methods.push(vmethod);
			methodsByName.set(vmethod.name, methods);
		}

		// For each method name, generate overloads
		for (const [methodName, methods] of methodsByName) {
			// Find parent methods with the same name
			const parentMethods: IntrospectedVirtualClassFunction[] = [];

			girInterface.someParent((parent) => {
				const parentVirtualMethods = parent.members.filter(
					(m) => m instanceof IntrospectedVirtualClassFunction && m.name === methodName,
				) as IntrospectedVirtualClassFunction[];
				parentMethods.push(...parentVirtualMethods);
				return false; // Continue searching all parents
			});

			// Generate overloads for all signatures
			const allMethods = [...methods, ...parentMethods];
			const uniqueSignatures = new Map<string, IntrospectedVirtualClassFunction>();

			// Deduplicate by signature
			for (const method of allMethods) {
				const signature = this.generateMethodSignature(method);
				if (!uniqueSignatures.has(signature)) {
					uniqueSignatures.set(signature, method);
				}
			}

			// Generate all unique overloads
			for (const method of uniqueSignatures.values()) {
				const methodDef = method.asString(this);
				// Add @ignore tag to hide from documentation
				if (methodDef.length > 0 && !methodDef[0].includes("@ignore")) {
					const docLines: string[] = [];
					if (method.doc) {
						docLines.push(...this.addGirDocComment(method.doc, [], indentCount));
					}
					// Add @ignore tag
					if (docLines.length > 0) {
						// Insert @ignore before the closing */
						const lastLine = docLines[docLines.length - 1];
						docLines[docLines.length - 1] = lastLine.replace(" */", ` * @ignore\n${indent} */`);
					} else {
						docLines.push(`${indent}/** @ignore */`);
					}
					def.push(...docLines);
				}
				def.push(...methodDef);
			}
		}

		return def;
	}

	/**
	 * Generate a signature string for a virtual method (used for deduplication)
	 */
	private generateMethodSignature(method: IntrospectedVirtualClassFunction): string {
		const params = method.parameters.map((p) => `${p.name}:${p.type.print(this.namespace, this.config)}`).join(",");
		const returnType = method.return().print(this.namespace, this.config);
		return `${method.name}(${params}):${returnType}`;
	}

	generateClassNamespaces(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface, indentCount = 0) {
		const def: string[] = [];
		const bodyDef: string[] = [];
		if (!girClass) return def;
		const indent = generateIndent(indentCount);

		const exp = !this.config.noNamespace ? "" : "export ";

		if (girClass instanceof IntrospectedClass) {
			// Signal interfaces
			bodyDef.push(...this.signalGenerator.generateClassSignalInterfaces(girClass, indentCount + 1));
		}

		if (girClass instanceof IntrospectedInterface) {
			// Virtual interface for implementation
			bodyDef.push(...this.generateVirtualInterface(girClass, indentCount + 1));
		}

		bodyDef.push(...this.generateClassCallbacks(girClass));

		// Properties interface for construction
		// TODO: Actually use this interface to build class' construction props interface
		bodyDef.push(...this.generateConstructPropsInterface(girClass, indentCount + 1));

		if (!bodyDef.length) {
			return [];
		}
		def.push(`${indent}${exp}namespace ${girClass.name} {`);

		// Properties interface for construction
		def.push(...bodyDef);

		def.push(`${indent}}`, "");
		// END BODY

		return def;
	}

	generateClassCallbacks(girClass: IntrospectedClass | IntrospectedInterface | IntrospectedRecord) {
		if (girClass.callbacks.length === 0) return [];

		return girClass.callbacks.flatMap((c) => this.generateClassCallback(c));
	}

	/**
	 * In Typescript, interfaces and classes can have the same name,
	 * so we use this to generate interfaces with the same name to implement multiple inheritance
	 * @param girClass
	 * @param namespace
	 */
	generateImplementationInterface(girClass: IntrospectedClass | IntrospectedRecord | IntrospectedInterface) {
		const def: string[] = [];

		if (!girClass) return def;

		const genericParameters = this.generateGenericParameters(girClass.generics);
		const resolution = girClass.resolveParents();
		const superType = resolution.extends();
		const implementationNames = [
			...(superType ? [superType.node.getType().print(this.namespace, this.config)] : []),
			...("implements" in resolution
				? resolution.implements().map((i) => i.node.getType().print(this.namespace, this.config))
				: []),
		];

		// For interfaces: check if we should inherit from Interface namespace or generate method overloads
		let shouldGenerateVirtualMethodOverloads = false;
		if (girClass instanceof IntrospectedInterface) {
			// Check if this interface has virtual methods
			const hasVirtualMethods = girClass.members.some((m) => m instanceof IntrospectedVirtualClassFunction);

			if (hasVirtualMethods) {
				// Check if there are conflicts with parent virtual methods
				const hasConflicts = hasVfuncSignatureConflicts(this.namespace, girClass);

				if (hasConflicts) {
					// Don't inherit from Interface namespace if there are conflicts
					// We'll generate method overloads instead
					shouldGenerateVirtualMethodOverloads = true;
				} else {
					// No conflicts, inherit from Interface namespace as usual
					// Extract only the generic type names (e.g., "A", "B") from the generic definitions
					const typeNames = girClass.generics
						.map((g) => g.type.identifier) // Use g.type.identifier to get the generic name
						.filter((name) => name && name.length > 0);

					const genericTypeNames = typeNames.length > 0 ? `<${typeNames.join(", ")}>` : "";

					implementationNames.push(`${girClass.name}.Interface${genericTypeNames}`);
				}
			}
		}

		const ext = implementationNames.length ? ` extends ${implementationNames.join(", ")}` : "";
		const interfaceHead = `${girClass.name}${genericParameters}${ext}`;

		// Add @gir-type doc comment for interfaces (classes/records handle this in generateClass)
		if (girClass instanceof IntrospectedInterface) {
			def.push(
				...this.addGirDocComment(
					girClass.doc,
					[...this.getGirTypeTags(girClass), ...this.namespace.getTsDocMetadataTags(girClass.metadata)],
					0,
				),
			);
		}

		def.push(this.generateExport("interface", interfaceHead, "{"));

		if (girClass.__ts__indexSignature) {
			def.push(`\n${girClass.__ts__indexSignature}\n`);
		}
		// Properties
		def.push(...this.generateClassProperties(girClass));

		// Fields
		def.push(...this.generateClassMemberFields(girClass));

		// Methods
		def.push(...this.generateClassMethods(girClass));

		// Virtual methods - generate for classes/records always, for interfaces only when there are conflicts
		if (!(girClass instanceof IntrospectedInterface) || shouldGenerateVirtualMethodOverloads) {
			if (shouldGenerateVirtualMethodOverloads && girClass instanceof IntrospectedInterface) {
				// Generate virtual methods with overloads for conflicting signatures
				def.push(...this.generateVirtualMethodOverloads(girClass));
			} else {
				// Generate normal virtual methods
				def.push(...this.generateClassVirtualMethods(girClass));
			}
		}
		// END BODY

		// END INTERFACE
		def.push("}");
		def.push("");

		return def;
	}

	/**
	 * Generates a virtual-methods-only interface for proper GObject interface implementation.
	 * This interface contains only the virtual methods (vfunc_*) that need to be implemented
	 * when creating a class that implements a GObject interface.
	 */
	generateVirtualInterface(girClass: IntrospectedInterface, indentCount = 1): string[] {
		const def: string[] = [];
		if (!girClass) return def;

		const indent = generateIndent(indentCount);

		// Get only virtual methods from this interface
		const virtualMethods = girClass.members.filter(
			(m) => m instanceof IntrospectedVirtualClassFunction,
		) as IntrospectedVirtualClassFunction[];

		// Don't generate an Interface if there are no virtual methods
		if (virtualMethods.length === 0) {
			return def;
		}

		// Build inheritance chain for virtual interface
		const resolution = girClass.resolveParents();
		const parentInterfaces: string[] = [];

		// Inherit from parent interface's Interface if it exists
		const parentResolution = resolution.extends();
		if (parentResolution && parentResolution.node instanceof IntrospectedInterface) {
			const parentInterface = parentResolution.node as IntrospectedInterface;
			const parentTypeIdentifier = parentResolution.identifier
				.resolveIdentifier(this.namespace, this.config)
				?.print(this.namespace, this.config);

			// Check if parent has virtual methods to avoid empty inheritance
			const parentHasVirtualMethods = parentInterface.members.some(
				(m) => m instanceof IntrospectedVirtualClassFunction,
			);

			if (parentTypeIdentifier && parentHasVirtualMethods) {
				parentInterfaces.push(`${parentTypeIdentifier}.Interface`);
			}
		}

		// Apply inheritance or fallback to base interface
		let extendsClause = "";
		if (parentInterfaces.length > 0) {
			extendsClause = ` extends ${parentInterfaces.join(", ")}`;
		}
		// No default inheritance for virtual interfaces to avoid non-existent types

		// Generate the Interface interface with generic parameters
		const genericParameters = this.generateGenericParameters(girClass.generics);
		def.push(`${indent}/**`);
		def.push(`${indent} * Interface for implementing ${girClass.name}.`);
		def.push(`${indent} * Contains only the virtual methods that need to be implemented.`);
		def.push(`${indent} */`);
		def.push(`${indent}interface Interface${genericParameters}${extendsClause} {`);

		// Generate virtual methods
		if (virtualMethods.length > 0) {
			def.push(
				...this.generateFunctions(
					filterFunctionConflict(girClass.namespace, girClass, virtualMethods, []),
					indentCount + 1,
					"Virtual methods",
				),
			);
		}

		def.push(`${indent}}`);
		def.push("");

		return def;
	}

	protected extends(node: IntrospectedBaseClass) {
		const { namespace: ns, options } = this;
		if (node.superType) {
			const ResolvedType = node.superType.resolveIdentifier(ns, options);
			const Type = ResolvedType?.print(ns, options);

			if (Type) {
				return ` extends ${Type}`;
			}

			// Fallback to GObject.Object when supertype can't be resolved
			this.log.warn(
				`Unable to resolve type: ${node.superType.name} from ${node.superType.namespace} in ${node.namespace.namespace} ${node.namespace.version}, falling back to GObject.Object`,
			);
			return ` extends GObject.Object`;
		}

		return "";
	}

	protected implements(node: IntrospectedClass) {
		const { namespace, options } = this;

		const interfaces = node.interfaces.map((i) => {
			const identifier = i.resolveIdentifier(namespace, options);

			if (!identifier) {
				throw new Error(
					`Unable to resolve type: ${i.name} from ${i.namespace} in ${node.namespace.namespace} ${node.namespace.version}`,
				);
			}

			return identifier;
		});

		if (interfaces.length > 0) {
			return ` implements ${interfaces
				.map((i) => {
					const Type = i.print(namespace, options);
					return `${Type}`;
				})
				.join(", ")}`;
		}

		return "";
	}

	/**
	 * Represents a record, GObject class or interface as a Typescript class
	 * @param girClass
	 * @param namespace
	 */
	generateClass(girClass: IntrospectedClass | IntrospectedRecord) {
		const def: string[] = [];

		def.push(...this.generateClassNamespaces(girClass));

		def.push(
			...this.addGirDocComment(
				girClass.doc,
				[...this.getGirTypeTags(girClass), ...this.namespace.getTsDocMetadataTags(girClass.metadata)],
				0,
			),
		);

		const genericParameters = this.generateGenericParameters(girClass.generics);
		const ext = this.extends(girClass);
		const impl = girClass instanceof IntrospectedClass ? this.implements(girClass) : "";
		const classHead = `${girClass.name}${genericParameters}${ext}${impl}`;

		// START CLASS
		{
			const isAbstract = girClass instanceof IntrospectedClass && girClass.isAbstract;
			// TODO: I believe if a record has a constructor, we should not mark it as abstract
			const isOpaque = girClass instanceof IntrospectedRecord && girClass.isPrivate && !girClass.mainConstructor;
			if (isAbstract || isOpaque) {
				def.push(this.generateExport("abstract class", classHead, "{"));
			} else {
				def.push(this.generateExport("class", classHead, "{"));
			}

			// $gtype compatibility
			const gtypeNamespace = this.namespace.namespace === "GObject" ? "" : "GObject.";
			def.push(`static $gtype: ${gtypeNamespace}GType<${girClass.gtype}>;`);

			if (girClass.__ts__indexSignature) {
				def.push(`\n${girClass.__ts__indexSignature}\n`);
			}
			// Static Properties
			def.push(...this.generateClassProperties(girClass));

			// $signals property (instance property for type-safe signal access)
			def.push(...this.signalGenerator.generateClassSignalsProperty(girClass));

			// Static and member Fields
			def.push(...this.generateClassFields(girClass));

			// Constructors
			def.push(...this.generateClassConstructors(girClass));

			if (girClass instanceof IntrospectedClass) {
				// Signals
				def.push(...this.signalGenerator.generateClassSignals(girClass));
			}

			// Static Methods
			def.push(...this.generateClassStaticMethods(girClass));

			// Virtual methods
			def.push(...this.generateClassVirtualMethods(girClass));

			// Methods
			def.push(...this.generateClassMethods(girClass));

			if (girClass instanceof IntrospectedClass) {
				const rawProperties = girClass.implementedProperties();
				const rawMethods = girClass.implementedMethods(rawProperties);
				const selfName = `${girClass.namespace.namespace}.${girClass.name}`;

				// Group inherited properties by source interface
				const propsBySource = groupBySource(rawProperties);
				for (const [source, props] of propsBySource) {
					const copied = props.map((p) => p.copy({ parent: girClass }));
					for (const m of filterConflicts(girClass.namespace, girClass, copied)) {
						const memberLines = m.asString(this);
						if (memberLines.length > 0) {
							// Only tag as inherited if source is a different class
							if (source !== selfName) {
								injectInheritedTags(memberLines, source);
							}
							def.push(...memberLines);
						}
					}
				}

				// Group inherited methods by source interface
				const methodsBySource = groupBySource(rawMethods);
				for (const [source, methods] of methodsBySource) {
					const copied = methods.map((m) => m.copy({ parent: girClass }));
					const filtered = promisifyIfEnabled(
						this.options,
						filterFunctionConflict(girClass.namespace, girClass, copied, []),
					);
					for (const m of filtered) {
						const memberLines = m.asString(this);
						if (memberLines.length > 0) {
							// Only tag as inherited if source is a different class
							if (source !== selfName) {
								injectInheritedTags(memberLines, source);
							}
							def.push(...memberLines);
						}
					}
				}
			}
			// END BODY

			// END CLASS
			def.push("}");
			def.push("");
		}

		return def;
	}

	async stringifyNamespace(node: GirModule): Promise<string | null> {
		const result = await this.generateNamespace(node);
		return result?.join("\n") ?? null;
	}

	/**
	 * Generates a namespace as a string (similar to DtsGenerator)
	 */
	async generateNamespaceString(node: GirModule): Promise<string | null> {
		const result = await this.generateNamespace(node);
		return result?.join("\n") ?? null;
	}

	/**
	 * Generates a module declaration (similar to DtsModuleGenerator)
	 */
	async generateModuleDeclaration(node: GirModule): Promise<string | null> {
		try {
			this.log.debug(`Resolving the types of ${node.namespace}...`);

			const result = await this.generateModule(node);
			if (!result) {
				this.log.reportGenerationFailure(node.namespace, new Error("Failed to generate module"), "Module Declaration");
				return null;
			}

			const content = result.join("\n");
			return this.wrapInModuleDeclaration(content, node);
		} catch (err) {
			this.log.reportGenerationFailure(node.namespace, err as Error, "Module Declaration");
			return null;
		}
	}

	/**
	 * Generates inline DTS content (similar to DtsInlineGenerator)
	 */
	async generateInline(node: GirModule): Promise<string | null> {
		try {
			this.log.debug(`Resolving the types of ${node.namespace}...`);

			const { namespace: name, version } = node.dependency;

			const header = `
/**
 * ${name} ${version}
 * 
 * Generated from ${node.package_version.join(".")}
 */
`;
			const base = `

`;

			const result = await this.generateModule(node);
			if (!result) {
				this.log.reportGenerationFailure(node.namespace, new Error("Failed to generate inline content"), "DTS Inline");
				return null;
			}

			const content = result.join("\n");
			const output = [header, base, content].join("\n\n");

			this.log.debug(`Printing ${node.namespace}...`);

			return output;
		} catch (err) {
			this.log.reportGenerationFailure(node.namespace, err as Error, "DTS Inline");
			return null;
		}
	}

	async generateModule(girModule: GirModule): Promise<string[]> {
		const out: string[] = [];

		out.push(...this.addTSDocCommentLines([girModule.packageName]));

		out.push("");

		if (this.options.promisify) {
			promisifyNamespaceFunctions(girModule);
		}

		// Apply overrides BEFORE generating members so noEmit() takes effect
		let overrideSuffix = "";
		if (!this.options.noAdvancedVariants && girModule.namespace === "GLib") {
			overrideSuffix = overrideGLib(girModule);
			// The override function has already called noEmit() on the classes
		} else if (girModule.namespace === "GObject") {
			overrideSuffix = overrideGObject(girModule);
			// The override function has already called noEmit() on the classes
		}

		if (girModule.members) {
			for (const m of girModule.members.values()) {
				out.push(
					...(Array.isArray(m) ? m : [m])
						.flatMap((m) => (m as IntrospectedNamespaceMember) ?? [])
						.filter((m) => m.emit)
						.flatMap((m) => m.asString(this as FormatGenerator<string[]>) ?? ""),
				);
			}
		}

		// Properties added to every GIRepositoryNamespace
		// https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L186-190
		out.push(
			...this.generateConst(
				new IntrospectedConstant({
					// TODO:
					doc: printGirDocComment(
						{
							text: "Name of the imported GIR library",
							tags: [
								{
									text: "https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188",
									tagName: "see",
									paramName: "",
								},
							],
						},
						this.config,
					),
					namespace: this.namespace,
					value: null,
					name: "__name__",
					type: new NativeType("string"),
					// isInjected: false,
					// tsTypeName: 'constant',
					// girTypeName: 'constant',
				}),
				0,
			),
			...this.generateConst(
				new IntrospectedConstant({
					doc: printGirDocComment(
						{
							text: "Version of the imported GIR library",
							tags: [
								{
									text: "https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189",
									tagName: "see",
									paramName: "",
								},
							],
						},
						this.config,
					),
					namespace: this.namespace,
					name: "__version__",
					type: new NativeType("string"),
					value: null,
				}),
				0,
			),
		);

		// Add the override suffix after generating members
		if (overrideSuffix) {
			out.push("", overrideSuffix);
		}

		return Promise.resolve(out);
	}

	/**
	 * Generates a namespace for the given GirModule.
	 * @deprecated Use `generateModule` instead @ewlsh
	 * @param girModule The GirModule to generate a namespace for.
	 * @returns A promise that resolves to the generated namespace.
	 */
	async generateNamespace(girModule: GirModule): Promise<string[]> {
		const out = await this.generateModule(girModule);

		if (!this.config.noNamespace) {
			return Promise.resolve(out);
		}

		out.unshift("");
		out.unshift(`export namespace ${girModule.namespace} {`);
		out.unshift("");

		out.push("}");
		out.push("");
		out.push(`export default ${girModule.namespace};`);

		return Promise.resolve(out);
	}

	/**
	 * Generates a module as a single string (DTS compatibility)
	 */
	async generateModuleString(girModule: GirModule): Promise<string> {
		const result = await this.generateModule(girModule);
		return result.join("\n");
	}

	/**
	 * Generates a namespace as a single string (DTS compatibility)
	 */
	async generateNamespaceAsString(girModule: GirModule): Promise<string> {
		const result = await this.generateNamespace(girModule);
		return result.join("\n");
	}
}

/**
 * Groups items by their source interface/class name (e.g. "Gtk.Accessible").
 * Must be called BEFORE copy({ parent: ... }) so the original parent is preserved.
 */
function groupBySource<T extends { parent: { namespace: { namespace: string }; name: string } }>(
	items: T[],
): Map<string, T[]> {
	const groups = new Map<string, T[]>();
	for (const item of items) {
		const source = `${item.parent.namespace.namespace}.${item.parent.name}`;
		const list = groups.get(source);
		if (list) list.push(item);
		else groups.set(source, [item]);
	}
	return groups;
}

/**
 * Injects a `@category` TSDoc tag into generated member strings.
 * Places the member in a subcategory "Inherited from X" within its kind group,
 * so inherited members appear grouped after own members.
 */
function injectInheritedTags(lines: string[], source: string): void {
	const category = `Inherited from ${source}`;
	// Search backwards — `*/` is typically on the last or second-to-last line
	let closingIdx = -1;
	for (let i = lines.length - 1; i >= 0; i--) {
		if (lines[i].trimEnd().endsWith("*/")) {
			closingIdx = i;
			break;
		}
	}
	if (closingIdx >= 0) {
		const indent = lines[closingIdx].match(/^(\s*)/)?.[1] ?? "";
		lines.splice(closingIdx, 0, `${indent} * @category ${category}`);
	} else {
		lines.unshift(`/** @category ${category} */`);
	}
}

function promisifyIfEnabled(
	options: OptionsGeneration,
	functions: IntrospectedClassFunction[],
): IntrospectedClassFunction[] {
	if (options.promisify) {
		// TODO: Remove this once the type is fixed

		return promisifyFunctions(functions);
	}

	return functions;
}
