import test from 'ava';
import {GirEnumeration,GirModule} from './main'

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

    let func2 = { '$': 
           { name: 'bus_own_name',
             'c:identifier': 'g_bus_own_name',
             'shadowed-by': 'bus_own_name_with_closures',
             version: '2.26',
             introspectable: '1' },
          doc: 
           [ { _: 'Starts acquiring @name on the bus specified by @bus_type and calls\n@name_acquired_handler and @name_lost_handler when the name is\nacquired respectively lost. Callbacks will be invoked in the\n[thread-default main context][g-main-context-push-thread-default]\nof the thread you are calling this function from.\n\nYou are guaranteed that one of the @name_acquired_handler and @name_lost_handler\ncallbacks will be invoked after calling this function - there are three\npossible cases:\n\n- @name_lost_handler with a %NULL connection (if a connection to the bus\n  can\'t be made).\n\n- @bus_acquired_handler then @name_lost_handler (if the name can\'t be\n  obtained)\n\n- @bus_acquired_handler then @name_acquired_handler (if the name was\n  obtained).\n\nWhen you are done owning the name, just call g_bus_unown_name()\nwith the owner id this function returns.\n\nIf the name is acquired or lost (for example another application\ncould acquire the name if you allow replacement or the application\ncurrently owning the name exits), the handlers are also invoked.\nIf the #GDBusConnection that is used for attempting to own the name\ncloses, then @name_lost_handler is invoked since it is no longer\npossible for other processes to access the process.\n\nYou cannot use g_bus_own_name() several times for the same name (unless\ninterleaved with calls to g_bus_unown_name()) - only the first call\nwill work.\n\nAnother guarantee is that invocations of @name_acquired_handler\nand @name_lost_handler are guaranteed to alternate; that\nis, if @name_acquired_handler is invoked then you are\nguaranteed that the next time one of the handlers is invoked, it\nwill be @name_lost_handler. The reverse is also true.\n\nIf you plan on exporting objects (using e.g.\ng_dbus_connection_register_object()), note that it is generally too late\nto export the objects in @name_acquired_handler. Instead, you can do this\nin @bus_acquired_handler since you are guaranteed that this will run\nbefore @name is requested from the bus.\n\nThis behavior makes it very simple to write applications that wants\nto [own names][gdbus-owning-names] and export objects.\nSimply register objects to be exported in @bus_acquired_handler and\nunregister the objects (if any) in @name_lost_handler.',
               '$': { 'xml:space': 'preserve' } } ],
          'return-value': 
           [ { '$': { 'transfer-ownership': 'none' },
               doc: 
                [ { _: 'an identifier (never 0) that an be used with\n    g_bus_unown_name() to stop owning the name.',
                    '$': { 'xml:space': 'preserve' } } ],
               type: [ { '$': { name: 'guint', 'c:type': 'guint' } } ] } ],
          parameters: 
           [ { parameter: 
                [ { '$': { name: 'bus_type', 'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'the type of bus to own a name on',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'BusType', 'c:type': 'GBusType' } } ] },
                  { '$': { name: 'name', 'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'the well-known name to own',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                  { '$': { name: 'flags', 'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'a set of flags from the #GBusNameOwnerFlags enumeration',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'BusNameOwnerFlags', 'c:type': 'GBusNameOwnerFlags' } } ] },
                  { '$': 
                     { name: 'bus_acquired_handler',
                       'transfer-ownership': 'none',
                       nullable: '1',
                       'allow-none': '1' },
                    doc: 
                     [ { _: 'handler to invoke when connected to the bus of type @bus_type or %NULL',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: 
                     [ { '$': 
                          { name: 'BusAcquiredCallback',
                            'c:type': 'GBusAcquiredCallback' } } ] },
                  { '$': 
                     { name: 'name_acquired_handler',
                       'transfer-ownership': 'none',
                       nullable: '1',
                       'allow-none': '1' },
                    doc: 
                     [ { _: 'handler to invoke when @name is acquired or %NULL',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: 
                     [ { '$': 
                          { name: 'BusNameAcquiredCallback',
                            'c:type': 'GBusNameAcquiredCallback' } } ] },
                  { '$': 
                     { name: 'name_lost_handler',
                       'transfer-ownership': 'none',
                       nullable: '1',
                       'allow-none': '1',
                       scope: 'notified',
                       closure: '6',
                       destroy: '7' },
                    doc: 
                     [ { _: 'handler to invoke when @name is lost or %NULL',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: 
                     [ { '$': 
                          { name: 'BusNameLostCallback',
                            'c:type': 'GBusNameLostCallback' } } ] },
                  { '$': { name: 'user_data', 'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'user data to pass to handlers',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'gpointer', 'c:type': 'gpointer' } } ] },
                  { '$': 
                     { name: 'user_data_free_func',
                       'transfer-ownership': 'none',
                       nullable: '1',
                       'allow-none': '1',
                       scope: 'async' },
                    doc: 
                     [ { _: 'function for freeing @user_data or %NULL',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify' } } ] } ] } ] }

    t.deepEqual(mod.exportFunction(func2),
        [ 'export function bus_own_name(' +
            'bus_type: BusType, name: string, flags: BusNameOwnerFlags, ' +
            'bus_acquired_handler: BusAcquiredCallback | null, ' + 
            'name_acquired_handler: BusNameAcquiredCallback | null, ' + 
            'name_lost_handler: BusNameLostCallback | null, ' + 
            'user_data: object, ' + 
            'user_data_free_func: GLib.DestroyNotify | null): number' ])

    let func3 = func2
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
    let intf = { '$': 
                { name: 'Action',
                  'c:symbol-prefix': 'action',
                  'c:type': 'GAction',
                  'glib:type-name': 'GAction',
                  'glib:get-type': 'g_action_get_type',
                  'glib:type-struct': 'ActionInterface' },
               doc: 
                [ { _: '#GAction represents a single named action.\n\nThe main interface to an action is that it can be activated with\ng_action_activate().  This results in the \'activate\' signal being\nemitted.  An activation has a #GVariant parameter (which may be\n%NULL).  The correct type for the parameter is determined by a static\nparameter type (which is given at construction time).\n\nAn action may optionally have a state, in which case the state may be\nset with g_action_change_state().  This call takes a #GVariant.  The\ncorrect type for the state is determined by a static state type\n(which is given at construction time).\n\nThe state may have a hint associated with it, specifying its valid\nrange.\n\n#GAction is merely the interface to the concept of an action, as\ndescribed above.  Various implementations of actions exist, including\n#GSimpleAction.\n\nIn all cases, the implementing class is responsible for storing the\nname of the action, the parameter type, the enabled state, the\noptional state type and the state and emitting the appropriate\nsignals when these change.  The implementor responsible for filtering\ncalls to g_action_activate() and g_action_change_state() for type\nsafety and for the state being enabled.\n\nProbably the only useful thing to do with a #GAction is to put it\ninside of a #GSimpleActionGroup.',
                    '$': { 'xml:space': 'preserve' } } ],
               function: 
                [ { '$': 
                     { name: 'name_is_valid',
                       'c:identifier': 'g_action_name_is_valid',
                       version: '2.38' },
                    doc: 
                     [ { _: 'Checks if @action_name is valid.\n\n@action_name is valid if it consists only of alphanumeric characters,\nplus \'-\' and \'.\'.  The empty string is not a valid action name.\n\nIt is an error to call this function with a non-utf8 @action_name.\n@action_name must not be %NULL.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: '%TRUE if @action_name is valid',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'an potential action name',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'parse_detailed_name',
                       'c:identifier': 'g_action_parse_detailed_name',
                       version: '2.38',
                       throws: '1' },
                    doc: 
                     [ { _: 'Parses a detailed action name into its separate name and target\ncomponents.\n\nDetailed action names can have three formats.\n\nThe first format is used to represent an action name with no target\nvalue and consists of just an action name containing no whitespace\nnor the characters \':\', \'(\' or \')\'.  For example: "app.action".\n\nThe second format is used to represent an action with a target value\nthat is a non-empty string consisting only of alphanumerics, plus \'-\'\nand \'.\'.  In that case, the action name and target value are\nseparated by a double colon ("::").  For example:\n"app.action::target".\n\nThe third format is used to represent an action with any type of\ntarget value, including strings.  The target value follows the action\nname, surrounded in parens.  For example: "app.action(42)".  The\ntarget value is parsed using g_variant_parse().  If a tuple-typed\nvalue is desired, it must be specified in the same way, resulting in\ntwo sets of parens, for example: "app.action((1,2,3))".  A string\ntarget can be specified this way as well: "app.action(\'target\')".\nFor strings, this third format must be used if * target value is\nempty or contains characters other than alphanumerics, \'-\' and \'.\'.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: '%TRUE if successful, else %FALSE with @error set',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { parameter: 
                          [ { '$': { name: 'detailed_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'a detailed action name',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': 
                               { name: 'action_name',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full' },
                              doc: [ { _: 'the action name', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'gchar**' } } ] },
                            { '$': 
                               { name: 'target_value',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full' },
                              doc: 
                               [ { _: 'the target value, or %NULL for no target',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant**' } } ] } ] } ] },
                  { '$': 
                     { name: 'print_detailed_name',
                       'c:identifier': 'g_action_print_detailed_name',
                       version: '2.38' },
                    doc: 
                     [ { _: 'Formats a detailed action name from @action_name and @target_value.\n\nIt is an error to call this function with an invalid action name.\n\nThis function is the opposite of\ng_action_parse_detailed_action_name().  It will produce a string that\ncan be parsed back to the @action_name and @target_value by that\nfunction.\n\nSee that function for the types of strings that will be printed by\nthis function.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full' },
                         doc: 
                          [ { _: 'a detailed format string',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'utf8', 'c:type': 'gchar*' } } ] } ],
                    parameters: 
                     [ { parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a valid action name', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': 
                               { name: 'target_value',
                                 'transfer-ownership': 'none',
                                 nullable: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'a #GVariant target value, or %NULL',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] } ],
               'virtual-method': 
                [ { '$': { name: 'activate', invoker: 'activate', version: '2.28' },
                    doc: 
                     [ { _: 'Activates the action.\n\n@parameter must be the correct type of parameter for the action (ie:\nthe parameter type given at construction time).  If the parameter\ntype was %NULL then @parameter must also be %NULL.\n\nIf the @parameter GVariant is floating, it is consumed.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ],
                         parameter: 
                          [ { '$': 
                               { name: 'parameter',
                                 'transfer-ownership': 'none',
                                 nullable: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the parameter to the activation',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'change_state',
                       invoker: 'change_state',
                       version: '2.30' },
                    doc: 
                     [ { _: 'Request for the state of @action to be changed to @value.\n\nThe action must be stateful and @value must be of the correct type.\nSee g_action_get_state_type().\n\nThis call merely requests a change.  The action may refuse to change\nits state or may change its state to something other than @value.\nSee g_action_get_state_hint().\n\nIf the @value GVariant is floating, it is consumed.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'value', 'transfer-ownership': 'none' },
                              doc: [ { _: 'the new state', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': { name: 'get_enabled', invoker: 'get_enabled', version: '2.28' },
                    doc: 
                     [ { _: 'Checks if @action is currently enabled.\n\nAn action must be enabled in order to be activated or in order to\nhave its state changed from outside callers.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'whether the action is enabled',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': { name: 'get_name', invoker: 'get_name', version: '2.28' },
                    doc: 
                     [ { _: 'Queries the name of @action.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'the name of the action',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_parameter_type',
                       invoker: 'get_parameter_type',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the type of the parameter that must be given when activating\n@action.\n\nWhen activating the action using g_action_activate(), the #GVariant\ngiven to that function must be of the type returned by this function.\n\nIn the case that this function returns %NULL, you must not give any\n#GVariant, but %NULL instead.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: [ { _: 'the parameter type', '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': { name: 'get_state', invoker: 'get_state', version: '2.28' },
                    doc: 
                     [ { _: 'Queries the current state of @action.\n\nIf the action is not stateful then %NULL will be returned.  If the\naction is stateful then the type of the return value is the type\ngiven by g_action_get_state_type().\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full' },
                         doc: 
                          [ { _: 'the current state of the action',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_state_hint',
                       invoker: 'get_state_hint',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Requests a hint about the valid range of values for the state of\n@action.\n\nIf %NULL is returned it either means that the action is not stateful\nor that there is no hint about the valid range of values for the\nstate of the action.\n\nIf a #GVariant array is returned then each item in the array is a\npossible value for the state.  If a #GVariant pair (ie: two-tuple) is\nreturned then the tuple specifies the inclusive lower and upper bound\nof valid values for the state.\n\nIn any case, the information is merely a hint.  It may be possible to\nhave a state value outside of the hinted range and setting a value\nwithin the range may fail.\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full', nullable: '1' },
                         doc: [ { _: 'the state range hint', '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_state_type',
                       invoker: 'get_state_type',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the type of the state of @action.\n\nIf the action is stateful (e.g. created with\ng_simple_action_new_stateful()) then this function returns the\n#GVariantType of the state.  This is the type of the initial value\ngiven as the state. All calls to g_action_change_state() must give a\n#GVariant of this type and g_action_get_state() will return a\n#GVariant of the same type.\n\nIf the action is not stateful (e.g. created with g_simple_action_new())\nthen this function will return %NULL. In that case, g_action_get_state()\nwill return %NULL and you must not call g_action_change_state().',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'the state type, if the action is stateful',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] } ],
               method: 
                [ { '$': 
                     { name: 'activate',
                       'c:identifier': 'g_action_activate',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Activates the action.\n\n@parameter must be the correct type of parameter for the action (ie:\nthe parameter type given at construction time).  If the parameter\ntype was %NULL then @parameter must also be %NULL.\n\nIf the @parameter GVariant is floating, it is consumed.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ],
                         parameter: 
                          [ { '$': 
                               { name: 'parameter',
                                 'transfer-ownership': 'none',
                                 nullable: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the parameter to the activation',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'change_state',
                       'c:identifier': 'g_action_change_state',
                       version: '2.30' },
                    doc: 
                     [ { _: 'Request for the state of @action to be changed to @value.\n\nThe action must be stateful and @value must be of the correct type.\nSee g_action_get_state_type().\n\nThis call merely requests a change.  The action may refuse to change\nits state or may change its state to something other than @value.\nSee g_action_get_state_hint().\n\nIf the @value GVariant is floating, it is consumed.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'value', 'transfer-ownership': 'none' },
                              doc: [ { _: 'the new state', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_enabled',
                       'c:identifier': 'g_action_get_enabled',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Checks if @action is currently enabled.\n\nAn action must be enabled in order to be activated or in order to\nhave its state changed from outside callers.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'whether the action is enabled',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_name',
                       'c:identifier': 'g_action_get_name',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the name of @action.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'the name of the action',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_parameter_type',
                       'c:identifier': 'g_action_get_parameter_type',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the type of the parameter that must be given when activating\n@action.\n\nWhen activating the action using g_action_activate(), the #GVariant\ngiven to that function must be of the type returned by this function.\n\nIn the case that this function returns %NULL, you must not give any\n#GVariant, but %NULL instead.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: [ { _: 'the parameter type', '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_state',
                       'c:identifier': 'g_action_get_state',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the current state of @action.\n\nIf the action is not stateful then %NULL will be returned.  If the\naction is stateful then the type of the return value is the type\ngiven by g_action_get_state_type().\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full' },
                         doc: 
                          [ { _: 'the current state of the action',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_state_hint',
                       'c:identifier': 'g_action_get_state_hint',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Requests a hint about the valid range of values for the state of\n@action.\n\nIf %NULL is returned it either means that the action is not stateful\nor that there is no hint about the valid range of values for the\nstate of the action.\n\nIf a #GVariant array is returned then each item in the array is a\npossible value for the state.  If a #GVariant pair (ie: two-tuple) is\nreturned then the tuple specifies the inclusive lower and upper bound\nof valid values for the state.\n\nIn any case, the information is merely a hint.  It may be possible to\nhave a state value outside of the hinted range and setting a value\nwithin the range may fail.\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full', nullable: '1' },
                         doc: [ { _: 'the state range hint', '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_state_type',
                       'c:identifier': 'g_action_get_state_type',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the type of the state of @action.\n\nIf the action is stateful (e.g. created with\ng_simple_action_new_stateful()) then this function returns the\n#GVariantType of the state.  This is the type of the initial value\ngiven as the state. All calls to g_action_change_state() must give a\n#GVariant of this type and g_action_get_state() will return a\n#GVariant of the same type.\n\nIf the action is not stateful (e.g. created with g_simple_action_new())\nthen this function will return %NULL. In that case, g_action_get_state()\nwill return %NULL and you must not call g_action_change_state().',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'the state type, if the action is stateful',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GAction', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'Action', 'c:type': 'GAction*' } } ] } ] } ] } ],
               property: 
                [ { '$': 
                     { name: 'enabled',
                       version: '2.28',
                       'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'If @action is currently enabled.\n\nIf the action is disabled then calls to g_action_activate() and\ng_action_change_state() have no effect.',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] },
                  { '$': { name: 'name', version: '2.28', 'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'The name of the action.  This is mostly meaningful for identifying\nthe action once it has been added to a #GActionGroup. It is immutable.',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'utf8', 'c:type': 'gchar*' } } ] },
                  { '$': 
                     { name: 'parameter-type',
                       version: '2.28',
                       'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'The type of the parameter that must be given when activating the\naction. This is immutable, and may be %NULL if no parameter is needed when\nactivating the action.',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'GLib.VariantType' } } ] },
                  { '$': { name: 'state', version: '2.28', 'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'The state of the action, or %NULL if the action is stateless.',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'GLib.Variant' } } ] },
                  { '$': 
                     { name: 'state-type',
                       version: '2.28',
                       'transfer-ownership': 'none' },
                    doc: 
                     [ { _: 'The #GVariantType of the state that the action has, or %NULL if the\naction is stateless. This is immutable.',
                         '$': { 'xml:space': 'preserve' } } ],
                    type: [ { '$': { name: 'GLib.VariantType' } } ] } ] }

    
    let symTable = {
        'Test.MyType': 1,
        'GLib.Variant': 1,
        'GLib.VariantType': 1
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportInterface(intf),
        [ 
            "export interface Action {",
            "    static name_is_valid(action_name: string): boolean",
            "    static parse_detailed_name(detailed_name: string, action_name: string, target_value: GLib.Variant): boolean",
            "    static print_detailed_name(action_name: string, target_value: GLib.Variant | null): string",

            "    activate(parameter: GLib.Variant | null): void",
            "    change_state(value: GLib.Variant): void",
            "    get_enabled(): boolean",
            "    get_name(): string",
            "    get_parameter_type(): GLib.VariantType",
            "    get_state(): GLib.Variant",
            "    get_state_hint(): GLib.Variant | null",
            "    get_state_type(): GLib.VariantType",

            "    vfunc_activate(parameter: GLib.Variant | null): void",
            "    vfunc_change_state(value: GLib.Variant): void",
            "    vfunc_get_enabled(): boolean",
            "    vfunc_get_name(): string",
            "    vfunc_get_parameter_type(): GLib.VariantType",
            "    vfunc_get_state(): GLib.Variant",
            "    vfunc_get_state_hint(): GLib.Variant | null",
            "    vfunc_get_state_type(): GLib.VariantType",

            "    readonly enabled:boolean",
            "    readonly name:string",
            "    readonly parameter_type:GLib.VariantType",
            "    readonly state:GLib.Variant",
            "    readonly state_type:GLib.VariantType",

            "}"
        ])

    let intf2 = { '$': 
                { name: 'ActionGroup',
                  'c:symbol-prefix': 'action_group',
                  'c:type': 'GActionGroup',
                  'glib:type-name': 'GActionGroup',
                  'glib:get-type': 'g_action_group_get_type',
                  'glib:type-struct': 'ActionGroupInterface' },
               doc: 
                [ { _: '#GActionGroup represents a group of actions. Actions can be used to\nexpose functionality in a structured way, either from one part of a\nprogram to another, or to the outside world. Action groups are often\nused together with a #GMenuModel that provides additional\nrepresentation data for displaying the actions to the user, e.g. in\na menu.\n\nThe main way to interact with the actions in a GActionGroup is to\nactivate them with g_action_group_activate_action(). Activating an\naction may require a #GVariant parameter. The required type of the\nparameter can be inquired with g_action_group_get_action_parameter_type().\nActions may be disabled, see g_action_group_get_action_enabled().\nActivating a disabled action has no effect.\n\nActions may optionally have a state in the form of a #GVariant. The\ncurrent state of an action can be inquired with\ng_action_group_get_action_state(). Activating a stateful action may\nchange its state, but it is also possible to set the state by calling\ng_action_group_change_action_state().\n\nAs typical example, consider a text editing application which has an\noption to change the current font to \'bold\'. A good way to represent\nthis would be a stateful action, with a boolean state. Activating the\naction would toggle the state.\n\nEach action in the group has a unique name (which is a string).  All\nmethod calls, except g_action_group_list_actions() take the name of\nan action as an argument.\n\nThe #GActionGroup API is meant to be the \'public\' API to the action\ngroup.  The calls here are exactly the interaction that \'external\nforces\' (eg: UI, incoming D-Bus messages, etc.) are supposed to have\nwith actions.  \'Internal\' APIs (ie: ones meant only to be accessed by\nthe action group implementation) are found on subclasses.  This is\nwhy you will find - for example - g_action_group_get_action_enabled()\nbut not an equivalent set() call.\n\nSignals are emitted on the action group in response to state changes\non individual actions.\n\nImplementations of #GActionGroup should provide implementations for\nthe virtual functions g_action_group_list_actions() and\ng_action_group_query_action().  The other virtual functions should\nnot be implemented - their "wrappers" are actually implemented with\ncalls to g_action_group_query_action().',
                    '$': { 'xml:space': 'preserve' } } ],
               'virtual-method': 
                [ { '$': 
                     { name: 'action_added',
                       invoker: 'action_added',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Emits the #GActionGroup::action-added signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'action_enabled_changed',
                       invoker: 'action_enabled_changed',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Emits the #GActionGroup::action-enabled-changed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': { name: 'enabled', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'whether or not the action is now enabled',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ] } ] },
                  { '$': 
                     { name: 'action_removed',
                       invoker: 'action_removed',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Emits the #GActionGroup::action-removed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'action_state_changed',
                       invoker: 'action_state_changed',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Emits the #GActionGroup::action-state-changed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': { name: 'state', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the new state of the named action',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'activate_action',
                       invoker: 'activate_action',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Activate the named action within @action_group.\n\nIf the action is expecting a parameter, then the correct type of\nparameter must be given as @parameter.  If the action is expecting no\nparameters then @parameter must be %NULL.  See\ng_action_group_get_action_parameter_type().',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to activate',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': 
                               { name: 'parameter',
                                 'transfer-ownership': 'none',
                                 nullable: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'parameters to the activation',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'change_action_state',
                       invoker: 'change_action_state',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Request for the state of the named action within @action_group to be\nchanged to @value.\n\nThe action must be stateful and @value must be of the correct type.\nSee g_action_group_get_action_state_type().\n\nThis call merely requests a change.  The action may refuse to change\nits state or may change its state to something other than @value.\nSee g_action_group_get_action_state_hint().\n\nIf the @value GVariant is floating, it is consumed.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to request the change on',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': { name: 'value', 'transfer-ownership': 'none' },
                              doc: [ { _: 'the new state', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_enabled',
                       invoker: 'get_action_enabled',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Checks if the named action within @action_group is currently enabled.\n\nAn action must be enabled in order to be activated or in order to\nhave its state changed from outside callers.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'whether or not the action is currently enabled',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_parameter_type',
                       invoker: 'get_action_parameter_type',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the type of the parameter that must be given when activating\nthe named action within @action_group.\n\nWhen activating the action using g_action_group_activate_action(),\nthe #GVariant given to that function must be of the type returned\nby this function.\n\nIn the case that this function returns %NULL, you must not give any\n#GVariant, but %NULL instead.\n\nThe parameter type of a particular action will never change but it is\npossible for an action to be removed and for a new action to be added\nwith the same name but a different parameter type.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none', nullable: '1' },
                         doc: [ { _: 'the parameter type', '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_state',
                       invoker: 'get_action_state',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the current state of the named action within @action_group.\n\nIf the action is not stateful then %NULL will be returned.  If the\naction is stateful then the type of the return value is the type\ngiven by g_action_group_get_action_state_type().\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full', nullable: '1' },
                         doc: 
                          [ { _: 'the current state of the action',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_state_hint',
                       invoker: 'get_action_state_hint',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Requests a hint about the valid range of values for the state of the\nnamed action within @action_group.\n\nIf %NULL is returned it either means that the action is not stateful\nor that there is no hint about the valid range of values for the\nstate of the action.\n\nIf a #GVariant array is returned then each item in the array is a\npossible value for the state.  If a #GVariant pair (ie: two-tuple) is\nreturned then the tuple specifies the inclusive lower and upper bound\nof valid values for the state.\n\nIn any case, the information is merely a hint.  It may be possible to\nhave a state value outside of the hinted range and setting a value\nwithin the range may fail.\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full', nullable: '1' },
                         doc: [ { _: 'the state range hint', '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_state_type',
                       invoker: 'get_action_state_type',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the type of the state of the named action within\n@action_group.\n\nIf the action is stateful then this function returns the\n#GVariantType of the state.  All calls to\ng_action_group_change_action_state() must give a #GVariant of this\ntype and g_action_group_get_action_state() will return a #GVariant\nof the same type.\n\nIf the action is not stateful then this function will return %NULL.\nIn that case, g_action_group_get_action_state() will return %NULL\nand you must not call g_action_group_change_action_state().\n\nThe state type of a particular action will never change but it is\npossible for an action to be removed and for a new action to be added\nwith the same name but a different state type.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none', nullable: '1' },
                         doc: 
                          [ { _: 'the state type, if the action is stateful',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': { name: 'has_action', invoker: 'has_action', version: '2.28' },
                    doc: 
                     [ { _: 'Checks if the named action exists within @action_group.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'whether the named action exists',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to check for',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'list_actions',
                       invoker: 'list_actions',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Lists the actions contained within @action_group.\n\nThe caller is responsible for freeing the list with g_strfreev() when\nit is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full' },
                         doc: 
                          [ { _: 'a %NULL-terminated array of the names of the\nactions in the groupb',
                              '$': { 'xml:space': 'preserve' } } ],
                         array: 
                          [ { '$': { 'c:type': 'gchar**' },
                              type: [ { '$': { name: 'utf8' } } ] } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ] } ] },
                  { '$': 
                     { name: 'query_action',
                       invoker: 'query_action',
                       version: '2.32' },
                    doc: 
                     [ { _: 'Queries all aspects of the named action within an @action_group.\n\nThis function acquires the information available from\ng_action_group_has_action(), g_action_group_get_action_enabled(),\ng_action_group_get_action_parameter_type(),\ng_action_group_get_action_state_type(),\ng_action_group_get_action_state_hint() and\ng_action_group_get_action_state() with a single function call.\n\nThis provides two main benefits.\n\nThe first is the improvement in efficiency that comes with not having\nto perform repeated lookups of the action in order to discover\ndifferent things about it.  The second is that implementing\n#GActionGroup can now be done by only overriding this one virtual\nfunction.\n\nThe interface provides a default implementation of this function that\ncalls the individual functions, as required, to fetch the\ninformation.  The interface also provides default implementations of\nthose functions that call this function.  All implementations,\ntherefore, must override either this function or all of the others.\n\nIf the action exists, %TRUE is returned and any of the requested\nfields (as indicated by having a non-%NULL reference passed in) are\nfilled.  If the action doesn\'t exist, %FALSE is returned and the\nfields may or may not have been modified.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: '%TRUE if the action exists, else %FALSE',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': 
                               { name: 'enabled',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full' },
                              doc: 
                               [ { _: 'if the action is presently enabled',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean*' } } ] },
                            { '$': 
                               { name: 'parameter_type',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full',
                                 optional: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the parameter type, or %NULL if none needed',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType**' } } ] },
                            { '$': 
                               { name: 'state_type',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full',
                                 optional: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the state type, or %NULL if stateless',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType**' } } ] },
                            { '$': 
                               { name: 'state_hint',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full',
                                 optional: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the state hint, or %NULL if none',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant**' } } ] },
                            { '$': 
                               { name: 'state',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full',
                                 optional: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the current state, or %NULL if stateless',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant**' } } ] } ] } ] } ],
               method: 
                [ { '$': 
                     { name: 'action_added',
                       'c:identifier': 'g_action_group_action_added',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Emits the #GActionGroup::action-added signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'action_enabled_changed',
                       'c:identifier': 'g_action_group_action_enabled_changed',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Emits the #GActionGroup::action-enabled-changed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': { name: 'enabled', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'whether or not the action is now enabled',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ] } ] },
                  { '$': 
                     { name: 'action_removed',
                       'c:identifier': 'g_action_group_action_removed',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Emits the #GActionGroup::action-removed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'action_state_changed',
                       'c:identifier': 'g_action_group_action_state_changed',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Emits the #GActionGroup::action-state-changed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': { name: 'state', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the new state of the named action',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'activate_action',
                       'c:identifier': 'g_action_group_activate_action',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Activate the named action within @action_group.\n\nIf the action is expecting a parameter, then the correct type of\nparameter must be given as @parameter.  If the action is expecting no\nparameters then @parameter must be %NULL.  See\ng_action_group_get_action_parameter_type().',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to activate',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': 
                               { name: 'parameter',
                                 'transfer-ownership': 'none',
                                 nullable: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'parameters to the activation',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'change_action_state',
                       'c:identifier': 'g_action_group_change_action_state',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Request for the state of the named action within @action_group to be\nchanged to @value.\n\nThe action must be stateful and @value must be of the correct type.\nSee g_action_group_get_action_state_type().\n\nThis call merely requests a change.  The action may refuse to change\nits state or may change its state to something other than @value.\nSee g_action_group_get_action_state_hint().\n\nIf the @value GVariant is floating, it is consumed.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to request the change on',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': { name: 'value', 'transfer-ownership': 'none' },
                              doc: [ { _: 'the new state', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_enabled',
                       'c:identifier': 'g_action_group_get_action_enabled',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Checks if the named action within @action_group is currently enabled.\n\nAn action must be enabled in order to be activated or in order to\nhave its state changed from outside callers.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'whether or not the action is currently enabled',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_parameter_type',
                       'c:identifier': 'g_action_group_get_action_parameter_type',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the type of the parameter that must be given when activating\nthe named action within @action_group.\n\nWhen activating the action using g_action_group_activate_action(),\nthe #GVariant given to that function must be of the type returned\nby this function.\n\nIn the case that this function returns %NULL, you must not give any\n#GVariant, but %NULL instead.\n\nThe parameter type of a particular action will never change but it is\npossible for an action to be removed and for a new action to be added\nwith the same name but a different parameter type.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none', nullable: '1' },
                         doc: [ { _: 'the parameter type', '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_state',
                       'c:identifier': 'g_action_group_get_action_state',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the current state of the named action within @action_group.\n\nIf the action is not stateful then %NULL will be returned.  If the\naction is stateful then the type of the return value is the type\ngiven by g_action_group_get_action_state_type().\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full', nullable: '1' },
                         doc: 
                          [ { _: 'the current state of the action',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_state_hint',
                       'c:identifier': 'g_action_group_get_action_state_hint',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Requests a hint about the valid range of values for the state of the\nnamed action within @action_group.\n\nIf %NULL is returned it either means that the action is not stateful\nor that there is no hint about the valid range of values for the\nstate of the action.\n\nIf a #GVariant array is returned then each item in the array is a\npossible value for the state.  If a #GVariant pair (ie: two-tuple) is\nreturned then the tuple specifies the inclusive lower and upper bound\nof valid values for the state.\n\nIn any case, the information is merely a hint.  It may be possible to\nhave a state value outside of the hinted range and setting a value\nwithin the range may fail.\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full', nullable: '1' },
                         doc: [ { _: 'the state range hint', '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'get_action_state_type',
                       'c:identifier': 'g_action_group_get_action_state_type',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Queries the type of the state of the named action within\n@action_group.\n\nIf the action is stateful then this function returns the\n#GVariantType of the state.  All calls to\ng_action_group_change_action_state() must give a #GVariant of this\ntype and g_action_group_get_action_state() will return a #GVariant\nof the same type.\n\nIf the action is not stateful then this function will return %NULL.\nIn that case, g_action_group_get_action_state() will return %NULL\nand you must not call g_action_group_change_action_state().\n\nThe state type of a particular action will never change but it is\npossible for an action to be removed and for a new action to be added\nwith the same name but a different state type.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none', nullable: '1' },
                         doc: 
                          [ { _: 'the state type, if the action is stateful',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to query',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'has_action',
                       'c:identifier': 'g_action_group_has_action',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Checks if the named action exists within @action_group.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: 'whether the named action exists',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action to check for',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'list_actions',
                       'c:identifier': 'g_action_group_list_actions',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Lists the actions contained within @action_group.\n\nThe caller is responsible for freeing the list with g_strfreev() when\nit is no longer required.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'full' },
                         doc: 
                          [ { _: 'a %NULL-terminated array of the names of the\nactions in the groupb',
                              '$': { 'xml:space': 'preserve' } } ],
                         array: 
                          [ { '$': { 'c:type': 'gchar**' },
                              type: [ { '$': { name: 'utf8' } } ] } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ] } ] },
                  { '$': 
                     { name: 'query_action',
                       'c:identifier': 'g_action_group_query_action',
                       version: '2.32' },
                    doc: 
                     [ { _: 'Queries all aspects of the named action within an @action_group.\n\nThis function acquires the information available from\ng_action_group_has_action(), g_action_group_get_action_enabled(),\ng_action_group_get_action_parameter_type(),\ng_action_group_get_action_state_type(),\ng_action_group_get_action_state_hint() and\ng_action_group_get_action_state() with a single function call.\n\nThis provides two main benefits.\n\nThe first is the improvement in efficiency that comes with not having\nto perform repeated lookups of the action in order to discover\ndifferent things about it.  The second is that implementing\n#GActionGroup can now be done by only overriding this one virtual\nfunction.\n\nThe interface provides a default implementation of this function that\ncalls the individual functions, as required, to fetch the\ninformation.  The interface also provides default implementations of\nthose functions that call this function.  All implementations,\ntherefore, must override either this function or all of the others.\n\nIf the action exists, %TRUE is returned and any of the requested\nfields (as indicated by having a non-%NULL reference passed in) are\nfilled.  If the action doesn\'t exist, %FALSE is returned and the\nfields may or may not have been modified.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         doc: 
                          [ { _: '%TRUE if the action exists, else %FALSE',
                              '$': { 'xml:space': 'preserve' } } ],
                         type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ],
                    parameters: 
                     [ { 'instance-parameter': 
                          [ { '$': { name: 'action_group', 'transfer-ownership': 'none' },
                              doc: [ { _: 'a #GActionGroup', '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'ActionGroup', 'c:type': 'GActionGroup*' } } ] } ],
                         parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of an action in the group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'const gchar*' } } ] },
                            { '$': 
                               { name: 'enabled',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full' },
                              doc: 
                               [ { _: 'if the action is presently enabled',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean*' } } ] },
                            { '$': 
                               { name: 'parameter_type',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full',
                                 optional: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the parameter type, or %NULL if none needed',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType**' } } ] },
                            { '$': 
                               { name: 'state_type',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full',
                                 optional: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the state type, or %NULL if stateless',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.VariantType', 'c:type': 'const GVariantType**' } } ] },
                            { '$': 
                               { name: 'state_hint',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full',
                                 optional: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the state hint, or %NULL if none',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant**' } } ] },
                            { '$': 
                               { name: 'state',
                                 direction: 'out',
                                 'caller-allocates': '0',
                                 'transfer-ownership': 'full',
                                 optional: '1',
                                 'allow-none': '1' },
                              doc: 
                               [ { _: 'the current state, or %NULL if stateless',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant', 'c:type': 'GVariant**' } } ] } ] } ] } ],
               'glib:signal': 
                [ { '$': 
                     { name: 'action-added',
                       when: 'last',
                       detailed: '1',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Signals that a new action was just added to the group.\nThis signal is emitted after the action has been added\nand is now visible.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action in @action_group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'action-enabled-changed',
                       when: 'last',
                       detailed: '1',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Signals that the enabled status of the named action has changed.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action in @action_group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'gchar*' } } ] },
                            { '$': { name: 'enabled', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'whether the action is enabled or not',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'gboolean', 'c:type': 'gboolean' } } ] } ] } ] },
                  { '$': 
                     { name: 'action-removed',
                       when: 'last',
                       detailed: '1',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Signals that an action is just about to be removed from the group.\nThis signal is emitted before the action is removed, so the action\nis still visible and can be queried from the signal handler.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action in @action_group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'gchar*' } } ] } ] } ] },
                  { '$': 
                     { name: 'action-state-changed',
                       when: 'last',
                       detailed: '1',
                       version: '2.28' },
                    doc: 
                     [ { _: 'Signals that the state of the named action has changed.',
                         '$': { 'xml:space': 'preserve' } } ],
                    'return-value': 
                     [ { '$': { 'transfer-ownership': 'none' },
                         type: [ { '$': { name: 'none', 'c:type': 'void' } } ] } ],
                    parameters: 
                     [ { parameter: 
                          [ { '$': { name: 'action_name', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the name of the action in @action_group',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'utf8', 'c:type': 'gchar*' } } ] },
                            { '$': { name: 'value', 'transfer-ownership': 'none' },
                              doc: 
                               [ { _: 'the new value of the state',
                                   '$': { 'xml:space': 'preserve' } } ],
                              type: [ { '$': { name: 'GLib.Variant' } } ] } ] } ] } ] }



    
    t.deepEqual(mod.exportInterface(intf2),
        [
            "export interface ActionGroup {",
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
            "    query_action(action_name: string, enabled: boolean, parameter_type: GLib.VariantType | null, state_type: GLib.VariantType | null, state_hint: GLib.Variant | null, state: GLib.Variant | null): boolean",
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
            "    vfunc_query_action(action_name: string, enabled: boolean, parameter_type: GLib.VariantType | null, state_type: GLib.VariantType | null, state_hint: GLib.Variant | null, state: GLib.Variant | null): boolean",
            "    connect(sigName: \"action-added\", callback: ((action_name: string) => void): void",
            "    connect(sigName: \"action-enabled-changed\", callback: ((action_name: string, enabled: boolean) => void): void",
            "    connect(sigName: \"action-removed\", callback: ((action_name: string) => void): void",
            "    connect(sigName: \"action-state-changed\", callback: ((action_name: string, value: GLib.Variant) => void): void",
            "}",
        ])

})