import { GirFunction, GirClass } from '../../src'

export const classGObject = {
    _fullSymName: 'GObject.Object',
    $: {
        name: 'Object',
        'c:symbol-prefix': 'object',
        'c:type': 'GObject',
        'glib:type-name': 'GObject',
        'glib:get-type': 'g_object_get_type',
        'glib:type-struct': 'ObjectClass',
    },
    doc: [
        {
            _:
                'All the fields in the GObject structure are private\nto the #GObject implementation and should never be accessed directly.',
            $: { 'xml:space': 'preserve' },
        },
    ],
    constructor: [
        // [Function: Object],
        {
            $: {
                name: 'new_valist',
                'c:identifier': 'g_object_new_valist',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Creates a new instance of a #GObject subtype and sets its properties.\n\nConstruction parameters (see #G_PARAM_CONSTRUCT, #G_PARAM_CONSTRUCT_ONLY)\nwhich are not explicitly specified are set to their default values.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'a new instance of @object_type',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'object_type', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the type id of the #GObject subtype to instantiate',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GType', 'c:type': 'GType' } }],
                        },
                        {
                            $: { name: 'first_property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the first property',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'var_args', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'the value of the first property, followed optionally by more\n name/value pairs, followed by %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'va_list', 'c:type': 'va_list' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'newv', 'c:identifier': 'g_object_newv', shadows: 'new' },
            doc: [
                {
                    _:
                        'Creates a new instance of a #GObject subtype and sets its properties.\n\nConstruction parameters (see #G_PARAM_CONSTRUCT, #G_PARAM_CONSTRUCT_ONLY)\nwhich are not explicitly specified are set to their default values.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'a new instance of\n@object_type',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'object_type', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the type id of the #GObject subtype to instantiate',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GType', 'c:type': 'GType' } }],
                        },
                        {
                            $: { name: 'n_parameters', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the length of the @parameters array',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'guint', 'c:type': 'guint' } }],
                        },
                        {
                            $: { name: 'parameters', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'an array of #GParameter',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            array: [
                                {
                                    $: { length: '1', 'zero-terminated': '0', 'c:type': 'GParameter*' },
                                    type: [{ $: { name: 'Parameter', 'c:type': 'GParameter' } }],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    function: [
        {
            $: {
                name: 'compat_control',
                'c:identifier': 'g_object_compat_control',
            },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'gsize', 'c:type': 'gsize' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'what', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'gsize', 'c:type': 'gsize' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'connect',
                'c:identifier': 'g_object_connect',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'A convenience function to connect multiple signals at once.\n\nThe signal specs expected by this function have the form\n"modifier::signal_name", where modifier can be one of the following:\n* - signal: equivalent to g_signal_connect_data (..., NULL, 0)\n- object-signal, object_signal: equivalent to g_signal_connect_object (..., 0)\n- swapped-signal, swapped_signal: equivalent to g_signal_connect_data (..., NULL, G_CONNECT_SWAPPED)\n- swapped_object_signal, swapped-object-signal: equivalent to g_signal_connect_object (..., G_CONNECT_SWAPPED)\n- signal_after, signal-after: equivalent to g_signal_connect_data (..., NULL, G_CONNECT_AFTER)\n- object_signal_after, object-signal-after: equivalent to g_signal_connect_object (..., G_CONNECT_AFTER)\n- swapped_signal_after, swapped-signal-after: equivalent to g_signal_connect_data (..., NULL, G_CONNECT_SWAPPED | G_CONNECT_AFTER)\n- swapped_object_signal_after, swapped-object-signal-after: equivalent to g_signal_connect_object (..., G_CONNECT_SWAPPED | G_CONNECT_AFTER)\n\n|[<!-- language="C" -->\n  menu->toplevel = g_object_connect (g_object_new (GTK_TYPE_WINDOW,\n\t\t\t\t\t\t   "type", GTK_WINDOW_POPUP,\n\t\t\t\t\t\t   "child", menu,\n\t\t\t\t\t\t   NULL),\n\t\t\t\t     "signal::event", gtk_menu_window_event, menu,\n\t\t\t\t     "signal::size_request", gtk_menu_window_size_request, menu,\n\t\t\t\t     "signal::destroy", gtk_widget_destroyed, &menu->toplevel,\n\t\t\t\t     NULL);\n]|',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [{ _: '@object', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'signal_spec', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the spec for the first signal',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: '...', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        '#GCallback for the first signal, followed by data for the\n      first signal, followed optionally by more signal\n      spec/callback/data triples, followed by %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            varargs: [''],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'disconnect',
                'c:identifier': 'g_object_disconnect',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'A convenience function to disconnect multiple signals at once.\n\nThe signal specs expected by this function have the form\n"any_signal", which means to disconnect any signal with matching\ncallback and data, or "any_signal::signal_name", which only\ndisconnects the signal named "signal_name".',
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'signal_spec', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the spec for the first signal',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: '...', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        '#GCallback for the first signal, followed by data for the first signal,\n followed optionally by more signal spec/callback/data triples,\n followed by %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            varargs: [''],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get',
                'c:identifier': 'g_object_get',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Gets properties of an object.\n\nIn general, a copy is made of the property contents and the caller\nis responsible for freeing the memory in the appropriate manner for\nthe type, for instance by calling g_free() or g_object_unref().\n\nHere is an example of using g_object_get() to get the contents\nof three properties: an integer, a string and an object:\n|[<!-- language="C" -->\n gint intval;\n gchar *strval;\n GObject *objval;\n\n g_object_get (my_object,\n               "int-property", &intval,\n               "str-property", &strval,\n               "obj-property", &objval,\n               NULL);\n\n // Do something with intval, strval, objval\n\n g_free (strval);\n g_object_unref (objval);\n ]|',
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'first_property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'name of the first property to get',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: '...', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'return location for the first property, followed optionally by more\n name/return location pairs, followed by %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            varargs: [''],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'interface_find_property',
                'c:identifier': 'g_object_interface_find_property',
                version: '2.4',
            },
            doc: [
                {
                    _:
                        'Find the #GParamSpec with the given name for an\ninterface. Generally, the interface vtable passed in as @g_iface\nwill be the default vtable from g_type_default_interface_ref(), or,\nif you know the interface has already been loaded,\ng_type_default_interface_peek().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _:
                                'the #GParamSpec for the property of the\n         interface with the name @property_name, or %NULL if no\n         such property exists.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'ParamSpec', 'c:type': 'GParamSpec*' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'g_iface', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'any interface vtable for the interface, or the default\n vtable for the interface',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'name of a property to lookup.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'interface_install_property',
                'c:identifier': 'g_object_interface_install_property',
                version: '2.4',
            },
            doc: [
                {
                    _:
                        "Add a property to an interface; this is only useful for interfaces\nthat are added to GObject-derived types. Adding a property to an\ninterface forces all objects classes with that interface to have a\ncompatible property. The compatible property could be a newly\ncreated #GParamSpec, but normally\ng_object_class_override_property() will be used so that the object\nclass only needs to provide an implementation and inherits the\nproperty description, default value, bounds, and so forth from the\ninterface property.\n\nThis function is meant to be called from the interface's default\nvtable initialization function (the @class_init member of\n#GTypeInfo.) It must not be called after after @class_init has\nbeen called for any object types implementing this interface.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'g_iface', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'any interface vtable for the interface, or the default\n vtable for the interface.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'pspec', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the #GParamSpec for the new property',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'ParamSpec', 'c:type': 'GParamSpec*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'interface_list_properties',
                'c:identifier': 'g_object_interface_list_properties',
                version: '2.4',
            },
            doc: [
                {
                    _:
                        'Lists the properties of an interface.Generally, the interface\nvtable passed in as @g_iface will be the default vtable from\ng_type_default_interface_ref(), or, if you know the interface has\nalready been loaded, g_type_default_interface_peek().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'container' },
                    doc: [
                        {
                            _:
                                'a\n         pointer to an array of pointers to #GParamSpec\n         structures. The paramspecs are owned by GLib, but the\n         array should be freed with g_free() when you are done with\n         it.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    array: [
                        {
                            $: { length: '1', 'zero-terminated': '0', 'c:type': 'GParamSpec**' },
                            type: [{ $: { name: 'ParamSpec', 'c:type': 'GParamSpec*' } }],
                        },
                    ],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'g_iface', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'any interface vtable for the interface, or the default\n vtable for the interface',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: {
                                name: 'n_properties_p',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                            },
                            doc: [
                                {
                                    _: 'location to store number of properties returned.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'guint', 'c:type': 'guint*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'new',
                'c:identifier': 'g_object_new',
                'shadowed-by': 'newv',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Creates a new instance of a #GObject subtype and sets its properties.\n\nConstruction parameters (see #G_PARAM_CONSTRUCT, #G_PARAM_CONSTRUCT_ONLY)\nwhich are not explicitly specified are set to their default values.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'a new instance of @object_type',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'object_type', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the type id of the #GObject subtype to instantiate',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GType', 'c:type': 'GType' } }],
                        },
                        {
                            $: { name: 'first_property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the first property',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: '...', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'the value of the first property, followed optionally by more\n name/value pairs, followed by %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            varargs: [''],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'set',
                'c:identifier': 'g_object_set',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Sets properties on an object.\n\nNote that the "notify" signals are queued and only emitted (in\nreverse order) after all properties have been set. See\ng_object_freeze_notify().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'first_property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'name of the first property to set',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: '...', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'value for the first property, followed optionally by more\n name/value pairs, followed by %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            varargs: [''],
                        },
                    ],
                },
            ],
        },
    ],
    'virtual-method': [
        {
            $: { name: 'constructed' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'dispatch_properties_changed' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'n_pspecs', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'guint', 'c:type': 'guint' } }],
                        },
                        {
                            $: { name: 'pspecs', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'ParamSpec', 'c:type': 'GParamSpec**' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'dispose' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'finalize' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'get_property' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'property_id', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'guint', 'c:type': 'guint' } }],
                        },
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'Value', 'c:type': 'GValue*' } }],
                        },
                        {
                            $: { name: 'pspec', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'ParamSpec', 'c:type': 'GParamSpec*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'notify', invoker: 'notify' },
            doc: [
                {
                    _:
                        'Emits a "notify" signal for the property @property_name on @object.\n\nWhen possible, eg. when signaling a property change from within the class\nthat registered the property, you should use g_object_notify_by_pspec()\ninstead.\n\nNote that emission of the notify signal may be blocked with\ng_object_freeze_notify(). In this case, the signal emissions are queued\nand will be emitted (in reverse order) when g_object_thaw_notify() is\ncalled.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'pspec', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'ParamSpec', 'c:type': 'GParamSpec*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'set_property' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'property_id', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'guint', 'c:type': 'guint' } }],
                        },
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'Value', 'c:type': 'const GValue*' } }],
                        },
                        {
                            $: { name: 'pspec', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'ParamSpec', 'c:type': 'GParamSpec*' } }],
                        },
                    ],
                },
            ],
        },
    ],
    method: [
        {
            $: {
                name: 'add_toggle_ref',
                'c:identifier': 'g_object_add_toggle_ref',
                version: '2.8',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Increases the reference count of the object by one and sets a\ncallback to be called when all other references to the object are\ndropped, or when this is already the last reference to the object\nand another reference is established.\n\nThis functionality is intended for binding @object to a proxy\nobject managed by another memory manager. This is done with two\npaired references: the strong reference added by\ng_object_add_toggle_ref() and a reverse reference to the proxy\nobject which is either a strong reference or weak reference.\n\nThe setup is that when there are no other references to @object,\nonly a weak reference is held in the reverse direction from @object\nto the proxy object, but when there are other references held to\n@object, a strong reference is held. The @notify callback is called\nwhen the reference from @object to the proxy object should be\n"toggled" from strong to weak (@is_last_ref true) or weak to strong\n(@is_last_ref false).\n\nSince a (normal) reference must be held to the object before\ncalling g_object_add_toggle_ref(), the initial state of the reverse\nlink is always strong.\n\nMultiple toggle references may be added to the same gobject,\nhowever if there are multiple toggle references to an object, none\nof them will ever be notified until all but one are removed.  For\nthis reason, you should only ever use a toggle reference if there\nis important state in the proxy object.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'notify', 'transfer-ownership': 'none', closure: '1' },
                            doc: [
                                {
                                    _:
                                        'a function to call when this reference is the\n last reference to the object, or is no longer\n the last reference.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'ToggleNotify', 'c:type': 'GToggleNotify' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'data to pass to @notify',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'add_weak_pointer',
                'c:identifier': 'g_object_add_weak_pointer',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        "Adds a weak reference from weak_pointer to @object to indicate that\nthe pointer located at @weak_pointer_location is only valid during\nthe lifetime of @object. When the @object is finalized,\n@weak_pointer will be set to %NULL.\n\nNote that as with g_object_weak_ref(), the weak references created by\nthis method are not thread-safe: they cannot safely be used in one\nthread if the object's last g_object_unref() might happen in another\nthread. Use #GWeakRef if thread-safety is required.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'The object that should be weak referenced.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: {
                                name: 'weak_pointer_location',
                                direction: 'inout',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                            },
                            doc: [
                                {
                                    _: 'The memory address of a pointer.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'bind_property',
                'c:identifier': 'g_object_bind_property',
                version: '2.26',
            },
            doc: [
                {
                    _:
                        'Creates a binding between @source_property on @source and @target_property\non @target. Whenever the @source_property is changed the @target_property is\nupdated using the same value. For instance:\n\n|[\n  g_object_bind_property (action, "active", widget, "sensitive", 0);\n]|\n\nWill result in the "sensitive" property of the widget #GObject instance to be\nupdated with the same value of the "active" property of the action #GObject\ninstance.\n\nIf @flags contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:\nif @target_property on @target changes then the @source_property on @source\nwill be updated as well.\n\nThe binding will automatically be removed when either the @source or the\n@target instances are finalized. To remove the binding without affecting the\n@source and the @target you can just call g_object_unref() on the returned\n#GBinding instance.\n\nA #GObject can have multiple bindings.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _:
                                'the #GBinding instance representing the\n    binding between the two #GObject instances. The binding is released\n    whenever the #GBinding reference count reaches zero.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'Binding', 'c:type': 'GBinding*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'source', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the source #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'source_property', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the property on @source to bind',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'target', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the target #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'target_property', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the property on @target to bind',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'flags', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'flags to pass to #GBinding',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'BindingFlags', 'c:type': 'GBindingFlags' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'bind_property_full',
                'c:identifier': 'g_object_bind_property_full',
                'shadowed-by': 'bind_property_with_closures',
                version: '2.26',
            },
            doc: [
                {
                    _:
                        'Complete version of g_object_bind_property().\n\nCreates a binding between @source_property on @source and @target_property\non @target, allowing you to set the transformation functions to be used by\nthe binding.\n\nIf @flags contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:\nif @target_property on @target changes then the @source_property on @source\nwill be updated as well. The @transform_from function is only used in case\nof bidirectional bindings, otherwise it will be ignored\n\nThe binding will automatically be removed when either the @source or the\n@target instances are finalized. To remove the binding without affecting the\n@source and the @target you can just call g_object_unref() on the returned\n#GBinding instance.\n\nA #GObject can have multiple bindings.\n\nThe same @user_data parameter will be used for both @transform_to\nand @transform_from transformation functions; the @notify function will\nbe called once, when the binding is removed. If you need different data\nfor each transformation function, please use\ng_object_bind_property_with_closures() instead.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _:
                                'the #GBinding instance representing the\n    binding between the two #GObject instances. The binding is released\n    whenever the #GBinding reference count reaches zero.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'Binding', 'c:type': 'GBinding*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'source', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the source #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'source_property', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the property on @source to bind',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'target', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the target #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'target_property', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the property on @target to bind',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'flags', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'flags to pass to #GBinding',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'BindingFlags', 'c:type': 'GBindingFlags' } }],
                        },
                        {
                            $: {
                                name: 'transform_to',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                                scope: 'notified',
                            },
                            doc: [
                                {
                                    _:
                                        'the transformation function\n    from the @source to the @target, or %NULL to use the default',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'BindingTransformFunc',
                                        'c:type': 'GBindingTransformFunc',
                                    },
                                },
                            ],
                        },
                        {
                            $: {
                                name: 'transform_from',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                                scope: 'notified',
                                closure: '6',
                                destroy: '7',
                            },
                            doc: [
                                {
                                    _:
                                        'the transformation function\n    from the @target to the @source, or %NULL to use the default',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'BindingTransformFunc',
                                        'c:type': 'GBindingTransformFunc',
                                    },
                                },
                            ],
                        },
                        {
                            $: { name: 'user_data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'custom data to be passed to the transformation functions,\n    or %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'notify', 'transfer-ownership': 'none', scope: 'async' },
                            doc: [
                                {
                                    _:
                                        'function to be called when disposing the binding, to free the\n    resources used by the transformation functions',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'bind_property_with_closures',
                'c:identifier': 'g_object_bind_property_with_closures',
                shadows: 'bind_property_full',
                version: '2.26',
            },
            doc: [
                {
                    _:
                        'Creates a binding between @source_property on @source and @target_property\non @target, allowing you to set the transformation functions to be used by\nthe binding.\n\nThis function is the language bindings friendly version of\ng_object_bind_property_full(), using #GClosures instead of\nfunction pointers.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _:
                                'the #GBinding instance representing the\n    binding between the two #GObject instances. The binding is released\n    whenever the #GBinding reference count reaches zero.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'Binding', 'c:type': 'GBinding*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'source', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the source #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'source_property', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the property on @source to bind',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'target', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the target #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'target_property', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the property on @target to bind',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'flags', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'flags to pass to #GBinding',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'BindingFlags', 'c:type': 'GBindingFlags' } }],
                        },
                        {
                            $: { name: 'transform_to', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'a #GClosure wrapping the transformation function\n    from the @source to the @target, or %NULL to use the default',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Closure', 'c:type': 'GClosure*' } }],
                        },
                        {
                            $: { name: 'transform_from', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'a #GClosure wrapping the transformation function\n    from the @target to the @source, or %NULL to use the default',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Closure', 'c:type': 'GClosure*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'dup_data',
                'c:identifier': 'g_object_dup_data',
                version: '2.34',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        "This is a variant of g_object_get_data() which returns\na 'duplicate' of the value. @dup_func defines the\nmeaning of 'duplicate' in this context, it could e.g.\ntake a reference on a ref-counted object.\n\nIf the @key is not set on the object then @dup_func\nwill be called with a %NULL argument.\n\nNote that @dup_func is called while user data of @object\nis locked.\n\nThis function can be useful to avoid races when multiple\nthreads are using object data on the same key on the same\nobject.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    doc: [
                        {
                            _:
                                'the result of calling @dup_func on the value\n    associated with @key on @object, or %NULL if not set.\n    If @dup_func is %NULL, the value is returned\n    unmodified.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the #GObject to store user data on',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'key', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a string, naming the user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: {
                                name: 'dup_func',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                                closure: '2',
                            },
                            doc: [
                                {
                                    _: 'function to dup the value',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DuplicateFunc', 'c:type': 'GDuplicateFunc' } }],
                        },
                        {
                            $: {
                                name: 'user_data',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'passed as user_data to @dup_func',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'dup_qdata',
                'c:identifier': 'g_object_dup_qdata',
                version: '2.34',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        "This is a variant of g_object_get_qdata() which returns\na 'duplicate' of the value. @dup_func defines the\nmeaning of 'duplicate' in this context, it could e.g.\ntake a reference on a ref-counted object.\n\nIf the @quark is not set on the object then @dup_func\nwill be called with a %NULL argument.\n\nNote that @dup_func is called while user data of @object\nis locked.\n\nThis function can be useful to avoid races when multiple\nthreads are using object data on the same key on the same\nobject.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    doc: [
                        {
                            _:
                                'the result of calling @dup_func on the value\n    associated with @quark on @object, or %NULL if not set.\n    If @dup_func is %NULL, the value is returned\n    unmodified.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the #GObject to store user data on',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'quark', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GQuark, naming the user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Quark', 'c:type': 'GQuark' } }],
                        },
                        {
                            $: {
                                name: 'dup_func',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                                closure: '2',
                            },
                            doc: [
                                {
                                    _: 'function to dup the value',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DuplicateFunc', 'c:type': 'GDuplicateFunc' } }],
                        },
                        {
                            $: {
                                name: 'user_data',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'passed as user_data to @dup_func',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'force_floating',
                'c:identifier': 'g_object_force_floating',
                version: '2.10',
            },
            doc: [
                {
                    _:
                        'This function is intended for #GObject implementations to re-enforce\na [floating][floating-ref] object reference. Doing this is seldom\nrequired: all #GInitiallyUnowneds are created with a floating reference\nwhich usually just needs to be sunken by calling g_object_ref_sink().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'freeze_notify',
                'c:identifier': 'g_object_freeze_notify',
            },
            doc: [
                {
                    _:
                        'Increases the freeze count on @object. If the freeze count is\nnon-zero, the emission of "notify" signals on @object is\nstopped. The signals are queued until the freeze count is decreased\nto zero. Duplicate notifications are squashed so that at most one\n#GObject::notify signal is emitted for each property modified while the\nobject is frozen.\n\nThis is necessary for accessors that modify multiple properties to prevent\npremature notification while the object is still being modified.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'get_data', 'c:identifier': 'g_object_get_data' },
            doc: [
                {
                    _: 'Gets a named field from the objects table of associations (see g_object_set_data()).',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the data if found, or %NULL if no such data exists.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: '#GObject containing the associations',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'key', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'name of the key for that association',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_property',
                'c:identifier': 'g_object_get_property',
            },
            doc: [
                {
                    _:
                        'Gets a property of an object. @value must have been initialized to the\nexpected type of the property (or a type to which the expected type can be\ntransformed) using g_value_init().\n\nIn general, a copy is made of the property contents and the caller is\nresponsible for freeing the memory by calling g_value_unset().\n\nNote that g_object_get_property() is really intended for language\nbindings, g_object_get() is much more convenient for C programming.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the property to get',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'return location for the property value',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Value', 'c:type': 'GValue*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'get_qdata', 'c:identifier': 'g_object_get_qdata' },
            doc: [
                {
                    _: 'This function gets back user data pointers stored via\ng_object_set_qdata().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'The user data pointer set, or %NULL',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'The GObject to get a stored user data pointer from',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'quark', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'A #GQuark, naming the user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Quark', 'c:type': 'GQuark' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_valist',
                'c:identifier': 'g_object_get_valist',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Gets properties of an object.\n\nIn general, a copy is made of the property contents and the caller\nis responsible for freeing the memory in the appropriate manner for\nthe type, for instance by calling g_free() or g_object_unref().\n\nSee g_object_get().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'first_property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'name of the first property to get',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'var_args', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'return location for the first property, followed optionally by more\n name/return location pairs, followed by %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'va_list', 'c:type': 'va_list' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'is_floating',
                'c:identifier': 'g_object_is_floating',
                version: '2.10',
            },
            doc: [
                {
                    _: 'Checks whether @object has a [floating][floating-ref] reference.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: '%TRUE if @object has a floating reference',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'notify', 'c:identifier': 'g_object_notify' },
            doc: [
                {
                    _:
                        'Emits a "notify" signal for the property @property_name on @object.\n\nWhen possible, eg. when signaling a property change from within the class\nthat registered the property, you should use g_object_notify_by_pspec()\ninstead.\n\nNote that emission of the notify signal may be blocked with\ng_object_freeze_notify(). In this case, the signal emissions are queued\nand will be emitted (in reverse order) when g_object_thaw_notify() is\ncalled.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of a property installed on the class of @object.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'notify_by_pspec',
                'c:identifier': 'g_object_notify_by_pspec',
                version: '2.26',
            },
            doc: [
                {
                    _:
                        'Emits a "notify" signal for the property specified by @pspec on @object.\n\nThis function omits the property name lookup, hence it is faster than\ng_object_notify().\n\nOne way to avoid using g_object_notify() from within the\nclass that registered the properties, and using g_object_notify_by_pspec()\ninstead, is to store the GParamSpec used with\ng_object_class_install_property() inside a static array, e.g.:\n\n|[<!-- language="C" -->\n  enum\n  {\n    PROP_0,\n    PROP_FOO,\n    PROP_LAST\n  };\n\n  static GParamSpec *properties[PROP_LAST];\n\n  static void\n  my_object_class_init (MyObjectClass *klass)\n  {\n    properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",\n                                             0, 100,\n                                             50,\n                                             G_PARAM_READWRITE);\n    g_object_class_install_property (gobject_class,\n                                     PROP_FOO,\n                                     properties[PROP_FOO]);\n  }\n]|\n\nand then notify a change on the "foo" property with:\n\n|[<!-- language="C" -->\n  g_object_notify_by_pspec (self, properties[PROP_FOO]);\n]|',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'pspec', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the #GParamSpec of a property installed on the class of @object.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'ParamSpec', 'c:type': 'GParamSpec*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'ref', 'c:identifier': 'g_object_ref' },
            doc: [
                {
                    _: 'Increases the reference count of @object.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [{ _: 'the same @object', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'ref_sink',
                'c:identifier': 'g_object_ref_sink',
                version: '2.10',
            },
            doc: [
                {
                    _:
                        'Increase the reference count of @object, and possibly remove the\n[floating][floating-ref] reference, if @object has a floating reference.\n\nIn other words, if the object is floating, then this call "assumes\nownership" of the floating reference, converting it to a normal\nreference by clearing the floating flag while leaving the reference\ncount unchanged.  If the object is not floating, then this call\nadds a new normal reference increasing the reference count by one.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [{ _: '@object', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'remove_toggle_ref',
                'c:identifier': 'g_object_remove_toggle_ref',
                version: '2.8',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Removes a reference added with g_object_add_toggle_ref(). The\nreference count of the object is decreased by one.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'notify', 'transfer-ownership': 'none', closure: '1' },
                            doc: [
                                {
                                    _:
                                        'a function to call when this reference is the\n last reference to the object, or is no longer\n the last reference.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'ToggleNotify', 'c:type': 'GToggleNotify' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'data to pass to @notify',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'remove_weak_pointer',
                'c:identifier': 'g_object_remove_weak_pointer',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Removes a weak reference from @object that was previously added\nusing g_object_add_weak_pointer(). The @weak_pointer_location has\nto match the one used with g_object_add_weak_pointer().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'The object that is weak referenced.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: {
                                name: 'weak_pointer_location',
                                direction: 'inout',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                            },
                            doc: [
                                {
                                    _: 'The memory address of a pointer.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'replace_data',
                'c:identifier': 'g_object_replace_data',
                version: '2.34',
            },
            doc: [
                {
                    _:
                        'Compares the user data for the key @key on @object with\n@oldval, and if they are the same, replaces @oldval with\n@newval.\n\nThis is like a typical atomic compare-and-exchange\noperation, for user data on an object.\n\nIf the previous value was replaced then ownership of the\nold value (@oldval) is passed to the caller, including\nthe registered destroy notify for it (passed out in @old_destroy).\nIts up to the caller to free this as he wishes, which may\nor may not include using @old_destroy as sometimes replacement\nshould not destroy the object in the normal way.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: '%TRUE if the existing value for @key was replaced\n by @newval, %FALSE otherwise.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the #GObject to store user data on',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'key', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a string, naming the user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: {
                                name: 'oldval',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the old value to compare against',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: {
                                name: 'newval',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [{ _: 'the new value', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: {
                                name: 'destroy',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                                scope: 'async',
                            },
                            doc: [
                                {
                                    _: 'a destroy notify for the new value',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify' } }],
                        },
                        {
                            $: {
                                name: 'old_destroy',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                                scope: 'async',
                            },
                            doc: [
                                {
                                    _: 'destroy notify for the existing value',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'replace_qdata',
                'c:identifier': 'g_object_replace_qdata',
                version: '2.34',
            },
            doc: [
                {
                    _:
                        'Compares the user data for the key @quark on @object with\n@oldval, and if they are the same, replaces @oldval with\n@newval.\n\nThis is like a typical atomic compare-and-exchange\noperation, for user data on an object.\n\nIf the previous value was replaced then ownership of the\nold value (@oldval) is passed to the caller, including\nthe registered destroy notify for it (passed out in @old_destroy).\nIts up to the caller to free this as he wishes, which may\nor may not include using @old_destroy as sometimes replacement\nshould not destroy the object in the normal way.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: '%TRUE if the existing value for @quark was replaced\n by @newval, %FALSE otherwise.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the #GObject to store user data on',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'quark', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GQuark, naming the user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Quark', 'c:type': 'GQuark' } }],
                        },
                        {
                            $: {
                                name: 'oldval',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the old value to compare against',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: {
                                name: 'newval',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [{ _: 'the new value', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: {
                                name: 'destroy',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                                scope: 'async',
                            },
                            doc: [
                                {
                                    _: 'a destroy notify for the new value',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify' } }],
                        },
                        {
                            $: {
                                name: 'old_destroy',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                                scope: 'async',
                            },
                            doc: [
                                {
                                    _: 'destroy notify for the existing value',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'run_dispose', 'c:identifier': 'g_object_run_dispose' },
            doc: [
                {
                    _:
                        'Releases all references to other objects. This can be used to break\nreference cycles.\n\nThis function should only be called from object system implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'set_data', 'c:identifier': 'g_object_set_data' },
            doc: [
                {
                    _:
                        'Each object carries around a table of associations from\nstrings to pointers.  This function lets you set an association.\n\nIf the object already had an association with that name,\nthe old association will be destroyed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: '#GObject containing the associations.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'key', 'transfer-ownership': 'none' },
                            doc: [{ _: 'name of the key', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'data to associate with that key',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'set_data_full',
                'c:identifier': 'g_object_set_data_full',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Like g_object_set_data() except it adds notification\nfor when the association is destroyed, either by setting it\nto a different value or when the object is destroyed.\n\nNote that the @destroy callback is not called if @data is %NULL.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: '#GObject containing the associations',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'key', 'transfer-ownership': 'none' },
                            doc: [{ _: 'name of the key', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'data to associate with that key',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'destroy', 'transfer-ownership': 'none', scope: 'async' },
                            doc: [
                                {
                                    _: 'function to call when the association is destroyed',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'set_property',
                'c:identifier': 'g_object_set_property',
            },
            doc: [
                {
                    _: 'Sets a property on an object.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the property to set',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the value', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Value', 'c:type': 'const GValue*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'set_qdata',
                'c:identifier': 'g_object_set_qdata',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'This sets an opaque, named pointer on an object.\nThe name is specified through a #GQuark (retrived e.g. via\ng_quark_from_static_string()), and the pointer\ncan be gotten back from the @object with g_object_get_qdata()\nuntil the @object is finalized.\nSetting a previously set user data pointer, overrides (frees)\nthe old pointer set, using #NULL as pointer essentially\nremoves the data stored.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'The GObject to set store a user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'quark', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'A #GQuark, naming the user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Quark', 'c:type': 'GQuark' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'An opaque user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'set_qdata_full',
                'c:identifier': 'g_object_set_qdata_full',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'This function works like g_object_set_qdata(), but in addition,\na void (*destroy) (gpointer) function may be specified which is\ncalled with @data as argument when the @object is finalized, or\nthe data is being overwritten by a call to g_object_set_qdata()\nwith the same @quark.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'The GObject to set store a user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'quark', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'A #GQuark, naming the user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Quark', 'c:type': 'GQuark' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'An opaque user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                        {
                            $: { name: 'destroy', 'transfer-ownership': 'none', scope: 'async' },
                            doc: [
                                {
                                    _:
                                        'Function to invoke with @data as argument, when @data\n          needs to be freed',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'set_valist',
                'c:identifier': 'g_object_set_valist',
                introspectable: '0',
            },
            doc: [
                {
                    _: 'Sets properties on an object.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'first_property_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'name of the first property to set',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'var_args', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _:
                                        'value for the first property, followed optionally by more\n name/value pairs, followed by %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'va_list', 'c:type': 'va_list' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'steal_data', 'c:identifier': 'g_object_steal_data' },
            doc: [
                {
                    _:
                        "Remove a specified datum from the object's data associations,\nwithout invoking the association's destroy handler.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'the data if found, or %NULL if no such data exists.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: '#GObject containing the associations',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'key', 'transfer-ownership': 'none' },
                            doc: [{ _: 'name of the key', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'steal_qdata', 'c:identifier': 'g_object_steal_qdata' },
            doc: [
                {
                    _:
                        'This function gets back user data pointers stored via\ng_object_set_qdata() and removes the @data from object\nwithout invoking its destroy() function (if any was\nset).\nUsually, calling this function is only required to update\nuser data pointers with a destroy notifier, for example:\n|[<!-- language="C" -->\nvoid\nobject_add_to_user_list (GObject     *object,\n                         const gchar *new_string)\n{\n  // the quark, naming the object data\n  GQuark quark_string_list = g_quark_from_static_string ("my-string-list");\n  // retrive the old string list\n  GList *list = g_object_steal_qdata (object, quark_string_list);\n\n  // prepend new string\n  list = g_list_prepend (list, g_strdup (new_string));\n  // this changed \'list\', so we need to set it again\n  g_object_set_qdata_full (object, quark_string_list, list, free_string_list);\n}\nstatic void\nfree_string_list (gpointer data)\n{\n  GList *node, *list = data;\n\n  for (node = list; node; node = node->next)\n    g_free (node->data);\n  g_list_free (list);\n}\n]|\nUsing g_object_get_qdata() in the above example, instead of\ng_object_steal_qdata() would have left the destroy function set,\nand thus the partial string list would have been freed upon\ng_object_set_qdata_full().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'The user data pointer set, or %NULL',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'The GObject to get a stored user data pointer from',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'quark', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'A #GQuark, naming the user data pointer',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Quark', 'c:type': 'GQuark' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'thaw_notify', 'c:identifier': 'g_object_thaw_notify' },
            doc: [
                {
                    _:
                        'Reverts the effect of a previous call to\ng_object_freeze_notify(). The freeze count is decreased on @object\nand when it reaches zero, queued "notify" signals are emitted.\n\nDuplicate notifications for each property are squashed so that at most one\n#GObject::notify signal is emitted for each property, in the reverse order\nin which they have been queued.\n\nIt is an error to call this function when the freeze count is zero.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'unref', 'c:identifier': 'g_object_unref' },
            doc: [
                {
                    _:
                        'Decreases the reference count of @object. When its reference count\ndrops to 0, the object is finalized (i.e. its memory is freed).\n\nIf the pointer to the #GObject may be reused in future (for example, if it is\nan instance variable of another object), it is recommended to clear the\npointer to %NULL rather than retain a dangling pointer to a potentially\ninvalid #GObject instance. Use g_clear_object() for this.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GObject', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Object', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'watch_closure',
                'c:identifier': 'g_object_watch_closure',
            },
            doc: [
                {
                    _:
                        'This function essentially limits the life time of the @closure to\nthe life time of the object. That is, when the object is finalized,\nthe @closure is invalidated by calling g_closure_invalidate() on\nit, in order to prevent invocations of the closure with a finalized\n(nonexisting) object. Also, g_object_ref() and g_object_unref() are\nadded as marshal guards to the @closure, to ensure that an extra\nreference count is held on @object during invocation of the\n@closure.  Usually, this function will be called on closures that\nuse this @object as closure data.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'GObject restricting lifetime of @closure',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'closure', 'transfer-ownership': 'none' },
                            doc: [{ _: 'GClosure to watch', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Closure', 'c:type': 'GClosure*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'weak_ref',
                'c:identifier': 'g_object_weak_ref',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Adds a weak reference callback to an object. Weak references are\nused for notification when an object is finalized. They are called\n"weak references" because they allow you to safely hold a pointer\nto an object without calling g_object_ref() (g_object_ref() adds a\nstrong reference, that is, forces the object to stay alive).\n\nNote that the weak references created by this method are not\nthread-safe: they cannot safely be used in one thread if the\nobject\'s last g_object_unref() might happen in another thread.\nUse #GWeakRef if thread-safety is required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: '#GObject to reference weakly',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'notify', 'transfer-ownership': 'none', closure: '1' },
                            doc: [
                                {
                                    _: 'callback to invoke before the object is freed',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'WeakNotify', 'c:type': 'GWeakNotify' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'extra data to pass to notify',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'weak_unref',
                'c:identifier': 'g_object_weak_unref',
                introspectable: '0',
            },
            doc: [
                {
                    _: 'Removes a weak reference callback to an object.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'object', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: '#GObject to remove a weak reference from',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'Object', 'c:type': 'GObject*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'notify', 'transfer-ownership': 'none', closure: '1' },
                            doc: [
                                {
                                    _: 'callback to search for',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'WeakNotify', 'c:type': 'GWeakNotify' } }],
                        },
                        {
                            $: { name: 'data', 'transfer-ownership': 'none' },
                            doc: [{ _: 'data to search for', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                        },
                    ],
                },
            ],
        },
    ],
    field: [
        {
            $: { name: 'g_type_instance' },
            type: [{ $: { name: 'TypeInstance', 'c:type': 'GTypeInstance' } }],
        },
        {
            $: { name: 'ref_count', readable: '0', private: '1' },
            type: [{ $: { name: 'guint', 'c:type': 'volatile guint' } }],
        },
        {
            $: { name: 'qdata', readable: '0', private: '1' },
            type: [{ $: { name: 'GLib.Data', 'c:type': 'GData*' } }],
        },
    ],
    'glib:signal': [
        {
            $: {
                name: 'notify',
                when: 'first',
                'no-recurse': '1',
                detailed: '1',
                action: '1',
                'no-hooks': '1',
            },
            doc: [
                {
                    _:
                        'The notify signal is emitted on an object when one of its\nproperties has been changed. Note that getting this signal\ndoesn\'t guarantee that the value of the property has actually\nchanged, it may also be emitted when the setter for the property\nis called to reinstate the previous value.\n\nThis signal is typically used to obtain change notification for a\nsingle property, by specifying the property name as a detail in the\ng_signal_connect() call, like this:\n|[<!-- language="C" -->\ng_signal_connect (text_view->buffer, "notify::paste-target-list",\n                  G_CALLBACK (gtk_text_view_target_list_notify),\n                  text_view)\n]|\nIt is important to note that you must use\n[canonical][canonical-parameter-name] parameter names as\ndetail strings for the notify signal.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'pspec', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the #GParamSpec of the property which changed.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'ParamSpec' } }],
                        },
                    ],
                },
            ],
        },
    ],
}

export const classApplicationCommandLine: GirClass = {
    _fullSymName: 'ApplicationCommandLine',
    $: {
        name: 'ApplicationCommandLine',
        'c:symbol-prefix': 'application_command_line',
        'c:type': 'GApplicationCommandLine',
        parent: 'GObject.Object',
        'glib:type-name': 'GApplicationCommandLine',
        'glib:get-type': 'g_application_command_line_get_type',
        'glib:type-struct': 'ApplicationCommandLineClass',
    },
    doc: [
        {
            _:
                '#GApplicationCommandLine represents a command-line invocation of\nan application.  It is created by #GApplication and emitted\nin the #GApplication::command-line signal and virtual function.\n\nThe class contains the list of arguments that the program was invoked\nwith.  It is also possible to query if the commandline invocation was\nlocal (ie: the current process is running in direct response to the\ninvocation) or remote (ie: some other process forwarded the\ncommandline to this process).\n\nThe GApplicationCommandLine object can provide the @argc and @argv\nparameters for use with the #GOptionContext command-line parsing API,\nwith the g_application_command_line_get_arguments() function. See\n[gapplication-example-cmdline3.c][gapplication-example-cmdline3]\nfor an example.\n\nThe exit status of the originally-invoked process may be set and\nmessages can be printed to stdout or stderr of that process.  The\nlifecycle of the originally-invoked process is tied to the lifecycle\nof this object (ie: the process exits when the last reference is\ndropped).\n\nThe main use for #GApplicationCommandLine (and the\n#GApplication::command-line signal) is \'Emacs server\' like use cases:\nYou can set the `EDITOR` environment variable to have e.g. git use\nyour favourite editor to edit commit messages, and if you already\nhave an instance of the editor running, the editing will happen\nin the running instance, instead of opening a new one. An important\naspect of this use case is that the process that gets started by git\ndoes not return until the editing is done.\n\nNormally, the commandline is completely handled in the\n#GApplication::command-line handler. The launching instance exits\nonce the signal handler in the primary instance has returned, and\nthe return value of the signal handler becomes the exit status\nof the launching instance.\n|[<!-- language="C" -->\nstatic int\ncommand_line (GApplication            *application,\n              GApplicationCommandLine *cmdline)\n{\n  gchar **argv;\n  gint argc;\n  gint i;\n\n  argv = g_application_command_line_get_arguments (cmdline, &argc);\n\n  g_application_command_line_print (cmdline,\n                                    "This text is written back\\n"\n                                    "to stdout of the caller\\n");\n\n  for (i = 0; i < argc; i++)\n    g_print ("argument %d: %s\\n", i, argv[i]);\n\n  g_strfreev (argv);\n\n  return 0;\n}\n]|\nThe complete example can be found here:\n[gapplication-example-cmdline.c](https://git.gnome.org/browse/glib/tree/gio/tests/gapplication-example-cmdline.c)\n\nIn more complicated cases, the handling of the comandline can be\nsplit between the launcher and the primary instance.\n|[<!-- language="C" -->\nstatic gboolean\n test_local_cmdline (GApplication   *application,\n                     gchar        ***arguments,\n                     gint           *exit_status)\n{\n  gint i, j;\n  gchar **argv;\n\n  argv = *arguments;\n\n  i = 1;\n  while (argv[i])\n    {\n      if (g_str_has_prefix (argv[i], "--local-"))\n        {\n          g_print ("handling argument %s locally\\n", argv[i]);\n          g_free (argv[i]);\n          for (j = i; argv[j]; j++)\n            argv[j] = argv[j + 1];\n        }\n      else\n        {\n          g_print ("not handling argument %s locally\\n", argv[i]);\n          i++;\n        }\n    }\n\n  *exit_status = 0;\n\n  return FALSE;\n}\n\nstatic void\ntest_application_class_init (TestApplicationClass *class)\n{\n  G_APPLICATION_CLASS (class)->local_command_line = test_local_cmdline;\n\n  ...\n}\n]|\nIn this example of split commandline handling, options that start\nwith `--local-` are handled locally, all other options are passed\nto the #GApplication::command-line handler which runs in the primary\ninstance.\n\nThe complete example can be found here:\n[gapplication-example-cmdline2.c](https://git.gnome.org/browse/glib/tree/gio/tests/gapplication-example-cmdline2.c)\n\nIf handling the commandline requires a lot of work, it may\nbe better to defer it.\n|[<!-- language="C" -->\nstatic gboolean\nmy_cmdline_handler (gpointer data)\n{\n  GApplicationCommandLine *cmdline = data;\n\n  // do the heavy lifting in an idle\n\n  g_application_command_line_set_exit_status (cmdline, 0);\n  g_object_unref (cmdline); // this releases the application\n\n  return G_SOURCE_REMOVE;\n}\n\nstatic int\ncommand_line (GApplication            *application,\n              GApplicationCommandLine *cmdline)\n{\n  // keep the application running until we are done with this commandline\n  g_application_hold (application);\n\n  g_object_set_data_full (G_OBJECT (cmdline),\n                          "application", application,\n                          (GDestroyNotify)g_application_release);\n\n  g_object_ref (cmdline);\n  g_idle_add (my_cmdline_handler, cmdline);\n\n  return 0;\n}\n]|\nIn this example the commandline is not completely handled before\nthe #GApplication::command-line handler returns. Instead, we keep\na reference to the #GApplicationCommandLine object and handle it\nlater (in this example, in an idle). Note that it is necessary to\nhold the application until you are done with the commandline.\n\nThe complete example can be found here:\n[gapplication-example-cmdline3.c](https://git.gnome.org/browse/glib/tree/gio/tests/gapplication-example-cmdline3.c)',
            $: { 'xml:space': 'preserve' },
        },
    ],
    'virtual-method': [
        {
            $: { name: 'get_stdin', invoker: 'get_stdin', version: '2.34' },
            doc: [
                {
                    _:
                        "Gets the stdin of the invoking process.\n\nThe #GInputStream can be used to read data passed to the standard\ninput of the invoking process.\nThis doesn't work on all platforms.  Presently, it is only available\non UNIX when using a DBus daemon capable of passing file descriptors.\nIf stdin is not available then %NULL will be returned.  In the\nfuture, support may be expanded to other platforms.\n\nYou must only call this function once per commandline invocation.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'a #GInputStream for stdin',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'InputStream', 'c:type': 'GInputStream*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'print_literal' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'message', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'printerr_literal' },
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'message', 'transfer-ownership': 'none' },
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
    ],
    method: [
        {
            $: {
                name: 'create_file_for_arg',
                'c:identifier': 'g_application_command_line_create_file_for_arg',
                version: '2.36',
            },
            doc: [
                {
                    _:
                        'Creates a #GFile corresponding to a filename that was given as part\nof the invocation of @cmdline.\n\nThis differs from g_file_new_for_commandline_arg() in that it\nresolves relative pathnames using the current working directory of\nthe invoking process rather than the local process.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [{ _: 'a new #GFile', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'File', 'c:type': 'GFile*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'arg', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'an argument from @cmdline',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_arguments',
                'c:identifier': 'g_application_command_line_get_arguments',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Gets the list of arguments that was passed on the command line.\n\nThe strings in the array may contain non-UTF-8 data on UNIX (such as\nfilenames or arguments given in the system locale) but are always in\nUTF-8 on Windows.\n\nIf you wish to use the return value with #GOptionContext, you must\nuse g_option_context_parse_strv().\n\nThe return value is %NULL-terminated and should be freed using\ng_strfreev().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'the string array\ncontaining the arguments (the argv)',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    array: [
                        {
                            $: { length: '0', 'zero-terminated': '0', 'c:type': 'gchar**' },
                            type: [{ $: { name: 'utf8' } }],
                        },
                    ],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                    parameter: [
                        {
                            $: {
                                name: 'argc',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the length of the arguments array, or %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gint', 'c:type': 'int*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_cwd',
                'c:identifier': 'g_application_command_line_get_cwd',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Gets the working directory of the command line invocation.\nThe string may contain non-utf8 data.\n\nIt is possible that the remote application did not send a working\ndirectory, so this may be %NULL.\n\nThe return value should not be modified or freed and is valid for as\nlong as @cmdline exists.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the current directory, or %NULL',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_environ',
                'c:identifier': 'g_application_command_line_get_environ',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        "Gets the contents of the 'environ' variable of the command line\ninvocation, as would be returned by g_get_environ(), ie as a\n%NULL-terminated list of strings in the form 'NAME=VALUE'.\nThe strings may contain non-utf8 data.\n\nThe remote application usually does not send an environment.  Use\n%G_APPLICATION_SEND_ENVIRONMENT to affect that.  Even with this flag\nset it is possible that the environment is still not available (due\nto invocation messages from other applications).\n\nThe return value should not be modified or freed and is valid for as\nlong as @cmdline exists.\n\nSee g_application_command_line_getenv() if you are only interested\nin the value of a single environment variable.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the environment\nstrings, or %NULL if they were not sent',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    array: [
                        {
                            $: { 'c:type': 'gchar**' },
                            type: [{ $: { name: 'utf8' } }],
                        },
                    ],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_exit_status',
                'c:identifier': 'g_application_command_line_get_exit_status',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Gets the exit status of @cmdline.  See\ng_application_command_line_set_exit_status() for more information.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [{ _: 'the exit status', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'gint', 'c:type': 'int' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_is_remote',
                'c:identifier': 'g_application_command_line_get_is_remote',
                version: '2.28',
            },
            doc: [
                {
                    _: 'Determines if @cmdline represents a remote invocation.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: '%TRUE if the invocation was remote',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_options_dict',
                'c:identifier': 'g_application_command_line_get_options_dict',
                version: '2.40',
            },
            doc: [
                {
                    _:
                        "Gets the options there were passed to g_application_command_line().\n\nIf you did not override local_command_line() then these are the same\noptions that were parsed according to the #GOptionEntrys added to the\napplication with g_application_add_main_option_entries() and possibly\nmodified from your GApplication::handle-local-options handler.\n\nIf no options were sent then an empty dictionary is returned so that\nyou don't need to check for %NULL.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'a #GVariantDict with the options',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.VariantDict', 'c:type': 'GVariantDict*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_platform_data',
                'c:identifier': 'g_application_command_line_get_platform_data',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Gets the platform data associated with the invocation of @cmdline.\n\nThis is a #GVariant dictionary containing information about the\ncontext in which the invocation occurred.  It typically contains\ninformation like the current working directory and the startup\nnotification ID.\n\nFor local invocation, it will be %NULL.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full', nullable: '1' },
                    doc: [
                        {
                            _: 'the platform data, or %NULL',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: '#GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_stdin',
                'c:identifier': 'g_application_command_line_get_stdin',
                version: '2.34',
            },
            doc: [
                {
                    _:
                        "Gets the stdin of the invoking process.\n\nThe #GInputStream can be used to read data passed to the standard\ninput of the invoking process.\nThis doesn't work on all platforms.  Presently, it is only available\non UNIX when using a DBus daemon capable of passing file descriptors.\nIf stdin is not available then %NULL will be returned.  In the\nfuture, support may be expanded to other platforms.\n\nYou must only call this function once per commandline invocation.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'a #GInputStream for stdin',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'InputStream', 'c:type': 'GInputStream*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'getenv',
                'c:identifier': 'g_application_command_line_getenv',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Gets the value of a particular environment variable of the command\nline invocation, as would be returned by g_getenv().  The strings may\ncontain non-utf8 data.\n\nThe remote application usually does not send an environment.  Use\n%G_APPLICATION_SEND_ENVIRONMENT to affect that.  Even with this flag\nset it is possible that the environment is still not available (due\nto invocation messages from other applications).\n\nThe return value should not be modified or freed and is valid for as\nlong as @cmdline exists.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the value of the variable, or %NULL if unset or unsent',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the environment variable to get',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'print',
                'c:identifier': 'g_application_command_line_print',
                version: '2.28',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Formats a message and prints it using the stdout print handler in the\ninvoking process.\n\nIf @cmdline is a local invocation then this is exactly equivalent to\ng_print().  If @cmdline is remote then this is equivalent to calling\ng_print() in the invoking process.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'format', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a printf-style format string',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: '...', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'arguments, as per @format',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            varargs: [''],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'printerr',
                'c:identifier': 'g_application_command_line_printerr',
                version: '2.28',
                introspectable: '0',
            },
            doc: [
                {
                    _:
                        'Formats a message and prints it using the stderr print handler in the\ninvoking process.\n\nIf @cmdline is a local invocation then this is exactly equivalent to\ng_printerr().  If @cmdline is remote then this is equivalent to\ncalling g_printerr() in the invoking process.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'format', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a printf-style format string',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: '...', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'arguments, as per @format',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            varargs: [''],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'set_exit_status',
                'c:identifier': 'g_application_command_line_set_exit_status',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        "Sets the exit status that will be used when the invoking process\nexits.\n\nThe return value of the #GApplication::command-line signal is\npassed to this function when the handler returns.  This is the usual\nway of setting the exit status.\n\nIn the event that you want the remote invocation to continue running\nand want to decide on the exit status in the future, you can use this\ncall.  For the case of a remote invocation, the remote process will\ntypically exit when the last reference is dropped on @cmdline.  The\nexit status of the remote process will be equal to the last value\nthat was set with this function.\n\nIn the case that the commandline invocation is local, the situation\nis slightly more complicated.  If the commandline invocation results\nin the mainloop running (ie: because the use-count of the application\nincreased to a non-zero value) then the application is considered to\nhave been 'successful' in a certain sense, and the exit status is\nalways zero.  If the application use count is zero, though, the exit\nstatus of the local #GApplicationCommandLine is used.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'cmdline', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a #GApplicationCommandLine',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [
                                {
                                    $: {
                                        name: 'ApplicationCommandLine',
                                        'c:type': 'GApplicationCommandLine*',
                                    },
                                },
                            ],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'exit_status', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the exit status', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'gint', 'c:type': 'int' } }],
                        },
                    ],
                },
            ],
        },
    ],
    property: [
        {
            $: {
                name: 'arguments',
                readable: '0',
                writable: '1',
                'construct-only': '1',
                'transfer-ownership': 'none',
            },
            type: [{ $: { name: 'GLib.Variant' } }],
        },
        {
            $: { name: 'is-remote', 'transfer-ownership': 'none' },
            type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
        },
        {
            $: {
                name: 'options',
                readable: '0',
                writable: '1',
                'construct-only': '1',
                'transfer-ownership': 'none',
            },
            type: [{ $: { name: 'GLib.Variant' } }],
        },
        {
            $: {
                name: 'platform-data',
                readable: '0',
                writable: '1',
                'construct-only': '1',
                'transfer-ownership': 'none',
            },
            type: [{ $: { name: 'GLib.Variant' } }],
        },
    ],
    field: [
        {
            $: { name: 'parent_instance', readable: '0', private: '1' },
            type: [{ $: { name: 'GObject.Object', 'c:type': 'GObject' } }],
        },
        {
            $: { name: 'priv', readable: '0', private: '1' },
            type: [
                {
                    $: {
                        name: 'ApplicationCommandLinePrivate',
                        'c:type': 'GApplicationCommandLinePrivate*',
                    },
                },
            ],
        },
    ],
}

export const interfaceDBusNodeInfo: GirClass = {
    _fullSymName: 'DBusNodeInfo',
    $: {
        name: 'DBusNodeInfo',
        'c:type': 'GDBusNodeInfo',
        version: '2.26',
        'glib:type-name': 'GDBusNodeInfo',
        'glib:get-type': 'g_dbus_node_info_get_type',
        'c:symbol-prefix': 'dbus_node_info',
    },
    doc: [
        {
            _: 'Information about nodes in a remote object hierarchy.',
            $: { 'xml:space': 'preserve' },
        },
    ],
    field: [
        {
            $: { name: 'ref_count', writable: '1' },
            doc: [
                {
                    _: 'The reference count or -1 if statically allocated.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            type: [{ $: { name: 'gint', 'c:type': 'volatile gint' } }],
        },
        {
            $: { name: 'path', writable: '1' },
            doc: [
                {
                    _:
                        'The path of the node or %NULL if omitted. Note that this may be a relative path. See the D-Bus specification for more details.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            type: [{ $: { name: 'utf8', 'c:type': 'gchar*' } }],
        },
        {
            $: { name: 'interfaces', writable: '1' },
            doc: [
                {
                    _:
                        'A pointer to a %NULL-terminated array of pointers to #GDBusInterfaceInfo structures or %NULL if there are no interfaces.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            array: [
                {
                    $: { 'c:type': 'GDBusInterfaceInfo**' },
                    type: [{ $: { name: 'DBusInterfaceInfo', 'c:type': 'GDBusInterfaceInfo*' } }],
                },
            ],
        },
        {
            $: { name: 'nodes', writable: '1' },
            doc: [
                {
                    _:
                        'A pointer to a %NULL-terminated array of pointers to #GDBusNodeInfo structures or %NULL if there are no nodes.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            array: [
                {
                    $: { 'c:type': 'GDBusNodeInfo**' },
                    type: [{ $: { name: 'DBusNodeInfo', 'c:type': 'GDBusNodeInfo*' } }],
                },
            ],
        },
        {
            $: { name: 'annotations', writable: '1' },
            doc: [
                {
                    _:
                        'A pointer to a %NULL-terminated array of pointers to #GDBusAnnotationInfo structures or %NULL if there are no annotations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            array: [
                {
                    $: { 'c:type': 'GDBusAnnotationInfo**' },
                    type: [{ $: { name: 'DBusAnnotationInfo', 'c:type': 'GDBusAnnotationInfo*' } }],
                },
            ],
        },
    ],
    constructor: [
        // [Function: Object],
        {
            $: {
                name: 'new_for_xml',
                'c:identifier': 'g_dbus_node_info_new_for_xml',
                version: '2.26',
                throws: '1',
            },
            doc: [
                {
                    _:
                        'Parses @xml_data and returns a #GDBusNodeInfo representing the data.\n\nThe introspection XML must contain exactly one top-level\n<node> element.\n\nNote that this routine is using a\n[GMarkup][glib-Simple-XML-Subset-Parser.description]-based\nparser that only accepts a subset of valid XML documents.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _:
                                'A #GDBusNodeInfo structure or %NULL if @error is set. Free\nwith g_dbus_node_info_unref().',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'DBusNodeInfo', 'c:type': 'GDBusNodeInfo*' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'xml_data', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'Valid D-Bus introspection XML.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
    ],
    method: [
        {
            $: {
                name: 'generate_xml',
                'c:identifier': 'g_dbus_node_info_generate_xml',
                version: '2.26',
            },
            doc: [
                {
                    _:
                        'Appends an XML representation of @info (and its children) to @string_builder.\n\nThis function is typically used for generating introspection XML documents at run-time for\nhandling the `org.freedesktop.DBus.Introspectable.Introspect`  method.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'info', 'transfer-ownership': 'none' },
                            doc: [{ _: 'A #GDBusNodeInfo.', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'DBusNodeInfo', 'c:type': 'GDBusNodeInfo*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'indent', 'transfer-ownership': 'none' },
                            doc: [{ _: 'Indentation level.', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'guint', 'c:type': 'guint' } }],
                        },
                        {
                            $: {
                                name: 'string_builder',
                                direction: 'out',
                                'caller-allocates': '1',
                                'transfer-ownership': 'none',
                            },
                            doc: [
                                {
                                    _: 'A #GString to to append XML data to.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.String', 'c:type': 'GString*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'lookup_interface',
                'c:identifier': 'g_dbus_node_info_lookup_interface',
                version: '2.26',
            },
            doc: [
                {
                    _:
                        'Looks up information about an interface.\n\nThe cost of this function is O(n) in number of interfaces.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'A #GDBusInterfaceInfo or %NULL if not found. Do not free, it is owned by @info.',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'DBusInterfaceInfo', 'c:type': 'GDBusInterfaceInfo*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'info', 'transfer-ownership': 'none' },
                            doc: [{ _: 'A #GDBusNodeInfo.', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'DBusNodeInfo', 'c:type': 'GDBusNodeInfo*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'A D-Bus interface name.',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'ref',
                'c:identifier': 'g_dbus_node_info_ref',
                version: '2.26',
            },
            doc: [
                {
                    _: 'If @info is statically allocated does nothing. Otherwise increases\nthe reference count.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [{ _: 'The same @info.', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'DBusNodeInfo', 'c:type': 'GDBusNodeInfo*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'info', 'transfer-ownership': 'none' },
                            doc: [{ _: 'A #GDBusNodeInfo', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'DBusNodeInfo', 'c:type': 'GDBusNodeInfo*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'unref',
                'c:identifier': 'g_dbus_node_info_unref',
                version: '2.26',
            },
            doc: [
                {
                    _:
                        'If @info is statically allocated, does nothing. Otherwise decreases\nthe reference count of @info. When its reference count drops to 0,\nthe memory used is freed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'info', 'transfer-ownership': 'none' },
                            doc: [{ _: 'A #GDBusNodeInfo.', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'DBusNodeInfo', 'c:type': 'GDBusNodeInfo*' } }],
                        },
                    ],
                },
            ],
        },
    ],
}

export const interfaceActionGroup: GirClass = {
    _fullSymName: 'ActionGroup',
    $: {
        name: 'ActionGroup',
        'c:symbol-prefix': 'action_group',
        'c:type': 'GActionGroup',
        'glib:type-name': 'GActionGroup',
        'glib:get-type': 'g_action_group_get_type',
        'glib:type-struct': 'ActionGroupInterface',
    },
    doc: [
        {
            _:
                "#GActionGroup represents a group of actions. Actions can be used to\nexpose functionality in a structured way, either from one part of a\nprogram to another, or to the outside world. Action groups are often\nused together with a #GMenuModel that provides additional\nrepresentation data for displaying the actions to the user, e.g. in\na menu.\n\nThe main way to interact with the actions in a GActionGroup is to\nactivate them with g_action_group_activate_action(). Activating an\naction may require a #GVariant parameter. The required type of the\nparameter can be inquired with g_action_group_get_action_parameter_type().\nActions may be disabled, see g_action_group_get_action_enabled().\nActivating a disabled action has no effect.\n\nActions may optionally have a state in the form of a #GVariant. The\ncurrent state of an action can be inquired with\ng_action_group_get_action_state(). Activating a stateful action may\nchange its state, but it is also possible to set the state by calling\ng_action_group_change_action_state().\n\nAs typical example, consider a text editing application which has an\noption to change the current font to 'bold'. A good way to represent\nthis would be a stateful action, with a boolean state. Activating the\naction would toggle the state.\n\nEach action in the group has a unique name (which is a string).  All\nmethod calls, except g_action_group_list_actions() take the name of\nan action as an argument.\n\nThe #GActionGroup API is meant to be the 'public' API to the action\ngroup.  The calls here are exactly the interaction that 'external\nforces' (eg: UI, incoming D-Bus messages, etc.) are supposed to have\nwith actions.  'Internal' APIs (ie: ones meant only to be accessed by\nthe action group implementation) are found on subclasses.  This is\nwhy you will find - for example - g_action_group_get_action_enabled()\nbut not an equivalent set() call.\n\nSignals are emitted on the action group in response to state changes\non individual actions.\n\nImplementations of #GActionGroup should provide implementations for\nthe virtual functions g_action_group_list_actions() and\ng_action_group_query_action().  The other virtual functions should\nnot be implemented - their \"wrappers\" are actually implemented with\ncalls to g_action_group_query_action().",
            $: { 'xml:space': 'preserve' },
        },
    ],
    'virtual-method': [
        {
            $: {
                name: 'action_added',
                invoker: 'action_added',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Emits the #GActionGroup::action-added signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action_enabled_changed',
                invoker: 'action_enabled_changed',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Emits the #GActionGroup::action-enabled-changed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'enabled', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'whether or not the action is now enabled',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action_removed',
                invoker: 'action_removed',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Emits the #GActionGroup::action-removed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action_state_changed',
                invoker: 'action_state_changed',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Emits the #GActionGroup::action-state-changed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'state', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the new state of the named action',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'activate_action',
                invoker: 'activate_action',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Activate the named action within @action_group.\n\nIf the action is expecting a parameter, then the correct type of\nparameter must be given as @parameter.  If the action is expecting no\nparameters then @parameter must be %NULL.  See\ng_action_group_get_action_parameter_type().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to activate',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: {
                                name: 'parameter',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'parameters to the activation',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'change_action_state',
                invoker: 'change_action_state',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Request for the state of the named action within @action_group to be\nchanged to @value.\n\nThe action must be stateful and @value must be of the correct type.\nSee g_action_group_get_action_state_type().\n\nThis call merely requests a change.  The action may refuse to change\nits state or may change its state to something other than @value.\nSee g_action_group_get_action_state_hint().\n\nIf the @value GVariant is floating, it is consumed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to request the change on',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the new state', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_enabled',
                invoker: 'get_action_enabled',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Checks if the named action within @action_group is currently enabled.\n\nAn action must be enabled in order to be activated or in order to\nhave its state changed from outside callers.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'whether or not the action is currently enabled',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_parameter_type',
                invoker: 'get_action_parameter_type',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the type of the parameter that must be given when activating\nthe named action within @action_group.\n\nWhen activating the action using g_action_group_activate_action(),\nthe #GVariant given to that function must be of the type returned\nby this function.\n\nIn the case that this function returns %NULL, you must not give any\n#GVariant, but %NULL instead.\n\nThe parameter type of a particular action will never change but it is\npossible for an action to be removed and for a new action to be added\nwith the same name but a different parameter type.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none', nullable: '1' },
                    doc: [{ _: 'the parameter type', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_state',
                invoker: 'get_action_state',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the current state of the named action within @action_group.\n\nIf the action is not stateful then %NULL will be returned.  If the\naction is stateful then the type of the return value is the type\ngiven by g_action_group_get_action_state_type().\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full', nullable: '1' },
                    doc: [
                        {
                            _: 'the current state of the action',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_state_hint',
                invoker: 'get_action_state_hint',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Requests a hint about the valid range of values for the state of the\nnamed action within @action_group.\n\nIf %NULL is returned it either means that the action is not stateful\nor that there is no hint about the valid range of values for the\nstate of the action.\n\nIf a #GVariant array is returned then each item in the array is a\npossible value for the state.  If a #GVariant pair (ie: two-tuple) is\nreturned then the tuple specifies the inclusive lower and upper bound\nof valid values for the state.\n\nIn any case, the information is merely a hint.  It may be possible to\nhave a state value outside of the hinted range and setting a value\nwithin the range may fail.\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full', nullable: '1' },
                    doc: [{ _: 'the state range hint', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_state_type',
                invoker: 'get_action_state_type',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the type of the state of the named action within\n@action_group.\n\nIf the action is stateful then this function returns the\n#GVariantType of the state.  All calls to\ng_action_group_change_action_state() must give a #GVariant of this\ntype and g_action_group_get_action_state() will return a #GVariant\nof the same type.\n\nIf the action is not stateful then this function will return %NULL.\nIn that case, g_action_group_get_action_state() will return %NULL\nand you must not call g_action_group_change_action_state().\n\nThe state type of a particular action will never change but it is\npossible for an action to be removed and for a new action to be added\nwith the same name but a different state type.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none', nullable: '1' },
                    doc: [
                        {
                            _: 'the state type, if the action is stateful',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'has_action', invoker: 'has_action', version: '2.28' },
            doc: [
                {
                    _: 'Checks if the named action exists within @action_group.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'whether the named action exists',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to check for',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'list_actions',
                invoker: 'list_actions',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Lists the actions contained within @action_group.\n\nThe caller is responsible for freeing the list with g_strfreev() when\nit is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'a %NULL-terminated array of the names of the\nactions in the groupb',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    array: [
                        {
                            $: { 'c:type': 'gchar**' },
                            type: [{ $: { name: 'utf8' } }],
                        },
                    ],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'query_action',
                invoker: 'query_action',
                version: '2.32',
            },
            doc: [
                {
                    _:
                        "Queries all aspects of the named action within an @action_group.\n\nThis function acquires the information available from\ng_action_group_has_action(), g_action_group_get_action_enabled(),\ng_action_group_get_action_parameter_type(),\ng_action_group_get_action_state_type(),\ng_action_group_get_action_state_hint() and\ng_action_group_get_action_state() with a single function call.\n\nThis provides two main benefits.\n\nThe first is the improvement in efficiency that comes with not having\nto perform repeated lookups of the action in order to discover\ndifferent things about it.  The second is that implementing\n#GActionGroup can now be done by only overriding this one virtual\nfunction.\n\nThe interface provides a default implementation of this function that\ncalls the individual functions, as required, to fetch the\ninformation.  The interface also provides default implementations of\nthose functions that call this function.  All implementations,\ntherefore, must override either this function or all of the others.\n\nIf the action exists, %TRUE is returned and any of the requested\nfields (as indicated by having a non-%NULL reference passed in) are\nfilled.  If the action doesn't exist, %FALSE is returned and the\nfields may or may not have been modified.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: '%TRUE if the action exists, else %FALSE',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: {
                                name: 'enabled',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                            },
                            doc: [
                                {
                                    _: 'if the action is presently enabled',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gboolean', 'c:type': 'gboolean*' } }],
                        },
                        {
                            $: {
                                name: 'parameter_type',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the parameter type, or %NULL if none needed',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType**' } }],
                        },
                        {
                            $: {
                                name: 'state_type',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the state type, or %NULL if stateless',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType**' } }],
                        },
                        {
                            $: {
                                name: 'state_hint',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the state hint, or %NULL if none',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant**' } }],
                        },
                        {
                            $: {
                                name: 'state',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the current state, or %NULL if stateless',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant**' } }],
                        },
                    ],
                },
            ],
        },
    ],
    method: [
        {
            $: {
                name: 'action_added',
                'c:identifier': 'g_action_group_action_added',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Emits the #GActionGroup::action-added signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action_enabled_changed',
                'c:identifier': 'g_action_group_action_enabled_changed',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Emits the #GActionGroup::action-enabled-changed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'enabled', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'whether or not the action is now enabled',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action_removed',
                'c:identifier': 'g_action_group_action_removed',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Emits the #GActionGroup::action-removed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action_state_changed',
                'c:identifier': 'g_action_group_action_state_changed',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Emits the #GActionGroup::action-state-changed signal on @action_group.\n\nThis function should only be called by #GActionGroup implementations.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'state', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the new state of the named action',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'activate_action',
                'c:identifier': 'g_action_group_activate_action',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Activate the named action within @action_group.\n\nIf the action is expecting a parameter, then the correct type of\nparameter must be given as @parameter.  If the action is expecting no\nparameters then @parameter must be %NULL.  See\ng_action_group_get_action_parameter_type().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to activate',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: {
                                name: 'parameter',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'parameters to the activation',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'change_action_state',
                'c:identifier': 'g_action_group_change_action_state',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Request for the state of the named action within @action_group to be\nchanged to @value.\n\nThe action must be stateful and @value must be of the correct type.\nSee g_action_group_get_action_state_type().\n\nThis call merely requests a change.  The action may refuse to change\nits state or may change its state to something other than @value.\nSee g_action_group_get_action_state_hint().\n\nIf the @value GVariant is floating, it is consumed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to request the change on',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the new state', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_enabled',
                'c:identifier': 'g_action_group_get_action_enabled',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Checks if the named action within @action_group is currently enabled.\n\nAn action must be enabled in order to be activated or in order to\nhave its state changed from outside callers.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'whether or not the action is currently enabled',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_parameter_type',
                'c:identifier': 'g_action_group_get_action_parameter_type',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the type of the parameter that must be given when activating\nthe named action within @action_group.\n\nWhen activating the action using g_action_group_activate_action(),\nthe #GVariant given to that function must be of the type returned\nby this function.\n\nIn the case that this function returns %NULL, you must not give any\n#GVariant, but %NULL instead.\n\nThe parameter type of a particular action will never change but it is\npossible for an action to be removed and for a new action to be added\nwith the same name but a different parameter type.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none', nullable: '1' },
                    doc: [{ _: 'the parameter type', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_state',
                'c:identifier': 'g_action_group_get_action_state',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the current state of the named action within @action_group.\n\nIf the action is not stateful then %NULL will be returned.  If the\naction is stateful then the type of the return value is the type\ngiven by g_action_group_get_action_state_type().\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full', nullable: '1' },
                    doc: [
                        {
                            _: 'the current state of the action',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_state_hint',
                'c:identifier': 'g_action_group_get_action_state_hint',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Requests a hint about the valid range of values for the state of the\nnamed action within @action_group.\n\nIf %NULL is returned it either means that the action is not stateful\nor that there is no hint about the valid range of values for the\nstate of the action.\n\nIf a #GVariant array is returned then each item in the array is a\npossible value for the state.  If a #GVariant pair (ie: two-tuple) is\nreturned then the tuple specifies the inclusive lower and upper bound\nof valid values for the state.\n\nIn any case, the information is merely a hint.  It may be possible to\nhave a state value outside of the hinted range and setting a value\nwithin the range may fail.\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full', nullable: '1' },
                    doc: [{ _: 'the state range hint', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_action_state_type',
                'c:identifier': 'g_action_group_get_action_state_type',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the type of the state of the named action within\n@action_group.\n\nIf the action is stateful then this function returns the\n#GVariantType of the state.  All calls to\ng_action_group_change_action_state() must give a #GVariant of this\ntype and g_action_group_get_action_state() will return a #GVariant\nof the same type.\n\nIf the action is not stateful then this function will return %NULL.\nIn that case, g_action_group_get_action_state() will return %NULL\nand you must not call g_action_group_change_action_state().\n\nThe state type of a particular action will never change but it is\npossible for an action to be removed and for a new action to be added\nwith the same name but a different state type.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none', nullable: '1' },
                    doc: [
                        {
                            _: 'the state type, if the action is stateful',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to query',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'has_action',
                'c:identifier': 'g_action_group_has_action',
                version: '2.28',
            },
            doc: [
                {
                    _: 'Checks if the named action exists within @action_group.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'whether the named action exists',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action to check for',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'list_actions',
                'c:identifier': 'g_action_group_list_actions',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Lists the actions contained within @action_group.\n\nThe caller is responsible for freeing the list with g_strfreev() when\nit is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'a %NULL-terminated array of the names of the\nactions in the groupb',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    array: [
                        {
                            $: { 'c:type': 'gchar**' },
                            type: [{ $: { name: 'utf8' } }],
                        },
                    ],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'query_action',
                'c:identifier': 'g_action_group_query_action',
                version: '2.32',
            },
            doc: [
                {
                    _:
                        "Queries all aspects of the named action within an @action_group.\n\nThis function acquires the information available from\ng_action_group_has_action(), g_action_group_get_action_enabled(),\ng_action_group_get_action_parameter_type(),\ng_action_group_get_action_state_type(),\ng_action_group_get_action_state_hint() and\ng_action_group_get_action_state() with a single function call.\n\nThis provides two main benefits.\n\nThe first is the improvement in efficiency that comes with not having\nto perform repeated lookups of the action in order to discover\ndifferent things about it.  The second is that implementing\n#GActionGroup can now be done by only overriding this one virtual\nfunction.\n\nThe interface provides a default implementation of this function that\ncalls the individual functions, as required, to fetch the\ninformation.  The interface also provides default implementations of\nthose functions that call this function.  All implementations,\ntherefore, must override either this function or all of the others.\n\nIf the action exists, %TRUE is returned and any of the requested\nfields (as indicated by having a non-%NULL reference passed in) are\nfilled.  If the action doesn't exist, %FALSE is returned and the\nfields may or may not have been modified.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: '%TRUE if the action exists, else %FALSE',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action_group', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GActionGroup', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'ActionGroup', 'c:type': 'GActionGroup*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of an action in the group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: {
                                name: 'enabled',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                            },
                            doc: [
                                {
                                    _: 'if the action is presently enabled',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gboolean', 'c:type': 'gboolean*' } }],
                        },
                        {
                            $: {
                                name: 'parameter_type',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the parameter type, or %NULL if none needed',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType**' } }],
                        },
                        {
                            $: {
                                name: 'state_type',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the state type, or %NULL if stateless',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType**' } }],
                        },
                        {
                            $: {
                                name: 'state_hint',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the state hint, or %NULL if none',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant**' } }],
                        },
                        {
                            $: {
                                name: 'state',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                                optional: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the current state, or %NULL if stateless',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant**' } }],
                        },
                    ],
                },
            ],
        },
    ],
    'glib:signal': [
        {
            $: {
                name: 'action-added',
                when: 'last',
                detailed: '1',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Signals that a new action was just added to the group.\nThis signal is emitted after the action has been added\nand is now visible.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action in @action_group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action-enabled-changed',
                when: 'last',
                detailed: '1',
                version: '2.28',
            },
            doc: [
                {
                    _: 'Signals that the enabled status of the named action has changed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action in @action_group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'gchar*' } }],
                        },
                        {
                            $: { name: 'enabled', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'whether the action is enabled or not',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action-removed',
                when: 'last',
                detailed: '1',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Signals that an action is just about to be removed from the group.\nThis signal is emitted before the action is removed, so the action\nis still visible and can be queried from the signal handler.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action in @action_group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'action-state-changed',
                when: 'last',
                detailed: '1',
                version: '2.28',
            },
            doc: [
                {
                    _: 'Signals that the state of the named action has changed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
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
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the name of the action in @action_group',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'gchar*' } }],
                        },
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'the new value of the state',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant' } }],
                        },
                    ],
                },
            ],
        },
    ],
}

export const interfaceAction: GirClass = {
    _fullSymName: 'Action',
    $: {
        name: 'Action',
        'c:symbol-prefix': 'action',
        'c:type': 'GAction',
        'glib:type-name': 'GAction',
        'glib:get-type': 'g_action_get_type',
        'glib:type-struct': 'ActionInterface',
    },
    doc: [
        {
            _:
                "#GAction represents a single named action.\n\nThe main interface to an action is that it can be activated with\ng_action_activate().  This results in the 'activate' signal being\nemitted.  An activation has a #GVariant parameter (which may be\n%NULL).  The correct type for the parameter is determined by a static\nparameter type (which is given at construction time).\n\nAn action may optionally have a state, in which case the state may be\nset with g_action_change_state().  This call takes a #GVariant.  The\ncorrect type for the state is determined by a static state type\n(which is given at construction time).\n\nThe state may have a hint associated with it, specifying its valid\nrange.\n\n#GAction is merely the interface to the concept of an action, as\ndescribed above.  Various implementations of actions exist, including\n#GSimpleAction.\n\nIn all cases, the implementing class is responsible for storing the\nname of the action, the parameter type, the enabled state, the\noptional state type and the state and emitting the appropriate\nsignals when these change.  The implementor responsible for filtering\ncalls to g_action_activate() and g_action_change_state() for type\nsafety and for the state being enabled.\n\nProbably the only useful thing to do with a #GAction is to put it\ninside of a #GSimpleActionGroup.",
            $: { 'xml:space': 'preserve' },
        },
    ],
    function: [
        {
            $: {
                name: 'name_is_valid',
                'c:identifier': 'g_action_name_is_valid',
                version: '2.38',
            },
            doc: [
                {
                    _:
                        "Checks if @action_name is valid.\n\n@action_name is valid if it consists only of alphanumeric characters,\nplus '-' and '.'.  The empty string is not a valid action name.\n\nIt is an error to call this function with a non-utf8 @action_name.\n@action_name must not be %NULL.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: '%TRUE if @action_name is valid',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'an potential action name',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'parse_detailed_name',
                'c:identifier': 'g_action_parse_detailed_name',
                version: '2.38',
                throws: '1',
            },
            doc: [
                {
                    _:
                        "Parses a detailed action name into its separate name and target\ncomponents.\n\nDetailed action names can have three formats.\n\nThe first format is used to represent an action name with no target\nvalue and consists of just an action name containing no whitespace\nnor the characters ':', '(' or ')'.  For example: \"app.action\".\n\nThe second format is used to represent an action with a target value\nthat is a non-empty string consisting only of alphanumerics, plus '-'\nand '.'.  In that case, the action name and target value are\nseparated by a double colon (\"::\").  For example:\n\"app.action::target\".\n\nThe third format is used to represent an action with any type of\ntarget value, including strings.  The target value follows the action\nname, surrounded in parens.  For example: \"app.action(42)\".  The\ntarget value is parsed using g_variant_parse().  If a tuple-typed\nvalue is desired, it must be specified in the same way, resulting in\ntwo sets of parens, for example: \"app.action((1,2,3))\".  A string\ntarget can be specified this way as well: \"app.action('target')\".\nFor strings, this third format must be used if * target value is\nempty or contains characters other than alphanumerics, '-' and '.'.",
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: '%TRUE if successful, else %FALSE with @error set',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'detailed_name', 'transfer-ownership': 'none' },
                            doc: [
                                {
                                    _: 'a detailed action name',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: {
                                name: 'action_name',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                            },
                            doc: [{ _: 'the action name', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'utf8', 'c:type': 'gchar**' } }],
                        },
                        {
                            $: {
                                name: 'target_value',
                                direction: 'out',
                                'caller-allocates': '0',
                                'transfer-ownership': 'full',
                            },
                            doc: [
                                {
                                    _: 'the target value, or %NULL for no target',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant**' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'print_detailed_name',
                'c:identifier': 'g_action_print_detailed_name',
                version: '2.38',
            },
            doc: [
                {
                    _:
                        'Formats a detailed action name from @action_name and @target_value.\n\nIt is an error to call this function with an invalid action name.\n\nThis function is the opposite of\ng_action_parse_detailed_action_name().  It will produce a string that\ncan be parsed back to the @action_name and @target_value by that\nfunction.\n\nSee that function for the types of strings that will be printed by\nthis function.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'a detailed format string',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'utf8', 'c:type': 'gchar*' } }],
                },
            ],
            parameters: [
                {
                    parameter: [
                        {
                            $: { name: 'action_name', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a valid action name', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                        },
                        {
                            $: {
                                name: 'target_value',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'a #GVariant target value, or %NULL',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
    ],
    'virtual-method': [
        {
            $: { name: 'activate', invoker: 'activate', version: '2.28' },
            doc: [
                {
                    _:
                        'Activates the action.\n\n@parameter must be the correct type of parameter for the action (ie:\nthe parameter type given at construction time).  If the parameter\ntype was %NULL then @parameter must also be %NULL.\n\nIf the @parameter GVariant is floating, it is consumed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: {
                                name: 'parameter',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the parameter to the activation',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'change_state',
                invoker: 'change_state',
                version: '2.30',
            },
            doc: [
                {
                    _:
                        'Request for the state of @action to be changed to @value.\n\nThe action must be stateful and @value must be of the correct type.\nSee g_action_get_state_type().\n\nThis call merely requests a change.  The action may refuse to change\nits state or may change its state to something other than @value.\nSee g_action_get_state_hint().\n\nIf the @value GVariant is floating, it is consumed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the new state', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'get_enabled', invoker: 'get_enabled', version: '2.28' },
            doc: [
                {
                    _:
                        'Checks if @action is currently enabled.\n\nAn action must be enabled in order to be activated or in order to\nhave its state changed from outside callers.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'whether the action is enabled',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'get_name', invoker: 'get_name', version: '2.28' },
            doc: [
                {
                    _: 'Queries the name of @action.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the name of the action',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_parameter_type',
                invoker: 'get_parameter_type',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the type of the parameter that must be given when activating\n@action.\n\nWhen activating the action using g_action_activate(), the #GVariant\ngiven to that function must be of the type returned by this function.\n\nIn the case that this function returns %NULL, you must not give any\n#GVariant, but %NULL instead.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [{ _: 'the parameter type', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: { name: 'get_state', invoker: 'get_state', version: '2.28' },
            doc: [
                {
                    _:
                        'Queries the current state of @action.\n\nIf the action is not stateful then %NULL will be returned.  If the\naction is stateful then the type of the return value is the type\ngiven by g_action_get_state_type().\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'the current state of the action',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_state_hint',
                invoker: 'get_state_hint',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Requests a hint about the valid range of values for the state of\n@action.\n\nIf %NULL is returned it either means that the action is not stateful\nor that there is no hint about the valid range of values for the\nstate of the action.\n\nIf a #GVariant array is returned then each item in the array is a\npossible value for the state.  If a #GVariant pair (ie: two-tuple) is\nreturned then the tuple specifies the inclusive lower and upper bound\nof valid values for the state.\n\nIn any case, the information is merely a hint.  It may be possible to\nhave a state value outside of the hinted range and setting a value\nwithin the range may fail.\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full', nullable: '1' },
                    doc: [{ _: 'the state range hint', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_state_type',
                invoker: 'get_state_type',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the type of the state of @action.\n\nIf the action is stateful (e.g. created with\ng_simple_action_new_stateful()) then this function returns the\n#GVariantType of the state.  This is the type of the initial value\ngiven as the state. All calls to g_action_change_state() must give a\n#GVariant of this type and g_action_get_state() will return a\n#GVariant of the same type.\n\nIf the action is not stateful (e.g. created with g_simple_action_new())\nthen this function will return %NULL. In that case, g_action_get_state()\nwill return %NULL and you must not call g_action_change_state().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the state type, if the action is stateful',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
    ],
    method: [
        {
            $: {
                name: 'activate',
                'c:identifier': 'g_action_activate',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Activates the action.\n\n@parameter must be the correct type of parameter for the action (ie:\nthe parameter type given at construction time).  If the parameter\ntype was %NULL then @parameter must also be %NULL.\n\nIf the @parameter GVariant is floating, it is consumed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: {
                                name: 'parameter',
                                'transfer-ownership': 'none',
                                nullable: '1',
                                'allow-none': '1',
                            },
                            doc: [
                                {
                                    _: 'the parameter to the activation',
                                    $: { 'xml:space': 'preserve' },
                                },
                            ],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'change_state',
                'c:identifier': 'g_action_change_state',
                version: '2.30',
            },
            doc: [
                {
                    _:
                        'Request for the state of @action to be changed to @value.\n\nThe action must be stateful and @value must be of the correct type.\nSee g_action_get_state_type().\n\nThis call merely requests a change.  The action may refuse to change\nits state or may change its state to something other than @value.\nSee g_action_get_state_hint().\n\nIf the @value GVariant is floating, it is consumed.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    type: [{ $: { name: 'none', 'c:type': 'void' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                    parameter: [
                        {
                            $: { name: 'value', 'transfer-ownership': 'none' },
                            doc: [{ _: 'the new state', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_enabled',
                'c:identifier': 'g_action_get_enabled',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Checks if @action is currently enabled.\n\nAn action must be enabled in order to be activated or in order to\nhave its state changed from outside callers.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'whether the action is enabled',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_name',
                'c:identifier': 'g_action_get_name',
                version: '2.28',
            },
            doc: [
                {
                    _: 'Queries the name of @action.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the name of the action',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_parameter_type',
                'c:identifier': 'g_action_get_parameter_type',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the type of the parameter that must be given when activating\n@action.\n\nWhen activating the action using g_action_activate(), the #GVariant\ngiven to that function must be of the type returned by this function.\n\nIn the case that this function returns %NULL, you must not give any\n#GVariant, but %NULL instead.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [{ _: 'the parameter type', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_state',
                'c:identifier': 'g_action_get_state',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the current state of @action.\n\nIf the action is not stateful then %NULL will be returned.  If the\naction is stateful then the type of the return value is the type\ngiven by g_action_get_state_type().\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full' },
                    doc: [
                        {
                            _: 'the current state of the action',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_state_hint',
                'c:identifier': 'g_action_get_state_hint',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Requests a hint about the valid range of values for the state of\n@action.\n\nIf %NULL is returned it either means that the action is not stateful\nor that there is no hint about the valid range of values for the\nstate of the action.\n\nIf a #GVariant array is returned then each item in the array is a\npossible value for the state.  If a #GVariant pair (ie: two-tuple) is\nreturned then the tuple specifies the inclusive lower and upper bound\nof valid values for the state.\n\nIn any case, the information is merely a hint.  It may be possible to\nhave a state value outside of the hinted range and setting a value\nwithin the range may fail.\n\nThe return value (if non-%NULL) should be freed with\ng_variant_unref() when it is no longer required.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'full', nullable: '1' },
                    doc: [{ _: 'the state range hint', $: { 'xml:space': 'preserve' } }],
                    type: [{ $: { name: 'GLib.Variant', 'c:type': 'GVariant*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
        {
            $: {
                name: 'get_state_type',
                'c:identifier': 'g_action_get_state_type',
                version: '2.28',
            },
            doc: [
                {
                    _:
                        'Queries the type of the state of @action.\n\nIf the action is stateful (e.g. created with\ng_simple_action_new_stateful()) then this function returns the\n#GVariantType of the state.  This is the type of the initial value\ngiven as the state. All calls to g_action_change_state() must give a\n#GVariant of this type and g_action_get_state() will return a\n#GVariant of the same type.\n\nIf the action is not stateful (e.g. created with g_simple_action_new())\nthen this function will return %NULL. In that case, g_action_get_state()\nwill return %NULL and you must not call g_action_change_state().',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            'return-value': [
                {
                    $: { 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the state type, if the action is stateful',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.VariantType', 'c:type': 'const GVariantType*' } }],
                },
            ],
            parameters: [
                {
                    'instance-parameter': [
                        {
                            $: { name: 'action', 'transfer-ownership': 'none' },
                            doc: [{ _: 'a #GAction', $: { 'xml:space': 'preserve' } }],
                            type: [{ $: { name: 'Action', 'c:type': 'GAction*' } }],
                        },
                    ],
                },
            ],
        },
    ],
    property: [
        {
            $: {
                name: 'enabled',
                version: '2.28',
                'transfer-ownership': 'none',
            },
            doc: [
                {
                    _:
                        'If @action is currently enabled.\n\nIf the action is disabled then calls to g_action_activate() and\ng_action_change_state() have no effect.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            type: [{ $: { name: 'gboolean', 'c:type': 'gboolean' } }],
        },
        {
            $: { name: 'name', version: '2.28', 'transfer-ownership': 'none' },
            doc: [
                {
                    _:
                        'The name of the action.  This is mostly meaningful for identifying\nthe action once it has been added to a #GActionGroup. It is immutable.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            type: [{ $: { name: 'utf8', 'c:type': 'gchar*' } }],
        },
        {
            $: {
                name: 'parameter-type',
                version: '2.28',
                'transfer-ownership': 'none',
            },
            doc: [
                {
                    _:
                        'The type of the parameter that must be given when activating the\naction. This is immutable, and may be %NULL if no parameter is needed when\nactivating the action.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            type: [{ $: { name: 'GLib.VariantType' } }],
        },
        {
            $: { name: 'state', version: '2.28', 'transfer-ownership': 'none' },
            doc: [
                {
                    _: 'The state of the action, or %NULL if the action is stateless.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            type: [{ $: { name: 'GLib.Variant' } }],
        },
        {
            $: {
                name: 'state-type',
                version: '2.28',
                'transfer-ownership': 'none',
            },
            doc: [
                {
                    _:
                        'The #GVariantType of the state that the action has, or %NULL if the\naction is stateless. This is immutable.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            type: [{ $: { name: 'GLib.VariantType' } }],
        },
    ],
}

export const funcBusOwnName: GirFunction = {
    $: {
        name: 'bus_own_name',
        'c:identifier': 'g_bus_own_name',
        'shadowed-by': 'bus_own_name_with_closures',
        version: '2.26',
        introspectable: '1',
    },
    doc: [
        {
            _:
                "Starts acquiring @name on the bus specified by @bus_type and calls\n@name_acquired_handler and @name_lost_handler when the name is\nacquired respectively lost. Callbacks will be invoked in the\n[thread-default main context][g-main-context-push-thread-default]\nof the thread you are calling this function from.\n\nYou are guaranteed that one of the @name_acquired_handler and @name_lost_handler\ncallbacks will be invoked after calling this function - there are three\npossible cases:\n\n- @name_lost_handler with a %NULL connection (if a connection to the bus\n  can't be made).\n\n- @bus_acquired_handler then @name_lost_handler (if the name can't be\n  obtained)\n\n- @bus_acquired_handler then @name_acquired_handler (if the name was\n  obtained).\n\nWhen you are done owning the name, just call g_bus_unown_name()\nwith the owner id this function returns.\n\nIf the name is acquired or lost (for example another application\ncould acquire the name if you allow replacement or the application\ncurrently owning the name exits), the handlers are also invoked.\nIf the #GDBusConnection that is used for attempting to own the name\ncloses, then @name_lost_handler is invoked since it is no longer\npossible for other processes to access the process.\n\nYou cannot use g_bus_own_name() several times for the same name (unless\ninterleaved with calls to g_bus_unown_name()) - only the first call\nwill work.\n\nAnother guarantee is that invocations of @name_acquired_handler\nand @name_lost_handler are guaranteed to alternate; that\nis, if @name_acquired_handler is invoked then you are\nguaranteed that the next time one of the handlers is invoked, it\nwill be @name_lost_handler. The reverse is also true.\n\nIf you plan on exporting objects (using e.g.\ng_dbus_connection_register_object()), note that it is generally too late\nto export the objects in @name_acquired_handler. Instead, you can do this\nin @bus_acquired_handler since you are guaranteed that this will run\nbefore @name is requested from the bus.\n\nThis behavior makes it very simple to write applications that wants\nto [own names][gdbus-owning-names] and export objects.\nSimply register objects to be exported in @bus_acquired_handler and\nunregister the objects (if any) in @name_lost_handler.",
            $: { 'xml:space': 'preserve' },
        },
    ],
    'return-value': [
        {
            $: { 'transfer-ownership': 'none' },
            doc: [
                {
                    _: 'an identifier (never 0) that an be used with\n    g_bus_unown_name() to stop owning the name.',
                    $: { 'xml:space': 'preserve' },
                },
            ],
            type: [{ $: { name: 'guint', 'c:type': 'guint' } }],
        },
    ],
    parameters: [
        {
            parameter: [
                {
                    $: { name: 'bus_type', 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the type of bus to own a name on',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'BusType', 'c:type': 'GBusType' } }],
                },
                {
                    $: { name: 'name', 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'the well-known name to own',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'utf8', 'c:type': 'const gchar*' } }],
                },
                {
                    $: { name: 'flags', 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'a set of flags from the #GBusNameOwnerFlags enumeration',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'BusNameOwnerFlags', 'c:type': 'GBusNameOwnerFlags' } }],
                },
                {
                    $: {
                        name: 'bus_acquired_handler',
                        'transfer-ownership': 'none',
                        nullable: '1',
                        'allow-none': '1',
                    },
                    doc: [
                        {
                            _: 'handler to invoke when connected to the bus of type @bus_type or %NULL',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [
                        {
                            $: {
                                name: 'BusAcquiredCallback',
                                'c:type': 'GBusAcquiredCallback',
                            },
                        },
                    ],
                },
                {
                    $: {
                        name: 'name_acquired_handler',
                        'transfer-ownership': 'none',
                        nullable: '1',
                        'allow-none': '1',
                    },
                    doc: [
                        {
                            _: 'handler to invoke when @name is acquired or %NULL',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [
                        {
                            $: {
                                name: 'BusNameAcquiredCallback',
                                'c:type': 'GBusNameAcquiredCallback',
                            },
                        },
                    ],
                },
                {
                    $: {
                        name: 'name_lost_handler',
                        'transfer-ownership': 'none',
                        nullable: '1',
                        'allow-none': '1',
                        scope: 'notified',
                        closure: '6',
                        destroy: '7',
                    },
                    doc: [
                        {
                            _: 'handler to invoke when @name is lost or %NULL',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [
                        {
                            $: {
                                name: 'BusNameLostCallback',
                                'c:type': 'GBusNameLostCallback',
                            },
                        },
                    ],
                },
                {
                    $: { name: 'user_data', 'transfer-ownership': 'none' },
                    doc: [
                        {
                            _: 'user data to pass to handlers',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'gpointer', 'c:type': 'gpointer' } }],
                },
                {
                    $: {
                        name: 'user_data_free_func',
                        'transfer-ownership': 'none',
                        nullable: '1',
                        'allow-none': '1',
                        scope: 'async',
                    },
                    doc: [
                        {
                            _: 'function for freeing @user_data or %NULL',
                            $: { 'xml:space': 'preserve' },
                        },
                    ],
                    type: [{ $: { name: 'GLib.DestroyNotify', 'c:type': 'GDestroyNotify' } }],
                },
            ],
        },
    ],
}
