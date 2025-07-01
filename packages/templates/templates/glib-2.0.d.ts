// @ts-nocheck

// Advanced variant parsing types for GLib
// Variant parsing inspired by https://jamie.build/ slightly infamous JSON-in-TypeScript parsing.

type CreateIndexType<Key extends string, Value extends any> =
    Key extends 's' | 'o' | 'g' ? { [key: string]: Value } :
    Key extends 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y' ? { [key: number]: Value } : never;

type VariantTypeError<T extends string> = { error: true } & T;

/**
 * Handles the {kv} of a{kv} where k is a basic type and v is any possible variant type string.
 * Simplified to handle common cases like a{sv} (string-variant dictionary)
 */
type $ParseDeepVariantDict<State extends string> =
    string extends State
    ? VariantTypeError<"$ParseDeepVariantDict: 'string' is not a supported type.">
    // Handle common dictionary patterns - for a{sv} we need Record<string, Variant>
    : State extends `sv}${infer Remaining}`
    ? [{ [key: string]: Variant }, Remaining]
    : State extends `ss}${infer Remaining}`
    ? [{ [key: string]: Variant<'s'> }, Remaining]
    : State extends `si}${infer Remaining}`
    ? [{ [key: string]: Variant<'i'> }, Remaining]
    : State extends `sb}${infer Remaining}`
    ? [{ [key: string]: Variant<'b'> }, Remaining]
    // Fallback for other dictionary types
    : State extends `${string}}${infer Remaining}`
    ? [{ [key: string]: Variant }, Remaining]
    : VariantTypeError<`$ParseDeepVariantDict encountered an invalid variant string: ${State}`>;

/**
 * Handles parsing values within a tuple (e.g. (vvv)) where v is any possible variant type string.
 */
type $ParseDeepVariantArray<State extends string, Memo extends any[] = []> =
    string extends State
    ? VariantTypeError<"$ParseDeepVariantArray: 'string' is not a supported type.">
    : State extends `)${infer State}`
    ? [Memo, State]
    : $ParseDeepVariantValue<State> extends [infer Value, `${infer State}`]
    ? State extends `${infer NextValue})${infer NextState}`
    ? $ParseDeepVariantArray<State, [...Memo, Value]>
    : State extends `)${infer State}`
    ? [[...Memo, Value], State]
    : VariantTypeError<`1: $ParseDeepVariantArray encountered an invalid variant string: ${State}`>
    : VariantTypeError<`2: $ParseDeepVariantValue returned unexpected value for: ${State}`>;

/**
 * Handles parsing {kv} without an 'a' prefix (key-value pair) where k is a basic type
 * and v is any possible variant type string. Simplified version.
 */
type $ParseDeepVariantKeyValue<State extends string> =
    string extends State
    ? VariantTypeError<"$ParseDeepVariantKeyValue: 'string' is not a supported type.">
    // Handle common key-value patterns
    : State extends `sv}${infer Remaining}`
    ? [[string, Variant], Remaining]
    : State extends `ss}${infer Remaining}`
    ? [[string, Variant<'s'>], Remaining]
    : State extends `si}${infer Remaining}` 
    ? [[string, Variant<'i'>], Remaining]
    : State extends `sb}${infer Remaining}`
    ? [[string, Variant<'b'>], Remaining]
    // Fallback for other key-value types
    : State extends `${string}}${infer Remaining}`
    ? [[any, Variant], Remaining]
    : VariantTypeError<`$ParseDeepVariantKeyValue encountered an invalid variant string: ${State}`>;

/**
 * Handles parsing any variant 'value' or base unit.
 * 
 * - ay - Array of bytes (Uint8Array)
 * - a* - Array of type *
 * - a{k*} - Dictionary
 * - {k*} - KeyValue
 * - (**) - tuple
 * - s | o | g - string types
 * - n | q | t | d | u | i | x | y - number types
 * - b - boolean type
 * - v - unknown Variant type
 * - h | ? - unknown types
 */
