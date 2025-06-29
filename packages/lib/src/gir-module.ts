import type { GirType } from "@gi.ts/parser";
import { DependencyManager } from "./dependency-manager.ts";
import { IntrospectedAlias } from "./gir/alias.ts";
import { IntrospectedCallback } from "./gir/callback.ts";
import { IntrospectedConstant } from "./gir/const.ts";
import { IntrospectedEnum } from "./gir/enum.ts";
import { IntrospectedError } from "./gir/error.ts";
import { IntrospectedFunction } from "./gir/function.ts";
import { IntrospectedBase } from "./gir/introspected-base.ts";
import type { IntrospectedClassCallback, IntrospectedClassFunction } from "./gir/introspected-classes.ts";
import { IntrospectedBaseClass, IntrospectedClass, IntrospectedInterface } from "./gir/introspected-classes.ts";
import type { IntrospectedNamespaceMember } from "./gir/introspected-namespace-member.ts";
import type { GirNSMember } from "./gir/namespace.ts";
import type { IntrospectedFunctionParameter } from "./gir/parameter.ts";
import { IntrospectedRecord } from "./gir/record.ts";
import type { NSRegistry } from "./gir/registry.ts";
import { NullableType, ObjectType, TypeIdentifier } from "./gir.ts";
import type { LibraryVersion } from "./library-version.ts";
import { Reporter } from "./reporter.ts";
import { ReporterService } from "./reporter-service.ts";
import type {
	Dependency,
	GirBitfieldElement,
	GirConstantElement,
	GirEnumElement,
	GirInterfaceElement,
	IGirModule,
	OptionsGeneration,
	OptionsLoad,
	TsDocTag,
} from "./types/index.ts";
import { transformGirDocTagText } from "./utils/documentation.ts";
import { isIntrospectable } from "./utils/girs.ts";
import { find } from "./utils/objects.ts";
import { isPrimitiveType } from "./utils/types.ts";
import type { GirVisitor } from "./visitor.ts";

const logger = new Reporter(false, "GirModule", false);

export class GirModule implements IGirModule {
	/**
	 * E.g. 'Gtk'
	 */
	get namespace(): string {
		return this.dependency.namespace;
	}
	/**
	 * E.g. '4.0'
	 */
	get version(): string {
		return this.dependency.version;
	}
	/**
	 * E.g. 'Gtk-4.0'
	 */
	get packageName(): string {
		return this.dependency.packageName;
	}
	/**
	 * E.g. 'Gtk40'
	 * Is used in the generated index.d.ts, for example: `import * as Gtk40 from "./Gtk-4.0.ts";`
	 */
	get importNamespace(): string {
		return this.dependency.importNamespace;
	}

	/**
	 * The NPM package name E.g. 'gtk-4.0'
	 */
	get importName(): string {
		return this.dependency.importName;
	}

	/**
	 * Import path for the package E.g. './Gtk-4.0.ts' or '@girs/Gtk-4.0'
	 */
	get importPath(): string {
		return this.dependency.importPath;
	}

	prefixes: string[] = [];

	/**
	 * The version of the library as an object.
	 * E.g. `{ major: 4, minor: 0, patch: 0 }` or as string `4.0.0`'
	 */
	get libraryVersion(): LibraryVersion {
		// GObject and Gio are following the version of GLib
		if (this.namespace === "GObject" || this.namespace === "Gio") {
			const dep = this.allDependencies.find((girModule) => girModule.namespace === "GLib");
			if (dep) {
				return dep.libraryVersion;
			}
		}
		return this.dependency.libraryVersion;
	}

	protected _dependencies: Dependency[] | null = null;
	protected _transitiveDependencies: Dependency[] | null = null;

	get dependencies(): Dependency[] {
		if (!this._dependencies) {
			throw new Error("dependencies is not initialized, run initDependencies() first");
		}
		return this._dependencies;
	}

	get transitiveDependencies(): Dependency[] {
		if (!this._transitiveDependencies) {
			throw new Error("transitiveDependencies is not initialized, run initTransitiveDependencies() first");
		}
		return this._transitiveDependencies;
	}

	get allDependencies(): Dependency[] {
		if (!this.dependencies) {
			throw new Error("dependencies is not initialized, run init() first");
		}
		return [...new Set([...this.dependencies, ...this.transitiveDependencies])];
	}

	dependencyManager: DependencyManager;

	log!: Reporter;

	extends?: string;

