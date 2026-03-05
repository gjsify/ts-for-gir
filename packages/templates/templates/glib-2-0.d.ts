// @ts-nocheck

<%_ if(!noAdvancedVariants){ -%>
// Advanced variant type inference for GLib.Variant
// Provides sophisticated type-level parsing of GVariant type signatures
// enabling automatic TypeScript type inference for variant operations.
// 
// Variant parsing inspired by https://github.com/jamiebuilds/json-parser-in-typescript-very-bad-idea-please-dont-use.
// 
// When disabled, basic Variant types from introspection are used instead.
// This reduces compilation time but loses advanced type safety features.

// Utility types for variant parsing
type VariantTypeError<T extends string> = { error: true } & T;

// === Core parsing utilities ===

/**
 * Maps basic GVariant type characters to TypeScript types
 */
type BasicTypeMap<T extends string> =
    T extends 'b' ? boolean :
    T extends 's' | 'o' | 'g' ? string :
    T extends 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y' ? number :
    T extends 'h' | '?' ? unknown :
    T extends 'v' ? Variant :
    never;

/**
 * Creates index type for dictionaries based on key type
 */
type CreateIndexType<Key extends string, Value extends any> =
    Key extends 's' | 'o' | 'g' ? { [key: string]: Value } :
    Key extends 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y' ? { [key: number]: Value } :
    never;

// === Deep unpacking types (deepUnpack method) ===

/**
 * Parses dictionary content for deep unpacking
 * For a{sv}, deepUnpack() preserves Variant values (GJS test behavior)
 */
type $ParseDeepVariantDict<State extends string> =
    string extends State
    ? VariantTypeError<"$ParseDeepVariantDict: 'string' is not a supported type.">
    : State extends `${infer Key}${infer ValueType}}${infer Remaining}`
    ? Key extends 's' | 'o' | 'g' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y'
      ? ValueType extends 'v'
        ? [CreateIndexType<Key, Variant>, Remaining]  // a{sv} preserves Variant
        : $ParseDeepVariantValue<ValueType> extends [infer V, '']
          ? [CreateIndexType<Key, V>, Remaining]
          : VariantTypeError<`Invalid dictionary value type: ${ValueType}`>
      : VariantTypeError<`Invalid dictionary key type: ${Key}`>
    : VariantTypeError<`Invalid dictionary format: ${State}`>;

/**
 * Parses tuple/struct content for deep unpacking
 */
type $ParseDeepVariantTuple<State extends string, Memo extends any[] = []> =
    string extends State
    ? VariantTypeError<"$ParseDeepVariantTuple: 'string' is not a supported type.">
    : State extends `)${infer Remaining}`
    ? [Memo, Remaining]
    : $ParseDeepVariantValue<State> extends [infer Value, infer NextState]
    ? NextState extends string
      ? $ParseDeepVariantTuple<NextState, [...Memo, Value]>
      : VariantTypeError<`$ParseDeepVariantTuple: NextState is not string`>
    : VariantTypeError<`$ParseDeepVariantTuple: Invalid state: ${State}`>;

/**
 * Parses key-value pair for deep unpacking
 */
type $ParseDeepVariantKeyValue<State extends string> =
    string extends State
    ? VariantTypeError<"$ParseDeepVariantKeyValue: 'string' is not a supported type.">
    : State extends `${infer Key}${infer ValueType}}${infer Remaining}`
    ? Key extends 's' | 'o' | 'g' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y'
      ? ValueType extends 'v'
        ? [[BasicTypeMap<Key>, Variant], Remaining]  // Value remains Variant for 'v'
        : $ParseDeepVariantValue<ValueType> extends [infer V, '']
          ? [[BasicTypeMap<Key>, V], Remaining]
          : VariantTypeError<`Invalid key-value value type: ${ValueType}`>
      : VariantTypeError<`Invalid key-value key type: ${Key}`>
    : VariantTypeError<`Invalid key-value format: ${State}`>;

/**
 * Main deep variant value parser
 */
type $ParseDeepVariantValue<State extends string> =
    string extends State
    ? unknown
    // Basic types
    : State extends `${infer Type}${infer Remaining}`
    ? Type extends 's' | 'o' | 'g' | 'b' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y' | 'h' | '?'
      ? [BasicTypeMap<Type>, Remaining]
      : Type extends 'v'
        ? [Variant, Remaining]
        // Container types
        : Type extends '('
          ? $ParseDeepVariantTuple<Remaining>
          : Type extends 'a'
            ? Remaining extends `y${infer Rest}`
              ? [Uint8Array, Rest]
              : Remaining extends `{${infer DictContent}`
                ? $ParseDeepVariantDict<DictContent>
                : $ParseDeepVariantValue<Remaining> extends [infer ElementType, infer Rest]
                  ? Rest extends string
                    ? [ElementType[], Rest]
                    : VariantTypeError<`Array parsing failed`>
                  : VariantTypeError<`Array element parsing failed`>
            : Type extends '{'
              ? $ParseDeepVariantKeyValue<Remaining>
              : Type extends 'm'
                ? $ParseDeepVariantValue<Remaining> extends [infer Value, infer Rest]
                  ? Rest extends string
                    ? [Value | null, Rest]
                    : VariantTypeError<`Maybe parsing failed`>
                  : VariantTypeError<`Maybe content parsing failed`>
                : VariantTypeError<`Unknown type: ${Type}`>
    : VariantTypeError<`Invalid variant string: ${State}`>;

/**
 * Main entry point for deep variant parsing
 */
type $ParseDeepVariant<T extends string> =
    $ParseDeepVariantValue<T> extends infer Result
    ? Result extends [infer Value, string]
      ? Value
      : Result extends VariantTypeError<any>
        ? Result
        : unknown
    : unknown;

// === Shallow unpacking types (unpack method) ===

/**
 * Main shallow variant value parser - only unpacks the top level
 */
type $ParseShallowVariantValue<State extends string> =
    string extends State
    ? unknown
    // Basic types
    : State extends `${infer Type}${infer Remaining}`
    ? Type extends 's' | 'o' | 'g' | 'b' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y' | 'h' | '?'
      ? [BasicTypeMap<Type>, Remaining]
      : Type extends 'v'
        ? [Variant, Remaining]
        // Container types - return Variant arrays/objects
        : Type extends '('
          ? $ParseShallowVariantTuple<Remaining>
          : Type extends 'a'
            ? Remaining extends `y${infer Rest}`
              ? [Uint8Array, Rest]
              : Remaining extends `{${infer DictContent}`
                ? $ParseShallowVariantDict<DictContent>
                : [Variant[], Remaining]  // Arrays contain Variant objects
            : Type extends '{'
              ? $ParseShallowVariantKeyValue<Remaining>
              : Type extends 'm'
                ? $ParseShallowVariantValue<Remaining> extends [infer Value, infer Rest]
                  ? Rest extends string
                    ? [Value | null, Rest]
                    : VariantTypeError<`Maybe parsing failed`>
                  : VariantTypeError<`Maybe content parsing failed`>
                : VariantTypeError<`Unknown type: ${Type}`>
    : VariantTypeError<`Invalid variant string: ${State}`>;

/**
 * Parses tuple for shallow unpacking - returns array of Variants
 */
type $ParseShallowVariantTuple<State extends string, Memo extends any[] = []> =
    string extends State
    ? VariantTypeError<"$ParseShallowVariantTuple: 'string' is not a supported type.">
    : State extends `)${infer Remaining}`
    ? [Memo, Remaining]
    : $SkipToNextElement<State> extends [infer NextState]
    ? NextState extends string
      ? $ParseShallowVariantTuple<NextState, [...Memo, Variant]>
      : VariantTypeError<`$ParseShallowVariantTuple: Invalid state`>
    : VariantTypeError<`$ParseShallowVariantTuple: Failed to skip element`>;

/**
 * Skips a single variant element to find the next element boundary
 */
type $SkipToNextElement<State extends string, Depth extends number = 0> =
    string extends State
    ? VariantTypeError<"Invalid state">
    // Basic types - single character
    : State extends `${infer Type}${infer Rest}`
    ? Type extends 's' | 'o' | 'g' | 'b' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y' | 'h' | '?' | 'v'
      ? [Rest]
      : Type extends 'a'
        ? Rest extends `y${infer R}`
          ? [R]
          : Rest extends `{${infer Inner}`
            ? $SkipUntil<Inner, '}'> extends [infer R]
              ? [R]
              : VariantTypeError<`Failed to skip dictionary`>
            : $SkipToNextElement<Rest> extends [infer R]
              ? [R]
              : VariantTypeError<`Failed to skip array element`>
        : Type extends 'm'
          ? $SkipToNextElement<Rest>
          : Type extends '('
            ? $SkipUntil<Rest, ')'> extends [infer R]
              ? [R]
              : VariantTypeError<`Failed to skip tuple`>
            : Type extends '{'
              ? $SkipUntil<Rest, '}'> extends [infer R]
                ? [R]
                : VariantTypeError<`Failed to skip key-value`>
              : VariantTypeError<`Unknown type: ${Type}`>
    : VariantTypeError<`Invalid format`>;

/**
 * Generic utility to skip until a closing delimiter
 */
type $SkipUntil<State extends string, Delimiter extends string, Depth extends number = 1> =
    string extends State
    ? never
    : Depth extends 0
    ? [State]
    : State extends `${infer Char}${infer Rest}`
    ? Char extends Delimiter
      ? Depth extends 1
        ? [Rest]
        : $SkipUntil<Rest, Delimiter, Depth extends 2 ? 1 : Depth extends 3 ? 2 : Depth extends 4 ? 3 : 1>
      : Char extends '(' | '{'  // Opening delimiters increase depth
        ? $SkipUntil<Rest, Delimiter, Depth extends 1 ? 2 : Depth extends 2 ? 3 : Depth extends 3 ? 4 : 4>
        : $SkipUntil<Rest, Delimiter, Depth>
    : never;

/**
 * Parses dictionary for shallow unpacking - values remain as Variants
 */
type $ParseShallowVariantDict<State extends string> =
    string extends State
    ? VariantTypeError<"$ParseShallowVariantDict: 'string' is not a supported type.">
    : State extends `${string}}${infer Remaining}`
    ? [{ [key: string]: Variant }, Remaining]
    : VariantTypeError<`Invalid dictionary format`>;

/**
 * Parses key-value for shallow unpacking
 */
type $ParseShallowVariantKeyValue<State extends string> =
    string extends State
    ? VariantTypeError<"$ParseShallowVariantKeyValue: 'string' is not a supported type.">
    : State extends `${string}}${infer Remaining}`
    ? [[any, Variant], Remaining]
    : VariantTypeError<`Invalid key-value format`>;

/**
 * Main entry point for shallow variant parsing
 */
type $ParseShallowVariant<T extends string> =
    $ParseShallowVariantValue<T> extends infer Result
    ? Result extends [infer Value, string]
      ? Value
      : Result extends VariantTypeError<any>
        ? Result
        : unknown
    : unknown;

// === Recursive unpacking types (recursiveUnpack method) ===

/**
 * Main recursive variant value parser - unpacks all Variants to native values
 */
type $ParseRecursiveVariantValue<State extends string> =
    string extends State
    ? unknown
    // Basic types
    : State extends `${infer Type}${infer Remaining}`
    ? Type extends 's' | 'o' | 'g' | 'b' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y' | 'h' | '?'
      ? [BasicTypeMap<Type>, Remaining]
      : Type extends 'v'
        ? [any, Remaining]  // Variants are fully unpacked to any
        // Container types
        : Type extends '('
          ? $ParseRecursiveVariantTuple<Remaining>
          : Type extends 'a'
            ? Remaining extends `y${infer Rest}`
              ? [Uint8Array, Rest]
              : Remaining extends `{${infer DictContent}`
                ? $ParseRecursiveVariantDict<DictContent>
                : $ParseRecursiveVariantValue<Remaining> extends [infer ElementType, infer Rest]
                  ? Rest extends string
                    ? [ElementType[], Rest]
                    : VariantTypeError<`Array parsing failed`>
                  : VariantTypeError<`Array element parsing failed`>
            : Type extends '{'
              ? $ParseRecursiveVariantKeyValue<Remaining>
              : Type extends 'm'
                ? $ParseRecursiveVariantValue<Remaining> extends [infer Value, infer Rest]
                  ? Rest extends string
                    ? [Value | null, Rest]
                    : VariantTypeError<`Maybe parsing failed`>
                  : VariantTypeError<`Maybe content parsing failed`>
                : VariantTypeError<`Unknown type: ${Type}`>
    : VariantTypeError<`Invalid variant string: ${State}`>;

/**
 * Parses tuple for recursive unpacking - fully unpacks all elements
 */
type $ParseRecursiveVariantTuple<State extends string, Memo extends any[] = []> =
    string extends State
    ? VariantTypeError<"$ParseRecursiveVariantTuple: 'string' is not a supported type.">
    : State extends `)${infer Remaining}`
    ? [Memo, Remaining]
    : $ParseRecursiveVariantValue<State> extends [infer Value, infer NextState]
    ? NextState extends string
      ? $ParseRecursiveVariantTuple<NextState, [...Memo, Value]>
      : VariantTypeError<`$ParseRecursiveVariantTuple: Invalid state`>
    : VariantTypeError<`$ParseRecursiveVariantTuple: Parsing failed`>;

/**
 * Parses dictionary for recursive unpacking - fully unpacks all values
 */
type $ParseRecursiveVariantDict<State extends string> =
    string extends State
    ? VariantTypeError<"$ParseRecursiveVariantDict: 'string' is not a supported type.">
    : State extends `${infer Key}${infer ValueType}}${infer Remaining}`
    ? Key extends 's' | 'o' | 'g' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y'
      ? ValueType extends 'v'
        ? [CreateIndexType<Key, any>, Remaining]  // a{sv} becomes any when recursively unpacked
        : $ParseRecursiveVariantValue<ValueType> extends [infer V, '']
          ? [CreateIndexType<Key, V>, Remaining]
          : VariantTypeError<`Invalid dictionary value type: ${ValueType}`>
      : VariantTypeError<`Invalid dictionary key type: ${Key}`>
    : VariantTypeError<`Invalid dictionary format: ${State}`>;

/**
 * Parses key-value for recursive unpacking
 */
type $ParseRecursiveVariantKeyValue<State extends string> =
    string extends State
    ? VariantTypeError<"$ParseRecursiveVariantKeyValue: 'string' is not a supported type.">
    : State extends `${infer Key}${infer ValueType}}${infer Remaining}`
    ? Key extends 's' | 'o' | 'g' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y'
      ? ValueType extends 'v'
        ? [[BasicTypeMap<Key>, any], Remaining]  // Value is fully unpacked to any
        : $ParseRecursiveVariantValue<ValueType> extends [infer V, '']
          ? [[BasicTypeMap<Key>, V], Remaining]
          : VariantTypeError<`Invalid key-value value type: ${ValueType}`>
      : VariantTypeError<`Invalid key-value key type: ${Key}`>
    : VariantTypeError<`Invalid key-value format: ${State}`>;

/**
 * Main entry point for recursive variant parsing
 */
type $ParseRecursiveVariant<T extends string> =
    $ParseRecursiveVariantValue<T> extends infer Result
    ? Result extends [infer Value, string]
      ? Value
      : Result extends VariantTypeError<any>
        ? Result
        : unknown
    : unknown;

// === Constructor input types ===

/**
 * Parser for constructor input values
 */
type $ParseConstructorInputValue<State extends string> =
    string extends State
    ? unknown
    // Basic types
    : State extends `${infer Type}${infer Remaining}`
    ? Type extends 's' | 'o' | 'g' | 'b' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y' | 'h' | '?'
      ? [BasicTypeMap<Type>, Remaining]
      : Type extends 'v'
        ? [Variant, Remaining]
        // Container types
        : Type extends '('
          ? $ParseConstructorInputTuple<Remaining>
          : Type extends 'a'
            ? Remaining extends `y${infer Rest}`
              ? [Uint8Array | string, Rest]  // ay accepts both Uint8Array and string
              : Remaining extends `{${infer DictContent}`
                ? $ParseConstructorInputDict<DictContent>
                : $ParseConstructorInputValue<Remaining> extends [infer ElementType, infer Rest]
                  ? Rest extends string
                    ? [ElementType[], Rest]
                    : VariantTypeError<`Array parsing failed`>
                  : VariantTypeError<`Array element parsing failed`>
            : Type extends '{'
              ? $ParseConstructorInputKeyValue<Remaining>
              : Type extends 'm'
                ? $ParseConstructorInputValue<Remaining> extends [infer Value, infer Rest]
                  ? Rest extends string
                    ? [Value | null, Rest]
                    : VariantTypeError<`Maybe parsing failed`>
                  : VariantTypeError<`Maybe content parsing failed`>
                : VariantTypeError<`Unknown type: ${Type}`>
    : VariantTypeError<`Invalid variant string: ${State}`>;

/**
 * Parses tuple for constructor input
 */
type $ParseConstructorInputTuple<State extends string, Memo extends any[] = []> =
    string extends State
    ? VariantTypeError<"Invalid tuple state">
    : State extends `)${infer Remaining}`
    ? [Memo, Remaining]
    : $ParseConstructorInputValue<State> extends [infer Value, infer NextState]
    ? NextState extends string
      ? $ParseConstructorInputTuple<NextState, [...Memo, Value]>
      : VariantTypeError<`Invalid tuple parsing`>
    : VariantTypeError<`Tuple element parsing failed`>;

/**
 * Parses dictionary for constructor input
 */
type $ParseConstructorInputDict<State extends string> =
    string extends State
    ? VariantTypeError<"Invalid dictionary state">
    : State extends `${infer Key}${infer ValueType}}${infer Remaining}`
    ? Key extends 's' | 'o' | 'g' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y'
      ? $ParseConstructorInputValue<ValueType> extends [infer V, '']
        ? [CreateIndexType<Key, V>, Remaining]
        : VariantTypeError<`Invalid dictionary value type`>
      : VariantTypeError<`Invalid dictionary key type`>
    : VariantTypeError<`Invalid dictionary format`>;

/**
 * Parses key-value for constructor input
 */
type $ParseConstructorInputKeyValue<State extends string> =
    string extends State
    ? VariantTypeError<"Invalid key-value state">
    : State extends `${infer Key}${infer ValueType}}${infer Remaining}`
    ? Key extends 's' | 'o' | 'g' | 'n' | 'q' | 't' | 'd' | 'u' | 'i' | 'x' | 'y'
      ? $ParseConstructorInputValue<ValueType> extends [infer V, '']
        ? [[BasicTypeMap<Key>, V], Remaining]
        : VariantTypeError<`Invalid key-value value type`>
      : VariantTypeError<`Invalid key-value key type`>
    : VariantTypeError<`Invalid key-value format`>;

/**
 * Main entry point for constructor input parsing
 */
type $ParseConstructorInput<T extends string> =
    $ParseConstructorInputValue<T> extends infer Result
    ? Result extends [infer Value, string]
      ? Value
      : Result extends VariantTypeError<any>
        ? Result
        : any
    : any;

// === Type aliases for unpacking methods ===

type $ParseVariant<T extends string> = $ParseShallowVariant<T>;

// === Utility types for Variant and VariantBuilder ===

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
    constructor(sig: S, value: $ParseConstructorInput<S>);
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
    static ["new"]<S extends string>(sig: S, value: $ParseConstructorInput<S>): Variant<S>;
    static _new_internal<S extends string>(sig: S, value: $ParseConstructorInput<S>): Variant<S>;
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
    unpack(): $ParseShallowVariant<S>;
    unpack<T>(): T;
    unpack(): $ParseShallowVariant<S>; // Duplicate overload ensures optimal type inference for ReturnType<...>
    
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
    // Overloads: concrete first so call-sites infer precisely; generic allows explicit override; concrete repeated last so ReturnType<...> is precise
    deepUnpack(): $ParseDeepVariant<S>;
    deepUnpack<T>(): T;
    deepUnpack(): $ParseDeepVariant<S>; // Duplicate overload ensures optimal type inference for ReturnType<...>
    
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
    deep_unpack<T>(): T;
    deep_unpack(): $ParseDeepVariant<S>; // Duplicate overload ensures optimal type inference for ReturnType<...>
    
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
    recursiveUnpack<T>(): T;
    recursiveUnpack(): $ParseRecursiveVariant<S>; // Duplicate overload ensures optimal type inference for ReturnType<...>
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

<%_ } -%>