type $ParseDeepVariantValue<State extends string> =
    string extends State
    ? unknown
    : State extends `${'s' | 'o' | 'g'}${infer State}`
    ? [string, State]
    : State extends `${'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y'}${infer State}`
    ? [number, State]
    : State extends `b${infer State}`
    ? [boolean, State]
    : State extends `v${infer State}`
    ? [Variant, State]
    : State extends `${'h' | '?'}${infer State}`
    ? [unknown, State]
    : State extends `(${infer State}`
    ? $ParseDeepVariantArray<State>
    : State extends `a{${infer State}`
    ? $ParseDeepVariantDict<State>
    : State extends `{${infer State}`
    ? $ParseDeepVariantKeyValue<State>
    : State extends `ay${infer State}` ?
    [Uint8Array, State]
    : State extends `m${infer State}`
    ? $ParseDeepVariantValue<State> extends [infer Value, `${infer State}`]
      ? [Value | null, State]
      : VariantTypeError<`$ParseDeepVariantValue encountered an invalid variant string: ${State} (3)`>
    : State extends `a${infer State}` ?
    $ParseDeepVariantValue<State> extends [infer Value, `${infer State}`] ?
    [Value[], State]
    : VariantTypeError<`$ParseDeepVariantValue encountered an invalid variant string: ${State} (1)`>
    : VariantTypeError<`$ParseDeepVariantValue encountered an invalid variant string: ${State} (2)`>;

type $ParseDeepVariant<T extends string> =
    $ParseDeepVariantValue<T> extends infer Result
    ? Result extends [infer Value, string]
    ? Value
    : Result extends VariantTypeError<any>
    ? Result
    : VariantTypeError<"$ParseDeepVariantValue returned unexpected Result">
    : VariantTypeError<"$ParseDeepVariantValue returned uninferrable Result">;

type $ParseVariant<T extends string> = $ParseDeepVariant<T>;

type $ParseRecursiveVariant<T extends string> = $ParseDeepVariant<T>;

type $VariantTypeToString<T extends VariantType> = T extends VariantType<infer S> ? S : never;

type $ToTuple<T extends readonly VariantType[]> =
    T extends [] ? '' :
    T extends [VariantType<infer S>] ? `${S}` :
    T extends [VariantType<infer S>, ...infer U] ? (
        U extends [...VariantType[]] ? `${S}${$ToTuple<U>}` : never) :
    '?';

type $ElementSig<E extends any> =
    E extends [infer Element] ? Element :
    E extends [infer Element, ...infer Elements] ? Element | $ElementSig<Elements> :
    E extends globalThis.Array<infer Element> ? Element : never;

/**
 * GLib.Variant is a value container whose types are determined at construction.
 * 
 * It serves as a reliable and efficient format for storing structured data that can be 
 * serialized while preserving type information. Comparable to JSON, but with strong typing
 * and support for special values like file handles.
 * 
 * GVariant is used throughout the GNOME Platform including GDBus, GSettings, GAction, 
 * GMenu and many other APIs. All D-Bus method, property and signal values are GVariant objects.
 * 
 * @example
 * ```typescript
 * // Create variants using constructor with type signature
 * const stringVariant = new GLib.Variant('s', 'Hello World');
 * const numberVariant = new GLib.Variant('i', 42);
 * const boolVariant = new GLib.Variant('b', true);
 * 
 * // Create complex variants like dictionaries
 * const dictVariant = new GLib.Variant('a{sv}', {
 *   'name': GLib.Variant.new_string('Mario'),
 *   'lives': GLib.Variant.new_uint32(3),
 *   'active': GLib.Variant.new_boolean(true)
 * });
 * 
 * // Unpack variants to JavaScript values
 * const stringValue = stringVariant.unpack(); // → "Hello World"
 * const dictValue = dictVariant.deepUnpack(); // → { name: Variant<"s">, lives: Variant<"u">, active: Variant<"b"> }
 * ```
 * 
 * @see {@link https://gjs.guide/guides/glib/gvariant.html|GJS Guide: GVariant}
 * @see {@link https://docs.gtk.org/glib/struct.Variant.html|GLib Documentation: GVariant}
 */
export class Variant<S extends string = any> {
    static $gtype: GObject.GType<Variant>;
    
