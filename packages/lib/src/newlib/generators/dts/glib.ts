import { GirNamespace } from "../../gir/namespace.js";

export function override(node: GirNamespace) {
  // We provide manually written versions of these types below.
  node.assertClass("Variant").noEmit();
  node.assertClass("VariantType").noEmit();
  node.assertClass("VariantBuilder").noEmit();
  node.assertClass("VariantDict").noEmit();

  return `
    // Variant parsing inspired by https://jamie.build/ slightly infamous JSON-in-TypeScript parsing.

    type CreateIndexType<Key extends string, Value extends any> =
        Key extends \`s\` | \`o\` | \`g\` ? { [key: string]: Value } :
        Key extends \`n\` | \`q\` | \`t\` | \`d\` | \`u\` | \`i\` | \`x\` | \`y\` ? { [key: number]: Value } : never;

    type VariantTypeError<T extends string> = { error: true } & T;
    
    /**
     * Handles the {kv} of a{kv} where k is a basic type and v is any possible variant type string.
     */
    type $ParseDeepVariantDict<State extends string, Memo extends Record<string, any> = {}> =
        string extends State
        ? VariantTypeError<"$ParseDeepVariantDict: 'string' is not a supported type.">
        // Hitting the first '}' indicates the dictionary type is complete
        : State extends \`}\${infer State}\`
        ? [Memo, State]
        // This separates the key (basic type) from the rest of the remaining expression.
        : State extends \`\${infer Key}\${''}\${infer State}\`
        ? $ParseDeepVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`}\${infer State}\`
        ? [CreateIndexType<Key, Value>, State]
        : VariantTypeError<\`$ParseDeepVariantDict encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseDeepVariantValue returned unexpected value for: \${State}\`>
        : VariantTypeError<\`$ParseDeepVariantDict encountered an invalid variant string: \${State} (2)\`>;
    
    /**
     * Handles parsing values within a tuple (e.g. (vvv)) where v is any possible variant type string.
     */
    type $ParseDeepVariantArray<State extends string, Memo extends any[] = []> =
        string extends State
        ? VariantTypeError<"$ParseDeepVariantArray: 'string' is not a supported type.">
        : State extends \`)\${infer State}\`
        ? [Memo, State]
        : $ParseDeepVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`\${infer NextValue})\${infer NextState}\`
        ? $ParseDeepVariantArray<State, [...Memo, Value]>
        : State extends \`)\${infer State}\`
        ? [[...Memo, Value], State]
        : VariantTypeError<\`1: $ParseDeepVariantArray encountered an invalid variant string: \${State}\`>
        : VariantTypeError<\`2: $ParseDeepVariantValue returned unexpected value for: \${State}\`>;
    
    /**
     * Handles parsing {kv} without an 'a' prefix (key-value pair) where k is a basic type
     * and v is any possible variant type string.
     */
    type $ParseDeepVariantKeyValue<State extends string, Memo extends any[] = []> =
        string extends State
        ? VariantTypeError<"$ParseDeepVariantKeyValue: 'string' is not a supported type.">
        : State extends \`}\${infer State}\`
        ? [Memo, State]
        : State extends \`\${infer Key}\${''}\${infer State}\`
        ? $ParseDeepVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`}\${infer State}\`
        ? [[...Memo, $ParseVariant<Key>, Value], State]
        : VariantTypeError<\`$ParseDeepVariantKeyValue encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseDeepVariantKeyValue returned unexpected value for: \${State}\`>
        : VariantTypeError<\`$ParseDeepVariantKeyValue encountered an invalid variant string: \${State} (2)\`>;
    
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
        : State extends \`\${\`s\` | \`o\` | \`g\`}\${infer State}\`
        ? [string, State]
        : State extends \`\${\`n\` | \`q\` | \`t\` | \`d\` | \`u\` | \`i\` | \`x\` | \`y\`}\${infer State}\`
        ? [number, State]
        : State extends \`b\${infer State}\`
        ? [boolean, State]
        : State extends \`v\${infer State}\`
        ? [Variant, State]
        : State extends \`\${'h' | '?'}\${infer State}\`
        ? [unknown, State]
        : State extends \`(\${infer State}\`
        ? $ParseDeepVariantArray<State>
        : State extends \`a{\${infer State}\`
        ? $ParseDeepVariantDict<State>
        : State extends \`{\${infer State}\`
        ? $ParseDeepVariantKeyValue<State>
        : State extends \`ay\${infer State}\` ?
        [Uint8Array, State]
        : State extends \`m\${infer State}\`
        ? $ParseDeepVariantValue<State> extends [infer Value, \`\${infer State}\`]
          ? [Value | null, State]
          : VariantTypeError<\`$ParseDeepVariantValue encountered an invalid variant string: \${State} (3)\`>
        : State extends \`a\${infer State}\` ?
        $ParseDeepVariantValue<State> extends [infer Value, \`\${infer State}\`] ?
        [Value[], State]
        : VariantTypeError<\`$ParseDeepVariantValue encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseDeepVariantValue encountered an invalid variant string: \${State} (2)\`>;
    
    type $ParseDeepVariant<T extends string> =
        $ParseDeepVariantValue<T> extends infer Result
        ? Result extends [infer Value, string]
        ? Value
        : Result extends VariantTypeError<any>
        ? Result
        : VariantTypeError<"$ParseDeepVariantValue returned unexpected Result">
        : VariantTypeError<"$ParseDeepVariantValue returned uninferrable Result">;
    
    type $ParseRecursiveVariantDict<State extends string, Memo extends Record<string, any> = {}> =
        string extends State
        ? VariantTypeError<"$ParseRecursiveVariantDict: 'string' is not a supported type.">
        : State extends \`}\${infer State}\`
        ? [Memo, State]
        : State extends \`\${infer Key}\${''}\${infer State}\`
        ? $ParseRecursiveVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`}\${infer State}\`
        ? [CreateIndexType<Key, Value>, State]
        : VariantTypeError<\`$ParseRecursiveVariantDict encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseRecursiveVariantValue returned unexpected value for: \${State}\`>
        : VariantTypeError<\`$ParseRecursiveVariantDict encountered an invalid variant string: \${State} (2)\`>;
    
    type $ParseRecursiveVariantArray<State extends string, Memo extends any[] = []> =
        string extends State
        ? VariantTypeError<"$ParseRecursiveVariantArray: 'string' is not a supported type.">
        : State extends \`)\${infer State}\`
        ? [Memo, State]
        : $ParseRecursiveVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`\${infer NextValue})\${infer NextState}\`
        ? $ParseRecursiveVariantArray<State, [...Memo, Value]>
        : State extends \`)\${infer State}\`
        ? [[...Memo, Value], State]
        : VariantTypeError<\`$ParseRecursiveVariantArray encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseRecursiveVariantValue returned unexpected value for: \${State} (2)\`>;
    
    type $ParseRecursiveVariantKeyValue<State extends string, Memo extends any[] = []> =
        string extends State
        ? VariantTypeError<"$ParseRecursiveVariantKeyValue: 'string' is not a supported type.">
        : State extends \`}\${infer State}\`
        ? [Memo, State]
        : State extends \`\${infer Key}\${''}\${infer State}\`
        ? $ParseRecursiveVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`}\${infer State}\`
        ? [[...Memo, Key, Value], State]
        : VariantTypeError<\`$ParseRecursiveVariantKeyValue encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseRecursiveVariantKeyValue returned unexpected value for: \${State}\`>
        : VariantTypeError<\`$ParseRecursiveVariantKeyValue encountered an invalid variant string: \${State} (2)\`>;
    
    type $ParseRecursiveVariantValue<State extends string> =
        string extends State
        ? unknown
        : State extends \`\${\`s\` | \`o\` | \`g\`}\${infer State}\`
        ? [string, State]
        : State extends \`\${\`n\` | \`q\` | \`t\` | \`d\` | \`u\` | \`i\` | \`x\` | \`y\`}\${infer State}\`
        ? [number, State]
        : State extends \`b\${infer State}\`
        ? [boolean, State]
        : State extends \`v\${infer State}\`
        ? [unknown, State]
        : State extends \`\${'h' | '?'}\${infer State}\`
        ? [unknown, State]
        : State extends \`(\${infer State}\`
        ? $ParseRecursiveVariantArray<State>
        : State extends \`a{\${infer State}\`
        ? $ParseRecursiveVariantDict<State>
        : State extends \`{\${infer State}\`
        ? $ParseRecursiveVariantKeyValue<State>
        : State extends \`ay\${infer State}\` ?
        [Uint8Array, State]
        : State extends \`m\${infer State}\`
        ? $ParseRecursiveVariantValue<State> extends [infer Value, \`\${infer State}\`]
          ? [Value | null, State]
          : VariantTypeError<\`$ParseRecursiveVariantValue encountered an invalid variant string: \${State} (3)\`>
        : State extends \`a\${infer State}\` ?
        $ParseRecursiveVariantValue<State> extends [infer Value, \`\${infer State}\`] ?
        [Value[], State]
        : VariantTypeError<\`$ParseRecursiveVariantValue encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseRecursiveVariantValue encountered an invalid variant string: \${State} (2)\`>;
    
    type $ParseRecursiveVariant<T extends string> =
        $ParseRecursiveVariantValue<T> extends infer Result
        ? Result extends [infer Value, string]
        ? Value
        : Result extends VariantTypeError<any>
        ? Result
        : never
        : never;
    
    type $ParseVariantDict<State extends string, Memo extends Record<string, any> = {}> =
        string extends State
        ? VariantTypeError<"$ParseVariantDict: 'string' is not a supported type.">
        : State extends \`}\${infer State}\`
        ? [Memo, State]
        : State extends \`\${infer Key}\${''}\${infer State}\`
        ? $ParseVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`}\${infer State}\`
        ? [CreateIndexType<Key, Variant<Value extends string ? Value : any>>, State]
        : VariantTypeError<\`$ParseVariantDict encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseVariantValue returned unexpected value for: \${State}\`>
        : VariantTypeError<\`$ParseVariantDict encountered an invalid variant string: \${State} (2)\`>;
    
    type $ParseVariantArray<State extends string, Memo extends any[] = []> =
        string extends State
        ? VariantTypeError<"$ParseVariantArray: 'string' is not a supported type.">
        : State extends \`)\${infer State}\`
        ? [Memo, State]
        : $ParseVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`\${infer NextValue})\${infer NextState}\`
        ? $ParseVariantArray<State, [...Memo, Variant<Value extends string ? Value : any>]>
        : State extends \`)\${infer State}\`
        ? [[...Memo, Variant<Value extends string ? Value : any>], State]
        : VariantTypeError<\`$ParseVariantArray encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseVariantValue returned unexpected value for: \${State} (2)\`>;
    
    type $ParseVariantKeyValue<State extends string, Memo extends any[] = []> =
        string extends State
        ? VariantTypeError<"$ParseVariantKeyValue: 'string' is not a supported type.">
        : State extends \`}\${infer State}\`
        ? [Memo, State]
        : State extends \`\${infer Key}\${''}\${infer State}\`
        ? $ParseVariantValue<State> extends [infer Value, \`\${infer State}\`]
        ? State extends \`}\${infer State}\`
        ? [[...Memo, Variant<Key>, Variant<Value extends string ? Value: any>], State]
        : VariantTypeError<\`$ParseVariantKeyValue encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseVariantKeyValue returned unexpected value for: \${State}\`>
        : VariantTypeError<\`$ParseVariantKeyValue encountered an invalid variant string: \${State} (2)\`>;
    
    type $ParseShallowRootVariantValue<State extends string> =
        string extends State
        ? unknown
        : State extends \`\${\`s\` | \`o\` | \`g\`}\${infer State}\`
        ? [string, State]
        : State extends \`\${\`n\` | \`q\` | \`t\` | \`d\` | \`u\` | \`i\` | \`x\` | \`y\`}\${infer State}\`
        ? [number, State]
        : State extends \`b\${infer State}\`
        ? [boolean, State]
        : State extends \`v\${infer State}\`
        ? [Variant, State]
        : State extends \`h\${infer State}\`
        ? [unknown, State]
        : State extends \`?\${infer State}\`
        ? [unknown, State]
        : State extends \`(\${infer State}\`
        ? $ParseVariantArray<State>
        : State extends \`a{\${infer State}\`
        ? $ParseVariantDict<State>
        : State extends \`{\${infer State}\`
        ? $ParseVariantKeyValue<State>
        : State extends \`ay\${infer State}\` ?
        [Uint8Array, State]
        : State extends \`m\${infer State}\`
        ? $ParseVariantValue<State> extends [infer Value, \`\${infer State}\`]
          ? [Value | null, State]
          : VariantTypeError<\`$ParseShallowRootVariantValue encountered an invalid variant string: \${State} (2)\`>
        : State extends \`a\${infer State}\` ?
        [Variant<State>[], State]
        : VariantTypeError<\`$ParseShallowRootVariantValue encountered an invalid variant string: \${State} (1)\`>;
    
    type $ParseVariantValue<State extends string> =
        string extends State
        ? unknown
        : State extends \`s\${infer State}\`
        ? ['s', State]
        : State extends \`o\${infer State}\`
        ? ['o', State]
        : State extends \`g\${infer State}\`
        ? ['g', State]
        : State extends \`n\${infer State}\`
        ? ["n", State]
        : State extends \`q\${infer State}\`
        ? ["q", State]
        : State extends \`t\${infer State}\`
        ? ["t", State]
        : State extends \`d\${infer State}\`
        ? ["d", State]
        : State extends \`u\${infer State}\`
        ? ["u", State]
        : State extends \`i\${infer State}\`
        ? ["i", State]
        : State extends \`x\${infer State}\`
        ? ["x", State]
        : State extends \`y\${infer State}\`
        ? ["y", State]
        : State extends \`b\${infer State}\`
        ? ['b', State]
        : State extends \`v\${infer State}\`
        ? ['v', State]
        : State extends \`h\${infer State}\`
        ? ['h', State]
        : State extends \`?\${infer State}\`
        ? ['?', State]
        : State extends \`(\${infer State}\`
        ? $ParseVariantArray<State>
        : State extends \`a{\${infer State}\`
        ? $ParseVariantDict<State>
        : State extends \`{\${infer State}\`
        ? $ParseVariantKeyValue<State>
        : State extends \`ay\${infer State}\` ?
        [Uint8Array, State]
        : State extends \`m\${infer State}\`
        ? $ParseVariantValue<State> extends [infer Value, \`\${infer State}\`]
          ? [Value | null, State]
          : VariantTypeError<\`$ParseVariantValue encountered an invalid variant string: \${State} (3)\`>
        : State extends \`a\${infer State}\` ?
        $ParseVariantValue<State> extends [infer Value, \`\${infer State}\`] ?
        [Value[], State]
        : VariantTypeError<\`$ParseVariantValue encountered an invalid variant string: \${State} (1)\`>
        : VariantTypeError<\`$ParseVariantValue encountered an invalid variant string: \${State} (2)\`>;
    
    type $ParseVariant<T extends string> =
        $ParseShallowRootVariantValue<T> extends infer Result
        ? Result extends [infer Value, string]
        ? Value
        : Result extends VariantTypeError<any>
        ? Result
        : never
        : never;
    
    type $VariantTypeToString<T extends VariantType> = T extends VariantType<infer S> ? S : never;

    export class Variant<S extends string = any> {
        static $gtype: GObject.GType<Variant>;
        constructor(sig: S, value: $ParseDeepVariant<typeof sig>);
        constructor(copy: Variant<S>);
        _init(sig: S, value: any): Variant<S>;
        // Constructors
        static ["new"]<S extends string>(sig: S, value: $ParseDeepVariant<typeof sig>): Variant<S>;
        static _new_internal<S extends string>(sig: S, value: $ParseDeepVariant<typeof sig>): Variant<S>;
        static new_array<C extends string = "a?">(
            child_type: VariantType<C> | null,
            children: typeof child_type extends VariantType<any>
              ? Variant<$VariantTypeToString<typeof child_type>>[]
              : Variant<C>[]
          ): Variant<\`a\${C}\`>;
        static new_boolean(value: boolean): Variant<'b'>;
        static new_byte(value: number): Variant<'y'>;
        static new_bytestring(string: Uint8Array | string): Variant<'ay'>;
        static new_bytestring_array(strv: string[]): Variant<'aay'>;
        static new_dict_entry(key: Variant, value: Variant): Variant<'{vv}'>;
        static new_double(value: number): Variant<'d'>;
        static new_fixed_array<C extends string = 'a?'>(element_type: VariantType<C>, elements: Variant<$VariantTypeToString<typeof element_type>>[] | null, n_elements: number, element_size: number): Variant<\`a\${C}\`>;
        static new_from_bytes<C extends string>(type: VariantType<C>, bytes: Bytes | Uint8Array, trusted: boolean): Variant<C>;
        static new_from_data<C extends string>(type: VariantType<C>, data: Uint8Array | string, trusted: boolean, user_data?: any | null): Variant<C>;
        static new_handle(value: number): Variant<'h'>;
        static new_int16(value: number): Variant<'n'>;
        static new_int32(value: number): Variant<'i'>;
        static new_int64(value: number): Variant<'x'>;
        static new_maybe(child_type?: VariantType | null, child?: Variant | null): Variant<'mv'>;
        static new_object_path(object_path: string): Variant<'o'>;
        static new_objv(strv: string[]): Variant<'ao'>;
        static new_signature(signature: string): Variant<'g'>;
        static new_string(string: string): Variant<'s'>;
        static new_strv(strv: string[]): Variant<'as'>;
        static new_tuple<Items extends (ReadonlyArray<VariantType> | readonly [VariantType])>(children: Items): Variant<\`(\${$ToTuple<Items>})\`>;
        static new_uint16(value: number): Variant<'q'>;
        static new_uint32(value: number): Variant<'u'>;
        static new_uint64(value: number): Variant<'t'>;
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
        equal(two: Variant): boolean;
        get_boolean(): boolean;
        get_byte(): number;
        get_bytestring(): Uint8Array;
        get_bytestring_array(): string[];
        get_child_value(index_: number): Variant;
        get_data(): any | null;
        get_data_as_bytes(): Bytes;
        get_double(): number;
        get_handle(): number;
        get_int16(): number;
        get_int32(): number;
        get_int64(): number;
        get_maybe(): Variant | null;
        get_normal_form(): Variant;
        get_objv(): string[];
        get_size(): number;
        get_string(): [string, number | null];
        get_strv(): string[];
        get_type(): VariantType<S>;
        get_type_string(): string;
        get_uint16(): number;
        get_uint32(): number;
        get_uint64(): number;
        get_variant(): Variant;
        hash(): number;
        is_container(): boolean;
        is_floating(): boolean;
        is_normal_form(): boolean;
        is_of_type(type: VariantType): boolean;
        lookup_value(key: string, expected_type?: VariantType | null): Variant;
        n_children(): number;
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
        unpack(): $ParseVariant<S>;
        deepUnpack(): $ParseDeepVariant<S>;
        deep_unpack(): $ParseDeepVariant<S>;
        recursiveUnpack(): $ParseRecursiveVariant<S>;
    }
    
    type $ElementSig<E extends any> =
        E extends [infer Element] ? Element :
        E extends [infer Element, ...infer Elements] ? Element | $ElementSig<Elements> :
        E extends globalThis.Array<infer Element> ? Element : never;
    
    export class VariantBuilder<S extends string = 'a*'> {
        static $gtype: GObject.GType<VariantBuilder>;
        constructor(type: VariantType<S>);
        constructor(copy: VariantBuilder<S>);
        // Constructors
        static ["new"]<S extends string = 'a*'>(type: VariantType<S>): VariantBuilder<S>;
        // Members
        add_value(value: $ElementSig<$ParseDeepVariant<S>>): void;
        close(): void;
        end(): Variant<S>;
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
    
    type $ToTuple<T extends readonly VariantType[]> =
        T extends [] ? '' :
        T extends [VariantType<infer S>] ? \`\${S}\` :
        T extends [VariantType<infer S>, ...infer U] ? (
            U extends [...VariantType[]] ? \`\${S}\${$ToTuple<U>}\` : never) :
        '?';
    
    export class VariantType<S extends string = any> {
        static $gtype: GObject.GType<VariantType>;
        constructor(type_string: S);
        constructor(copy: VariantType<S>);
        // Constructors
        static ["new"]<S extends string>(type_string: S): VariantType<S>;
        static new_array<S extends string>(element: VariantType<S>): VariantType<\`a\${S}\`>;
        static new_dict_entry<K extends string, V extends string>(key: VariantType<K>, value: VariantType<V>): VariantType<\`{\${K}\${V}}\`>;
        static new_maybe<S extends string>(element: VariantType<S>): VariantType<\`m\${S}\`>;
        static new_tuple<Items extends (ReadonlyArray<VariantType> | readonly [VariantType])>(items: Items): VariantType<\`(\${$ToTuple<Items>})\`>;
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
    `;
}
