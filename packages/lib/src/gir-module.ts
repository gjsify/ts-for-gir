// TODO move this class into a web-worker? https://www.npmjs.com/package/web-worker
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IGNORE_GIR_TYPE_TS_DOC_TYPES, Transformation } from './transformation.js'
import { Logger } from './logger.js'
import { DependencyManager } from './dependency-manager.js'
import { find } from './utils.js'
import { SymTable } from './symtable.js'
import { LibraryVersion } from './library-version.js'

import type {
    Dependency,
    GirType,
    GirConstantElement,
    TsDoc,
    TsDocTag,
    GirInterfaceElement,
    GirInfoAttrs,
    OptionsGeneration,
    GirDocElement,
    GirEnumElement,
    GirBitfieldElement,
} from './types/index.js'
import {
    ClosureType,
    TypeIdentifier,
    PromiseType,
    VoidType,
    BooleanType,
    TupleType,
    BinaryType,
    NullableType,
    ObjectType,
    GirNSMember,
} from './gir.js'
import { IntrospectedAlias } from './gir/alias.js'
import { IntrospectedBase, IntrospectedNamespaceMember } from './gir/base.js'
import { IntrospectedBaseClass, IntrospectedClass, IntrospectedRecord, IntrospectedInterface } from './gir/class.js'
import { IntrospectedConstant } from './gir/const.js'
import { IntrospectedEnum, IntrospectedError } from './gir/enum.js'
import {
    IntrospectedFunction,
    IntrospectedCallback,
    IntrospectedClassCallback,
    IntrospectedFunctionParameter,
    IntrospectedClassFunction,
} from './gir/function.js'
import { NSRegistry } from './gir/registry.js'
import { isPrimitiveType } from './gir/util.js'
import { GirVisitor } from './visitor.js'

import type { OptionsLoad } from './types/index.js'

export class GirModule {
    /**
     * E.g. 'Gtk'
     */
    get namespace(): string {
        return this.dependency.namespace
    }
    /**
     * E.g. '4.0'
     */
    get version(): string {
        return this.dependency.version
    }
    /**
     * E.g. 'Gtk-4.0'
     */
    get packageName(): string {
        return this.dependency.packageName
    }
    /**
     * E.g. 'Gtk40'
     * Is used in the generated index.d.ts, for example: `import * as Gtk40 from "./Gtk-4.0.js";`
     */
    get importNamespace(): string {
        return this.dependency.importNamespace
    }

    get importName(): string {
        return this.dependency.importName
    }

    get importPath(): string {
        return this.dependency.importPath
    }

    prefixes: string[] = []

    /**
     * The version of the library as an object.
     * E.g. `{ major: 4, minor: 0, patch: 0 }` or as string `4.0.0`'
     */
    libraryVersion!: LibraryVersion

    protected _dependencies: Dependency[] | null = null
    protected _transitiveDependencies: Dependency[] | null = null

    get dependencies(): Dependency[] {
        if (!this._dependencies) {
            throw new Error('dependencies is not initialized, run initDependencies() first')
        }
        return this._dependencies
    }

    get transitiveDependencies(): Dependency[] {
        if (!this._transitiveDependencies) {
            throw new Error('transitiveDependencies is not initialized, run initTransitiveDependencies() first')
        }
        return this._transitiveDependencies
    }

    get allDependencies(): Dependency[] {
        if (!this.dependencies) {
            throw new Error('dependencies is not initialized, run init() first')
        }
        return [...new Set([...this.dependencies, ...this.transitiveDependencies])]
    }

    /**
     * Used to find namespaces that are used in other modules
     */
    symTable!: SymTable

    transformation!: Transformation

    dependencyManager: DependencyManager

    log!: Logger

    extends?: string

    /**
     * To prevent constants from being exported twice, the names already exported are saved here for comparison.
     * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
     */
    constNames: { [varName: string]: GirConstantElement } = {}

    readonly c_prefixes: string[]

    private _members?: Map<string, GirNSMember | GirNSMember[]>
    private _enum_constants?: Map<string, readonly [string, string]>
    private _resolve_names: Map<string, TypeIdentifier> = new Map()
    __dts__references?: string[]

    package_version!: readonly [string, string] | readonly [string, string, string]
    parent!: NSRegistry
    config: OptionsGeneration

    constructor(
        readonly dependency: Dependency,
        prefixes: string[],
        config: OptionsGeneration,
    ) {
        this.c_prefixes = [...prefixes]
        this.package_version = ['0', '0']
        this.config = config

        // TODO: Make this a singleton
        this.dependencyManager = DependencyManager.getInstance(this.config)
    }

