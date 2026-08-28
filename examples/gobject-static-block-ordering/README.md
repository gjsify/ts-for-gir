# GObject.registerClass, and the static-block ordering trap

Reproducer for the bug behind [GNOME/gjs#704](https://gitlab.gnome.org/GNOME/gjs/-/work_items/704): a `GObject.registerClass()` call inside a `static { … }` block runs in source-order, so any `static [GObject.interfaces] = …` / `static [GObject.properties] = …` field declared **after** the block is invisible to `registerClass`. The result is silent at type-check time but blows up at runtime when an unregistered vfunc is invoked.

This example demonstrates three class shapes side-by-side and asserts each one behaves as expected at runtime:

| Class | Pattern | Outcome |
|---|---|---|
| `BrokenFoo` | `static { registerClass }` first, `static [GObject.interfaces]` after | `Initable.init()` throws *Could not find definition of virtual function init* |
| `WorkingFoo` | `static [GObject.interfaces]` first, `static { registerClass }` last | `init()` runs the vfunc body |
| `InlineFoo` | metadata passed inline to `registerClass({ Implements: [...] }, Class)` | `init()` runs the vfunc body, so there is no ordering question |

`InlineFoo` is the form `patterns/gobject-classes` on the website recommends, because the ordering rule is not enforceable at the type level. A refactor that moves a static field around breaks `WorkingFoo`'s pattern, and nothing says so.

## Run

```bash
gjsify run check        # type-check the three classes
gjsify run build        # tsc → dist/main.js
gjsify run start        # gjs -m dist/main.js
```

Expected output:

```
✓ BrokenFoo.init() threw as expected: Could not find definition of virtual function init
[WorkingFoo] vfunc_init body, should print
✓ WorkingFoo.init() ran the vfunc body
[InlineFoo] vfunc_init body, should print
✓ InlineFoo.init() ran the vfunc body
```

The script exits with status 1 if `BrokenFoo` doesn't throw. That is the regression assertion. If a future gjs release fixes the bug, this example starts failing and the pattern guidance needs updating.

## See also

- [Patterns → GObject classes](https://gjsify.github.io/gjsify/patterns/gobject-classes/): the full reference, covering the three `registerClass()` shapes, the recommended `registerClass({...}, this)` idiom, and when (rarely) `static override $gtype: GType<This>` is worth adding.
- [`examples/gobject-param-spec`](../gobject-param-spec): Form A in production-shaped use, with the full ParamSpec set.
- [`examples/gobject-register-class-inference`](../gobject-register-class-inference): Form C, functional and with no static block, plus type-inference assertions.