    /**
     * Creates a new GVariant with the specified type signature and value.
     * 
     * @param sig The GVariant type signature (e.g., 's' for string, 'i' for int32, 'a{sv}' for dictionary)
     * @param value The JavaScript value to pack into the variant
     * @example
     * ```typescript
     * const variant = new GLib.Variant('s', 'Hello');
     * const arrayVariant = new GLib.Variant('as', ['one', 'two', 'three']);
     * ```
     */
    constructor(sig: S, value: $ParseDeepVariant<typeof sig>);
    constructor(copy: Variant<S>);
    _init(sig: S, value: any): Variant<S>;
    
    // Constructors
    /**
     * Creates a new GVariant with the specified type signature and value.
     * 
     * This is equivalent to using the constructor directly.
     * 
     * @param sig The GVariant type signature
     * @param value The JavaScript value to pack
     * @returns A new GVariant instance
     */
    static ["new"]<S extends string>(sig: S, value: $ParseDeepVariant<typeof sig>): Variant<S>;
    static _new_internal<S extends string>(sig: S, value: $ParseDeepVariant<typeof sig>): Variant<S>;
    static new_array<C extends string = "a?">(
        child_type: VariantType<C> | null,
        children: typeof child_type extends VariantType<any>
          ? Variant<$VariantTypeToString<typeof child_type>>[]
          : Variant<C>[]
      ): Variant<`a${C}`>;
      
    /**
     * Creates a new boolean GVariant instance.
     * 
     * @param value The boolean value to pack
     * @returns A new GVariant with type signature 'b'
     * @example
     * ```typescript
     * const variant = GLib.Variant.new_boolean(true);
     * const unpacked = variant.get_boolean(); // → true
     * ```
     */
    static new_boolean(value: boolean): Variant<'b'>;
    
    static new_byte(value: number): Variant<'y'>;
    
    /**
     * Creates a new bytestring GVariant instance from a Uint8Array or string.
     * 
     * @param string The string or byte array to pack
     * @returns A new GVariant with type signature 'ay'
     */
    static new_bytestring(string: Uint8Array | string): Variant<'ay'>;
    
    static new_bytestring_array(strv: string[]): Variant<'aay'>;
    
    /**
     * Creates a new dictionary entry GVariant.
     * 
     * @param key The key variant
     * @param value The value variant  
     * @returns A new GVariant representing a key-value pair
     */
    static new_dict_entry(key: Variant, value: Variant): Variant<'{vv}'>;
    
    /**
     * Creates a new double-precision floating point GVariant.
     * 
     * @param value The number value to pack
     * @returns A new GVariant with type signature 'd'
     */
    static new_double(value: number): Variant<'d'>;
    
    static new_fixed_array<C extends string = 'a?'>(element_type: VariantType<C>, elements: Variant<$VariantTypeToString<typeof element_type>>[] | null, n_elements: number, element_size: number): Variant<`a${C}`>;
    static new_from_bytes<C extends string>(type: VariantType<C>, bytes: Bytes | Uint8Array, trusted: boolean): Variant<C>;
    static new_from_data<C extends string>(type: VariantType<C>, data: Uint8Array | string, trusted: boolean, user_data?: any | null): Variant<C>;
    static new_handle(value: number): Variant<'h'>;
    static new_int16(value: number): Variant<'n'>;
    
    /**
     * Creates a new 32-bit signed integer GVariant.
     * 
     * @param value The integer value to pack
     * @returns A new GVariant with type signature 'i'
     * @example
     * ```typescript
     * const variant = GLib.Variant.new_int32(-42);
     * const unpacked = variant.get_int32(); // → -42
     * ```
     */
    static new_int32(value: number): Variant<'i'>;
    
    /**
     * Creates a new 64-bit signed integer GVariant.
     * 
     * Note: As of GJS v1.68, all numeric types are still Number values,
     * so some 64-bit values may not be fully supported. BigInt support to come.
     * 
     * @param value The integer value to pack
     * @returns A new GVariant with type signature 'x'
     */
    static new_int64(value: number): Variant<'x'>;
    
    static new_maybe(child_type?: VariantType | null, child?: Variant | null): Variant<'mv'>;
    
    /**
     * Creates a new object path GVariant.
     * 
     * @param object_path A valid D-Bus object path string
     * @returns A new GVariant with type signature 'o'
     */
    static new_object_path(object_path: string): Variant<'o'>;
    
    static new_objv(strv: string[]): Variant<'ao'>;
    
