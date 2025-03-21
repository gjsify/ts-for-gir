import GObject from 'gi://GObject';
import System from 'system';

console.log('GJS Version:', System.version);

if(System.version < 18200) {
    console.log('GJS version 1.82.0 or higher is required for nullable nick and blurb in GObject.ParamSpec, skipping example');
    System.exit(0);
}

// Example class demonstrating different ParamSpec usages
class ExampleObject extends GObject.Object {

    static {
        GObject.registerClass({
            GTypeName: 'ExampleObject',
            Properties: {
                // Property with all fields
                'full-property': GObject.ParamSpec.string(
                    'full-property',         // name (required)
                    'Full Property',         // nick (optional)
                    'A complete property',   // blurb (optional)
                    GObject.ParamFlags.READABLE | GObject.ParamFlags.WRITABLE,
                    'default value'
                ),

                // Property with null nick and blurb
                'minimal-property': GObject.ParamSpec.string(
                    'minimal-property',
                    null,                    // nick can be null
                    null,                    // blurb can be null
                    GObject.ParamFlags.READABLE | GObject.ParamFlags.WRITABLE,
                    ''
                ),

                // Number property with null documentation
                'count': GObject.ParamSpec.int(
                    'count',
                    null,                    // nick can be null
                    null,                    // blurb can be null
                    GObject.ParamFlags.READABLE | GObject.ParamFlags.WRITABLE,
                    0,                       // minimum
                    100,                     // maximum
                    0                        // default value
                ),

                // Boolean property with partial documentation
                'active': GObject.ParamSpec.boolean(
                    'active',
                    'Active',                // providing nick
                    null,                    // but blurb can still be null
                    GObject.ParamFlags.READABLE | GObject.ParamFlags.WRITABLE,
                    false                    // default value BEFORE flags
                )
            }
        }, this);
    }

    // Property values
    declare protected _fullProperty: string;
    declare protected _minimalProperty: string;
    declare protected _count: number;
    declare protected _active: boolean;

    // Property getters/setters
    get full_property(): string {
        return this._fullProperty;
    }

    set full_property(value: string) {
        this._fullProperty = value;
    }

    get minimal_property(): string {
        return this._minimalProperty;
    }

    set minimal_property(value: string) {
        this._minimalProperty = value;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }
}

// Create and test the object
const obj = new ExampleObject();

// Test property access and type safety
obj.full_property = 'New Value';
obj.minimal_property = 'Test';
obj.count = 42;
obj.active = true;

// Print current values
console.log('Full Property:', obj.full_property);
console.log('Minimal Property:', obj.minimal_property);
console.log('Count:', obj.count);
console.log('Active:', obj.active);

// Get property info using GObject introspection
const properties = ExampleObject.list_properties();

console.log('\nProperty Information:');
for (const pspec of properties) {
    console.log(`\nProperty: ${pspec.get_name()}`);
    console.log(`Nick: ${pspec.get_nick() || '(null)'}`);
    console.log(`Blurb: ${pspec.get_blurb() || '(null)'}`);
}

// Demonstrate GObject.Object.get_property and GObject.Object.set_property methods
console.log('\nDemonstrating GObject.Value with get_property and set_property:');

// Example 1: Get/Set string property
console.log('\nExample 1: String property');
// Create a GObject.Value for string
const stringValue = new GObject.Value();
stringValue.init(GObject.TYPE_STRING);

// Get the property value using get_property
obj.get_property('full-property', stringValue);
console.log('Get value from GObject.Value:', stringValue.get_string());

// Modify the value and set it using set_property
stringValue.set_string('Modified via GObject.Value');
obj.set_property('full-property', stringValue);
console.log('Property after set_property:', obj.full_property);

// Example 2: Get/Set boolean property
console.log('\nExample 2: Boolean property');
// Create a GObject.Value for boolean
const boolValue = new GObject.Value();
boolValue.init(GObject.TYPE_BOOLEAN);

// Get the property value
obj.get_property('active', boolValue);
console.log('Get value from GObject.Value:', boolValue.get_boolean());

// Modify and set
boolValue.set_boolean(false);
obj.set_property('active', boolValue);
console.log('Property after set_property:', obj.active);

// Example 3: Get/Set integer property
console.log('\nExample 3: Integer property');
// Create a GObject.Value for integer
const intValue = new GObject.Value();
intValue.init(GObject.TYPE_INT);

// Get the property value
obj.get_property('count', intValue);
console.log('Get value from GObject.Value:', intValue.get_int());

// Modify and set
intValue.set_int(99);
obj.set_property('count', intValue);
console.log('Property after set_property:', obj.count);

// Clean up the GObject.Value instances
stringValue.unset();
boolValue.unset();
intValue.unset(); 