// This example is based on the GJS GVariant guide: https://gjs.guide/guides/glib/gvariant.html#basic-usage
import GLib from 'gi://GLib?version=2.0';
import Gio from 'gi://Gio?version=2.0';

/**
 * Example demonstrating different ways to use GLib.Variant
 * Based on the GJS GVariant guide: https://gjs.guide/guides/glib/gvariant.html
 */

// DBus interface definition for testing signal emission
const ifaceXml = `
<node>
  <interface name="org.example.Test">
    <signal name="picked">
      <arg name="wmClass" type="s"/>
    </signal>
  </interface>
</node>`;

/**
 * Demonstrates basic variant usage with simple types
 */
function testBasicVariants() {
    print('\n=== Basic Variant Tests ===');

    // Simple string variant
    const basic = new GLib.Variant('s', 'hello');
    print('Basic string variant:', basic.print(true));
    
    // Tuple combining string and integer
    const tuple = new GLib.Variant('(si)', ['hello', 42]);
    print('Tuple variant:', tuple.print(true));
    
    // Array of strings
    const array = new GLib.Variant('as', ['one', 'two', 'three']);
    print('String array variant:', array.print(true));

    // Compare with JSON for reference
    const json = {
        name: "Mario",
        lives: 3,
        active: true,
    };
    print('\nJSON equivalent:', JSON.stringify(json, null, 2));
}

/**
 * Demonstrates DBus-related variant usage
 */
function testDBusVariants() {
    print('\n=== DBus Variant Tests ===');

    // Create and export DBus object
    const dbus = Gio.DBusExportedObject.wrapJSObject(ifaceXml, {});
    dbus.export(Gio.DBus.session, '/org/example/Test');

    // Emit signal with string variant
    const wmClass = 'test-window';
    const variant = new GLib.Variant('(s)', [wmClass]);
    print('DBus signal variant:', variant.print(true));
    dbus.emit_signal('picked', variant);

    // Example of a complex DBus method call parameters
    const methodParams = new GLib.Variant('(ssa{sv})', [
        'some-extension@someone.github.io',
        '',
        {},
    ]);
    print('DBus method parameters:', methodParams.print(true));
}

/**
 * Demonstrates complex variant structures and nested types
 */
function testComplexVariants() {
    print('\n=== Complex Variant Tests ===');

    // Dictionary with variant values
    const dict = new GLib.Variant('a{sv}', {
        key1: new GLib.Variant('s', 'value1'),
        key2: new GLib.Variant('i', 123),
        key3: new GLib.Variant('as', ['a', 'b', 'c'])
    });
    print('Dictionary variant:', dict.print(true));

    // Nested structure combining multiple types
    const nested = new GLib.Variant('(sa{sv})', [
        'test',
        {
            bool: new GLib.Variant('b', true),
            number: new GLib.Variant('d', 3.14),
            array: new GLib.Variant('ai', [1, 2, 3])
        }
    ]);
    print('Nested variant:', nested.print(true));
}

/**
 * Demonstrates variant unpacking methods
 */
function testVariantUnpacking() {
    print('\n=== Variant Unpacking Tests ===');

    // Simple unpack
    const boolVariant = new GLib.Variant('b', true);
    const boolValue = boolVariant.unpack<boolean>();
    print('Unpacked boolean:', boolValue);

    // Deep unpack for arrays
    const arrayVariant = new GLib.Variant('as', ['one', 'two']);
    const arrayValue = arrayVariant.deepUnpack<string[]>();
    print('Deep unpacked array:', JSON.stringify(arrayValue));

    // Recursive unpack for complex structures
    const complexVariant = new GLib.Variant('a{sv}', {
        key1: new GLib.Variant('s', 'string'),
        key2: new GLib.Variant('b', true)
    });
    const complexValue = complexVariant.recursiveUnpack();
    print('Recursively unpacked structure:', JSON.stringify(complexValue, null, 2));
}

// Main execution
print('Starting GLib.Variant tests...');

// Run all test categories
testBasicVariants();
testDBusVariants();
testComplexVariants();
testVariantUnpacking();

// Create main loop and exit timer
const loop = GLib.MainLoop.new(null, false);
GLib.timeout_add(GLib.PRIORITY_DEFAULT, 2000, () => {
    print('\nTests completed, exiting...');
    loop.quit();
    return GLib.SOURCE_REMOVE;
});

// Run main loop
loop.run();