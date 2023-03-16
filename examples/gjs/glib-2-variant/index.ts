// This example is based on the GJS GVariant guide: https://gjs.guide/guides/glib/gvariant.html#basic-usage
import GLib from 'gi://GLib?version=2.0';
import Gio from 'gi://Gio?version=2.0';

// Serializing JSON to a string
// Output: {"name":"Mario","lives":3,"active":true}
const json = {
    name: "Mario",
    lives: 3,
    active: true,
};

const jsonString = JSON.stringify(json, null, 2);
print("jsonString", jsonString);

// Serializing GVariant to a string
// Output: {'name': <'Mario'>, 'lives': <uint32 3>, 'active': <true>}
const variant = new GLib.Variant('a{sv}', {
    name: GLib.Variant.new_string('Mario'),
    lives: GLib.Variant.new_uint32(3),
    active: GLib.Variant.new_boolean(true),
});

let variantString = variant.print(true);

print("variant", variant);
print("variantString", variantString);

// # BASIC USAGE

// Simple types work pretty much like you expect
let variantBool = GLib.Variant.new_boolean(true);

if (variantBool.get_type_string() === 'b')
    print('Variant is a boolean!');

if (variantBool.get_boolean() === true)
    print('Value is true!');
    
    
// NOTE: As of GJS v1.68 all numeric types are still `Number` values, so some
// 64-bit values may not be fully supported. `BigInt` support to come.
const variantInt64 = GLib.Variant.new_int64(-42);

if (variantInt64.get_type_string() === 'x')
    print('Variant is an int64!');

if (variantInt64.get_int64() === -42)
    print('Value is -42!');
    

// NOTE: GLib.Variant.prototype.get_string() returns the value and the length
const variantString1 = GLib.Variant.new_string('a string');
const [strValue, strLength] = variantString1.get_string();

if (variantString1.get_type_string() === 's')
    print('Variant is a string!');

if (variantString1.get_string()[0] === 'a string')
    print('Success!');

// List of strings are also straight forward
let stringList = ['one', 'two'];
let variantStrv = GLib.Variant.new_strv(stringList);

if (variantStrv.get_type_string() === 'as')
    print('Variant is an array of strings!');

if (variantStrv.get_strv().every(value => stringList.includes(value)))
    print('Success!');

// # PACKING VARIANTS

// This example is equivalent to the one above; both create a GVariant type `as`
stringList = ['one', 'two'];
variantStrv = new GLib.Variant('as', stringList);

if (variantStrv.get_type_string() === 'as')
    print('Variant is an array of strings!');

if (variantStrv.get_strv().every(value => stringList.includes(value)))
    print('Success!');

// Below is an example of a libnotify notification, ready to be sent over DBus
const notification = new GLib.Variant('(susssasa{sv}i)', [
    'gjs.guide Tutorial',
    0,
    'dialog-information-symbolic',
    'Notification Title',
    'Notification Body',
    [],
    {},
    -1
]);

print("notification", notification);

// Here is another complex variant, showing how child values marked `v` have to
// be packed like other variants.
const variantTuple = new GLib.Variant('(siaua{sv})', [
    'string',                               // a string
    -1,                                     // a signed integer
    [1, 2, 3],                              // an array of unsigned integers
    {                                       // a dictionary of string => variant
      'code-name': GLib.Variant.new_string('007'),
      'licensed-to-kill': GLib.Variant.new_boolean(true)
    }
]);

print("variantTuple", variantTuple);

// Dictionaries with shallow, uniform value types can be packed in a single step
let shallowDict = new GLib.Variant('a{ss}', {
    'key1': 'value1',
    'key2': 'value2'
});

print("shallowDict", shallowDict);

// Dictionaries with a varying value types use `v` and must be packed
let deepDict = new GLib.Variant('a{sv}', {
    'key1': GLib.Variant.new_string('string'),
    'key2': GLib.Variant.new_boolean(true)
});

print("deepDict", deepDict);

// Expected output here is: "{'key1': <'string'>, 'key2': <true>}"
print(deepDict.print(true));

// Expected output here is: "a{sv}"
print(deepDict.get_type_string());

// # UNPACKING VARIANTS

// ## unpack()