    /**
     * Creates a new D-Bus signature GVariant.
     * 
     * @param signature A valid D-Bus type signature string
     * @returns A new GVariant with type signature 'g'
     */
    static new_signature(signature: string): Variant<'g'>;
    
    /**
     * Creates a new string GVariant instance.
     * 
     * @param string The string value to pack
     * @returns A new GVariant with type signature 's'
     * @example
     * ```typescript
     * const variant = GLib.Variant.new_string('Hello World');
     * const [value, length] = variant.get_string(); // → ['Hello World', 11]
     * const unpacked = variant.unpack(); // → 'Hello World'
     * ```
     */
    static new_string(string: string): Variant<'s'>;
    
    /**
     * Creates a new string array GVariant instance.
     * 
     * @param strv Array of strings to pack
     * @returns A new GVariant with type signature 'as'
     * @example
     * ```typescript
     * const variant = GLib.Variant.new_strv(['one', 'two', 'three']);
     * const unpacked = variant.get_strv(); // → ['one', 'two', 'three']
     * const deepUnpacked = variant.deepUnpack(); // → ['one', 'two', 'three']
     * ```
     */
    static new_strv(strv: string[]): Variant<'as'>;
    
    static new_tuple<Items extends (ReadonlyArray<VariantType> | readonly [VariantType])>(children: Items): Variant<`(${$ToTuple<Items>})`>;
    static new_uint16(value: number): Variant<'q'>;
    
    /**
     * Creates a new 32-bit unsigned integer GVariant.
     * 
     * @param value The unsigned integer value to pack
     * @returns A new GVariant with type signature 'u'
     */
    static new_uint32(value: number): Variant<'u'>;
    
    static new_uint64(value: number): Variant<'t'>;
    
    /**
     * Creates a new variant GVariant that contains another variant.
     * 
     * @param value The variant to wrap
     * @returns A new GVariant with type signature 'v'
     */
    static new_variant(value: Variant): Variant<'v'>;
    // Members
    byteswap(): Variant;
    check_format_string(format_string: string, copy_only: boolean): boolean;
    classify(): VariantClass;
    compare(two: Variant): number;
    dup_bytestring(): Uint8Array;
    dup_bytestring_array(): string[];
    dup_objv(): string[];
    dup_string(): [string, number];
    dup_strv(): string[];
    /**
     * Checks if two variants are equal.
     * 
     * @param two The variant to compare with
     * @returns true if the variants are equal, false otherwise
     * @example
     * ```typescript
     * const variant1 = GLib.Variant.new_string('test');
     * const variant2 = GLib.Variant.new_string('test');
     * const areEqual = variant1.equal(variant2); // → true
     * ```
     */
    equal(two: Variant): boolean;
    
    /**
     * Extracts a boolean value from a boolean variant.
     * 
     * @returns The boolean value
     * @throws Error if the variant is not of type 'b'
     */
    get_boolean(): boolean;
    
    get_byte(): number;
    
    /**
     * Extracts a bytestring from a bytestring variant.
     * 
     * @returns The byte array
     */
    get_bytestring(): Uint8Array;
    
    get_bytestring_array(): string[];
    
    /**
     * Gets a child variant by index from a container variant.
     * 
     * @param index_ The index of the child to retrieve
     * @returns The child variant at the specified index
     * @example
     * ```typescript
     * const tuple = new GLib.Variant('(si)', ['hello', 42]);
     * const firstChild = tuple.get_child_value(0); // → Variant<'s'> containing 'hello'
     * const secondChild = tuple.get_child_value(1); // → Variant<'i'> containing 42
     * ```
     */
    get_child_value(index_: number): Variant;
    
    get_data(): any | null;
    get_data_as_bytes(): Bytes;
    get_double(): number;
    get_handle(): number;
    get_int16(): number;
    
    /**
     * Extracts a 32-bit signed integer from an integer variant.
     * 
     * @returns The integer value
     * @throws Error if the variant is not of type 'i'
     */
    get_int32(): number;
    
    get_int64(): number;
    get_maybe(): Variant | null;
    get_normal_form(): Variant;
    get_objv(): string[];
    get_size(): number;
    
