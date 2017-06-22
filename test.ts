import test from 'ava';
import {GirEnumeration,GirModule} from './main'
import * as TestData from './testData'

let emptyRepositoryXml = {
    repository: {
        namespace: [
            {
                $: {
                    name: "Test",
                    version: "1.0"
                }
            }
        ]
    }
}

test('enumeration', t => {
    let enum_: GirEnumeration = {
        $: {
            name: "MyEnum"
        },
        member: [
            {
                $: {
                    name: "member_1",
                    value: "0"
                }
            }
        ]
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.deepEqual(mod.exportEnumeration(enum_),
        [
            'export enum MyEnum {',
            '    MEMBER_1,',
            '}'
        ])
})

test('constant', t => {
    let var_ = {
        $: {
            name: "MY_CONST"
        },
        type: [
            {
                $: {
                    name: "MyType"
                }
            }
        ]
    }
    let arrVar = {
        $: { name: "MY_ARR" },
        array: [ {
            $: { length: "1" },
            type: [ { $: { name: "MyType" } } ]
        } ]
    }

    let symTable = {
        'Test.MyType': 1
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportConstant(var_),
        [ 'export const MY_CONST:MyType' ])
    t.deepEqual(mod.exportConstant(arrVar),
        [ 'export const MY_ARR:MyType[]' ])
})

test('function', t => {
    let func = {
        $: { name: "my_func" },
        parameters: [
            { parameter: [ { 
                $: { name: "arg1"},
                type: [ { $: { name: "MyType" } } ] } ] }
        ],
        "return-value": [
            {   $: { "transfer-ownership": "none" },
                type: [ { $: { name: "utf8" } } ] }
        ]
    }

    let symTable = {
        'Test.MyType': 1,
        'GLib.DestroyNotify': 1,
        'GLib.Variant': 1,
        'Test.BusNameOwnerFlags': 1,
        'Test.ButAcquireCallback': 1,
        'Test.BusNameAcquiredCallback': 1,
        'Test.BusType': 1,
        'Test.BusAcquiredCallback': 1,
        'Test.BusNameLostCallback': 1,

    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportFunction(func),
        [ 'export function my_func(arg1: MyType): string' ])

    t.deepEqual(mod.exportFunction(TestData.funcBusOwnName),
        [ 'export function bus_own_name(' +
            'bus_type: BusType, name: string, flags: BusNameOwnerFlags, ' +
            'bus_acquired_handler: BusAcquiredCallback | null, ' + 
            'name_acquired_handler: BusNameAcquiredCallback | null, ' + 
            'name_lost_handler: BusNameLostCallback | null, ' + 
            'user_data: object, ' + 
            'user_data_free_func: GLib.DestroyNotify | null): number' ])

    let func3 = TestData.funcBusOwnName
    func3.$.introspectable = "0"

    t.deepEqual(mod.exportFunction(func3), [])
})

test('callback', t => {
    let cbs = [ 
        { '$': { name: 'activate' },
        'return-value': [{
            '$': { 'transfer-ownership': 'none' },
            type: [{ '$': { name: 'none', 'c:type': 'void' } }]
        }],
        parameters: [{
            parameter:
            [{
                '$': { name: 'action', 'transfer-ownership': 'none' },
                type: [{ '$': { name: 'SimpleAction', 'c:type': 'GSimpleAction*' } }]
            },
            {
                '$': { name: 'parameter', 'transfer-ownership': 'none' },
                type: [{ '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } }]
            },
            {
                '$': { name: 'user_data', 'transfer-ownership': 'none', closure: '2' },
                type: [{ '$': { name: 'gpointer', 'c:type': 'gpointer' } }]
            }]
        }]
    }]

    let symTable = {
        'Test.MyType': 1,
        'Test.SimpleAction': 1,
        'GLib.Variant': 1,
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportCallback(cbs[0]),
        [ 'export interface activate {',
          "    (action: SimpleAction, parameter: GLib.Variant, user_data: object): void",
          '}' ])

})

test('interface', t => {
    let symTable = {
        'Test.MyType': 1,
        'GLib.Variant': 1,
        'GLib.VariantType': 1
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportInterface(TestData.interfaceAction),
        [ 
            "export interface Action {",
            "    /* Properties of Action */",
            "    readonly enabled:boolean",
            "    readonly name:string",
            "    readonly parameter_type:GLib.VariantType",
            "    readonly state:GLib.Variant",
            "    readonly state_type:GLib.VariantType",
            "    /* Methods of Action */",
            "    activate(parameter: GLib.Variant | null): void",
            "    change_state(value: GLib.Variant): void",
            "    get_enabled(): boolean",
            "    get_name(): string",
            "    get_parameter_type(): GLib.VariantType",
            "    get_state(): GLib.Variant",
            "    get_state_hint(): GLib.Variant | null",
            "    get_state_type(): GLib.VariantType",
            "    /* Virtual methods of Action */",
            "    vfunc_activate(parameter: GLib.Variant | null): void",
            "    vfunc_change_state(value: GLib.Variant): void",
            "    vfunc_get_enabled(): boolean",
            "    vfunc_get_name(): string",
            "    vfunc_get_parameter_type(): GLib.VariantType",
            "    vfunc_get_state(): GLib.Variant",
            "    vfunc_get_state_hint(): GLib.Variant | null",
            "    vfunc_get_state_type(): GLib.VariantType",

            "}",

            "export interface Action_Static {",
            "}",

            "export declare class Action_Static {",
            "    name_is_valid(action_name: string): boolean",
            "    parse_detailed_name(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]",
            "    print_detailed_name(action_name: string, target_value: GLib.Variant | null): string",
            "}",

            "export declare var Action: Action_Static",

        ])
    
    t.deepEqual(mod.exportInterface(TestData.interfaceActionGroup),
        [
            "export interface ActionGroup {",
            "    /* Methods of ActionGroup */",
            "    action_added(action_name: string): void",
            "    action_enabled_changed(action_name: string, enabled: boolean): void",
            "    action_removed(action_name: string): void",
            "    action_state_changed(action_name: string, state: GLib.Variant): void",
            "    activate_action(action_name: string, parameter: GLib.Variant | null): void",
            "    change_action_state(action_name: string, value: GLib.Variant): void",
            "    get_action_enabled(action_name: string): boolean",
            "    get_action_parameter_type(action_name: string): GLib.VariantType | null",
            "    get_action_state(action_name: string): GLib.Variant | null",
            "    get_action_state_hint(action_name: string): GLib.Variant | null",
            "    get_action_state_type(action_name: string): GLib.VariantType | null",
            "    has_action(action_name: string): boolean",
            "    list_actions(): string[]",
            "    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]",
            "    /* Virtual methods of ActionGroup */",
            "    vfunc_action_added(action_name: string): void",
            "    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void",
            "    vfunc_action_removed(action_name: string): void",
            "    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void",
            "    vfunc_activate_action(action_name: string, parameter: GLib.Variant | null): void",
            "    vfunc_change_action_state(action_name: string, value: GLib.Variant): void",
            "    vfunc_get_action_enabled(action_name: string): boolean",
            "    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null",
            "    vfunc_get_action_state(action_name: string): GLib.Variant | null",
            "    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null",
            "    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null",
            "    vfunc_has_action(action_name: string): boolean",
            "    vfunc_list_actions(): string[]",
            "    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]",
            "    /* Signals of ActionGroup */",        
            "    connect(sigName: \"action-added\", callback: ((obj: ActionGroup, action_name: string) => void))",
            "    connect(sigName: \"action-enabled-changed\", callback: ((obj: ActionGroup, action_name: string, enabled: boolean) => void))",
            "    connect(sigName: \"action-removed\", callback: ((obj: ActionGroup, action_name: string) => void))",
            "    connect(sigName: \"action-state-changed\", callback: ((obj: ActionGroup, action_name: string, value: GLib.Variant) => void))",
            "}",
            "export interface ActionGroup_Static {",
            "}",
            "export declare var ActionGroup: ActionGroup_Static",    

        ])

})

test('constructors', t => {
    let symTable = {
        'Test.MyType': 1,
        'GLib.String': 1,
        'Test.DBusInterfaceInfo': 1,
        'Test.DBusNodeInfo': 1,
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportInterface(TestData.interfaceDBusNodeInfo),
        [
            "export interface DBusNodeInfo {",
            "    /* Methods of DBusNodeInfo */",
            "    generate_xml(indent: number): /* string_builder */ GLib.String",
            "    lookup_interface(name: string): DBusInterfaceInfo",
            "    ref(): DBusNodeInfo",

            "    unref(): void",
            "}",
            "export interface DBusNodeInfo_Static {",
            "}",
            "export declare class DBusNodeInfo_Static {",
            "    new_for_xml(xml_data: string): DBusNodeInfo",
            "}",

            "export declare var DBusNodeInfo: DBusNodeInfo_Static",   
        ])
})

test('class', t => {
    let symTable = {
        'GObject.Object': TestData.classGObject,
        'GLib.Variant': 1,
        'GLib.VariantDict': 1,
        'Test.File': 1,
        'Test.InputStream': 1,
        'Test.Object': 1,
        'Test.BindingFlags': 1,
        'Test.Binding': 1,
        'Test.BindingTransformFunc': 1,
        'GLib.DestroyNotify': 1,
        'Test.Closure': 1,
        'Test.Value': 1,
        'GLib.Quark': 1,
        'Test.ParamSpec': 1,
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportClass(TestData.classApplicationCommandLine),
        [
            "export interface ApplicationCommandLine_ConstructProps {",
            "    /* Properties of ApplicationCommandLine */",
            "    \"arguments\"?:GLib.Variant",
            "    options?:GLib.Variant",
            "    platform_data?:GLib.Variant",
            "}",
            "export interface ApplicationCommandLine {",
            "    /* Properties of ApplicationCommandLine */",
            "    readonly is_remote:boolean",
            "    /* Methods of ApplicationCommandLine */",
            "    create_file_for_arg(arg: string): File",
            "    get_arguments(): [ /* returnType */ string[], /* argc */ number | null ]",            
            "    get_cwd(): string",
            "    get_environ(): string[]",
            "    get_exit_status(): number",
            "    get_is_remote(): boolean",
            "    get_options_dict(): GLib.VariantDict",
            "    get_platform_data(): GLib.Variant | null",
            "    get_stdin(): InputStream",
            "    getenv(name: string): string",
            "    set_exit_status(exit_status: number): void",
            "    /* Methods of GObject.Object */",
            "    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding",
            "    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc | null, transform_from: BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): Binding",
            "    bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding",
            "    force_floating(): void",
            "    freeze_notify(): void",
            "    get_data(key: string): object",
            "    get_property(property_name: string, value: Value): void",
            "    get_qdata(quark: GLib.Quark): object",
            "    is_floating(): boolean",
            "    notify(property_name: string): void",
            "    notify_by_pspec(pspec: ParamSpec): void",
            "    ref(): Object",
            "    ref_sink(): Object",
            "    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean",
            "    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean",
            "    run_dispose(): void",
            "    set_data(key: string, data: object): void",
            "    set_property(property_name: string, value: Value): void",
            "    steal_data(key: string): object",
            "    steal_qdata(quark: GLib.Quark): object",
            "    thaw_notify(): void",
            "    unref(): void",
            "    watch_closure(closure: Closure): void",
            "    /* Virtual methods of ApplicationCommandLine */",
            "    vfunc_get_stdin(): InputStream",
            "    vfunc_print_literal(message: string): void",
            "    vfunc_printerr_literal(message: string): void",
            "    /* Virtual methods of GObject.Object */",
            "    vfunc_constructed(): void",
            "    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void",
            "    vfunc_dispose(): void",
            "    vfunc_finalize(): void",
            "    vfunc_get_property(property_id: number, value: Value, pspec: ParamSpec): void",
            "    vfunc_notify(pspec: ParamSpec): void",
            "    vfunc_set_property(property_id: number, value: Value, pspec: ParamSpec): void",
            "    /* Signals of GObject.Object */",
            "    connect(sigName: \"notify\", callback: ((obj: ApplicationCommandLine, pspec: ParamSpec) => void))",
            "    connect(sigName: \"notify::is-remote\", callback: ((obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void))",

            "}",
            "export interface ApplicationCommandLine_Static {",
            "    new (config: ApplicationCommandLine_ConstructProps): ApplicationCommandLine",
            "}",
            "export declare var ApplicationCommandLine: ApplicationCommandLine_Static",

        ])
})
