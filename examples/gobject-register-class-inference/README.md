# GObject.registerClass Property-Inference Example

Demonstrates that when the return value of `GObject.registerClass()` is
captured, the resulting class surfaces property types declared in the
`Properties` block:

```ts
const Counter = GObject.registerClass({ Properties: { count: ... } }, class extends GObject.Object {});
new Counter().count; // typed as number
```

Before this PR, the "enhanced" overload that performs this inference was
shadowed by an earlier "standard" overload (`registerClass<T extends
ObjectConstructor>(cls: T): T`) that matched any class extending
`GObject.Object` and returned the class type unchanged. The two overload
sets are now mutually exclusive on the `noAdvancedVariants` flag, so the
inference path is reachable.

The idiomatic `static { GObject.registerClass(...) }` pattern (see the
`gobject-param-spec` example) is unaffected by this change.

## Run

```sh
gjsify workspace @ts-for-gir-example/gobject-register-class-inference start
```

## Type-check

```sh
gjsify workspace @ts-for-gir-example/gobject-register-class-inference check
```
