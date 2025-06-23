import type { IntrospectedNamespace } from '../gir/namespace.ts'
import { IntrospectedProperty } from '../gir/property.ts'

export default {
    namespace: 'Gee',
    version: '1.0',
    modifier(namespace: IntrospectedNamespace) {
        const AbstractList = namespace.assertClass('AbstractList')
        const LinkedList = namespace.assertClass('LinkedList')

        if (AbstractList.props.some((prop) => prop.name === 'readOnlyView'))
            LinkedList.props.push(
                new IntrospectedProperty({
                    name: 'readOnlyView',
                    type: LinkedList.getType(),
                    readable: true,
                    writable: false,
                    constructOnly: false,
                    parent: LinkedList,
                }),
            )

        if (AbstractList.props.some((prop) => prop.name === 'read_only_view'))
            LinkedList.props.push(
                new IntrospectedProperty({
                    name: 'read_only_view',
                    type: LinkedList.getType(),
                    readable: true,
                    writable: false,
                    constructOnly: false,
                    parent: LinkedList,
                }),
            )
    },
}
