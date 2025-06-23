import type { IntrospectedNamespace } from '../gir/namespace.ts'
import { JSField } from '../gir/property.ts'
import { FunctionType, GenericType, GenerifiedType, NativeType } from '../gir.ts'

export default {
    namespace: 'Gtk',
    version: '4.0',
    modifier(namespace: IntrospectedNamespace) {
        {
            const Widget = namespace.assertClass('Widget')

            Widget.fields.push(
                new JSField({
                    name: 'Symbol.iterator',
                    parent: Widget,
                    computed: true,
                    doc: 'Gtk.Widget is an iterable of its children.',
                    type: new FunctionType(
                        {},
                        new GenerifiedType(new NativeType('IterableIterator'), new GenericType('Widget')),
                    ),
                }),
            )
        }
    },
}