    /**
     * Extracts a string value from a string variant.
     * 
     * @returns A tuple containing the string value and its length
     * @example
     * ```typescript
     * const variant = GLib.Variant.new_string('hello');
     * const [value, length] = variant.get_string(); // → ['hello', 5]
     * ```
     */
    get_string(): [string, number | null];
    
    /**
     * Extracts a string array from a string array variant.
     * 
     * @returns Array of strings
     */
    get_strv(): string[];
    
    /**
     * Gets the type of the variant.
     * 
     * @returns The VariantType representing this variant's type
     */
    get_type(): VariantType<S>;
    
    /**
     * Gets the type signature string of the variant.
     * 
     * This is very useful for debugging and type checking.
     * 
     * @returns The type signature string (e.g., 's', 'i', 'a{sv}')
     * @example
     * ```typescript
     * const stringVariant = GLib.Variant.new_string('test');
     * const typeString = stringVariant.get_type_string(); // → 's'
     * 
     * const dictVariant = new GLib.Variant('a{sv}', {});
     * const dictType = dictVariant.get_type_string(); // → 'a{sv}'
     * ```
     */
    get_type_string(): string;
    
    get_uint16(): number;
    get_uint32(): number;
    get_uint64(): number;
    get_variant(): Variant;
    hash(): number;
    
    /**
     * Checks if the variant is a container type.
     * 
     * Container types include arrays, tuples, dictionaries, and maybes.
     * 
     * @returns true if the variant is a container
     */
    is_container(): boolean;
    
    is_floating(): boolean;
    is_normal_form(): boolean;
    is_of_type(type: VariantType): boolean;
    lookup_value(key: string, expected_type?: VariantType | null): Variant;
    
    /**
     * Gets the number of children in a container variant.
     * 
     * @returns The number of child elements
     * @example
     * ```typescript
     * const tuple = new GLib.Variant('(si)', ['hello', 42]);
     * const childCount = tuple.n_children(); // → 2
     * 
     * const array = GLib.Variant.new_strv(['a', 'b', 'c']);
     * const arrayLength = array.n_children(); // → 3
     * ```
     */
    n_children(): number;
    
    /**
     * Creates a string representation of the variant.
     * 
     * This is extremely useful for debugging GVariant structures.
     * 
     * @param type_annotate Whether to include type annotations in the output
     * @returns A string representation of the variant
     * @example
     * ```typescript
     * const variant = new GLib.Variant('a{sv}', {
     *   'name': GLib.Variant.new_string('Mario'),
     *   'lives': GLib.Variant.new_uint32(3)
     * });
     * 
     * // Without type annotations
     * print(variant.print(false)); // → "{'name': 'Mario', 'lives': 3}"
     * 
     * // With type annotations  
     * print(variant.print(true)); // → "{'name': <'Mario'>, 'lives': <uint32 3>}"
     * ```
     */
    print(type_annotate: boolean): string;
    ref(): Variant;
    ref_sink(): Variant;
    store(data: any): void;
    take_ref(): Variant;
    unref(): void;
    static is_object_path(string: string): boolean;
    static is_signature(string: string): boolean;
    static parse(type: VariantType | null, text: string, limit?: string | null, endptr?: string | null): Variant;
    static parse_error_print_context(error: Error, source_str: string): string;
    static parse_error_quark(): Quark;
    static parser_get_error_quark(): Quark;
    /**
     * Unpacks the variant's data into a JavaScript value.
     * 
     * This performs a **shallow unpacking operation** - only unpacking the top level.
     * For containers like arrays or dictionaries, child elements remain as Variant objects.
     * 
     * @example
     * ```typescript
     * // Simple types are fully unpacked
     * const boolVariant = GLib.Variant.new_boolean(true);
     * const boolValue = boolVariant.unpack(); // → true
     * 
     * // String values are unpacked (discarding length information)
     * const stringVariant = GLib.Variant.new_string("hello");
     * const stringValue = stringVariant.unpack(); // → "hello"
     * 
     * // Arrays are unpacked but elements remain as Variants
     * const arrayVariant = GLib.Variant.new_strv(["one", "two"]);
     * const arrayValue = arrayVariant.unpack(); // → [Variant<"s">, Variant<"s">]
     * ```
     * 
     * @returns The unpacked JavaScript value with child Variants preserved
     * @see {@link deepUnpack} for unpacking one level deeper
     * @see {@link recursiveUnpack} for full recursive unpacking
     */
    unpack(): $ParseVariant<S>;
    
