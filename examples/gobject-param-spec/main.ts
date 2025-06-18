import GObject from 'gi://GObject';
import System from 'system';
import Gio from 'gi://Gio';

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
                    GObject.ParamFlags.READWRITE,
                    'default value'
                ),

                // Property with null nick and blurb
                'minimal-property': GObject.ParamSpec.string(
                    'minimal-property',
                    null,                    // nick can be null
                    null,                    // blurb can be null
                    GObject.ParamFlags.READWRITE,
                    ''
                ),

                // Number property with null documentation
                'count': GObject.ParamSpec.int(
                    'count',
                    null,                    // nick can be null
                    null,                    // blurb can be null
                    GObject.ParamFlags.READWRITE,
                    0,                       // minimum
                    100,                     // maximum
                    0                        // default value
                ),

                // Boolean property with partial documentation
                'active': GObject.ParamSpec.boolean(
                    'active',
                    'Active',                // providing nick
                    null,                    // but blurb can still be null
                    GObject.ParamFlags.READWRITE,
                    false                    // default value BEFORE flags
                ),
                
                // Object property demonstrating GObject.ParamSpec.object
                'file': GObject.ParamSpec.object(
                    'file',                  // name (required)
                    'File Object',           // nick (optional)
                    'A file object property', // blurb (optional)
                    GObject.ParamFlags.READWRITE,
                    Gio.File.$gtype          // object type (GType or { $gtype: GType })
                )
            }
        }, this);
    }

    // Property values
    declare protected _fullProperty: string;
    declare protected _minimalProperty: string;
    declare protected _count: number;
    declare protected _active: boolean;
    declare protected _file: Gio.File | null;

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
    
    get file(): Gio.File | null {
        return this._file;
    }
    
    set file(value: Gio.File | null) {
        this._file = value;
    }
}

// Create and test the object
const obj = new ExampleObject();

// Test property access and type safety
obj.full_property = 'New Value';
obj.minimal_property = 'Test';
obj.count = 42;
obj.active = true;

// Set the file property with a Gio.File object
const testFile = Gio.File.new_for_path('/tmp/test.txt');
obj.file = testFile;

// Print current values
console.log('Full Property:', obj.full_property);
console.log('Minimal Property:', obj.minimal_property);
console.log('Count:', obj.count);
console.log('Active:', obj.active);
console.log('File Path:', obj.file?.get_path());

// Get property info using GObject introspection
const properties = ExampleObject.list_properties();

console.log('\nProperty Information:');
for (const pspec of properties) {
    console.log(`\nProperty: ${pspec.get_name()}`);
    console.log(`Nick: ${pspec.get_nick() || '(null)'}`);
    console.log(`Blurb: ${pspec.get_blurb() || '(null)'}`);
    console.log(`Type: ${pspec.value_type.name}`);
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

// Example 4: Get/Set object property
console.log('\nExample 4: Object property');
// Create a GObject.Value for object
const objectValue = new GObject.Value();
objectValue.init(Gio.File.$gtype);

// Get the property value
obj.get_property('file', objectValue);
const fileObj = objectValue.get_object() as Gio.File;
console.log('Get value from GObject.Value:', fileObj?.get_path());

// Create a new file object and set it
const newFile = Gio.File.new_for_path('/tmp/another-test.txt');
objectValue.set_object(newFile);
obj.set_property('file', objectValue);
console.log('Property after set_property:', obj.file?.get_path());

// Clean up the GObject.Value instances
stringValue.unset();
boolValue.unset();
intValue.unset();
objectValue.unset();

// Demonstrate property binding between GObject instances
console.log('\n=== Property Binding Examples ===');

// Create two ExampleObject instances for property binding
const sourceObj = new ExampleObject();
const targetObj = new ExampleObject();

// Set initial values
sourceObj.full_property = 'Source Value';
sourceObj.count = 25;
sourceObj.active = true;

targetObj.full_property = 'Target Value';
targetObj.count = 0;
targetObj.active = false;

console.log('\nBefore binding:');
console.log('Source full_property:', sourceObj.full_property);
console.log('Target full_property:', targetObj.full_property);
console.log('Source count:', sourceObj.count);
console.log('Target count:', targetObj.count);
console.log('Source active:', sourceObj.active);
console.log('Target active:', targetObj.active);

// Example 1: Simple property binding with default transformation
console.log('\nExample 1: Simple property binding');
const binding1 = sourceObj.bind_property_full(
    'full-property',
    targetObj,
    'full-property',
    GObject.BindingFlags.DEFAULT,
    null, // Use default transformation (no custom conversion needed)
    null  // Use default reverse transformation (not used in DEFAULT mode)
);

console.log('✅ Property binding created successfully');

// Test the binding by changing the source value using notify
sourceObj.full_property = 'Updated Source Value';
sourceObj.notify('full-property'); // Trigger property change notification
console.log('Source full_property changed to:', sourceObj.full_property);
console.log('Target full_property now:', targetObj.full_property);

// Example 2: Bidirectional binding
console.log('\nExample 2: Bidirectional property binding');
const binding2 = sourceObj.bind_property_full(
    'count',
    targetObj,
    'count',
    GObject.BindingFlags.BIDIRECTIONAL,
    null, // Use default transformation for source-to-target
    null  // Use default transformation for target-to-source
);

console.log('✅ Bidirectional binding created successfully');

// Test bidirectional binding by changing both source and target
sourceObj.count = 50;
sourceObj.notify('count');
console.log('Source count changed to:', sourceObj.count);
console.log('Target count now:', targetObj.count);

targetObj.count = 75;
targetObj.notify('count');
console.log('Target count changed to:', targetObj.count);
console.log('Source count now:', sourceObj.count);

// Example 3: Sync create binding
console.log('\nExample 3: Binding with immediate synchronization');
const binding3 = sourceObj.bind_property_full(
    'active',
    targetObj,
    'active',
    GObject.BindingFlags.SYNC_CREATE,
    null, // Use default transformation
    null  // Use default reverse transformation
);

console.log('✅ Sync create binding created successfully');
console.log('Target active after sync create binding:', targetObj.active);

// Test the binding by changing the source value
sourceObj.active = false;
sourceObj.notify('active');
console.log('Source active changed to:', sourceObj.active);
console.log('Target active now:', targetObj.active);

// Example 4: Property changes using set_property
console.log('\nExample 4: Property changes using set_property');
const bindingStringValue = new GObject.Value();
bindingStringValue.init(GObject.TYPE_STRING);
bindingStringValue.set_string('Set via GObject.Value');
sourceObj.set_property('full-property', bindingStringValue);
console.log('Source full_property set via set_property to:', sourceObj.full_property);
console.log('Target full_property now:', targetObj.full_property);
bindingStringValue.unset();

// Demonstrate that binding objects are returned and can be used
console.log('\nBinding objects returned:');
console.log('Binding 1 source:', binding1.get_source()?.constructor.name);
console.log('Binding 1 target:', binding1.get_target()?.constructor.name);
console.log('Binding 1 source property:', binding1.get_source_property());
console.log('Binding 1 target property:', binding1.get_target_property());

// Clean up bindings (optional, they will be cleaned up automatically when objects are destroyed)
binding1.unbind();
binding2.unbind();
binding3.unbind();

console.log('\n✅ All property binding examples completed successfully!');
console.log('This demonstrates proper usage of bind_property_full() with different binding modes.');
console.log('Using null for transformation functions provides default behavior without custom conversion.');