	/**
	 * To prevent constants from being exported twice, the names already exported are saved here for comparison.
	 * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
	 */
	constNames: { [varName: string]: GirConstantElement } = {};

	readonly c_prefixes: string[];
	readonly dependency: Dependency;

	private _members?: Map<string, GirNSMember | GirNSMember[]>;
	private _enum_constants?: Map<string, readonly [string, string]>;
	private _resolve_names: Map<string, TypeIdentifier> = new Map();
	__dts__references?: string[];

	package_version!: readonly [string, string] | readonly [string, string, string];
	parent!: NSRegistry;
	config: OptionsGeneration;

	constructor(dependency: Dependency, prefixes: string[], config: OptionsGeneration) {
		this.dependency = dependency;
		this.c_prefixes = [...prefixes];
		this.package_version = ["0", "0"];
		this.config = config;

		// TODO: Make this a singleton
		this.dependencyManager = DependencyManager.getInstance(this.config);
	}

	public async initDependencies() {
		this._dependencies = await this.dependencyManager.fromGirIncludes(
			this.dependency.girXML?.repository[0]?.include || [],
		);
	}

	public async initTransitiveDependencies(transitiveDependencies: Dependency[]) {
		this._transitiveDependencies = await this.checkTransitiveDependencies(transitiveDependencies);
	}

	get ns() {
		return this;
	}

	private async checkTransitiveDependencies(transitiveDependencies: Dependency[]) {
		// Always pull in GObject-2.0, as we may need it for e.g. GObject-2.0.type
		if (this.packageName !== "GObject-2.0") {
			if (!find(transitiveDependencies, (x) => x.packageName === "GObject-2.0")) {
				transitiveDependencies.push(await this.dependencyManager.get("GObject", "2.0"));
			}
		}

		// Add missing dependencies
		if (this.packageName === "UnityExtras-7.0") {
			if (!find(transitiveDependencies, (x) => x.packageName === "Unity-7.0")) {
				transitiveDependencies.push(await this.dependencyManager.get("Unity", "7.0"));
			}
		}
		if (this.packageName === "UnityExtras-6.0") {
			if (!find(transitiveDependencies, (x) => x.packageName === "Unity-6.0")) {
				transitiveDependencies.push(await this.dependencyManager.get("Unity", "6.0"));
			}
		}
		if (this.packageName === "GTop-2.0") {
			if (!find(transitiveDependencies, (x) => x.packageName === "GLib-2.0")) {
				transitiveDependencies.push(await this.dependencyManager.get("GLib", "2.0"));
			}
		}

		// Gio
		if (this.packageName === "GioUnix-2.0") {
			if (!find(transitiveDependencies, (x) => x.packageName === "Gio-2.0")) {
				transitiveDependencies.push(await this.dependencyManager.get("Gio", "2.0"));
			}
			if (!find(transitiveDependencies, (x) => x.packageName === "GLib-2.0")) {
				transitiveDependencies.push(await this.dependencyManager.get("GLib", "2.0"));
			}
		}

		// Filter out the dependency with the same namespace among each other
		transitiveDependencies = transitiveDependencies.filter((dep, index, self) => {
			const samePackage = self.findIndex((t) => t.namespace === dep.namespace);
			this.log.debug(`Filtering out dependency with same namespace: ${dep.namespace} ${index} ${samePackage}`);
			return index === samePackage;
		});

		return transitiveDependencies;
	}

	getTsDocReturnTags(girElement?: IntrospectedFunction | IntrospectedClassFunction): TsDocTag[] {
		const girReturnValue = girElement?.returnTypeDoc;
		if (!girReturnValue) {
			return [];
		}
		const returnTag: TsDocTag = {
			tagName: "returns",
			paramName: "",
			text: transformGirDocTagText(girReturnValue),
		};

		return [returnTag];
	}

	getTsDocInParamTags(inParams?: IntrospectedFunctionParameter[]): TsDocTag[] {
		const tags: TsDocTag[] = [];
		if (!inParams?.length) {
			return tags;
		}

		for (const inParam of inParams) {
			if (inParam.name) {
				tags.push({
					paramName: inParam.name,
					tagName: "param",
					text: typeof inParam.doc === "string" ? transformGirDocTagText(inParam.doc) : "",
				});
			}
		}

		return tags;
	}

	registerResolveName(resolveName: string, namespace: string, name: string) {
		this._resolve_names.set(resolveName, new TypeIdentifier(name, namespace));
	}