    public async initDependencies() {
        this._dependencies = await this.dependencyManager.fromGirIncludes(
            this.dependency.girXML?.repository[0]?.include || [],
        )
    }

    public async initTransitiveDependencies(transitiveDependencies: Dependency[]) {
        this._transitiveDependencies = await this.checkTransitiveDependencies(transitiveDependencies)
    }

    get ns() {
        return this
    }

    private async checkTransitiveDependencies(transitiveDependencies: Dependency[]) {
        // Always pull in GObject-2.0, as we may need it for e.g. GObject-2.0.type
        if (this.packageName !== 'GObject-2.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'GObject-2.0')) {
                transitiveDependencies.push(await this.dependencyManager.get('GObject', '2.0'))
            }
        }

        // Add missing dependencies
        if (this.packageName === 'UnityExtras-7.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'Unity-7.0')) {
                transitiveDependencies.push(await this.dependencyManager.get('Unity', '7.0'))
            }
        }
        if (this.packageName === 'UnityExtras-6.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'Unity-6.0')) {
                transitiveDependencies.push(await this.dependencyManager.get('Unity', '6.0'))
            }
        }
        if (this.packageName === 'GTop-2.0') {
            if (!find(transitiveDependencies, (x) => x.packageName === 'GLib-2.0')) {
                transitiveDependencies.push(await this.dependencyManager.get('GLib', '2.0'))
            }
        }

        return transitiveDependencies
    }

    private getTsDoc(girDoc: GirDocElement) {
        const tsDoc: TsDoc = {
            text: '',
            tags: [],
        }
        if (girDoc.doc?.[0]?._) {
            // TODO: Somehow _ is not a string
            let text = `${girDoc.doc?.[0]?._ || ''}`
            text = this.transformation.transformGirDocText(text)
            tsDoc.text = text
        }

        return tsDoc
    }

    private getTsDocGirElementTags(tsTypeName?: string, girTypeName?: string): TsDocTag[] {
        const tags: TsDocTag[] = []

        if (!girTypeName || IGNORE_GIR_TYPE_TS_DOC_TYPES.includes(girTypeName)) {
            return tags
        }

        tags.push({
            tagName: girTypeName,
            paramName: '',
            text: '',
        })

        return tags
    }

    getTsDocReturnTags(girElement?: IntrospectedFunction | IntrospectedClassFunction): TsDocTag[] {
        const girReturnValue = girElement?.returnTypeDoc
        if (!girReturnValue) {
            return []
        }
        const returnTag: TsDocTag = {
            tagName: 'returns',
            paramName: '',
            text: this.transformation.transformGirDocTagText(girReturnValue),
        }

        return [returnTag]
    }

    getTsDocInParamTags(inParams?: IntrospectedFunctionParameter[]): TsDocTag[] {
        const tags: TsDocTag[] = []
        if (!inParams?.length) {
            return tags
        }

        for (const inParam of inParams) {
            if (inParam.name) {
                tags.push({
                    paramName: inParam.name,
                    tagName: 'param',
                    text:
                        typeof inParam.doc === 'string' ? this.transformation.transformGirDocTagText(inParam.doc) : '',
                })
            }
        }

        return tags
    }

    registerResolveName(resolveName: string, namespace: string, name: string) {
        this._resolve_names.set(resolveName, new TypeIdentifier(name, namespace))
    }

    get members(): Map<string, GirNSMember | GirNSMember[]> {
        if (!this._members) {
            this._members = new Map<string, GirNSMember | GirNSMember[]>()
        }

        return this._members
    }

    get enum_constants(): Map<string, readonly [string, string]> {
        if (!this._enum_constants) {
            this._enum_constants = new Map()
        }

        return this._enum_constants
    }

    accept(visitor: GirVisitor) {
        for (const key of [...this.members.keys()]) {
            const member = this.members.get(key)

            if (!member) continue

            if (Array.isArray(member)) {
                this.members.set(
                    key,
                    member.map((m) => {
                        return m.accept(visitor)
                    }),
                )
            } else {
                this.members.set(key, member.accept(visitor))
            }
        }

        return this
    }

    getImportsForCPrefix(c_prefix: string): GirModule[] {
        return this.parent.namespacesForPrefix(c_prefix)
    }

    // TODO: Move this into the generator
    hasImport(name: string): boolean {
        if (!this.dependencies) {
            throw new Error('')
        }
        return this.dependencies.some((dep) => dep.importName === name)
    }

    private _getImport(namespace: string): GirModule | null {
        if (namespace === this.namespace) {
            return this
        }

        const dep =
            this.dependencies?.find((dep) => dep.namespace === namespace) ??
            this.transitiveDependencies.find((dep) => dep.namespace === namespace)

        // Handle finding imports via their other prefixes
        if (!dep) {
            this.log.info(`Failed to find namespace ${namespace} in dependencies, resolving via c:prefixes`)

            // TODO: It might make more sense to move this conversion _before_
            // the _getImport call.
            const resolvedNamespaces = this.dependencyManager.namespacesForPrefix(namespace)
            if (resolvedNamespaces.length > 0) {
                this.log.info(
                    `Found namespaces for prefix ${namespace}: ${resolvedNamespaces.map((r) => `${r.namespace} (${r.version})`).join(', ')}`,
                )
            }

            for (const resolvedNamespace of resolvedNamespaces) {
                if (resolvedNamespace.namespace === this.namespace && resolvedNamespace.version === this.version) {
                    return this
                }

                const dep =
                    this.dependencies?.find(
                        (dep) =>
                            dep.namespace === resolvedNamespace.namespace && dep.version === resolvedNamespace.version,
                    ) ??
                    this.transitiveDependencies.find(
                        (dep) =>
                            dep.namespace === resolvedNamespace.namespace && dep.version === resolvedNamespace.version,
                    )

                if (dep) {
                    return this.parent.namespace(resolvedNamespace.namespace, dep.version)
                }
            }
        }

        let version = dep?.version

        if (!version) {
            version = this.parent.assertDefaultVersionOf(namespace)
        }

        return this.parent.namespace(namespace, version)
    }

    getInstalledImport(_namespace: string): GirModule | null {
        if (_namespace === this.namespace) {
            return this
        }

        const dep =
            this.dependencies?.find((dep) => dep.namespace === _namespace) ??
            this.transitiveDependencies.find((dep) => dep.namespace === _namespace)
        let version = dep?.version

        if (!version) {
            version = this.parent.defaultVersionOf(_namespace) ?? undefined
        }

        if (!version) {
            return null
        }

        const namespace = this.parent.namespace(_namespace, version)

        return namespace
    }

    assertInstalledImport(_namespace: string): GirModule {
        const namespace = this._getImport(_namespace)

        if (!namespace) {
            throw new Error(`Failed to import ${_namespace} in ${this.namespace}, not installed or accessible.`)
        }

        return namespace
    }

    getMembers(name: string): IntrospectedNamespaceMember[] {
        const members = this.members.get(name)

        if (Array.isArray(members)) {
            return [...members]
        }
        return members ? [members] : []
    }

    getMemberWithoutOverrides(name: string) {
        if (this.members.has(name)) {
            const member = this.members.get(name)

            if (!Array.isArray(member)) {
                return member
            }

            return null
        }

        const resolvedName = this._resolve_names.get(name)
        if (resolvedName) {
            const member = this.members.get(resolvedName.name)

            if (!Array.isArray(member)) {
                return member
            }
        }

        return null
    }

    assertClass(name: string): IntrospectedBaseClass {
        const clazz = this.getClass(name)

        if (!clazz) {
            throw new Error(`Class ${name} does not exist in namespace ${this.namespace}.`)
        }

        return clazz
    }

    getClass(name: string): IntrospectedBaseClass | null {
        const member = this.getMemberWithoutOverrides(name)

        if (member instanceof IntrospectedBaseClass) {
            return member
        }
        return null
    }

    getEnum(name: string): IntrospectedEnum | null {
        const member = this.getMemberWithoutOverrides(name)

        if (member instanceof IntrospectedEnum) {
            return member
        }
        return null
    }

    getAlias(name: string): IntrospectedAlias | null {
        const member = this.getMemberWithoutOverrides(name)

        if (member instanceof IntrospectedAlias) {
            return member
        }
        return null
    }

    hasSymbol(name: string) {
        return this.members.has(name)
    }

    resolveSymbolFromTypeName(name: string): string | null {
        const resolvedName = this._resolve_names.get(name)

        if (!resolvedName) {
            return null
        }

        const member = this.members.get(resolvedName.name)
        if (member instanceof IntrospectedBase) {
            return member.name
        }

        return null
    }

    findClassCallback(name: string): [string | null, string] {
        const clazzes = Array.from(this.members.values()).filter(
            (m): m is IntrospectedBaseClass => m instanceof IntrospectedBaseClass,
        )
        const res = clazzes
            .map<
                [IntrospectedBaseClass, IntrospectedClassCallback | undefined]
            >((m) => [m, m.callbacks.find((c) => c.name === name || c.resolve_names.includes(name))])
            .find((r): r is [IntrospectedBaseClass, IntrospectedClassCallback] => r[1] != null)

        if (res) {
            return [res[0].name, res[1].name]
        } else {
            return [null, name]
        }
    }

    /**
     * This is an internal method to add TypeScript <reference>
     * comments when overrides use parts of the TypeScript standard
     * libraries that are newer than default.
     */
    ___dts___addReference(reference: string) {
        this.__dts__references ??= []
        this.__dts__references.push(reference)
    }

    static async load(dependency: Dependency, config: OptionsGeneration, registry: NSRegistry): Promise<GirModule> {
        const girXML = dependency.girXML

        if (!girXML) {
            throw new Error(`Failed to load gir xml of ${dependency.packageName}`)
        }

        const ns = girXML?.repository[0]?.namespace?.[0]

        if (!ns) throw new Error(`Missing namespace in ${girXML.repository[0].package[0].$.name}`)

        const modName = ns.$['name']
        const version = ns.$['version']

        const options: OptionsLoad = {
            loadDocs: !config.noComments,
            propertyCase: 'both',
            verbose: config.verbose,
        }

        if (!modName) {
            throw new Error('Invalid GIR file: no namespace name specified.')
        }

        if (!version) {
            throw new Error('Invalid GIR file: no version name specified.')
        }

        const c_prefix = ns.$?.['c:identifier-prefixes']?.split(',') ?? []

        if (options.verbose) {
            console.debug(`Parsing ${modName}...`)
        }
        const building = new GirModule(dependency, c_prefix, config)
        await building.initDependencies()
        building.parent = registry
        // Set the namespace object here to prevent re-parsing the namespace if
        // another namespace imports it.
        registry.register(building)

        const prefixes = girXML.repository[0]?.$?.['c:identifier-prefixes']?.split(',')
        const unknownPrefixes = prefixes?.filter((pre) => pre !== modName)

        if (unknownPrefixes && unknownPrefixes.length > 0) {
            console.log(`Found additional prefixes for ${modName}: ${unknownPrefixes.join(', ')}`)

            building.prefixes.push(...unknownPrefixes)
        }

        const importConflicts = (el: IntrospectedConstant | IntrospectedBaseClass | IntrospectedFunction) => {
            return !building.hasImport(el.name)
        }

        if (ns.enumeration) {
            // Get the requested enums
            ns.enumeration
                ?.map((enumeration) => {
                    if (enumeration.$['glib:error-domain']) {
                        return IntrospectedError.fromXML(enumeration as GirEnumElement, building, options)
                    } else {
                        return IntrospectedEnum.fromXML(enumeration as GirEnumElement, building, options)
                    }
                })
                .forEach((c) => building.members.set(c.name, c))
        }

        // Constants
        if (ns.constant) {
            ns.constant
                ?.filter(isIntrospectable)
                .map((constant) => IntrospectedConstant.fromXML(constant, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        // Get the requested functions
        if (ns.function) {
            ns.function
                ?.filter(isIntrospectable)
                .map((func) => IntrospectedFunction.fromXML(func, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.callback) {
            ns.callback
                ?.filter(isIntrospectable)
                .map((callback) => IntrospectedCallback.fromXML(callback, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns['glib:boxed']) {
            ns['glib:boxed']
                ?.filter(isIntrospectable)
                .map(
                    (boxed) =>
                        new IntrospectedAlias({
                            name: boxed.$['glib:name'],
                            namespace: building,
                            type: new NullableType(ObjectType),
                        }),
                )
                .forEach((c) => building.members.set(c.name, c))
        }

        // Bitfield is a type of enum
        if (ns.bitfield) {
            ns.bitfield
                ?.filter(isIntrospectable)
                .map((field) => IntrospectedEnum.fromXML(field as GirBitfieldElement, building, options, true))
                .forEach((c) => building.members.set(c.name, c))
        }

        // The `enum_constants` map maps the C identifiers (GTK_BUTTON_TYPE_Y)
        // to the name of the enum (Button) to resolve references (Gtk.Button.Y)
        Array.from(building.members.values())
            .filter((m): m is IntrospectedEnum => m instanceof IntrospectedEnum)
            .forEach((m) => {
                m.members.forEach((member) => {
                    building.enum_constants.set(member.c_identifier, [m.name, member.name] as const)
                })
            })

        // Get the requested classes
        if (ns.class) {
            ns.class
                ?.filter(isIntrospectable)
                .map((klass) => IntrospectedClass.fromXML(klass, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.record) {
            ns.record
                ?.filter(isIntrospectable)
                .map((record) => IntrospectedRecord.fromXML(record, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.union) {
            ns.union
                ?.filter(isIntrospectable)
                .map((union) => IntrospectedRecord.fromXML(union, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.interface) {
            ns.interface
                ?.map((inter) => IntrospectedInterface.fromXML(inter as GirInterfaceElement, building, options))
                .filter(importConflicts)
                .forEach((c) => building.members.set(c.name, c))
        }

        if (ns.alias) {
            type NamedType = GirType & { $: { name: string } }

            ns.alias
                ?.filter(isIntrospectable)
                // Avoid attempting to alias non-introspectable symbols.
                .map((b) => {
                    b.type = b.type
                        ?.filter((t): t is NamedType => !!(t && t.$.name))
                        .map((t) => {
                            if (
                                t.$.name &&
                                !building.hasSymbol(t.$.name) &&
                                !isPrimitiveType(t.$.name) &&
                                !t.$.name.includes('.')
                            ) {
                                return { $: { name: 'unknown', 'c:type': 'unknown' } } as GirType
                            }

                            return t
                        })

                    return b
                })
                .map((alias) => IntrospectedAlias.fromXML(alias, building, options))
                .filter((alias): alias is IntrospectedAlias => alias != null)
                .forEach((c) => building.members.set(c.name, c))
        }

        // building.namespace = building.ns.name
        // building.version = building.ns.version
        // building.packageName = `${building.namespace}-${building.version}`
        building.libraryVersion = new LibraryVersion(ns.constant, building.version)
        building.transformation = Transformation.getSingleton(config)

        building.log = new Logger(config.verbose, building.namespace || 'GirModule')
        building.symTable = new SymTable(building.config, building.namespace, building.namespace)

        return building
    }

    /**
     * Start processing the typescript data
     */
    public start(girModules: GirModule[]) {
        // GObject and Gio are following the version of GLib
        if (this.namespace === 'GObject' || this.namespace === 'Gio') {
            const glibModule = girModules.find((girModule) => girModule.namespace === 'GLib')
            if (glibModule) {
                this.libraryVersion = glibModule.libraryVersion
            }
        }
    }
}

export const isIntrospectable = (e: { $?: GirInfoAttrs }) =>
    !e || !e.$ || !e.$.introspectable || e.$.introspectable === '1'
export const isDeprecated = (e: { $: GirInfoAttrs }) => e && e.$ && e.$.deprecated === '1'
export const deprecatedVersion = (e: { $: GirInfoAttrs }) => e?.$?.['deprecated-version']
export const introducedVersion = (e: { $: GirInfoAttrs }) => e?.$?.version

export function promisifyNamespaceFunctions(namespace: GirModule) {
    return namespace.members.forEach((node) => {
        if (!(node instanceof IntrospectedFunction)) return

        if (node.parameters.length < 1) return

        const last_param = node.parameters[node.parameters.length - 1]

        if (!last_param) return

        const last_param_unwrapped = last_param.type.unwrap()

        if (!(last_param_unwrapped instanceof ClosureType)) return

        const internal = last_param_unwrapped.type

        if (internal instanceof TypeIdentifier && internal.is('Gio', 'AsyncReadyCallback')) {
            const async_res = [
                ...Array.from(namespace.members.values()).filter(
                    (m): m is IntrospectedFunction => m instanceof IntrospectedFunction,
                ),
            ].find((m) => m.name === `${node.name.replace(/_async$/, '')}_finish` || m.name === `${node.name}_finish`)

            if (async_res) {
                const async_parameters = node.parameters.slice(0, -1).map((p) => p.copy())
                const sync_parameters = node.parameters.map((p) => p.copy({ isOptional: false }))
                const output_parameters = async_res.output_parameters

                let async_return = new PromiseType(async_res.return())

                if (output_parameters.length > 0) {
                    const raw_return = async_res.return()
                    if (raw_return.equals(VoidType) || raw_return.equals(BooleanType)) {
                        const [output_type, ...output_types] = output_parameters.map((op) => op.type)
                        async_return = new PromiseType(new TupleType(output_type, ...output_types))
                    } else {
                        const [...output_types] = output_parameters.map((op) => op.type)
                        async_return = new PromiseType(new TupleType(raw_return, ...output_types))
                    }
                }

                namespace.members.set(node.name, [
                    node.copy({
                        parameters: async_parameters,
                        return_type: async_return,
                    }),
                    node.copy({
                        parameters: sync_parameters,
                    }),
                    node.copy({
                        return_type: new BinaryType(async_return, node.return()),
                    }),
                ])
            }
        }
    })
}