// Expected output here is: true
variantBool = GLib.Variant.new_boolean(true);
const bool = variantBool.unpack<boolean>()
print("bool", bool);


// Note that unpack() is discarding the string length for us so all we get is
// the value. Expected output here is: "a string"
const variantString2 = GLib.Variant.new_string('a string');
const str = variantString2.unpack<string>();
print("str", `"${str}"`);


// In this case, unpack() is only unpacking the array, not the strings in it.
// Expected output here is:
//   [object variant of type "s"],[object variant of type "s"]
variantStrv = GLib.Variant.new_strv(['one', 'two']);
const unpackedStrv = variantStrv.unpack<GLib.Variant>()
print("unpackedStrv", unpackedStrv);

// ## deepUnpack()

// Expected output here is:
//   "one","two"
variantStrv = GLib.Variant.new_strv(['one', 'two']);
const deepUnpackedStrv = variantStrv.deepUnpack<string[]>()
print("deepUnpackedStrv", `"${deepUnpackedStrv}"`, `"${JSON.stringify(deepUnpackedStrv, null, 2)}" (JSON.stringify)`);


// Expected result here is:
//   {
//     "key1": "value1",
//     "key2": "value2"
//   }
shallowDict = new GLib.Variant('a{ss}', {
    'key1': 'value1',
    'key2': 'value2'
});

const shallowDictUnpacked = shallowDict.deepUnpack<{[key: string]: string}>();

print("shallowDictUnpacked", JSON.stringify(shallowDictUnpacked, null, 2));

// Expected result here is:
//   {
//     "key1": [object variant of type "s"],
//     "key2": [object variant of type "b"]
//   }
deepDict = new GLib.Variant('a{sv}', {
    'key1': GLib.Variant.new_string('string'),
    'key2': GLib.Variant.new_boolean(true)
});

const deepDictUnpacked = deepDict.deepUnpack<{[key: string]: GLib.Variant}>;

print("deepDictUnpacked", JSON.stringify(deepDictUnpacked, null, 2));

// ## recursiveUnpack()

// Expected result here is:
//   {
//     "key1": "string",
//     "key2": true
//   }
deepDict = new GLib.Variant('a{sv}', {
    'key1': GLib.Variant.new_string('string'),
    'key2': GLib.Variant.new_boolean(true)
});

const deepDictFull = deepDict.recursiveUnpack<{key1: string; key2: boolean}>();

print("deepDictFull", JSON.stringify(deepDictFull, null, 2));

// # DBus and GVariant

// This method takes three arguments. Remember that JavaScript has no tuple
// type so we're using an Array instead.
const parameters = new GLib.Variant('(ssa{sv})', [
    'some-extension@someone.github.io',
    '',
    {},
]);

// This method has no return value, so the reply variant will be an empty tuple.
// You can also use this pattern to workaround the lack of `null` type in DBus.
const emptyReply = Gio.DBus.session.call_sync(
    'org.gnome.Shell',
    '/org/gnome/Shell',
    'org.gnome.Shell.Extensions',
    'OpenExtensionPrefs',
    parameters, // The method arguments
    null,       // The expected reply type
    Gio.DBusCallFlags.NONE,
    -1,
    null
);

print("emptyReply", JSON.stringify(emptyReply.recursiveUnpack<[]>(), null, 2));


// This method takes no arguments. For convenience you can pass `null` instead
// of an empty tuple.
//
// This method returns a value. You may pass `GLib.VariantType` if you want the
// return value automatically type-checked.
const reply = Gio.DBus.session.call_sync(
    'org.gnome.Shell',
    '/org/gnome/Shell',
    'org.gnome.Shell.Extensions',
    'ListExtensions',
    null,                                // The method arguments
    new GLib.VariantType('(a{sa{sv}})'), // The expected reply type
    Gio.DBusCallFlags.NONE,
    -1,
    null
);

print("reply", JSON.stringify(reply.recursiveUnpack<any>(), null, 2));

// We know the first and only child of the tuple is the actual return value
const value = reply.get_child_value(0);

// Now we can unpack our value
const extensions = value.recursiveUnpack();

print("extensions", JSON.stringify(extensions, null, 2));

// #GSettings and GVariant
// TODO: https://gjs.guide/guides/glib/gvariant.html#gsettings-and-gvariant