	get members(): Map<string, GirNSMember | GirNSMember[]> {
		if (!this._members) {
			this._members = new Map<string, GirNSMember | GirNSMember[]>();
		}

		return this._members;
	}

	get enum_constants(): Map<string, readonly [string, string]> {
		if (!this._enum_constants) {
			this._enum_constants = new Map();
		}

		return this._enum_constants;
	}

	accept(visitor: GirVisitor) {
		for (const key of [...this.members.keys()]) {
			const member = this.members.get(key);

			if (!member) continue;

			if (Array.isArray(member)) {
				this.members.set(
					key,
					member.map((m) => {
						return m.accept(visitor);
					}),
				);
			} else {
				this.members.set(key, member.accept(visitor));
			}
		}

		return this;
	}

	getImportsForCPrefix(c_prefix: string): GirModule[] {
		return this.parent.namespacesForPrefix(c_prefix);
	}

	// TODO: Move this into the generator
	hasImport(name: string): boolean {
		return this.dependencies.some((dep) => dep.importName === name);
	}

	private _getImport(namespace: string): GirModule | null {
		if (namespace === this.namespace) {
			return this;
		}

		const dep =
			this.dependencies?.find((dep) => dep.namespace === namespace) ??
			this.transitiveDependencies.find((dep) => dep.namespace === namespace);

		// Handle finding imports via their other prefixes
		if (!dep) {
			this.log.info(`Failed to find namespace ${namespace} in dependencies, resolving via c:prefixes`);

			// TODO: It might make more sense to move this conversion _before_
			// the _getImport call.
			const resolvedNamespaces = this.parent.namespacesForPrefix(namespace);
			if (resolvedNamespaces.length > 0) {
				this.log.info(
					`Found namespaces for prefix ${namespace}: ${resolvedNamespaces.map((r) => `${r.namespace} (${r.version})`).join(", ")}`,
				);
			}

			for (const resolvedNamespace of resolvedNamespaces) {
				if (resolvedNamespace.namespace === this.namespace && resolvedNamespace.version === this.version) {
					return this;
				}

				const dep =
					this.dependencies?.find(
						(dep) => dep.namespace === resolvedNamespace.namespace && dep.version === resolvedNamespace.version,
					) ??
					this.transitiveDependencies.find(
						(dep) => dep.namespace === resolvedNamespace.namespace && dep.version === resolvedNamespace.version,
					);

				if (dep) {
					return this.parent.namespace(resolvedNamespace.namespace, dep.version);
				}
			}
		}

		let version = dep?.version;

		if (!version) {
			version = this.parent.assertDefaultVersionOf(namespace);
		}

		return this.parent.namespace(namespace, version);
	}

	getInstalledImport(_namespace: string): GirModule | null {
		if (_namespace === this.namespace) {
			return this;
		}

		const dep =
			this.dependencies?.find((dep) => dep.namespace === _namespace) ??
			this.transitiveDependencies.find((dep) => dep.namespace === _namespace);
		let version = dep?.version;

		if (!version) {
			version = this.parent.defaultVersionOf(_namespace) ?? undefined;
		}

		if (!version) {
			return null;
		}

		const namespace = this.parent.namespace(_namespace, version);

		return namespace;
	}

	assertInstalledImport(_namespace: string): GirModule {
		const namespace = this._getImport(_namespace);

		if (!namespace) {
			throw new Error(`Failed to import ${_namespace} in ${this.namespace}, not installed or accessible.`);
		}

		return namespace;
	}

	getMembers(name: string): IntrospectedNamespaceMember[] {
		const members = this.members.get(name);

		if (Array.isArray(members)) {
			return [...members];
		}
		return members ? [members] : [];
	}

	getMemberWithoutOverrides(name: string) {
		if (this.members.has(name)) {
			const member = this.members.get(name);

			if (!Array.isArray(member)) {
				return member;
			}

			return null;
		}

		const resolvedName = this._resolve_names.get(name);
		if (resolvedName) {
			const member = this.members.get(resolvedName.name);

			if (!Array.isArray(member)) {
				return member;
			}
		}

		return null;
	}

	assertClass(name: string): IntrospectedBaseClass {
		const clazz = this.getClass(name);

		if (!clazz) {
			throw new Error(`[${this.packageName}] Class ${name} does not exist in namespace ${this.namespace}.`);
		}

		return clazz;
	}

