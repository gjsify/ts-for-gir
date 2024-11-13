import GObject from 'gi://GObject';

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
                    false
                )
            }
        }, this);
    }

    // Property values
    private _fullProperty: string = 'default value';
    private _minimalProperty: string = '';
    private _count: number = 0;
    private _active: boolean = false;

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