// @ts-nocheck TODO
import test from 'ava'
import {
    GirEnumElement,
    GirModule,
    GenerateConfig,
    GirFunctionElement,
    GenerationHandler,
    GeneratorType,
} from '../../src/index.js'
import * as TestData from './testData.js'

const emptyRepositoryXml = {
    repository: {
        namespace: [
            {
                $: {
                    name: 'Test',
                    version: '1.0',
                },
            },
        ],
    },
}

const emptyConstruct = { $: {} }

const config: GenerateConfig = {
    environment: 'gjs',
    girDirectories: [''],
    outdir: '',
    pretty: false,
    verbose: false,
    buildType: 'lib',
    noComments: true,
    useNamespace: false,
}

const generatorHandler = new GenerationHandler(config, GeneratorType.TYPES)

test('enumeration', (t) => {
    const enum_: GirEnumElement = {
        $: {
            name: 'MyEnum',
        },
        member: [
            {
                $: {
                    name: 'member_1',
                    value: '0',
                },
            },
        ],
    }

    const inheritance = {}
    const mod = new GirModule(emptyRepositoryXml, config)
    mod.ns.enumeration = [enum_]
    mod.init(inheritance)
    generatorHandler.finalizeInheritance(inheritance)
    mod.start()
    t.deepEqual(generatorHandler.generator.generateEnumeration(enum_, 0), [
        'export enum MyEnum {',
        '    MEMBER_1,',
        '}',
    ])
})

test('constant', (t) => {
    const var_ = {
        $: {
            name: 'MY_CONST',
        },
        type: [
            {
                $: {
                    name: 'MyType',
                },
            },
        ],
    }
    const arrVar = {
        $: { name: 'MY_ARR' },
        array: [
            {
                $: { length: '1' },
                type: [{ $: { name: 'MyType' } }],
            },
        ],
    }

    const inheritance = {}
    const mod = new GirModule(emptyRepositoryXml, config)
    t.is(mod.namespace, 'Test')

    mod.symTable.set([], 'Test.MyType', emptyConstruct)

    mod.ns.constant = [var_, arrVar]
    mod.init(inheritance)
    generatorHandler.finalizeInheritance(inheritance)
    mod.start()

    t.deepEqual(generatorHandler.generator.generateConstant(var_, mod.namespace, 0), ['export const MY_CONST: MyType'])
    t.deepEqual(generatorHandler.generator.generateConstant(arrVar, mod.namespace, 0), [
        'export const MY_ARR: MyType[]',
    ])
})

test('function', (t) => {
    const func: GirFunctionElement = {
        $: { name: 'my_func' },
        parameters: [
            {
                parameter: [
                    {
                        $: { name: 'arg1' },
                        type: [{ $: { name: 'MyType' } }],
                    },
                ],
            },
        ],
        'return-value': [{ $: { 'transfer-ownership': 'none' }, type: [{ $: { name: 'utf8' } }] }],
    }

    const inheritance = {}
    const mod = new GirModule(emptyRepositoryXml, config)
    t.is(mod.namespace, 'Test')

    mod.symTable.set([], 'Test.MyType', emptyConstruct)
    mod.symTable.set([], 'GLib.DestroyNotify', emptyConstruct)
    mod.symTable.set([], 'GLib.Variant', emptyConstruct)
    mod.symTable.set([], 'Test.BusNameOwnerFlags', emptyConstruct)
    mod.symTable.set([], 'Test.ButAcquireCallback', emptyConstruct)
    mod.symTable.set([], 'Test.BusNameAcquiredCallback', emptyConstruct)
    mod.symTable.set([], 'Test.BusType', emptyConstruct)
    mod.symTable.set([], 'Test.BusAcquiredCallback', emptyConstruct)
    mod.symTable.set([], 'Test.BusNameLostCallback', emptyConstruct)

    const func3 = TestData.funcBusOwnName
    func3.$.introspectable = '0'
    mod.ns.function = [func, TestData.funcBusOwnName, func3]
    mod.init(inheritance)
    generatorHandler.finalizeInheritance(inheritance)
    mod.start()

    t.deepEqual(generatorHandler.generator.generateFunction(func, [], mod.namespace, 0), [
        'export function my_func(arg1: MyType): string',
    ])

    t.deepEqual(generatorHandler.generator.generateFunction(TestData.funcBusOwnName, [], mod.namespace, 0), [])

    t.deepEqual(generatorHandler.generator.generateFunction(func3, [], mod.namespace, 0), [])
})