	getClass(name: string): IntrospectedBaseClass | null {
		const member = this.getMemberWithoutOverrides(name);

		if (member instanceof IntrospectedBaseClass) {
			return member;
		}
		return null;
	}

	getEnum(name: string): IntrospectedEnum | null {
		const member = this.getMemberWithoutOverrides(name);

		if (member instanceof IntrospectedEnum) {
			return member;
		}
		return null;
	}

	getAlias(name: string): IntrospectedAlias | null {
		const member = this.getMemberWithoutOverrides(name);

		if (member instanceof IntrospectedAlias) {
			return member;
		}
		return null;
	}

	hasSymbol(name: string) {
		return this.members.has(name);
	}

	resolveSymbolFromTypeName(name: string): string | null {
		const resolvedName = this._resolve_names.get(name);

		if (!resolvedName) {
			return null;
		}

		const member = this.members.get(resolvedName.name);
		if (member instanceof IntrospectedBase) {
			return member.name;
		}

		return null;
	}

	findClassCallback(name: string): [string | null, string] {
		const clazzes = Array.from(this.members.values()).filter(
			(m): m is IntrospectedBaseClass => m instanceof IntrospectedBaseClass,
		);
		const res = clazzes
			.map<[IntrospectedBaseClass, IntrospectedClassCallback | undefined]>((m) => [
				m,
				m.callbacks.find((c) => c.name === name || c.resolve_names.includes(name)),
			])
			.find((r): r is [IntrospectedBaseClass, IntrospectedClassCallback] => r[1] != null);

		if (res) {
			return [res[0].name, res[1].name];
		} else {
			return [null, name];
		}
	}

	/**
	 * This is an internal method to add TypeScript <reference>
	 * comments when overrides use parts of the TypeScript standard
	 * libraries that are newer than default.
	 */
	___dts___addReference(reference: string) {
		this.__dts__references ??= [];
		this.__dts__references.push(reference);
	}

	static async load(dependency: Dependency, config: OptionsGeneration, registry: NSRegistry): Promise<GirModule> {
		const girXML = dependency.girXML;
		const ns = girXML?.repository[0]?.namespace?.[0];
		if (!girXML) {
			throw new Error(`Failed to load gir xml of ${dependency.packageName}`);
		}
		if (!ns) {
			const packageName = girXML.repository[0].package?.[0]?.$.name || "unknown package";
			throw new Error(`Missing namespace in ${packageName}`);
		}

		const modName = ns.$.name;
		const version = ns.$.version;

		if (!modName) {
			throw new Error("Invalid GIR file: no namespace name specified.");
		}

		if (!version) {
			throw new Error("Invalid GIR file: no version name specified.");
		}

		const c_prefix = ns.$?.["c:identifier-prefixes"]?.split(",") ?? [];

		const building = new GirModule(dependency, c_prefix, config);
		await building.initDependencies();
		building.parent = registry;
		// Set the namespace object here to prevent re-parsing the namespace if
		// another namespace imports it.
		registry.register(building);

		const prefixes = girXML.repository[0]?.$?.["c:identifier-prefixes"]?.split(",");
		const unknownPrefixes = prefixes?.filter((pre) => pre !== modName);

		if (unknownPrefixes && unknownPrefixes.length > 0) {
			logger.log(`Found additional prefixes for ${modName}: ${unknownPrefixes.join(", ")}`);

			building.prefixes.push(...unknownPrefixes);
		}

		building.log = new Reporter(
			config.verbose,
			`GirModule(${building.packageName})`,
			config.reporter,
			config.reporterOutput,
		);

		// Register with reporter service if reporting is enabled
		if (config.reporter) {
			const reporterService = ReporterService.getInstance();
			reporterService.registerReporter(`GirModule(${building.packageName})`, building.log);
		}

		return building;
	}