    /**
     * Recursively unpacks the variant's data into JavaScript values.
     * 
     * This method unpacks a variant **and its direct children**, but only up to one level deep.
     * It's the most commonly used unpacking method for D-Bus operations and GSettings.
     * 
     * With advanced variants enabled, this method provides automatic type inference
     * based on the variant's type signature. You can also explicitly specify a type
     * parameter for backward compatibility.
     * 
     * @example
     * ```typescript
     * // Simple dictionary (a{ss}) - fully unpacked
     * const simpleDict = new GLib.Variant('a{ss}', {
     *   'key1': 'value1',
     *   'key2': 'value2'
     * });
     * const simple = simpleDict.deepUnpack(); // → { key1: "value1", key2: "value2" }
     * 
     * // Complex dictionary (a{sv}) - values remain as Variants
     * const complexDict = new GLib.Variant('a{sv}', {
     *   'name': GLib.Variant.new_string('Mario'),
     *   'active': GLib.Variant.new_boolean(true)
     * });
     * const complex = complexDict.deepUnpack(); // → { name: Variant<"s">, active: Variant<"b"> }
     * 
     * // Automatic type inference (Advanced Variants)
     * const autoInferred = variant.deepUnpack(); // Types inferred from signature
     * 
     * // Explicit type parameter (backward compatibility)
     * const explicit = variant.deepUnpack<{ [key: string]: GLib.Variant }>();
     * 
     * // String arrays are fully unpacked
     * const strArray = GLib.Variant.new_strv(['one', 'two']);
     * const strings = strArray.deepUnpack(); // → ["one", "two"]
     * ```
     * 
     * @template T The expected return type (defaults to automatically inferred type)
     * @returns The deeply unpacked JavaScript value with one level of children unpacked
     * @see {@link unpack} for shallow unpacking only
     * @see {@link recursiveUnpack} for full recursive unpacking
     */
    deepUnpack<T extends $ParseDeepVariant<S> = $ParseDeepVariant<S>>(): T;
    
    /**
     * Alias for {@link deepUnpack} method.
     * 
     * Recursively unpacks the variant's data into JavaScript values up to one level deep.
     * This is the snake_case version of the same functionality.
     * 
     * @returns The deeply unpacked JavaScript value
     * @see {@link deepUnpack} for the camelCase version with full documentation
     */
    deep_unpack(): $ParseDeepVariant<S>;
    
    /**
     * Recursively unpacks the variant and **all its descendants** into native JavaScript values.
     * 
     * **Available since GJS 1.64 (GNOME 3.36)**
     * 
     * This method performs complete recursive unpacking, converting all nested Variants
     * to their native JavaScript equivalents. **Type information may be lost** during
     * this process, so you'll need to know the original types to repack values.
     * 
     * @example
     * ```typescript
     * // Complex nested structure fully unpacked
     * const complexDict = new GLib.Variant('a{sv}', {
     *   'name': GLib.Variant.new_string('Mario'),
     *   'lives': GLib.Variant.new_uint32(3),
     *   'active': GLib.Variant.new_boolean(true)
     * });
     * 
     * const fullyUnpacked = complexDict.recursiveUnpack();
     * // → { name: "Mario", lives: 3, active: true }
     * 
     * // All nested Variants are converted to native values
     * const nestedTuple = new GLib.Variant('(sa{sv})', [
     *   'player',
     *   { 'score': GLib.Variant.new_int32(100) }
     * ]);
     * const result = nestedTuple.recursiveUnpack();
     * // → ["player", { score: 100 }]
     * ```
     * 
     * @returns The recursively unpacked JavaScript value with all Variants converted to native types
     * @see {@link deepUnpack} for one-level unpacking with type preservation
     * @see {@link unpack} for shallow unpacking only
     * @since GJS 1.64 (GNOME 3.36)
     */
    recursiveUnpack(): $ParseRecursiveVariant<S>;
}