test('callback', (t) => {
    const cbs: GirFunctionElement[] = [
        {
            $: { name: 'activate' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'SimpleAction', 'c:type': 'GSimpleAction*' } }],
                        },
                        {
                            $: { name: 'parameter', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                        {
                            $: { name: 'user_data', 'transfer-ownership': 'none', closure: '2' },
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
    ]

    const inheritance = {}
    const mod = new GirModule(emptyRepositoryXml, config)
    t.is(mod.namespace, 'Test')

    mod.dependencies.push('GLib-2.0')

    mod.symTable.set(mod.dependencies, 'Test.MyType', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.SimpleAction', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.Variant', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'GLib.Variant', emptyConstruct)

    mod.ns.callback = [cbs[0]]
    mod.init(inheritance)
    generatorHandler.finalizeInheritance(inheritance)
    mod.start()

    t.deepEqual(generatorHandler.generator.generateCallbackInterface(cbs[0], mod.namespace, 0), [
        'export interface activate {',
        '    (action: SimpleAction, parameter: GLib.Variant): void',
        '}',
    ])
})

test('interface', (t) => {
    const inheritance = {}
    const mod = new GirModule(emptyRepositoryXml, config)
    t.is(mod.namespace, 'Test')

    mod.dependencies.push('GLib-2.0')

    mod.symTable.set(mod.dependencies, 'Test.MyType', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'GLib.Variant', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'GLib.VariantType', emptyConstruct)

    mod.ns.interface = [TestData.interfaceAction, TestData.interfaceActionGroup]
    mod.init(inheritance)
    generatorHandler.finalizeInheritance(inheritance)
    mod.start()

    t.deepEqual(generatorHandler.generator.generateClass(TestData.interfaceAction, mod.namespace), [
        'export class Action {',
        '    /* Own properties of Test-1.0.Test.Action */',
        '    readonly enabled: boolean',
        '    readonly name: string',
        '    readonly parameter_type: GLib.VariantType',
        '    readonly state: GLib.Variant',
        '    readonly state_type: GLib.VariantType',
        '    /* Owm methods of Test-1.0.Test.Action */',
        '    activate(parameter?: GLib.Variant | null): void',
        '    change_state(value: GLib.Variant): void',
        '    get_enabled(): boolean',
        '    get_name(): string',
        '    get_parameter_type(): GLib.VariantType',
        '    get_state(): GLib.Variant',
        '    get_state_hint(): GLib.Variant | null',
        '    get_state_type(): GLib.VariantType',
        '    /* Own virtual methods of Test-1.0.Test.Action */',
        '    vfunc_activate(parameter?: GLib.Variant | null): void',
        '    vfunc_change_state(value: GLib.Variant): void',
        '    vfunc_get_enabled(): boolean',
        '    vfunc_get_name(): string',
        '    vfunc_get_parameter_type(): GLib.VariantType',
        '    vfunc_get_state(): GLib.Variant',
        '    vfunc_get_state_hint(): GLib.Variant | null',
        '    vfunc_get_state_type(): GLib.VariantType',
        '    static name: string',
        '    /* Static methods and pseudo-constructors */',
        '    static name_is_valid(action_name: string): boolean',
        '    static parse_detailed_name(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]',
        '    static print_detailed_name(action_name: string, target_value?: GLib.Variant | null): string',
        '}',
    ])

    t.deepEqual(generatorHandler.generator.generateClass(TestData.interfaceActionGroup, mod.namespace), [
        'export class ActionGroup {',
        '    /* Owm methods of Test-1.0.Test.ActionGroup */',
        '    action_added(action_name: string): void',
        '    action_enabled_changed(action_name: string, enabled: boolean): void',
        '    action_removed(action_name: string): void',
        '    action_state_changed(action_name: string, state: GLib.Variant): void',
        '    activate_action(action_name: string, parameter?: GLib.Variant | null): void',
        '    change_action_state(action_name: string, value: GLib.Variant): void',
        '    get_action_enabled(action_name: string): boolean',
        '    get_action_parameter_type(action_name: string): GLib.VariantType | null',
        '    get_action_state(action_name: string): GLib.Variant | null',
        '    get_action_state_hint(action_name: string): GLib.Variant | null',
        '    get_action_state_type(action_name: string): GLib.VariantType | null',
        '    has_action(action_name: string): boolean',
        '    list_actions(): string[]',
        '    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]',
        '    /* Own virtual methods of Test-1.0.Test.ActionGroup */',
        '    vfunc_action_added(action_name: string): void',
        '    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void',
        '    vfunc_action_removed(action_name: string): void',
        '    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void',
        '    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void',
        '    vfunc_change_action_state(action_name: string, value: GLib.Variant): void',
        '    vfunc_get_action_enabled(action_name: string): boolean',
        '    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null',
        '    vfunc_get_action_state(action_name: string): GLib.Variant | null',
        '    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null',
        '    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null',
        '    vfunc_has_action(action_name: string): boolean',
        '    vfunc_list_actions(): string[]',
        '    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]',
        '    /* Own signals of Test-1.0.Test.ActionGroup */',
        '    connect(sigName: "action-added", callback: (($obj: ActionGroup, action_name: string) => void)): number',
        '    connect_after(sigName: "action-added", callback: (($obj: ActionGroup, action_name: string) => void)): number',
        '    emit(sigName: "action-added", action_name: string): void',
        '    connect(sigName: "action-enabled-changed", callback: (($obj: ActionGroup, action_name: string, enabled: boolean) => void)): number',
        '    connect_after(sigName: "action-enabled-changed", callback: (($obj: ActionGroup, action_name: string, enabled: boolean) => void)): number',
        '    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void',
        '    connect(sigName: "action-removed", callback: (($obj: ActionGroup, action_name: string) => void)): number',
        '    connect_after(sigName: "action-removed", callback: (($obj: ActionGroup, action_name: string) => void)): number',
        '    emit(sigName: "action-removed", action_name: string): void',
        '    connect(sigName: "action-state-changed", callback: (($obj: ActionGroup, action_name: string, value: GLib.Variant) => void)): number',
        '    connect_after(sigName: "action-state-changed", callback: (($obj: ActionGroup, action_name: string, value: GLib.Variant) => void)): number',
        '    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void',
        '    static name: string',
        '}',
    ])
})

test('constructors', (t) => {
    const inheritance = {}
    const mod = new GirModule(emptyRepositoryXml, config)
    t.is(mod.namespace, 'Test')

    mod.dependencies.push('GLib-2.0')

    mod.symTable.set(mod.dependencies, 'Test.MyType', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'GLib.String', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.DBusInterfaceInfo', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.DBusNodeInfo', emptyConstruct)

    mod.ns.class = [TestData.interfaceDBusNodeInfo]
    mod.init(inheritance)
    generatorHandler.finalizeInheritance(inheritance)
    mod.start()

    t.deepEqual(generatorHandler.generator.generateClass(TestData.interfaceDBusNodeInfo, mod.namespace), [
        'export class DBusNodeInfo {',
        '    /* Own fields of Test-1.0.Test.DBusNodeInfo */',
        '    ref_count: number',
        '    path: string',
        '    interfaces: DBusInterfaceInfo[]',
        '    nodes: DBusNodeInfo[]',
        '    annotations: any[]',
        '    /* Owm methods of Test-1.0.Test.DBusNodeInfo */',
        '    generate_xml(indent: number): /* string_builder */ GLib.String',
        '    lookup_interface(name: string): DBusInterfaceInfo',
        '    ref(): DBusNodeInfo',
        '    unref(): void',
        '    static name: string',
        '    /* Static methods and pseudo-constructors */',
        '    static new_for_xml(xml_data: string): DBusNodeInfo',
        '}',
    ])
})

test('class', (t) => {
    const inheritance = {}
    const mod = new GirModule(emptyRepositoryXml, config)
    const gmod = new GirModule({ repository: { namespace: [{ $: { name: 'GObject', version: '2.0' } }] } }, config)

    t.is(mod.namespace, 'Test')

    mod.dependencies.push('GLib-2.0')
    mod.dependencies.push('GObject-2.0')

    mod.symTable.set(mod.dependencies, 'GObject.Object', TestData.classGObject)
    mod.symTable.set(mod.dependencies, 'GLib.Variant', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'GLib.VariantDict', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.File', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.InputStream', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.Object', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.BindingFlags', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.Binding', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.BindingTransformFunc', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'GLib.DestroyNotify', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.Closure', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.Value', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'GLib.Quark', emptyConstruct)
    mod.symTable.set(mod.dependencies, 'Test.ParamSpec', emptyConstruct)

    gmod.ns.class = [TestData.classGObject]
    gmod.init(inheritance)
    mod.ns.class = [TestData.classApplicationCommandLine]
    mod.init(inheritance)
    generatorHandler.finalizeInheritance(inheritance)
    gmod.start()
    mod.start()

    t.deepEqual(generatorHandler.generator.generateClass(TestData.classApplicationCommandLine, mod.namespace), [
        'export interface ApplicationCommandLine_ConstructProps extends GObject.Object_ConstructProps {',
        '    /* Constructor properties of Test-1.0.Test.ApplicationCommandLine */',
        '    "arguments"?: GLib.Variant | null',
        '    options?: GLib.Variant | null',
        '    platform_data?: GLib.Variant | null',
        '}',
        'export class ApplicationCommandLine {',
        '    /* Own properties of Test-1.0.Test.ApplicationCommandLine */',
        '    readonly "arguments": GLib.Variant',
        '    readonly is_remote: boolean',
        '    readonly options: GLib.Variant',
        '    readonly platform_data: GLib.Variant',
        '    /* Extended fields of GObject-2.0.GObject.Object */',
        '    g_type_instance: any',
        '    /* Owm methods of Test-1.0.Test.ApplicationCommandLine */',
        '    create_file_for_arg(arg: string): File',
        '    get_arguments(): string[]',
        '    get_cwd(): string',
        '    get_environ(): string[]',
        '    get_exit_status(): number',
        '    get_is_remote(): boolean',
        '    get_options_dict(): GLib.VariantDict',
        '    get_platform_data(): GLib.Variant | null',
        '    get_stdin(): InputStream',
        '    getenv(name: string): string',
        '    set_exit_status(exit_status: number): void',
        '    /* Extended methods of GObject-2.0.GObject.Object */',
        '    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: BindingFlags): Binding',
        '    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): Binding',
        '    force_floating(): void',
        '    freeze_notify(): void',
        '    get_data(key: string): object',
        '    get_property(property_name: string, value: any): void',
        '    get_qdata(quark: GLib.Quark): object',
        '    is_floating(): boolean',
        '    notify(property_name: string): void',
        '    notify_by_pspec(pspec: ParamSpec): void',
        '    ref(): GObject.Object',
        '    ref_sink(): GObject.Object',
        '    replace_data(key: string, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean',
        '    replace_qdata(quark: GLib.Quark, oldval?: object | null, newval?: object | null, destroy?: GLib.DestroyNotify | null, old_destroy?: GLib.DestroyNotify | null): boolean',
        '    run_dispose(): void',
        '    set_data(key: string, data: object): void',
        '    set_property(property_name: string, value: any): void',
        '    steal_data(key: string): object',
        '    steal_qdata(quark: GLib.Quark): object',
        '    thaw_notify(): void',
        '    unref(): void',
        '    watch_closure(closure: GObject.TClosure): void',
        '    /* Own virtual methods of Test-1.0.Test.ApplicationCommandLine */',
        '    vfunc_get_stdin(): InputStream',
        '    vfunc_print_literal(message: string): void',
        '    vfunc_printerr_literal(message: string): void',
        '    /* Extended virtual methods of GObject-2.0.GObject.Object */',
        '    vfunc_constructed(): void',
        '    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void',
        '    vfunc_dispose(): void',
        '    vfunc_finalize(): void',
        '    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void',
        '    vfunc_notify(pspec: ParamSpec): void',
        '    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void',
        '    /* Extended signals of GObject-2.0.GObject.Object */',
        '    connect(sigName: "notify", callback: (($obj: ApplicationCommandLine, pspec: ParamSpec) => void)): number',
        '    connect_after(sigName: "notify", callback: (($obj: ApplicationCommandLine, pspec: ParamSpec) => void)): number',
        '    emit(sigName: "notify", pspec: ParamSpec): void',
        '    connect(sigName: "notify::arguments", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number',
        '    connect_after(sigName: "notify::arguments", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number',
        '    connect(sigName: "notify::is-remote", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number',
        '    connect_after(sigName: "notify::is-remote", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number',
        '    connect(sigName: "notify::options", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number',
        '    connect_after(sigName: "notify::options", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number',
        '    connect(sigName: "notify::platform-data", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number',
        '    connect_after(sigName: "notify::platform-data", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number',
        '    connect(sigName: string, callback: (...args: any[]) => void): number',
        '    connect_after(sigName: string, callback: (...args: any[]) => void): number',
        '    emit(sigName: string, ...args: any[]): void',
        '    disconnect(id: number): void',
        '    static name: string',
        '    constructor (config?: ApplicationCommandLine_ConstructProps)',
        '    _init (config?: ApplicationCommandLine_ConstructProps): void',
        '    static $gtype: GObject.GType<ApplicationCommandLine>',
        '}',
    ])
})