	/** Start to parse all the data from the XML we need for the typescript generation */
	public parse() {
		this.log.debug(`Parsing ${this.dependency.packageName}...`);
		const girXML = this.dependency.girXML;
		const ns = girXML?.repository[0]?.namespace?.[0];
		const options: OptionsLoad = {
			loadDocs: !this.config.noComments,
			propertyCase: "both",
			verbose: this.config.verbose,
			reporter: this.config.reporter,
			reporterOutput: this.config.reporterOutput,
		};
		if (!girXML) {
			throw new Error(`Failed to load gir xml of ${this.dependency.packageName}`);
		}
		if (!ns) {
			const packageName = girXML.repository[0].package?.[0]?.$.name || "unknown package";
			throw new Error(`Missing namespace in ${packageName}`);
		}

		const importConflicts = (el: IntrospectedConstant | IntrospectedBaseClass | IntrospectedFunction) => {
			return !this.hasImport(el.name);
		};

		if (ns.enumeration) {
			// Get the requested enums
			ns.enumeration
				?.map((enumeration) => {
					if (enumeration.$["glib:error-domain"]) {
						return IntrospectedError.fromXML(enumeration as GirEnumElement, this, options);
					} else {
						return IntrospectedEnum.fromXML(enumeration as GirEnumElement, this, options);
					}
				})
				.forEach((c) => this.members.set(c.name, c));
		}

		// Constants
		if (ns.constant) {
			ns.constant
				?.filter(isIntrospectable)
				.map((constant) => IntrospectedConstant.fromXML(constant, this, options))
				.filter(importConflicts)
				.forEach((c) => this.members.set(c.name, c));
		}

		// Get the requested functions
		if (ns.function) {
			ns.function
				?.filter(isIntrospectable)
				.map((func) => IntrospectedFunction.fromXML(func, this, options))
				.filter(importConflicts)
				.forEach((c) => this.members.set(c.name, c));
		}

		if (ns.callback) {
			ns.callback
				?.filter(isIntrospectable)
				.map((callback) => IntrospectedCallback.fromXML(callback, this, options))
				.filter(importConflicts)
				.forEach((c) => this.members.set(c.name, c));
		}

		if (ns["glib:boxed"]) {
			ns["glib:boxed"]
				?.filter(isIntrospectable)
				.map(
					(boxed) =>
						new IntrospectedAlias({
							name: boxed.$["glib:name"],
							namespace: this,
							type: new NullableType(ObjectType),
						}),
				)
				.forEach((c) => this.members.set(c.name, c));
		}

		// Bitfield is a type of enum
		if (ns.bitfield) {
			ns.bitfield
				?.filter(isIntrospectable)
				.map((field) => IntrospectedEnum.fromXML(field as GirBitfieldElement, this, options, true))
				.forEach((c) => this.members.set(c.name, c));
		}

		// The `enum_constants` map maps the C identifiers (GTK_BUTTON_TYPE_Y)
		// to the name of the enum (Button) to resolve references (Gtk.Button.Y)
		Array.from(this.members.values())
			.filter((m): m is IntrospectedEnum => m instanceof IntrospectedEnum)
			.forEach((m) => {
				m.members.forEach((member) => {
					this.enum_constants.set(member.c_identifier, [m.name, member.name] as const);
				});
			});

		// Get the requested classes
		if (ns.class) {
			ns.class
				?.filter(isIntrospectable)
				.map((klass) => IntrospectedClass.fromXML(klass, this, options))
				.filter(importConflicts)
				.forEach((c) => this.members.set(c.name, c));
		}

		if (ns.record) {
			ns.record
				?.filter(isIntrospectable)
				.map((record) => IntrospectedRecord.fromXML(record, this, options))
				.filter(importConflicts)
				.forEach((c) => this.members.set(c.name, c));
		}

		if (ns.union) {
			ns.union
				?.filter(isIntrospectable)
				.map((union) => IntrospectedRecord.fromXML(union, this, options))
				.filter(importConflicts)
				.forEach((c) => this.members.set(c.name, c));
		}

		if (ns.interface) {
			ns.interface
				?.map((inter) => IntrospectedInterface.fromXML(inter as GirInterfaceElement, this, options))
				.filter(importConflicts)
				.forEach((c) => this.members.set(c.name, c));
		}

		if (ns.alias) {
			type NamedType = GirType & { $: { name: string } };

			ns.alias
				?.filter(isIntrospectable)
				// Avoid attempting to alias non-introspectable symbols.
				.map((b) => {
					b.type = b.type
						?.filter((t): t is NamedType => !!t?.$.name)
						.map((t) => {
							if (t.$.name && !this.hasSymbol(t.$.name) && !isPrimitiveType(t.$.name) && !t.$.name.includes(".")) {
								return { $: { name: "unknown", "c:type": "unknown" } } as GirType;
							}

							return t;
						});

					return b;
				})
				.map((alias) => IntrospectedAlias.fromXML(alias, this, options))
				.filter((alias): alias is IntrospectedAlias => alias != null)
				.forEach((c) => this.members.set(c.name, c));
		}
	}
}