/**
 * A utility class for building complex GVariant structures incrementally.
 * 
 * VariantBuilder is useful when you need to construct variants dynamically
 * or when dealing with complex nested structures. It provides a way to
 * build variants step by step rather than constructing the entire structure at once.
 * 
 * @example
 * ```typescript
 * // Building an array of variants
 * const builder = new GLib.VariantBuilder(new GLib.VariantType('av'));
 * builder.add_value(GLib.Variant.new_string('first'));
 * builder.add_value(GLib.Variant.new_int32(42));
 * builder.add_value(GLib.Variant.new_boolean(true));
 * const arrayVariant = builder.end(); // → Variant<'av'>
 * 
 * // Building a dictionary incrementally
 * const dictBuilder = new GLib.VariantBuilder(new GLib.VariantType('a{sv}'));
 * dictBuilder.add_value(GLib.Variant.new_dict_entry(
 *   GLib.Variant.new_string('name'),
 *   GLib.Variant.new_variant(GLib.Variant.new_string('Mario'))
 * ));
 * const dict = dictBuilder.end();
 * ```
 */
export class VariantBuilder<S extends string = 'a*'> {
    static $gtype: GObject.GType<VariantBuilder>;
    constructor(type: VariantType<S>);
    constructor(copy: VariantBuilder<S>);
    
    // Constructors
    /**
     * Creates a new VariantBuilder for the specified type.
     * 
     * @param type The type of variant to build
     * @returns A new VariantBuilder instance
     */
    static ["new"]<S extends string = 'a*'>(type: VariantType<S>): VariantBuilder<S>;
    
    // Members
    /**
     * Adds a value to the variant being built.
     * 
     * @param value The value to add (must match the expected element type)
     */
    add_value(value: $ElementSig<$ParseDeepVariant<S>>): void;
    
    /**
     * Closes the current container being built.
     */
    close(): void;
    
    /**
     * Completes the building process and returns the constructed variant.
     * 
     * @returns The completed variant
     */
    end(): Variant<S>;
    
    /**
     * Opens a new subcontainer of the specified type.
     * 
     * @param type The type of the subcontainer to open
     */
    open(type: VariantType): void;
    
    ref(): VariantBuilder;
    unref(): void;
}

export class VariantDict {
    static $gtype: GObject.GType<VariantDict>;
    constructor(from_asv?: Variant | null);
    constructor(copy: VariantDict);
    // Constructors
    static ["new"](from_asv?: Variant | null): VariantDict;
    // Members
    clear(): void;
    contains(key: string): boolean;
    end(): Variant;
    insert_value(key: string, value: Variant): void;
    lookup_value(key: string, expected_type?: VariantType | null): Variant;
    ref(): VariantDict;
    remove(key: string): boolean;
    unref(): void;
    lookup(key: any, variantType?: any, deep?: boolean): any;
}

export class VariantType<S extends string = any> {
    static $gtype: GObject.GType<VariantType>;
    constructor(type_string: S);
    constructor(copy: VariantType<S>);
    // Constructors
    static ["new"]<S extends string>(type_string: S): VariantType<S>;
    static new_array<S extends string>(element: VariantType<S>): VariantType<`a${S}`>;
    static new_dict_entry<K extends string, V extends string>(key: VariantType<K>, value: VariantType<V>): VariantType<`{${K}${V}}`>;
    static new_maybe<S extends string>(element: VariantType<S>): VariantType<`m${S}`>;
    static new_tuple<Items extends (ReadonlyArray<VariantType> | readonly [VariantType])>(items: Items): VariantType<`(${$ToTuple<Items>})`>;
    // Members
    copy(): VariantType<S>;
    dup_string(): string;
    element(): VariantType;
    equal(type2: VariantType): boolean;
    first(): VariantType;
    free(): void;
    get_string_length(): number;
    hash(): number;
    is_array(): boolean;
    is_basic(): boolean;
    is_container(): boolean;
    is_definite(): boolean;
    is_dict_entry(): boolean;
    is_maybe(): boolean;
    is_subtype_of(supertype: VariantType): boolean;
    is_tuple(): boolean;
    is_variant(): boolean;
    key(): VariantType;
    n_items(): number;
    next(): VariantType;
    value(): VariantType;
    static checked_(arg0: string): VariantType;
    static string_get_depth_(type_string: string): number;
    static string_is_valid(type_string: string): boolean;
    static string_scan(string: string, limit?: string | null): [boolean, string | null];
}
